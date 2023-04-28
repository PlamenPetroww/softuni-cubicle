const router = require('express').Router();
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeControllers');

router.get('/', homeController.getHomePat);
router.get('/about', homeController.getAboutPage);
router.get('./create', cubeController.getCreateCube);

module.exports = router;