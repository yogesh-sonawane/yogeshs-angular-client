class UserMaster {
    firstName : String;
    lastName : String;
    dateOfBirth : String;
    constructor(user: any) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.dateOfBirth = user.dateOfBirth;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        var name = fullName.split(' ');
        if (name.length <= 1) 
            throw new Error(`Parameter must contain at least one space. Parameter value: ${fullName}`);
        this.firstName = name.shift();
        this.lastName = name.shift();
    }

    get age() {
        var todayDate = Date.parse(new Date().toLocaleDateString());
        var dateMiliseconds = Date.parse(this.dateOfBirth.trim());
        var ageMilisecond = todayDate - dateMiliseconds;
        const value = ageMilisecond.toString().replace(/[^\d\.eE-]/g, '');
        var _age = Math.round(parseInt(value) * 3.1688738506811E-11);
        return _age;
    }
}