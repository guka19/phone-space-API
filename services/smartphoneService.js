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
      const item = await studentModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        {
          new: true,
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addToCart: async (req, res) => {
    try {
      const { userId, smartphoneId, quantity } = req.body;

      let cart = await cartModel.findOne({ user: userId });

      if (!cart) {
        cart = new cartModel({
          user: userId,
          products: [{ smartphone: smartphoneId, quantity }],
        });
      } else {
        const productIndex = cart.products.findIndex((product) =>
          product.smartphone.equals(smartphoneId)
        );

        if (productIndex > -1) {
          cart.products[productIndex].quantity += quantity;
        } else {
          cart.products.push({ smartphone: smartphoneId, quantity });
        }
      }

      const savedCart = await cart.save();
      res.json(savedCart);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getCartByUserId: async (req, res) => {
    try {
      const userId = req.params.userId;

      const cart = await cartModel
        .findOne({ user: userId })
        .populate("products.smartphone");

      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      res.json(cart.products);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
