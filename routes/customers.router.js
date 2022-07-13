const express = require('express');

const CustomersService = require('../services/customer.service');

const router = express.Router();
const service = new CustomersService();

router.get('/', async (req, res) => {
  console.log('llegamos al router');
  const customers = await service.find();
  res.json(customers);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const customer = await service.findOne(id);
  res.json(customer);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newCustomer = await service.create(body);
  res.status(201).json(newCustomer);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const customer = await service.update(id, body);
    res.json(customer);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }

});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
