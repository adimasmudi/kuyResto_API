const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  menuId: {
    _id: {
      type: ObjectId,
      ref: "Menu",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    qty: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  status: [
    {
      name: {
        type: String,
        required: true,
      },
      time: {
        type: Date,
        required: true,
      },
    },
  ],
});

// status apakah ditambahkan atau dihapus, beserta waktu menu tersebut ditambahkan atau dihapus

module.exports = mongoose.model("Cart", cartSchema);
