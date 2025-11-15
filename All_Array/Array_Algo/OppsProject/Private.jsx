class BankWorld {
  #balance;  // Private field
  #name;     // Private field

  constructor(name, balance) {
    this.#name = name;        // set private name
    this.#balance = balance;  // set private balance
  }

  // ✅ Public method to deposit money
  addMoney(amount) {
    this.#balance += amount;
    console.log(`Deposited ₹${amount}.`);
  }

  // ✅ Public method to withdraw money
  withdrawMoney(amount) {
    if (amount > this.#balance) {
      console.log("❌ Insufficient balance!");
    } else {
      this.#balance -= amount;
      console.log(`Withdrawn ₹${amount}.`);
    }
  }

  // ✅ Public method to view balance
  getBalance() {
    console.log(`💰 Current Balance: ₹${this.#balance}`);
  }

  // ✅ Public method to show account holder name
  getName() {
    console.log(`👤 Account Holder: ${this.#name}`);
  }
}

// --- Using the class ---
let account = new BankWorld("Jugal Sharma", 10000);
account.getName();      // 👤 Account Holder: Jugal Sharma
account.addMoney(5000); // Deposited ₹5000
account.withdrawMoney(3000); // Withdrawn ₹3000
account.getBalance();   // 💰 Current Balance: ₹12000
console.log(account)
// ❌ Cannot access private fields directly
// console.log(account.#balance); // ❌ SyntaxError




::::::::::::::::::::::: --------------------------->>

class BankWorld {
  #name;

  constructor(name) {
    this.#name = name;
  }

  showName() {
    console.log(`Customer name is ${this.#name}`);
  }
}

const user1 = new BankWorld('Jugal Sharma');
user1.showName();       // ✅ prints: Customer name is Jugal Sharma

console.log(user1.showName())//undenid 
// console.log(user1.#name); // ❌ Error: Private field '#name' must be declared in an enclosing class
console.log(user1.name)// Undifebend 
