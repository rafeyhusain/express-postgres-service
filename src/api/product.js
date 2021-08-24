const { Router } = require('express');
const Product = require('../persistence/product');

const router = new Router();

router.get('/', async (request, response) => {
  return response.status(200).json({ "Hello": "World" });
});

router.get('/:id', async (request, response) => {
  const id = request.params.id;

  try {
    const product = await Product.find(id);

    if (product) {
      return response.status(200).json(product);
    } else {
      let msg = `Product id ${id} not found`;

      return response.status(404).json({ msg });
    }
  } catch (error) {
    console.error(
      `find({ id: ${id} }) >> Error: ${error.stack}`
    );
    response.status(500).json();
  }
});

module.exports = router;
