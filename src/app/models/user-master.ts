export class UserMaster {
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  emailId: string;
  userName: string;
  userId: number;
  email: string = 'sonawaneyogeshb@gmail.com';
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(value){
    var fullName = value.trim();
    this.fullName = value;
  }
}
