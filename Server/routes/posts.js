import express from "express";
import {
  addNewPost,
  deletePost,
  getAllPosts,
  getUserPosts,
  updatePost,
} from "../Controllers/posts.js";

const router = express.Router();
const userId = "6642f24c9a795e818632f3e9";

router.get("/all", async (req, res) => {
  try {
    const posts = await getAllPosts();
    if (posts.length <= 0) {
      return res.status(404).json({
        error: "No Data Available",
      });
    }
    return res.status(200).json({
      data: posts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server Error",
    });
  }
});

router.get("/user/all", async (req, res) => {
  try {
    const userPosts = await getUserPosts(userId);

    if (userPosts.length <= 0) {
      return res.status(404).json({
        error: "No Data Available",
      });
    }
    return res.status(200).json({ data: userPosts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server Error" });
  }
});

router.post("/add", async (req, res) => {
  try {
    const currentDate = new Date().toJSON().slice(0, 10);

    const newPost = await addNewPost(req, currentDate, userId);
    if (!newPost) {
      return res.status(400).json({
        error: "Error occurred",
      });
    }
    return res.status(201).json({
      message: "Data added successfully",
      data: newPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server Error",
    });
  }
});

router.put("/user/edit/:id", async (req, res) => {
  try {
    const editedPost = await updatePost(req);
    if (!editedPost) {
      return res.status(400).json({
        error: "Error occurred",
      });
    }
    return res.status(201).json({
      message: "Data edited successfully",
      data: editedPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server Error",
    });
  }
});

router.delete("/user/delete/:id", async (req, res) => {
  try {
    const deleteResponse = await deletePost(req);
    if (!deleteResponse) {
      return res.status(400).json({
        error: "Error occurred",
      });
    }
    return res.status(201).json({
      message: "Data deleted successfully",
      data: deleteResponse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server Error",
    });
  }
});

export const postsRouter = router;
