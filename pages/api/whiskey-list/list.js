import { MongoClient } from 'mongodb';

const connectDB = async (req, res) => {
	const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_URI);
	const db = client.db(process.env.NEXT_PUBLIC_MONGO_DB);
	const list = await db.collection('list').find().toArray();
	res.status(200).json({ list });
	console.log('연결 성공');
	client.close();
};

export default connectDB;
