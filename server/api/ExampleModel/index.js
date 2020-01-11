// here we will configure the ExampleModel's router
import { AsyncRouter } from 'express-async-router';
import { getExampleModel } from './ExampleModel.controller';

const router = AsyncRouter();

router.get('/', getExampleModel);

export default router;
