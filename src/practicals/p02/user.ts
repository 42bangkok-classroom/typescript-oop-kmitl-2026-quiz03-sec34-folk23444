export class User {
    public firstname:string = "";
    public lastname:string = "";
    private age:number = 0;
    static BIRTH_YEAR:number = 2000;

    setFirstname(Firstname:string){
        this.firstname = Firstname
    }
    setLastname(Lastname:string){
        this.lastname = Lastname
    }
    setAge(Age:number){
        this.age = Age
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`.trim();
    }
    getAge(){
        return this.age;
    }
}