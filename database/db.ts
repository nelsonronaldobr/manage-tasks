import mongoose from 'mongoose';
import { getEnvVariables } from '../helpers';
/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 *
 */
const mongooConnection = {
    isConnected: 0
};

const { MONGO_URL = '', NODE_ENV } = getEnvVariables.server();

export const connect = async () => {
    if (mongooConnection.isConnected) {
        console.log('ya esta conectado');
        return;
    }

    if (mongoose.connections.length > 0) {
        mongooConnection.isConnected = mongoose.connections[0].readyState;
        if (mongooConnection.isConnected === 1) {
            console.log('usando conexion anterior');
            return;
        }
        await mongoose.disconnect();
    }

    await mongoose.connect(MONGO_URL);
    mongooConnection.isConnected = 1;
    console.log('conectado a mongoDB', MONGO_URL);
};

export const disconnect = async () => {
    if (NODE_ENV === 'development') return;
    if (mongooConnection.isConnected === 0) return;
    await mongoose.disconnect();
    mongooConnection.isConnected = 0;
    console.log('desconectado de mongoDB', MONGO_URL);
};
