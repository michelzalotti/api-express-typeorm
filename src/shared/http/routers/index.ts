import { Router } from 'express';
import { rolesRouter } from '@domain/roles/routes';
import { usersRouter } from '@domain/users/routes';
import { authRouter } from '@domain/auth/routes';

const router = Router();

router.use('/auth', authRouter);
router.use('/roles', rolesRouter);
router.use('/users', usersRouter);

export { router };
