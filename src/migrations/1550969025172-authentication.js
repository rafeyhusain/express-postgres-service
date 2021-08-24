const db = require('../persistence/db');

module.exports.up = async function (next) {
  const client = await db.connect();

  await client.query(`
  CREATE TABLE IF NOT EXISTS products (
    id int PRIMARY KEY NOT NULL,
    name varchar(500),
    parent_id int,
    discount real,
    is_category boolean
  );

  `);

  await client.query(`
  CREATE INDEX products_parent_id on products (parent_id);
  `);

  await client.query(`
  INSERT INTO products VALUES(1, 'Mobile Phones', NULL, 10, true);
  INSERT INTO products VALUES(2, 'iPhone', 1, NULL, false);
  INSERT INTO products VALUES(3, 'Samsung', 1, 25, false);
  `);

  await client.release(true);
  next();
};

module.exports.down = async function (next) {
  const client = await db.connect();

  await client.query(`
  DROP TABLE products;
  `);

  await client.query(`
  DROP INDEX products_parent_id;
  `);

  await client.release(true);
  next();
};
