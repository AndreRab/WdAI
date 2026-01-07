const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const orderRoutes = require('./routes/orders');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());

app.use('/api/orders', orderRoutes);

sequelize.sync().then(() => {
    console.log('Orders Database synced');
    app.listen(PORT, () => {
        console.log(`Orders service running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to sync database:', err);
});
