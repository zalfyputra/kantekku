const Menu = require("../models/Menu.models");

exports.addMenu = async function (menuData) {
    try {
        const result = await Menu.create(menuData);
        return { success: true, message: "Menu added successfully", result };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Failed to add Menu", result: null };
    }
};

exports.getAllMenu = async function () {
    try {
        const result = await Menu.find({}).sort({ index: 1 });
        return { success: true, message: "Menu fetched successfully", result };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Failed to fetch Menu", result: null };
    }
};

exports.deleteMenuByIndex = async function (index) {  
    try{
        const result = await Menu.findOneAndDelete({ index }); 
        if (result) {
            return { success: true, message: "Menu deleted successfully", result };
        } else {
            return { success: false, message: "Menu not found", result: null };
        } 
    } catch (error) {
        console.error(error);
        return { success: false, message: "Failed to delete Menu", result: null };
    }
};
