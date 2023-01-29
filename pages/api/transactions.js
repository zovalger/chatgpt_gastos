import connectDb from "../../lib/db";
import Transaction from "../../models/Transaction";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
	await connectDb();
	switch (req.method) {
		case "GET":
			await handleGetTransactions(req, res);
			break;
		case "POST":
			await handleCreateTransaction(req, res);
			break;
		case "PUT":
			await handleUpdateTransaction(req, res);
			break;
		case "DELETE":
			await handleDeleteTransaction(req, res);
			break;
		default:
			res.status(405).end(); // Method Not Allowed
	}
};

async function handleGetTransactions(req, res) {
	const { id } = req.query;
	try {
		const transactions = id
			? await Transaction.findById(id)
			: await Transaction.find();
			
		res.status(200).json({ transactions });
	} catch (error) {
		res.status(500).json({ message: "Error fetching transactions", error });
	}
}
async function handleCreateTransaction(req, res) {
	try {
		const { amount, type, description, category } = req.body;
		const newTransaction = await new Transaction({
			amount,
			type,
			description,
			category,
		}).save();
		res.status(201).json({ transaction: newTransaction });
	} catch (error) {
		res.status(500).json({ message: "Error creating transaction", error });
	}
}

async function handleUpdateTransaction(req, res) {
	try {
		const { id } = req.query;
		const { amount, type, description, category } = req.body;
		const transaction = await Transaction.findByIdAndUpdate(
			id,
			{
				amount,
				type,
				description,
				category,
			},
			{ new: true }
		);
		res.status(200).json({ transaction });
	} catch (error) {
		res.status(500).json({ message: "Error updating transaction", error });
	}
}

async function handleDeleteTransaction(req, res) {
	try {
		const { id } = req.query;
		await Transaction.findByIdAndDelete(id);
		res.status(204).end();
	} catch (error) {
		res.status(500).json({ message: "Error deleting transaction", error });
	}
}
