const express = require('express');
const sequelize = require('./config/database');
const alumniRoutes = require('./routes/alumniroutes');

require('dotenv').config();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/alumni', alumniRoutes);

sequelize.sync()
    .then(() => {
        console.log('Database synced successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('Failed to sync database:', err));
