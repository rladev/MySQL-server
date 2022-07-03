import express from 'express'
const router = express.Router();
import { create, findAll, findOne, update, deleteOne } from "../controllers/notes"

router.post("/", create);

router.get("/", findAll);

router.get("/:id", findOne);

router.post("/update-event", update);

router.delete("/delete-event", deleteOne);

export default router;