export class User {
    public firstname:string = "";
    public lastname:string = "";
    private age:Number = 0;
    static BIRTH_YEAR:Number = 2000;

    setFirstname(Firstname:string){
        this.firstname = Firstname
    }
    setLastname(Lastname:string){
        this.lastname = Lastname
    }
    setAge(Age:Number){
        this.age = Age
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }
    getAge(){
        return `${this.age}`;
    }
}