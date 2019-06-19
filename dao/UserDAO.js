var db = require('../dbconnection')

var UserDAO = {
    /*
        Customers:
            Register with a username and password, and apply to open an account.
            Apply for joint accounts
            Withdraw, Deposit, and Transfer funds (own accounts only??)

            All basic validation: 
                trying to input negative amounts, overdrawing from accounts etc.
        Employees:
            Account information & balances                  } User joined BankAcct
            Personal information                            }
            Approve/deny open applications for accounts

        Admin:
            Approving/denying applications
            Wthdrawing, Depositing, Transferring, Canceling Accounts

    */
   /*           accounts
        id int
        userName varchar
        firstName varchar
        lastName varchar
        email varchar
        password varchar
        address varchar
        phoneNo bigint
        isemployee boolean
        isadmin boolean
   */
    /*          acctKeys
        id int
        acctId int
        acctStatus bool
    */
   /*           bankAcct
        acctId int
        acctBalance bigint 
        acctType varchar
   */
    /*          transactions
        acctId int
        transactionId int 
        transactionType varchar
        transactionAmount bigint
        transactionDest varchar
        transactionDate timestamp,
    */
    list: function(callback){
        return db.query("select * from users",callback);
    },
    /*           accounts
        id int
        userName varchar
        firstName varchar
        lastName varchar
        email varchar
        password varchar
        address varchar
        phoneNo bigint
        isemployee boolean
        isadmin boolean

                acctKeys
        id int
        acctId int
        acctStatus bool

        select * from users inner join acctKeys where userName = ? and password = ? and acctStatus = true
        later check if the acctStatus

        select users.userName, acctKeys.acctId, acctKeys.acctType, acctKeys.acctStatus  
        from users  join acctKeys where users.userId = acctKeys.userId and acctKeys.acctStatus = true;
    */
    login: function(username,password,callback){

        return db.query("select users.userName, users.password, acctKeys.acctStatus from accounts where email=? and password = ?",[username,password], callback);
    },
    login1: function(username,password,callback){

        //return db.query("select user_id,name,email from accounts where email=? and password = ?",[username,password], callback);
    },
    login2: function(username,password,callback){
        
        //return db.query("select user_id,name,email from accounts where email=? and password = ?",[username,password], callback);
    },

    /*
        insert into accounts(userName, firstName, lastName, email, password, address, phoneNo) 
        value (?,?,?,?,?,?,?)

        select account.id from accounts where account.id = ?

        Once registered make a deposit/ and then wait for approval/send back to home

        insert into bankAcct (id, acctBalance, acctType)
        values(?,?, ?)

        (Make a separate register for employees
            insert only account stuff and what they applied for)
    */
    register: function(){
        return db.query();
    },
    registerEA: function(){
        return db.query();
    },
    firstdeposit: function(){
        return db.query();
    },

    /*
        Retrieve account balance then subtract whaterver the user wants to subtract 
        But do not allow overwithdrawal

        select bankAcct.acctBalane from bankAcct where bankAcct.id = accounts.id;

        UPDATE Orders SET Quantity = Quantity - ? WHERE ...

        update bankAcct set bankAcct.acctBalance = bankAcct.acctBalance - ? where bankAcct.id = accounts.id (or ?)

    */
    withdraw: function(){
        return db.query("")
    },
    /*
        Retrieve account balance then add whaterver the user wants to add
        Dont allow negative amounts     -- could do this client side

        (retrieve using local storage)
        select bankAcct.acctBalane from bankAcct where bankAcct.id = accounts.id;

        UPDATE Orders SET Quantity = Quantity + 1 WHERE ...

        update bankAcct set bankAcct.acctBalance = bankAcct.acctBalance + ? where bankAcct.id = accounts.id (or ?)

    */
    deposit: function(){
        return db.query("")
    }

}

module.exports = UserDAO;
