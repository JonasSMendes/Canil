import { Router } from "express";
import { home, dog, cat, fish } from "../controllers/pageControler";
import { search } from "../controllers/searchControler";

const router = Router()

router.get('/', home);
router.get('/dog', dog);
router.get('/cat', cat);
router.get('/fish', fish);

router.get('/search', search);


export default router