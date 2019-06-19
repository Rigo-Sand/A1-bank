

Requirements
        Build the REST API using Node, Express, MySQL
        Customers:
            Customers of the bank should be able to register with a username and password, and apply to open an account.
            Customers should be able to apply for joint accounts
            Once the account is open, customers should be able to withdraw, deposit, and transfer funds between accounts
            All basic validation should be done, such as trying to input negative amounts, overdrawing from accounts etc.

        Employees of the bank should be able to view all of their customers information. This includes:
            Account information
            Account balances
            Personal information
            Employees should be able to approve/deny open applications for accounts
        Bank admins should be able to view and edit all accounts, this includes:
            Approving/denying accounts
            withdrawing, depositing, transferring from all accounts
            canceling accounts
        All information should be persisted in DB
        Code Violations should be fixed.

        Create an SQL script that will create a user in an SQL database and a table schema for storing your bank users and account information.
        Your database should include at least 1 stored procedure.
        Have your bank application connect to your SQL database and store all information that way.'
        You should use the DAO design pattern for data connectivity.