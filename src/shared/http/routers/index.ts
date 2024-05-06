import { Router } from 'express';
import { rolesRouter } from '@domain/roles/routes';

const router = Router();

router.use('/roles', rolesRouter);

export { router };
