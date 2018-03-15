export class BankLoan {
    id: number
    customerId: number
    type: LoanTypes
    borrowedAmmt: number
    interestRate: number
    currentBalance: number
    monthlyPayment: number
    issueDate: Date

    constructor(id: number, type: LoanTypes, customerId: number) {
        this.id = id;
        this.customerId = customerId;
        this.interestRate = +((Math.random() + 4).toFixed(3))
        this.issueDate = this.randomDate()
        this.type = type;
        if (type.match('Auto')) {
            this.borrowedAmmt = Math.floor((Math.random() * 2000000) + 1000000);
            this.currentBalance = Math.floor(this.borrowedAmmt - (Math.random() * 500000));
            this.monthlyPayment = Math.floor(this.borrowedAmmt / 54 + 300);// +300 for taxes
            
        }
        if (type.match('Mortgage')) {
            this.borrowedAmmt = Math.floor((Math.random() * 30000000) + 15000000);
            this.currentBalance = Math.floor(this.borrowedAmmt - Math.random() * 1000000)
            this.monthlyPayment = Math.floor(this.borrowedAmmt / 200);
        }
    }

    randomDate() {
        const start = new Date(2016, 0, 1)
        const end = new Date(2017, 11, 31)
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    string_of_enum(value) {
        for (var k in LoanTypes) if (LoanTypes[k] == value) return k;
        return null;
    }
}

export enum LoanTypes {
    '15 Year Fixed Mortgages' = '15 Year Fixed Mortgage',
    '15 Year Variable Mortgage' = '15 Year Variable Mortgage',
    '30 Year Fixed Mortgage' = '30 Year Fixed Mortgage',
    '30 Year Variable Mortgage' = '30 Year Variable Mortgage',
    '3 Year Auto Loan' = '3 Year Auto Loan',
    '4 Year Auto Loan' = '4 Year Auto Loan',
    '5 Year Auto Loan' = '5 Year Auto Loan',
    '6 Year Auto Loan' = '6 Year Auto Loan'
}