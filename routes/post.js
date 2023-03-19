import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

//localhost:5000/posts

//GET
router.get("/", getPosts);

//CREATE-POST
router.post("/", createPost);

//UPDATE
router.patch("/:id", updatePost);

//DELETE
router.delete("/:id", deletePost);

export default router;
