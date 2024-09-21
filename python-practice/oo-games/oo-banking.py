class BankAccount:
    def __init__(self, account_number, balance=0):
        self.account_number = account_number
        self.balance = balance
        self.transactions = []

    def deposit(self, amount):
        self.balance += amount
        self.transactions.append(f"Deposit: ${amount}")

    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient funds"
        self.balance -= amount
        self.transactions.append(f"Withdrawal: ${amount}")

    def get_balance(self):
        return self.balance

class SavingsAccount(BankAccount):
    def __init__(self, account_number, balance=0, interest_rate=0.02):
        super().__init__(account_number, balance)
        self.interest_rate = interest_rate

    def apply_interest(self):
        interest = self.balance * self.interest_rate
        self.deposit(interest)

class CheckingAccount(BankAccount):
    def __init__(self, account_number, balance=0, overdraft_limit=500):
        super().__init__(account_number, balance)
        self.overdraft_limit = overdraft_limit

    def withdraw(self, amount):
        if amount > self.balance + self.overdraft_limit:
            return "Overdraft limit exceeded"
        self.balance -= amount
        self.transactions.append(f"Withdrawal: ${amount}")

# Example usage:
savings = SavingsAccount('12345', 1000)
savings.apply_interest()  # Apply interest to the savings account
print(savings.get_balance())  # Should reflect the interest added

checking = CheckingAccount('54321', 500)
checking.withdraw(600)  # Overdraft up to $500 is allowed
print(checking.get_balance())  # Should be -100