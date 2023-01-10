(() => {
  // No aplicando el principio de responsabilidad unica

  type Gender = "M" | "F";

  class Person {
    // public name: string;
    // public gender: Gender;
    // public birthdate: Date;

    // constructor(name: string, gender: Gender, birthdate: Date) {
    //   this.name = name;
    //   this.gender = gender;
    //   this.birthdate = birthdate;
    // }

    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const newPerson = new Person("Luis", "M", new Date("1980-07-02 10:00:00"));
  console.log({ newPerson });

  const newUserSettings = new UserSettings(
    "/usr/home",
    "/home",
    "luisrangelc@gmail.com",
    "admin",
    "Luis Rangel",
    "M",
    new Date("1980-07-02 10:00:00")
  );

  console.log({ newUserSettings });
})();
