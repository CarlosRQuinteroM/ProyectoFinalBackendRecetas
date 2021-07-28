const router = require("express").Router();
const userRouter = require("./routes/userRouter");
const recetasRouter = require("./routes/recetasSaveRouter");
// const despensaRouter = require("./routes/despensaRouter");
// 
router.use("/user", userRouter);
router.use("/recetasaves", recetasRouter);
// router.use("/despensa", despensaRouter);

module.exports = router;


