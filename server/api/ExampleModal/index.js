// here we will configure the ExampleModel's router
import { AsyncRouter } from 'express-async-router';
import { getExampleModal } from './ExampleModal.controller';

const router = AsyncRouter();

router.get('/', getExampleModal);

export default router;
