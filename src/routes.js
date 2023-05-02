const router = require('express').Router();
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeControllers');

router.get('/', homeController.getHomePat);
router.get('/about', homeController.getAboutPage);
router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
router.get('/details/:cubeId', cubeController.getDetails)

module.exports = router;