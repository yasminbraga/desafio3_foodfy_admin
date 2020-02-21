const express = require('express')
const routes = express.Router()

const recipes = require('./controllers/recipes')

routes.get("/", recipes.index)
routes.get("/admin/recipes", recipes.index)



module.exports = routes