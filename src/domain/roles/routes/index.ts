import { Router } from 'express';
import { container } from 'tsyringe';
import { CreateRoleController } from '../controllers/CreateRoleController';
import { ReadRoleController } from '../controllers/ReadRoleController';

const rolesRouter = Router();
const createRoleController = container.resolve(CreateRoleController);
const readRoleController = container.resolve(ReadRoleController);

rolesRouter.post('/', (req, res) => createRoleController.handle(req, res));
rolesRouter.get('/:id', (req, res) => readRoleController.handle(req, res));

export { rolesRouter };
