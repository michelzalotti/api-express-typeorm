import { Router } from 'express';
import { container } from 'tsyringe';
import { CreateRoleController } from '../controllers/CreateRoleController';

const rolesRouter = Router();
const createRoleController = container.resolve(CreateRoleController);

rolesRouter.post('/', (req, res) => createRoleController.handle(req, res));

export { rolesRouter };
