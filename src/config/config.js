import dotenv from 'dotenv'
dotenv.config()

export default{
    apiserver:{
        port: process.env.PORT
    },
    persistence: process.env.PERSISTENCE,
    mongo:{
        uri: process.env.MONGO_UTI,
        dbname: process.env.MONGO_DB_NAME   
    }
}