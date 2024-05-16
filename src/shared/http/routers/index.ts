import { Router } from 'express';
import { rolesRouter } from '@domain/roles/routes';
import { usersRouter } from '@domain/users/routes';

const router = Router();

router.use('/roles', rolesRouter);
router.use('/users', usersRouter);

export { router };
