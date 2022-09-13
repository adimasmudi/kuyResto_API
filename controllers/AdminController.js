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
      menus: [
        {
          id: 1,
          name: "bakso beranak",
          category: "makanan",
          description:
            "Makanan yang sangat enak disantap di waktu dingin bersama orang tersayang",
          price: 20000,
          discount: 5000,
          qty: 4,
          image: "/images/bakso_beranak.jpg",
        },
        {
          id: 5,
          name: "Lemon Tea",
          category: "minuman",
          description: "Lemonnya bener-bener terasa",
          price: 7000,
          discount: 1000,
          qty: 5,
          image: "/images/lemon_tea.jpg",
        },
        {
          id: 6,
          name: "Somay",
          category: "camilan",
          description: "wenak tenan",
          price: 5000,
          discount: 0,
          qty: 5,
          image: "/images/somay.jpg",
        },
      ],
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
