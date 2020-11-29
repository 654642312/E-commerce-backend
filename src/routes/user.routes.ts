import { Router } from "express";

const router = Router();

import { getUsers } from "../controllers/user.controller";


router.get("/api/users", getUsers);
router.get("/api/users/:id", );
router.post("/api/users", );
router.put("/api/users/:id", );
router.delete("/api/users/:id", );

export default router;
