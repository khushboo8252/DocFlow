const Document = require('../models/Document');

exports.signDocument = async (req, res) => {
  const doc = await Document.findById(req.params.id);
  if (!doc) return res.status(404).json({ message: 'Document not found' });

  doc.status = 'Signed';
  await doc.save();
  res.json(doc);
};