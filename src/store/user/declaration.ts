export type UserType = {
  firstName: string;
  lastName: string;
  id: number;
  photo?: string;
  email: string;
};

export type UserInitialState = {
  user: UserType | null;
};