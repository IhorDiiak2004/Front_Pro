
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Недостатньо коштів!");
            return;
        }
        this.balance -= amount;
    }
}

const account1 = new BankAccount(1300);

console.log(account1.getBalance()); 
account1.deposit(600);
console.log(account1.getBalance()); 
account1.withdraw(300);
console.log(account1.getBalance()); 
