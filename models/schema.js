const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name:{type: String, required: true},
    description: String,
    prepTime: {type: Number, required: true},
    bakeTime: {type: Number, required: true},
    ingredients: {
        flour: {
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
        otherIngredients: [String],
        instructions: String
    },
        img: String,
        dairyFree: Boolean,
        glutenFree: Boolean
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

