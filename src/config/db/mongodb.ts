// src/config/mongodb.ts
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            throw new Error('MONGODB_URI no está definida en las variables de entorno');
        }
        await mongoose.connect(mongoURI);
        console.log('MongoDB conectado correctamente');
    } catch (error) {
        console.error('Error conectando a MongoDB:', error);
        process.exit(1); // Salir del proceso si falla la conexión
    }

};

export default connectDB;
