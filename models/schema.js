const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name:{type: String, required: true},
    description: String,
    prepTime: {type: Number},
    bakeTime: {type: Number},
    ingredients: {
        flour:  {
            typeOfFlour: String,
            amountOfFlour: Number
        },
        salt: Number,
        yeast: {
            typeOfYeast: String,
            amountOfYeast: Number
        },
        oil: {
            typeOfOil: String,
            amountOfOil: Number
        },
        sugar: Number,
        water: Number,
        milk_msub: Number,
        otherIngredients: [String],
    },
    instructions: String,
    img: String,
    dairyFree: Boolean,
    glutenFree: Boolean
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

