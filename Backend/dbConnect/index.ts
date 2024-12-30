import mongoose from 'mongoose';

export default async function dbConnect() {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    try {
        const mongoUri = 'mongodb+srv://augustodoscer:SdmG8lcx4UgEh6RS@cluster0.o9t3v.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0';
        // const mongoUri = 'mongodb+srv://94augusto:EvMflKovqtiuT3tx@cluster0.asxsn.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0';
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB');
    }   catch (error) { 
        console.error('Error connecting to MongoDB: ', error);
    }
}