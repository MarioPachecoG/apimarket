import{config} from 'dotenv'
config()

export const PORT= process.env.PORT || 3000
export const DB_HOST=process.env.DB_HOST || '${{MySQL-ZcT5.MYSQLHOST}}
export const DB_PORT=process.env.DB_PORT || '${{MySQL-ZcT5.MYSQLPORT}}'
export const DB_USER=process.env.DB_USER || '${{MySQL-ZcT5.MYSQLUSER}}'
export const DB_PASSWORD=process.env.DB_PASSWORD || '${{MySQL-ZcT5.MYSQLPASSWORD}}'
export const DB_DATABASE=process.env.DB_DATABASE || '${{MySQL-ZcT5.MYSQLDATABASE}}'
