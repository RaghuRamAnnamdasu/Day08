class Person{
    constructor(firstName,lastName,age,gender,qualification,occupation,location,phone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.qualification = qualification;
        this.occupation = occupation;
        this.location = location;
        this.phone=phone;
    };
    getPerson(){
        var result =
            `Name : ${this.firstName} ${this.lastName}
            Age : ${this.age}
            Gender : ${this.gender}
            Qualification : ${this.qualification}
            Occupation : ${this.occupation}
            Location : ${this.location}
            Phone no : ${this.phone}`
        return result;
    };
}

var person1 = new Person("Raghu","Ram",28,"Male","M.Tech","Electrical Engineer","Chennai",7382481437);
console.log(person1.getPerson());