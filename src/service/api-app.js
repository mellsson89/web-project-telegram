import axios from "axios";

axios.defaults.baseURL='https://backend-telegram-8vsc.vercel.app';


export const tokenChange= {
    set(token) {
        axios.defaults.headers.Authorization =(`Bearer ${token}`);

    },
    unset() {
        axios.defaults.headers.Authorization = ``;
    }


}

export const authTelegram = async (user) => {

    try {
        const {data:{data,token}} = await axios.post('/api/v1/auth/login', user);

        return {data,token}
    }
    catch (e) {
        console.log(e.message)
    }
}

export const logoutTelegram = async () => {
    try {
        await axios.get('/api/v1/auth/logout');

    }
    catch (e) {
        console.log(e)
    }
}

export const addSettingUser = async (credential) => {
    try {
        const data = await axios.post('/api/v1/contacts',credential);
        return data;

    }
    catch (e) {
        console.log(e)
    }
}

export const findSettingUser = async () => {
    const data = await axios.get('/api/v1/contacts');
    return data;
}

export const currentUser = async () => {
    try {
        const user = await axios.get('/api/v1/auth/current');
        return user;

    }
    catch (e) {
        console.log(e)
    }
}
