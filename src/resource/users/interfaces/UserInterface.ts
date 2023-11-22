interface UserInterface {
  id: string;
  fullName: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

interface UserLoginInterface {
  email: string;
  password: string;
}
export { UserInterface, UserLoginInterface };
