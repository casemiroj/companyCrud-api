const { Router } = require('express');
const CompanyController = require('./app/controllers/CompanyController');

const router = Router();

router.get('/companies', CompanyController.index);

module.exports = router;
