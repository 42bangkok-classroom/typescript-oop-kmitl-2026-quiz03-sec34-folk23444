export class User {
Firstname: string = ""
Lastname: string = ""

    private age: number = 0

    static BIRTH_YEAR: number = 2000

    setFirstname(Firstname: string): void {
        this.Firstname = Firstname
    }

    setLastname(Lastname: string): void {
        this.Lastname = Lastname
    }
    
    setAge(age: number): void {
        this.age = age
    }

    getAge(): number {
        return this.age
    }

    getFullName(): string {
        return this.setFirstname + ' ' + this.setLastname
    }
}
