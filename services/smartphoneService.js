const smartphoneModel = require("../models/smartphone");
const cartModel = require("../models/cart");

module.exports = {
  getAll: (req, res) => {
    smartphoneModel
      .find({})
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  getById: async (req, res) => {
    try {
      const item = await smartphoneModel.findById(req.params.id);
      res.json(item);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  add: async (req, res) => {
    try {
      const savedItem = await new smartphoneModel(req.body).save();
      res.json(savedItem);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  delete: async (req, res) => {
    try {
      await smartphoneModel.deleteOne({ _id: req.params.id });
      res.json({ success: true });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  update: async (req, res) => {
    try {
      const item = await smartphoneModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        {
          new: true,
        }
      );
      res.json(item);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addCart: async (req, res) => {
    try {
      const { userId, products } = req.body;

      // Find if the cart already exists for the user
      let cart = await cartModel.findOne({ userId });

      if (cart) {
        // If the cart exists, update quantities or add new products
        products.forEach(({ smartphoneId, quantity }) => {
          const productIndex = cart.products.findIndex(
            (p) => p.smartphoneId.toString() === smartphoneId
          );

          if (productIndex > -1) {
            // If the product exists, update the quantity
            cart.products[productIndex].quantity += quantity;
          } else {
            // If the product does not exist, add it to the cart
            cart.products.push({ smartphoneId, quantity });
          }
        });
      } else {
        cart = new cartModel({
          userId,
          products,
        });
      }

      const savedCart = await cart.save();
      res.json(savedCart);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getCartByUserId: async (req, res) => {
    try {
      const userId = req.params.id;
      const cart = await cartModel.findOne({ userId });
  
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }
  
      res.json(cart);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },  
};
