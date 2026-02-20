export class User {
    firstname:string ="";
    lastname:string = "";
    private age = 0;
    static BIRTH_YEAR = 2000;
    setAge(ages:number){
        this.age = ages;
    }
    setFirstname(FirstName:string){
        this.firstname = FirstName;
    }
    setLastname(Lastname:string){
        this.lastname = Lastname;
    }
    getAge(){
        return this.age;
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`
    }
}