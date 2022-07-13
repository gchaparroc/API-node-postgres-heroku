const express = require('express');

const OrdersService = require('../services/order.service');

const router = express.Router();
const service = new OrdersService();

router.get('/', async (req, res) => {
  const orders = await service.find();
  res.json(orders);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const order = await service.findOne(id);
  res.json(order);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newOrder = await service.create(body);
  res.status(201).json(newOrder);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const order = await service.update(id, body);
    res.json(order);
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
