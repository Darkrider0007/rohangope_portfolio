import { ConnectionObject } from '@/types/(api)/connectionObject';
import mongoose from 'mongoose';


const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log('Already connected to the database')
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {});

        connection.isConnected = db.connections[0].readyState;


        console.log('Connected to the successfully🚀 ', connection.isConnected)

    } catch (error) {
        console.log('Error connecting to the database: ', error)

        process.exit(1)
    }
}

export default dbConnect;
