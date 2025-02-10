// src/config/db/mysql.ts
import { DataSource } from 'typeorm';

export const mysqlConnection = new DataSource({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    entities: [__dirname + '/../../models/*.ts',__dirname + '/../../models/**/*.ts'],
    synchronize: true,
});



export default mysqlConnection;