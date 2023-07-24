# help-me-choose-one-back-end

Clone the repository:
- "git clone https://github.com/johnnyfwk/help-me-choose-one-back-end.git"

Go into the folder:
- "cd help-me-choose-one-back-end"

Install all dependencies required to run the app:
- "npm install"

Create .env.development file and type the following in the file to connect to the local database:
- "PGDATABASE=help_me_choose_one"

Create a database called help_me_choose_one by typing in the terminal:
- "npm run dev-create-database"

Drop, create, and seed all tables by typing the following in the terminal:
- "npm run dev-drop-create-and-seed-all-tables"

Check tables have been created and seeded by typing the following:
- "npm run dev-check-all-tables"

If the all the above is done successfully, you should see all the tables and their contents in the file:
- database/check/all-tables.txt