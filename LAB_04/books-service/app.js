const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const bookRoutes = require('./routes/books');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.use('/api/books', bookRoutes);

// Sync database and start server
sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
        console.log(`Books service running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to sync database:', err);
});
