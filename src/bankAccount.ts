const DEFAULT_INTEREST_RATE = 0.3

export class BankAccount {
    id: number
    customerId: number
    type: string
    balance: number
    issueDate: Date
    interestRate: number

    constructor(id: number, customerId: number, type: string){
        this.id = id
        this.customerId = customerId
        this.type = type
        this.balance = Math.round(Math.random() * 600000)
        if (type !== 'Checking'){
            this.interestRate = DEFAULT_INTEREST_RATE
        }
    }
}