const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const upload = require('../middlewares/multer');
const { uploadDocument, getUserDocuments } = require('../controllers/documentController');

router.post('/upload', auth, upload.single('file'), uploadDocument);
router.get('/', auth, getUserDocuments);

module.exports = router;