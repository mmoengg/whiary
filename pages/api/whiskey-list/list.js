import { MongoClient } from 'mongodb';

async function handler(req, res) {
	const client = await MongoClient.connect(process.env.MONGO_URI);
	const db = client.db(process.env.MONGO_DB);
	const list = await db.collection('list').find().toArray();
	res.status(200).json({ list });
	client.close();
}

export default handler;
