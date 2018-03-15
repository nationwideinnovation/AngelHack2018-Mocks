import { v4 as uuid } from 'uuid';
export class BankAccountTransaction {

    amount: number
    bankAccountId: number
    creditDebitType: string
    description: string
    id: number
    referenceNumber: number
    transactionTimestamp: Date

    constructor(id: number, bankAccountId: number, debitOrCredit: string, date: Date, value: number, description: string) {
        let d = new Date(date)
        this.amount = value
        this.creditDebitType = debitOrCredit
        this.description = description
        this.id = id
        this.bankAccountId = bankAccountId
        this.referenceNumber = Math.floor(Math.random() * 1000000000)
        d.setHours(Math.floor(Math.random() * 8) + 8)
        d.setMinutes(Math.floor(Math.random() * 60))
        this.transactionTimestamp = d
    }
}