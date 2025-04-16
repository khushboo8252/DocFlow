const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/clodinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'documents',
    format: async () => 'pdf',
    public_id: (req, file) => file.originalname,
  },
});

module.exports = multer({ storage });