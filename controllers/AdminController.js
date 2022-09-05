module.exports = {
  index: async (req, res) => {
    res.render("index", {
      page: "dashboard",
    });
  },
  displayCustomer: async (req, res) => {
    res.render("index", {
      page: "customer",
    });
  },
  displayMenu: async (req, res) => {
    res.render("index", {
      page: "menu",
    });
  },
  displayTransaction: async (req, res) => {
    res.render("index", {
      page: "transaction",
    });
  },
};
