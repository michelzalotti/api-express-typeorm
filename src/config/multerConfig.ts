import path from 'node:path';
import multer, { MulterError } from 'multer';
import { Request } from 'express';

const storage: multer.StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = path.resolve('uploads', 'avatar');
    return cb(null, folder);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const hash = Date.now();
    const userId = req.user.id;

    return cb(null, `${userId}_${hash}${ext}`);
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) => {
  const acceptFiles = ['.jpg', '.jpeg', '.png'];
  const ext = path.extname(file.originalname);

  if (!acceptFiles.includes(ext))
    return cb(new MulterError('LIMIT_UNEXPECTED_FILE'));

  return cb(null, true);
};

const limits = { fileSize: 57986 };

export const multerOptions: multer.Options = {
  storage,
  fileFilter,
  limits,
};
