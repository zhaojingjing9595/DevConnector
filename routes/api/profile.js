import { Router } from "express";

const router = Router();

// @route   GET api/profile
// @access  Public

router.get("/", (req, res) => {
  res.send("profile route");
});

export default router;
