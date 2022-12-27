import image from '../model/imageDataSchema.js';

const getAllImages = async (req, res) => {
  const images = await image.find();
  if (!images) return res.status(204).json({ 'message': 'No Images found'});
  res.json(images)
}

const newImage = async (req, res) => {
  if (!req?.body?.label || !req?.body?.photoURL) return res.status(400).json({ 'message': 'Label and image URL required.'})
  try {
    const newPicture = await image.create({
      label: req?.body?.label,
      photoURL: req?.body?.photoURL
    });
    res.status(202).json({ 'message': 'New Picture has been added', newPicture})
  } catch (err) {
    console.log(err)
  }
}

const deleteImage = async (req, res) => {
  if (!req?.body?.id) return res.status(400).json({ 'message': 'Image ID required to delete'});

  const findImage = await image.findOne({ '_id': req.body.id}).exec();
  if (!findImage) return res.status(204).json({ 'message': `No image is matches to ID ${req.body.id}`})

  const result = await findImage.deleteOne()
  res.json(result)
}

export default { getAllImages, newImage, deleteImage }