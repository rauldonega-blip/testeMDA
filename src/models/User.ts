import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    permissions: { type: [String], required: true },
    azureADIdentifier: { type: String, required: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
