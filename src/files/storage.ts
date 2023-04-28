import { diskStorage } from 'multer';

function generateId() {
  return Array(18)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
}

function normalizeFileName(req, file, callback) {
  const fileExt = file.originalname.split('.').pop();

  callback(null, `${generateId()}.${fileExt}`);
}

export const fileStorage = diskStorage({
  destination: './uploads',
  filename: normalizeFileName,
});
