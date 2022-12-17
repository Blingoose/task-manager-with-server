import express from "express";
import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAll,
  getOne,
  updateTask,
} from "../controllers/tasks.js";

const router = Router();

router.route("/").get(getAll).post(createTask);
router.route("/:id").get(getOne).patch(updateTask).delete(deleteTask);

export default router;
