const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
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
    description: {
      type: String,
      required: true,
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

// status tersebut adalah apakah belum diproses, sudah diproses, atau selesai beserta waktu sesuai statusnya

module.exports = mongoose.model("Transaction", transactionSchema);
