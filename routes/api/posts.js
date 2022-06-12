import { Router } from "express";

const router = Router();

// @route   GET api/posts
// @access  Public

router.get("/", (req, res) => {
  res.send("posts route");
});

export default router;
