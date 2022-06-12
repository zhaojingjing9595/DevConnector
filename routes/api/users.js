import { Router } from "express";

const router = Router();

// @route   GET api/users
// @access  Public

router.get('/', (req, res) => { 
    res.send('user route')
})

export default router;