import { container } from 'tsyringe';
import { IRoleRepository } from '../repository/IRoleRepository';
import { RoleRepository } from '../repository/RoleRepository';
import { CreateRoleController } from '../controllers/CreateRoleController';
import { ReadRoleController } from '../controllers/ReadRoleController';

container.registerSingleton<IRoleRepository>('RoleRepository', RoleRepository);

//controllers
container.registerSingleton('CreateRoleController', CreateRoleController);
container.registerSingleton('ReadRoleController', ReadRoleController);
