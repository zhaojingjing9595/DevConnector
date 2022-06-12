import { Router } from "express";

const router = Router();

// @route   GET api/auth
// @access  Public

router.get("/", (req, res) => {
  res.send("auth route");
});

export default router;
