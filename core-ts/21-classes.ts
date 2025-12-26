interface IUser {
  getFullName(): string;
}

class User implements IUser {
  private readonly firstName: string;
  private readonly lastName: string;
  static readonly maxAge: number = 50;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Admin extends User {
  private readonly isAdmin: boolean;

  constructor(firstName: string, lastName: string, isAdmin: boolean) {
    super(firstName, lastName);
    this.isAdmin = isAdmin;
  }

  getAdminStatus(): boolean {
    return this.isAdmin;
  }
}

const user1 = new User("Mario", "Lazzari");
console.log(user1.getFullName()); // Mario Lazzari
console.log(User.maxAge); // 50

const admin1 = new Admin("Luigi", "Verdi", true);
console.log(admin1.getFullName());
console.log(admin1.getAdminStatus());
console.log(Admin.maxAge);
