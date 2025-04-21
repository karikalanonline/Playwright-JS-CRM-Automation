import dotenv from 'dotenv';
dotenv.config()    //loads .env values into process.env

const config ={
    baseUrl: process.env.BASE_URL,
    userName: process.env.USERNAME,
    password: process.env.PASSWORD
};

export default config;