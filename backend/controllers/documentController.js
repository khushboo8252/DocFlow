const Document = require('../models/Document');

exports.uploadDocument = async (req, res) => {
  try {
    const fileUrl = req.file?.path;
    const doc = await Document.create({
      name: req.body.name,
      url: fileUrl,
      uploadedBy: req.user.id,
      status: 'Pending',
    });
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserDocuments = async (req, res) => {
  const docs = await Document.find({ uploadedBy: req.user.id });
  res.json(docs);
};