import Product from "../models/product.js";

const addProduct = async (req, res) => {
    try {
      const { name, description, price  } = req.body;
      console.log("this is name", name);
      
      const image = req.file ? `/uploads/${req.file.filename}` : null;
      
      const newProduct = new Product({ name, description, price, image });
      await newProduct.save();
      
      return res.json({
        message: "Product added successfully",
        product: newProduct,
      });
    } catch (error) {
      console.error("Error adding product:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
export default addProduct;

