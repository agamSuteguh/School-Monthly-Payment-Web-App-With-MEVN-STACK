const Product = require('../models/Product')

class productService {
    async Upload(data) {
        try {
            const { Nameproduct, Desc, Qty, Cover, Category, Price } = data;



            const newProduct = await new Product({
                Nameproduct, Desc, Qty, Cover, Category, Price
            });

            const saveProduct = await newProduct.save();


            return {
                status: "ok",
                msg: "Anda telah berhasil menambah product!",
                user: saveProduct,
                token,
            };
        }
        catch (error) {
            console.log(error.message);
        }

    }
}
module.exports = productService;