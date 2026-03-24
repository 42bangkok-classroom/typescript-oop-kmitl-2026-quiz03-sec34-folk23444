export class Car {
brand = "Toyota"
model = "Camry"    
    constructor(brand:string,model:string){
        this.brand = brand
        this.model = model
    }
start():void {
    console.log(`${this.brand} ${this.model} is starting...`)
}
accelerate():void{
    console.log(`${this.brand} ${this.model} is accelerating...`)
}
brake():void{
    console.log(`${this.brand} ${this.model} is braking...`)
}
stop():void{
    console.log(`${this.brand} ${this.model} is stopping...`)
}

}