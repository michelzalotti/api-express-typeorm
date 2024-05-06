import { container } from 'tsyringe';
import { IRoleRepository } from '../repository/IRoleRepository';
import { RoleRepository } from '../repository/RoleRepository';

container.registerSingleton<IRoleRepository>('RoleRepository', RoleRepository);
