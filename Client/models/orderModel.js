import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    products: [{
        type: mongoose.ObjectId,
        ref: "products",

    }],
    payment: {},
    buyers: {
        type: mongoose.ObjectId,
        ref: "users"
    },
    status: {
        type: String,
        default: 'Not Process',
        enum: ["Not Process", "Processing", "shipped", "deliverd", "cancel"]
    }
},
    { timesstamps: true }
);

export default mongoose.model("Order", orderSchema);