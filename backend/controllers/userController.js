import Task from "../models/Task.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

//@desc      Get all users (Admim only)
//@route     GET /api/users/
//@access    Private (Admin)
const getUsers = async(req, res) => {
    try {
        const users = await User.find({ role: 'member' }).select(-"password");
        // Add task counts to each user
        const usersWithTaskCounts = await Promise.all(users.map(async(user) => {
            const pendingTasks = await Task.countDocuments({ assignedTo: user._id, status: "Pending" });
            const inProgerssTasks = await Task.countDocuments({ assignedTo: user._id, status: "In Progress" });
            const completedTasks = await Task.countDocuments({ assignedTo: user._id, status: "Completed" });

            return {
                ...user._doc,
                pendingTasks,
                inProgerssTasks,
                completedTasks,
            };
        }));

        res.json(usersWithTaskCounts);
    } catch (err) {
        res.status(500).json({ message: "Server EEror", error: err.message });
    }
};

//@desc      Get all users (Admim only)
//@route     GET /api/users/
//@access    Private (Admin)
const getUserById = async(req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Server EEror", error: err.message });
    }
};

export { getUserById, getUsers };