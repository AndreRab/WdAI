const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3003;

app.use(bodyParser.json());

app.use('/api', authRoutes);

sequelize.sync().then(() => {
    console.log('Users Database synced');
    app.listen(PORT, () => {
        console.log(`Users service running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to sync database:', err);
});
