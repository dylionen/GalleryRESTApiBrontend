export interface Users {
  id: Number;
  userName: String;
  active: Boolean;
  firstName: String;
  lastName: String;
  mailAddress: String;
  createdDate: Date;
  roles: Role[];
}
export interface Role {
  id: Number;
  roleName: String;
  description: String;
}
