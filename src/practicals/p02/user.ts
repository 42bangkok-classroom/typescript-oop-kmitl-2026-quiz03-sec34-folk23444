export class User {
    setFirstname: String = ""
    setLastname: String = ""

    private age: number = 0

    static BIRTH_YEAR: number = 2000

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
