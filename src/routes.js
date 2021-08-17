const { Router } = require('express');
const CompanyController = require('./app/controllers/CompanyController');

const router = Router();

router.get('/companies', CompanyController.index);
router.get('/companies/:cnpj', CompanyController.show);
router.post('/companies', CompanyController.store);
router.put('/companies/:cnpj', CompanyController.update);

module.exports = router;
