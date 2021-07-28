
const RecetaSaves = require("../models/recetasSaves");

class Receta {
    async createReceta(receta) {
        return RecetaSaves.create(receta);
      };

    async findAllRecetas() {
        return RecetaSaves.find();
    };

    async modifyRecetas(data) {
        return RecetaSaves.findByIdAndUpdate(
          //Where
          { _id: data.id },
           //Data Changes
          {favorite: data.favorite},
        );
      };

      async deleteRecetas(data) {
        return RecetaSaves.findByIdAndRemove({ _id: data.id });
      };

}

let recetasSaveController = new Receta();
module.exports = recetasSaveController;
