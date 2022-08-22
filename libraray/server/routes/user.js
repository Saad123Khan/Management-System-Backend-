import express from "express";
import {getUsers , createUsers ,updateUser, getUser , deleteUser} from '../controllers/user.js';
const router = express.Router();

router.get("/users",getUsers);
router.post("/users",createUsers);
router.get("/users/:id",getUser);
router.get("/users/:id",deleteUser);
router.put("/users/:id",updateUser);


export default router;
