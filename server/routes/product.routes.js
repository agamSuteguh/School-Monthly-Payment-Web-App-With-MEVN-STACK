const { Router } = require("express");
const router = Router();


const productService = require("../services/product.service");


const ProductService = new productService();

// Register route
router.post("/upload", async (req, res) => {
    try {
        const result = await ProductService.ProductService(req.body);

        res.json(result);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;