import { Router } from 'express';
import { booksController } from '../controllers/booksController';

const router: Router = Router();

router.get('/', booksController.listBooks);
router.get('/add', booksController.addBook);
router.post('/add', booksController.saveBook)

export default router;

