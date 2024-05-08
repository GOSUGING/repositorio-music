import { Router } from "express";
import { repertorioController } from "../controllers/repertorio.controller.js";



const router = Router()


//Path

router.get('/', repertorioController.getCanciones)
router.post('/', repertorioController.insertCancion)
router.put('/:id', repertorioController.updateCancion)
router.delete('/:id', repertorioController.deleteCancion)
export default router;