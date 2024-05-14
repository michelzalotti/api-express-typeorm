import { Router } from 'express';
import { container } from 'tsyringe';
import { CreateRoleController } from '../controllers/CreateRoleController';
import { ReadRoleController } from '../controllers/ReadRoleController';
import { ListRolesController } from '../controllers/ListRolesController';
import { UpdateRoleController } from '../controllers/UpdateRoleController';

const rolesRouter = Router();
const createRoleController = container.resolve(CreateRoleController);
const readRoleController = container.resolve(ReadRoleController);
const listRolesController = container.resolve(ListRolesController);
const updateRoleController = container.resolve(UpdateRoleController);

rolesRouter.post('/', (req, res) => createRoleController.handle(req, res));
rolesRouter.get('/', (req, res) => listRolesController.handle(req, res));
rolesRouter.get('/:id', (req, res) => readRoleController.handle(req, res));
rolesRouter.patch('/:id', (req, res) => updateRoleController.handle(req, res));

export { rolesRouter };
