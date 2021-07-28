const router = require("express").Router();
const recetasSaveController = require("../controllers/recetasSaveController");
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");


// POST - Crate a new recipe

router.post("/save",auth,async (req, res) => {
    try {
      const receta = req.body;
      res.json(await recetasSaveController.createReceta(receta));
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  });

//GET - Return all Recepies in the DB from auth user.
router.get("/save",auth, async (req, res) => {
    try {
      res.json(await recetasSaveController.findAllRecetas());
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
});
router.put("/save",auth, async (req, res) => {
    try {
      const data = req.body;
      res.json(await recetasSaveController.modifyRecetas(data));
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  });

  router.delete("/save",auth,async (req, res) => {
    try {
      const data = req.body;
      res.json(await recetasSaveController.deleteRecetas(data));
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  });




module.exports = router;
