const sql = require('sql-template-strings');
const db = require('./db');

module.exports = {
  async find(id) {
    const {rows} = await db.query(sql`
      SELECT
          discount
      FROM
          products 
      WHERE 
        id = ${id} 
        AND discount IS NOT NULL 
        OR id IN (SELECT parent_id FROM products WHERE id = ${id})
      ORDER BY 
        is_category ASC
    `);
    return rows[0];
  }
};
