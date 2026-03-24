import { Payable } from "./payable";
import { PaymentMethod } from "./payment-method";

export class CreditCard extends PaymentMethod implements Payable {
    private cardNumber:number;

constructor(accountName:string,cardNumber:number){
    super(accountName);
    this.cardNumber = cardNumber;
}
public processPayment(amount: number):boolean{
    console.log(`Cutting e-wallet balance: ${amount} Baht`);
    return true;
}
public getPaymentFee(amount: number):number{
    return amount * 0.2;
}
}
