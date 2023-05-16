const router = require('express').Router();
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeControllers');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');
const {isAuthenticated} = require('./middlewares/authMiddleware');

router.get('/', homeController.getHomePat);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);
router.use('/', authController);

router.get('/cubes/:cubeId/attach', cubeController.getAttachAccessory);
router.post('/cubes/:cubeId/attach',cubeController.postAttachAccessory);
router.get('/cubes/create', isAuthenticated, cubeController.getCreateCube);
router.post('/cubes/create', isAuthenticated, cubeController.postCreateCube);
router.get('/cubes/:cubeId/details', cubeController.getDetails);

router.use('/accessories', accessoryController);

module.exports = router;