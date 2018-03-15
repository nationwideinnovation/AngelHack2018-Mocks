import { BankAccount } from './src/bankAccount';
import { BankAccountTransaction } from './src/bankAccountTransaction';
import { BankLoan, LoanTypes } from './src/bankLoan';
import { Customer } from './src/customer';
import { GenerateTransactions } from './src/generateTransactions';
import * as fs from 'fs';


const generateTransactions = new GenerateTransactions;
const NUM_OF_CUSTOMERS_TO_GENERATE = 10;

const customers: Array<Customer> = [];
const bankAccounts: Array<BankAccount> = [];
const bankAccountTransactions: Array<BankAccountTransaction> = [];
const bankLoans: Array<BankLoan> = [];

const hasOneBank = () => {
    return Math.round(Math.random() + 0.25)
}

const hasOneLoan = () => {
    return Math.abs(Math.round(Math.random() - 0.25))
}

for (let i = 1; i <= NUM_OF_CUSTOMERS_TO_GENERATE; i++) {
    customers.push(new Customer(i, i));
}
customers.forEach((customer: Customer, index: number) => {
    if (hasOneBank()) { bankAccounts.push(new BankAccount(bankAccounts.length, customer.id, 'Savings')); }
    if (hasOneBank()) { bankAccounts.push(new BankAccount(bankAccounts.length, customer.id, 'Checking')); }
    if (hasOneLoan()) { bankLoans.push(new BankLoan(bankLoans.length, LoanTypes["30 Year Fixed Mortgage"], customer.id)) }
    if (hasOneLoan()) { bankLoans.push(new BankLoan(bankLoans.length, LoanTypes["5 Year Auto Loan"], customer.id)) }
})

const customerLoans = []

bankLoans.forEach((bankLoan: BankLoan) => {
    if(!customerLoans[bankLoan.customerId]) {customerLoans[bankLoan.customerId] = []}
    customerLoans[bankLoan.customerId].push(bankLoan);
})

bankAccounts.forEach((bankAccount: BankAccount) => {
    if (bankAccount.type === 'Checking'){
        const loans: Array<BankLoan> = customerLoans[bankAccount.customerId]
        const transactions: Array<BankAccountTransaction> = generateTransactions.generate(bankAccount, loans);
        bankAccountTransactions.push.apply(bankAccountTransactions, transactions);
    }
})

const jsonToWrite = {
    customers: customers,
    bankAccounts: bankAccounts,
    bankLoans: bankLoans,
    bankAccountTransactions: bankAccountTransactions
}

fs.writeFileSync('demo.json', JSON.stringify(jsonToWrite));