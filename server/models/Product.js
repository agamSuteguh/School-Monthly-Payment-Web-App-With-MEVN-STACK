const { model, Schema } = require("mongoose");

const ProductSchema = new Schema(
    {
        NameProduct: {
            type: String,
            required: true,
            unique: true,
        },
        Desc: {
            type: String,
            required: true,
        },
        Qty: {
            type: String,
            required: true
        },
        Cover: {
            type: String,
            required: true
        },
        Category: {
            type: String,
            required: true
        },
        Price: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

module.exports = model("Product", ProductSchema)