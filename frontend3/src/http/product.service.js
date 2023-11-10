import {$authHost} from "./index";

const ProductService = {
    async create(data) {
        try {
            const response = await $authHost.post('api/product', data);
            // console.log(response.status);
            return response.data;
        } catch (error) {
            const status = error.response.status
            if (status === 401) {}
            if (status === 403) {}
        }
    },

    async getAll() {
        try {
            const response = await $authHost.get('api/product');
            // console.log(response.status);
            return response.data;
        } catch (error) {
            const status = error.response.status
            if (status === 401) {}
            if (status === 403) {}
        }
    },

    async getOne(productId) {
        try {
            const response = await $authHost.get('api/product/' + productId);
            // console.log(response.status);
            return response.data;
        } catch (error) {
            const status = error.response.status
            if (status === 401) {}
            if (status === 403) {}
        }
    }
}

export default ProductService