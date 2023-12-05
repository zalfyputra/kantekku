const MenuService = require("../services/Menu.services");

exports.addMenu = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        const menuData = { name, description, price, category };

        const result = await MenuService.addMenu(menuData);

        if (result.success) {
            res.status(201).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error", result: null });
    }
};

exports.getAllMenu = async (req, res) => {
    try {
        const result = await MenuService.getAllMenu();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error", result: null });
    }
};

exports.deleteMenuByIndex = async (req, res) => {
    try {
        const { index } = req.params;

        const result = await MenuService.deleteMenuByIndex(index);

        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(404).json(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error", result: null });
    }
};
