const router = require("express").Router()
const bucketRoutes = require("./bucketList")

router.use("/buckets", bucketRoutes)

module.exports = router