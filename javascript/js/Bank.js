{ 
    class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

     deposit(amount) {
         if (amount > 0) {
             this.balance += amount;
                       return `Deposited $${amount}. New balance: ${this.balance}`;
         } 
     }

    withdraw(amount) {
         if (amount > 0) {
             if (this.balance >= amount) {
                this.balance -= amount;
                return `Withdrew $${amount}. New balance: ${this.balance}`;
            } else {
                 return "Insufficient funds";
             } 
         }
     }
 }

 const account = new BankAccount('123456', 'John Doe', 1000);
 console.log(account.deposit(500)); 
 console.log(account.withdraw(700));

}