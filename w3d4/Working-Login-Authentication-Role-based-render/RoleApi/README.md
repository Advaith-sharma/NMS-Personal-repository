Couple the above codes with this setup of postgreSQL:

Create RoleAppDB Database with a Users Table and Add Sample Data:

🟩 Step 1: Open pgAdmin
Click Start menu
Search for pgAdmin
Open pgAdmin 4
It may prompt you for a master password → Enter the one you set during installation

🟩 Step 2: Create a New Database
🔹 2.1 Expand the tree:
On the left sidebar:
Click the arrow next to your PostgreSQL server (e.g., PostgreSQL 16)
You’ll see:
```
Databases
Login/Group Roles
Tablespaces
```
🔹 2.2 Create new database:
Right-click Databases → Create → Database
In the dialog:
Database name: RoleAppDB
Leave the rest as default
Click Save
✅ You’ve created a database named RoleAppDB.

🟩 Step 3: Open Query Tool
Expand RoleAppDB
Expand Schemas → public
Right-click on Tables → Query Tool
🧠 This opens a blank SQL editor.

🟩 Step 4: Paste and Run SQL Code
Copy the below SQL code entirely and paste it into the Query Tool you just opened:
```
-- Create Users table
CREATE TABLE Users (
    Id SERIAL PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(100) NOT NULL,
    Role VARCHAR(20) NOT NULL,
    Department VARCHAR(50)
);

-- Insert sample users
INSERT INTO Users (Username, Password, Role, Department)
VALUES 
('superadmin', 'pass123', 'SuperAdmin', 'Management'),
('admin1', 'admin123', 'Admin', 'Operations'),
('user1', 'user123', 'User', 'Sales');
```
Now 👉 Click the lightning bolt icon (⚡) at the top-left to execute the SQL
You should see:
```
Query returned successfully in ... ms
```

✅ Step 5: Confirm Table & Data
🔹 View Table:
In left sidebar under RoleAppDB → Schemas → public → Right-click Tables → Refresh
You will now see a new table called Users
🔹 View Data:
Right-click on Users table → View/Edit Data → All Rows
You will see:
```
Id | Username   | Password  | Role       | Department
-----------------------------------------------------
1  | superadmin | pass123   | SuperAdmin | Management
2  | admin1     | admin123  | Admin      | Operations
3  | user1      | user123   | User       | Sales
```
