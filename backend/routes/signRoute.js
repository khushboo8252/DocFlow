const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { signDocument } = require('../controllers/signController');

router.put('/:id/sign', auth, signDocument);

module.exports = router;