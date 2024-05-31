export class User {
  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.user_name = data.user_name;
    this.email = data.email;
    this.password = data.password;
    this.dob = data.dob;
    this.mark = data.mark;
    this.gender = data.gender;
    this.fee = data.fee;
  }
  id: number;
  name: string;
  user_name: string;
  email: string;
  password: string;
  dob: Date;
  mark: number;
  gender: string;
  fee: number;
}
