class UserAccount{
    name;
    surname;
    incomes = new Map();
    expenses= new Map();
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
        window.localStorage.setItem('name', name);
        window.localStorage.setItem('surname', surname);
        console.log(window.localStorage.getItem('name'));
        console.log(window.localStorage.getItem('surname'));
    }
    countIncomes(){
        let result = 0;
        this.incomes.forEach(el => result += el);
        console.log("Przychody = ", result);
        const json = JSON.stringify(Object.fromEntries(this.incomes));
        window.localStorage.setItem('incomes', JSON.stringify(json));
        console.log(window.localStorage.getItem('incomes'));
        return result;
    };
    countExpenses(){
        let result = 0;
        this.expenses.forEach(el => result += el);
        console.log("Wydatki = ", result);
        const json = JSON.stringify(Object.fromEntries(this.expenses));
        window.localStorage.setItem('expenses', JSON.stringify(json));
        console.log(window.localStorage.getItem('expenses'));
        return result;
    };
    getAccountInfo(){
        const name = window.localStorage.getItem('name');
        const surname = window.localStorage.getItem('surname');
        console.log(`Imie wlasciciela ${name}  ${surname}`);
        return `Imie wlasciciela ${name}  ${surname}`
    };
    addExpense(value){
        this.incomes.set(new Date, value);
    };
    addIncome(value){
        this.expenses.set(new Date, value);
    };
    accountBalance(){
        const result = this.countIncomes() - this.countExpenses();
        console.log("Account Balance : ",result);
        return result;
    };

}

let account = new UserAccount("Tomasz", "Izdebski");
account.addIncome(5);
account.addExpense(15.5);
account.addIncome(5);
account.addExpense(15.5);
console.log(account);
account.countIncomes();
account.countExpenses();
account.getAccountInfo();
account.accountBalance();
