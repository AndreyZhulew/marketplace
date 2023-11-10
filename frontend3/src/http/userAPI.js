import {$authHost , $host} from './index'
import jwt_decode from 'jwt-decode'

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password})
    return data
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    try {
        const { data } = await $authHost.get('api/user/check');
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        // Перенаправление на страницу логина
        // if (!window.location.href.includes('/login') && !window.location.href.includes('/registration'))
        //     window.location.href = '/login';
    }
}