const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const authenticate = require('../middleware/authenticate');
const axios = require('axios');

const BOOKS_SERVICE_URL = 'http://localhost:3001/api/books';

router.get('/:userId', async (req, res) => {
    try {
        const orders = await Order.findAll({ where: { userId: req.params.userId } });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/orders - Add order
router.post('/', authenticate, async (req, res) => {
    try {
        const { userId, bookId, quantity } = req.body;

        // Verify book exists in Service 1
        // Do not query DB directly! Use Axios.
        try {
            await axios.get(`${BOOKS_SERVICE_URL}/${bookId}`);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                return res.status(404).json({ error: 'Book not found' });
            }
            // If other error (service down, etc)
            return res.status(500).json({ error: 'Error checking book availability' });
        }

        const newOrder = await Order.create({ userId, bookId, quantity });
        res.status(201).json({ id: newOrder.id });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /api/orders/:orderId
router.delete('/:orderId', authenticate, async (req, res) => {
    try {
        const result = await Order.destroy({ where: { id: req.params.orderId } });
        if (result) {
            res.json({ message: 'Order deleted' });
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PATCH /api/orders/:orderId
router.patch('/:orderId', authenticate, async (req, res) => {
    try {
        const { quantity } = req.body;
        const order = await Order.findByPk(req.params.orderId);

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        if (quantity !== undefined) order.quantity = quantity;

        await order.save();
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
