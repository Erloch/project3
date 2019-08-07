const router = require("express").Router();
const bucketRoutes = require("./bucketList");
const userRoutes = require("./userRoutes");
const todoRoutes = require("./todoRoutes");

router.use("/buckets", bucketRoutes);
router.use("/users", userRoutes);
router.use("/todos", todoRoutes);

module.exports = router;