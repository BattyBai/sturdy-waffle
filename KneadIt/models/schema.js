const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name:{type: String, required: true},
    prepTime: {type: Number, required: true},
    bakeTime: {type: Number, required: true},
    totalTime: {type: Number, required: true},
    ingredients: {
        flour: {
            typeOfFlour: String,
            amountOfFlour: Number
        },
        salt: String,
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
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
