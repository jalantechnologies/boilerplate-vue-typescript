export type CreateAccountParam = {
  confirmPassword: string;
  username: string;
  password: string;
};

export interface LooseObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
