import dotenv from "dotenv";
import multer from "multer";
dotenv.config();
import { GridFsStorage } from "multer-gridfs-storage";

export const storage = new GridFsStorage({
  url: "mongodb://localhost:27017/WhatsUpp",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpg"];
    if (match.indexOf(file.mimetype) === -1) {
      return { filename: `${Date.now()}-file-${file.originalname}` };
    }
    return {
      bucketName: "photos",
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

export default multer({ storage });
