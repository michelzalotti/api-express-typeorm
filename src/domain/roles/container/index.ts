import { container } from 'tsyringe';
import { IRoleRepository } from '../repository/IRoleRepository';
import { RoleRepository } from '../repository/RoleRepository';
import { CreateRoleController } from '../controllers/CreateRoleController';
import { ReadRoleController } from '../controllers/ReadRoleController';
import { ListRolesController } from '../controllers/ListRolesController';
import { UpdateRoleController } from '../controllers/UpdateRoleController';

container.registerSingleton<IRoleRepository>('RoleRepository', RoleRepository);

//controllers
container.registerSingleton('CreateRoleController', CreateRoleController);
container.registerSingleton('ReadRoleController', ReadRoleController);
container.registerSingleton('ListRolesController', ListRolesController);
container.registerSingleton('UpdateRoleController', UpdateRoleController);
