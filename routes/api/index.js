const router = require("express").Router();
const commentRoutes = require("./comment-routes.js");
const pizzaRoutes = require("./pizza-routes.js");

router.use("/comments", commentRoutes);
router.use("/pizzas", pizzaRoutes);

module.exports = router;