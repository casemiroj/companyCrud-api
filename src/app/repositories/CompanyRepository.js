const db = require('../../database');

class CompanyRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM companies');
    return rows;
  }

  async create({
    cnpj, name, razao_social, logradouro, numero, municipio, uf,
  }) {
    const [row] = await db.query(`
      INSERT INTO companies(cnpj, name, corporate_name, address, number, city, uf)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `, [cnpj, name, razao_social, logradouro, numero, municipio, uf]);

    return row;
  }
}

module.exports = new CompanyRepository();
