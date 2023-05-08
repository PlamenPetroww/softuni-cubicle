const router = require('express').Router();
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeControllers');
const accessoryController = require('./controllers/accessoryController');

router.get('/', homeController.getHomePat);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage)

router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
router.get('/details/:cubeId', cubeController.getDetails);

router.use('/accessory', accessoryController);

module.exports = router;