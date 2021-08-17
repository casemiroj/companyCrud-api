const db = require('../../database');

class CompanyRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM companies');
    return rows;
  }

  async findByCnpj(cnpj) {
    const [row] = await db.query(`
      SELECT * FROM companies
      WHERE cnpj = $1
    `, [cnpj]);
    return row;
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

  async update(cnpj, {
    name, corporate_name, address, number, city, uf,
  }) {
    const [row] = await db.query(`
      UPDATE companies
      SET name = $1, corporate_name = $2, address = $3, number = $4, city = $5, uf = $6
      WHERE cnpj = $7
      RETURNING *
    `, [name, corporate_name, address, number, city, uf, cnpj]);

    return row;
  }

  async delete(cnpj) {
    const deleteOp = await db.query('DELETE from companies WHERE cnpj = $1', [cnpj]);
    return deleteOp;
  }
}

module.exports = new CompanyRepository();
