// models/Menu.models.js
const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    index: {type: Number, required: false},
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }, // Adding the category field
    // Other fields as needed
});

menuSchema.pre("save", async function (next) {
    if(!this.index){
        const highestIndex = await this.constructor.findOne({}, { index: 1 }, { sort: { index: -1 } });
            this.index = (highestIndex && highestIndex.index + 1) || 1;
    }
    next();
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
