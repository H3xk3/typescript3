class User {
    public firstName: string;
    public lastName: string;
    protected email: string;
    private password: string;
  
    constructor(firstName: string, lastName: string, email: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = this.generatePassword();
    }
  
    private generatePassword(): string {
      let password = '';
      const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';
      const specials = '@#$%';
      password += letters[Math.floor(Math.random() * letters.length)];
      password += numbers[Math.floor(Math.random() * numbers.length)];
      password += specials[Math.floor(Math.random() * specials.length)];
      for (let i = 0; i < 5 + Math.floor(Math.random() * 6); i++) {
        const randomType = Math.floor(Math.random() * 3);
        if (randomType === 0) {
          password += letters[Math.floor(Math.random() * letters.length)];
        } else if (randomType === 1) {
          password += numbers[Math.floor(Math.random() * numbers.length)];
        } else {
          password += specials[Math.floor(Math.random() * specials.length)];
        }
      }
      return password;
    }
  
    public getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  
    public resetPassword(): void {
      this.password = this.generatePassword();
      console.log("Password has been reset.");
    }
  
    public showUserInfo(): void {
      console.log("Log user info:");
      console.log("Name:", this.getFullName());
      console.log("Email:", this.email);
      console.log("----------");
    }
  
    public setPassword(newPassword: string): void {
      if (this.isValidPassword(newPassword)) {
        this.password = newPassword;
        console.log("Wachtwoord succesvol ingesteld.");
      } else {
        console.log("Wachtwoord voldoet niet aan de vereisten.");
      }
    }
  
    private isValidPassword(password: string): boolean {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%])[A-Za-z\d@#$%]{8,}$/;
      return passwordRegex.test(password);
    }
  }
  
  export default User;
  