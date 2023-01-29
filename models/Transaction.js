const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
	type: { type: String, enum: ["income", "expense"], required: true },
	amount: { type: Number, required: true },
	category: { type: String, required: true },
	date: { type: Date, default: Date.now },
	description: { type: String, required: true },
});

export default mongoose.models.Transaction ||
	mongoose.model("Transaction", transactionSchema);
