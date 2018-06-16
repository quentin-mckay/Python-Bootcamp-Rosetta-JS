// ES6 "class"
class BankAccount {
    constructor(owner, balance=0) {
        this.owner = owner
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount
        return this.balance
    }

    withdraw(amount) {
        this.balance -= amount
        return this.balance
    }
}


// not using "class"
function BankAccount(owner, balance=0) {
    this.owner = owner
    this.balance = balance
}

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount
    return this.balance
}

BankAccount.prototype.withdraw = function(amount) {
    this.balance -= amount
    return this.balance
}


// === tests ===
let acct = new BankAccount("John")
console.log(acct.owner)
console.log(acct.deposit(20))
console.log(acct.withdraw(5))