const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const fs = require("fs")
const path = require('path');
const multer = require("multer");
const {PrismaClient} = require('@prisma/client')
const {multipleUpload} = require("../middleware/multiplyUpload.middleware");
const uploadMiddleware = require("../middleware/upload.middleware");
const prisma = new PrismaClient()
const router = express.Router();

// Получение всех товаров
router.get('/', async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            where: {},
            include: {
                images: true
            }
        });
        res.json(products);
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Failed to retrieve products'});
    }
});

// Создание нового товара
router.post('/', uploadMiddleware.single('images'), authMiddleware, async (req, res) => {
    const {name, description, price, category} = req.body;
    const sellerId = req.user.userId; // Предположим, что информация о пользователе доступна через req.user

    // const uploadedFiles = req.files.map((file) => ({
    //   filename: file.filename,
    //   originalname: file.originalname,
    //   path: file.path,
    // }));
    //
    // const imageUrls = uploadedFiles.map((file) => {
    //   // Создайте полные URL для файлов, чтобы сохранить в базе данных
    //   // Например, если файлы сохраняются в папку 'uploads':
    //   return `/uploads/${file.filename}`;
    // });

    try {
        const newProduct = await prisma.product.create({
            data: {
                name,
                description,
                price: Number.parseFloat(price),
                category,
                sellerId
                // imageUrls: imageUrls, // Сохраняем массив ссылок на файлы
            },
        });

        const photo = await prisma.productImage.create({
            data: {
                imageUrl: req.file.filename,
                productId: newProduct.id
            }
        })

        return res.json({...newProduct, images: [photo]});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to create product'});
    }
});

// Получение товара по ID
router.get('/:id', async (req, res) => {
    const productId = parseInt(req.params.id);

    try {
        const product = await prisma.product.findUnique({
            where: {id: productId},
        });
        if (product) {
            const images = await prisma.productImage.findMany({
                where: {
                    productId
                }
            })
            res.json({ ...product, images});
        } else {
            res.status(404).json({error: 'Product not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Failed to retrieve product'});
    }
});

// Обновление товара по ID
router.put('/:id', authMiddleware, async (req, res) => {
    const productId = parseInt(req.params.id);
    const {name, description, price, category, sellerId} = req.body;

    try {
        const updatedProduct = await prisma.product.update({
            where: {id: productId},
            data: {
                name,
                description,
                price,
                category,
                sellerId,
            },
        });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({error: 'Failed to update product'});
    }
});

// Удаление товара по ID
router.delete('/:id', authMiddleware, async (req, res) => {
    const productId = parseInt(req.params.id);

    try {
        await prisma.product.delete({
            where: {id: productId},
        });
        res.json({message: 'Product deleted'});
    } catch (error) {
        res.status(500).json({error: 'Failed to delete product'});
    }

});


// // Создайте директорию для загруженных фотографий
// const uploadDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }
//
// // Настройка multer для загрузки файлов
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });
//
// const upload = multer({ storage: storage });
//
// // Роут для загрузки фотографий товаров
// router.post('/products/:id/images', upload.single('image'), async (req, res) => {
//   const productId = parseInt(req.params.id);
//   const imageUrl = req.file.filename; // Имя загруженного файла
//
//   try {
//     // Сохраните информацию о фотографии товара в базе данных с использованием Prisma
//     const newProductImage = await prisma.productImage.create({
//       data: {
//         imageUrl,
//         productId,
//       },
//     });
//
//     res.json(newProductImage);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to add product image' });
//   }
// });


module.exports = router