import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// ✅ define __dirname manually (because ES modules don’t have it)
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Configure storage — save inside backend/uploads/
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads")); // <-- correct folder
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

// ✅ File filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only .jpeg, .jpg, and .png formats are allowed"), false);
    }
};

// ✅ Export multer instance
const upload = multer({ storage, fileFilter });
export default upload;