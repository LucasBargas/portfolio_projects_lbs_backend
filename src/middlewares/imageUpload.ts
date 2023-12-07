import multer from 'multer';
import path from 'path';

const imageStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'src/uploads/thumbs/');
  },
  filename: (req, file, callback) => {
    callback(
      null,
      Date.now() +
        String(Math.floor(Math.random() * 1000)) +
        path.extname(file.originalname),
    );
  },
});

const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, callback) {
    if (!file.originalname.match(/\.(png|jpg|jpeg|webp)$/)) {
      return callback(
        new Error('Por favor, envie apenas fotos png, jpg ou webp.'),
      );
    }

    callback(undefined, true);
  },
});

export default imageUpload;
