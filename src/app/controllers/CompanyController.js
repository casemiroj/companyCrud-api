class CompanyController {
  index(req, res) {
    res.status(200).json({ API: 'online' });
  }
}

module.exports = new CompanyController();
