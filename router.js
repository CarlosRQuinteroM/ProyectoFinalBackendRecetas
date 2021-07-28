const router = require("express").Router();
const userRouter = require("./routes/userRouter");
const restRouter = require("./routes/recetasSaveRouter");
// const bookingRouter = require("./routes/bookingRouter");
// 
router.use("/user", userRouter);
router.use("/recetasaves", restRouter);
// router.use("/booking", bookingRouter);

module.exports = router;


