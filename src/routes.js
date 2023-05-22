const router = require('express').Router();
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeControllers');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');
const { isAuthenticated } = require('./middlewares/authMiddleware');
const { handlerRequest } = require('./utils/requestUtils');

router.get('/', homeController.getHomePat);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

router.use('/', authController);

router.get('/cubes/create', isAuthenticated, handlerRequest(cubeController.getCreateCube));
router.post('/cubes/create', isAuthenticated, handlerRequest(cubeController.postCreateCube));
router.get('/cubes/:cubeId/edit', handlerRequest(cubeController.getEditCube));
router.get('/cubes/:cubeId/delete', isAuthenticated, handlerRequest(cubeController.getDeleteCube));
router.post('/cubes/:cubeId/delete', handlerRequest(cubeController.postDeleteCube));
router.post('/cubes/:cubeId/edit', handlerRequest(cubeController.postEditCube));
router.get('/cubes/:cubeId/details', handlerRequest(cubeController.getDetails));
router.get('/cubes/:cubeId/attach', handlerRequest(cubeController.getAttachAccessory));
router.post('/cubes/:cubeId/attach', handlerRequest(cubeController.postAttachAccessory));

router.use('/accessories', accessoryController);

module.exports = router;