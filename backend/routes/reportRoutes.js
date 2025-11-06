import express from "express";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";
import { exportTasksReport, exportUsersReport } from "../controllers/reportController.js";
console.log("✅ reportRoutes file LOADED");

const router = express.Router();

router.get("/export/tasks", protect, adminOnly,
    exportTasksReport); // Export all tasks as excel/pdf
router.get("/export/users", protect, adminOnly,
    exportUsersReport);
export default router;