import {$authHost, $host} from "./index";

const MenuService = {
    async createCategory(data) {
        try {
            const response = await $authHost.post('api/category/', data);
            return response.data;
        } catch (error) {
            const status = error.response?.status
            if (status === 401) {}
            if (status === 403) {}
        }
    },
    async getAllCategories() {
        try {
            const response = await $host.get('api/category/');
            return response.data;
        } catch (error) {
            const status = error.response?.status
            if (status === 401) {}
            if (status === 403) {}
        }
    },
    async removeCategory(categoryId) {
        try {
            const response = await $host.delete('api/category/'+categoryId);
            return response.data;
        } catch (error) {
            const status = error.response?.status
            if (status === 401) {
                window.location.href = '/login/'
            }
            if (status === 403) {}
        }
    },

    async createSubcategory(data) {
        try {
            const response = await $authHost.post('api/subcategory/', data);
            return response.data;
        } catch (error) {
            const status = error.response?.status
            if (status === 401) {
                window.location.href = '/login/'
            }
            if (status === 403) {}
        }
    },
    async getAllSubcategoriesByCategory(categoryId) {
        try {
            const response = await $host.get('api/subcategory/byCategoryId/'+categoryId);
            return response.data;
        } catch (error) {
            const status = error.response?.status
            if (status === 401) {}
            if (status === 403) {}
        }
    },
    async removeSubcategory(subcategoryId) {
        try {
            const response = await $host.delete('api/subcategory/'+subcategoryId);
            return response.data;
        } catch (error) {
            const status = error.response?.status
            if (status === 401) {
                window.location.href = '/login/'
            }
            if (status === 403) {}
        }
    },


    async createProductType(data) {
        try {
            const response = await $authHost.post('api/producttype/', data);
            return response.data;
        } catch (error) {
            const status = error.response?.status
            if (status === 401) {
                window.location.href = '/login/'
            }
            if (status === 403) {}
        }
    },
    async getAllProductType(subcategoryId) {
        try {
            const response = await $host.get('api/producttype/bySubcategoryId/'+subcategoryId);
            return response.data;
        } catch (error) {
            const status = error.response?.status
            if (status === 401) {}
            if (status === 403) {}
        }
    },
    async getAllProductTypeByAlias(alias) {
        try {
            const response = await $host.get('api/producttype/byAlias/'+alias);
            return response.data;
        } catch (error) {
            const status = error.response?.status
            if (status === 401) {}
            if (status === 403) {}
        }
    },
    async getAllProductTypeAll() {
        try {
            const response = await $host.get('api/producttype/');
            return response.data;
        } catch (error) {
            const status = error.response?.status
            if (status === 401) {}
            if (status === 403) {}
        }
    },
    async removeProductType(productTypeId) {
        try {
            const response = await $host.delete('api/producttype/'+productTypeId);
            return response.data;
        } catch (error) {
            const status = error.response?.status
            if (status === 401) {
                window.location.href = '/login/'
            }
            if (status === 403) {}
        }
    },

}

export default MenuService