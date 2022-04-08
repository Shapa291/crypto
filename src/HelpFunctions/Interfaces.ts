export interface IEqualPasswords {
  (password: string,email: string, confirmPassword?: string, ): boolean;
}
