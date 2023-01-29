const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
	try {
		if (!this.isModified("password")) {
			return next();
		}
		const hashed = await bcrypt.hash(this.password, 10);
		this.password = hashed;
		return next();
	} catch (err) {
		return next(err);
	}
});

userSchema.methods.comparePassword = async function (candidate) {
	try {
		return await bcrypt.compare(candidate, this.password);
	} catch (err) {
		throw new Error(err);
	}
};

export default mongoose.models.User || mongoose.model("User", userSchema);
