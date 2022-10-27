const router= require('express').Router();
const departmentController = require('../controller/department');
const userController = require('../controller/user');
const subdepartmentController = require('../controller/subdepartment');


router.post('/add-department', departmentController.adddepartment);
router.get('/get-department', departmentController.getdepartment);
router.put('/update-department/:id', departmentController.update);
router.delete('/delete-department/:id' ,departmentController.delete);
// User Controller
router.post('/login', userController.userLogin);

//Sub department

router.post ('/add-subdepartment', subdepartmentController.addsubdepartment);
router.get('/get-subdepartment', subdepartmentController.getsubdepartment);
router.put('/update-sub-department', subdepartmentController.updatesubdepartment);
router.delete('/delete-sub-department', subdepartmentController.deletesubdepartment);

module.exports = router;