import { BankAccount } from './bankAccount';
import { BankLoan, LoanTypes } from './bankLoan';
import { BankAccountTransaction } from './bankAccountTransaction'
// import { Customer } from './customer';

var count = 1
export class GenerateTransactions {
    generate(bankAccount: BankAccount, customerLoans: Array<BankLoan>): Array<BankAccountTransaction> {
        const bankAccountTransactions: Array<BankAccountTransaction> = [];
        let date = new Date(2017, 0, 1)
        const pay = this.calculatePay(customerLoans)
        let mortgagePayment = 0
        let autoLoanPayment = 0
        if (customerLoans) {
            const mortgages = customerLoans.filter(loan => loan.type.match('Mortgage'));
            mortgagePayment = mortgages[0] ? mortgages[0].monthlyPayment : 0;
            const autoLoans = customerLoans.filter(loan => loan.type.match('Auto'));
            autoLoanPayment = autoLoans[0] ? autoLoans[0].monthlyPayment : 0;
        }
        while (date < new Date(2017, 11, 31)) {
            if (date.getDate() == 1 || date.getDate() == 15) {
                bankAccountTransactions.push(new BankAccountTransaction(count, bankAccount.id, 'credit', date, pay, 'Paycheck'))
                count += 1;
            }
            if (date.getDate() == 1) {
                if (mortgagePayment > 0) {
                    bankAccountTransactions.push(new BankAccountTransaction(
                        count, bankAccount.id, 'debit', date, mortgagePayment, 'Mortgage Payment'))
                    count += 1;
                }
                if (autoLoanPayment > 0) {
                    bankAccountTransactions.push(new BankAccountTransaction(
                        count, bankAccount.id, 'debit', date, autoLoanPayment, 'Auto Loan Payment'))
                    count += 1;
                }
            }
            let purchases = Math.floor(Math.random() * 4 + 2)
            for (let i = 1; i <= purchases; i++) {
                let amount = Math.floor((Math.random() * 6000) + 500)
                bankAccountTransactions.push(new BankAccountTransaction(count, bankAccount.id, 'debit', date, amount, 'Debit Card Purchase At {LOCATION} From Card#: XXXXXXXXXXXXXXXX'))
                count += 1;
            }
            date.setDate(date.getDate() + 1)
        }
        return bankAccountTransactions;
    }

    calculatePay(customerLoans: Array<BankLoan>) {
        let total = 15000 * 30
        if (customerLoans) {
            customerLoans.forEach(loan => {
                total += loan.monthlyPayment
            })
        }
        return Math.round(total / 2 + 100)
    }
}