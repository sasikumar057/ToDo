const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./taskRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
