const axios = require('axios');
const CompanyRepository = require('../repositories/CompanyRepository');

class CompanyController {
  async index(req, res) {
    const companies = await CompanyRepository.findAll();
    res.json(companies);
  }

  async show(req, res) {
    const { cnpj } = req.params;
    const company = await CompanyRepository.findByCnpj(cnpj);

    if (!company) {
      return res.status(404).json({ error: 'Company Not Found' });
    }

    res.json(company);
  }

  async store(req, res) {
    const { cnpj, name } = req.body;
    try {
      const { data } = await axios(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
      const {
        razao_social, logradouro, numero, municipio, uf,
      } = data;
      const company = await CompanyRepository.create({
        cnpj, name, razao_social, logradouro, numero, municipio, uf,
      });
      res.json(company);
    } catch {
      res.status(404).json({ erro: 'CNPJ not found' });
    }
  }
}

module.exports = new CompanyController();
