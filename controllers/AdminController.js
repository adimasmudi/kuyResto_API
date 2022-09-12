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
  displayCustomerDetail: async (req, res) => {
    res.render("index", {
      page: "customerDetail",
    });
  },
  displayMenu: async (req, res) => {
    res.render("index", {
      page: "menu",
    });
  },
  displayAddMenu: async (req, res) => {
    res.render("index", {
      page: "addMenu",
    });
  },
  displayTransaction: async (req, res) => {
    res.render("index", {
      page: "transaction",
    });
  },
  displayCart: async (req, res) => {
    res.render("index", {
      page: "cart",
    });
  },
};
