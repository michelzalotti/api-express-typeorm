export type UpdateUserDTO = {
  name: string;
  email: string;
  password: string | undefined;
  newPassword: string | undefined;
  confirmPassword: string | undefined;
  isAdmin: boolean;
  roleId: string;
};
