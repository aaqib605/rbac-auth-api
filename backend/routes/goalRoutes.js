const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");
const { roleAuth } = require("../middleware/roleAuthMiddleware");

router.get("/", protect, getGoals);

router.post("/", protect, setGoal);

router.put("/:id", protect, updateGoal);

router.delete("/:id", protect, roleAuth, deleteGoal);

module.exports = router;
