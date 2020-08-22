const express = require("express");
const router = express.Router();

router.post('/login', (req, res, next) => {
    cosnt[(email, password)] = req.body;
    if (email === 'admin' && password === 'admin') {
        return res.json({ status: 'ok', message: 'adminToken123' });
    }
    return res.json({ status: 'error', message: 'Incorrect email or password' });
});

module.exports = router;