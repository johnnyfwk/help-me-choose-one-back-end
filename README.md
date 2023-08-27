# HelpMeChooseOne.com - Backend

HelpMeChooseOne.co.uk is a full-stack app where users can help each other make choices through a voting system.

The app was built using PostgreSQL, Express, React, and Node.js.

Live URL: https://helpmechooseone.com/

The back end (Github: https://github.com/johnnyfwk/help-me-choose-one-back-end) is an Express API that supplies the front end (Github: https://github.com/johnnyfwk/help-me-choose-one-front-end) with users, posts, comments, and reports stored in PostgreSQL hosted by Render.com.

To clone this repo:
- go to https://github.com/johnnyfwk/help-me-choose-one-back-end;
- near the top of the page, click on the 'Code' button;
- in the 'Local' tab, copy the HTTPS URL (https://github.com/johnnyfwk/help-me-choose-one-back-end.git);
- in Terminal, access the folder you want to hold the repo;
- type 'git clone https://github.com/johnnyfwk/help-me-choose-one-back-end.git' in the terminal (a repo named 'help-me-choose-one-back-end' will be created in the current folder);
- in Terminal, type 'cd help-me-choose-one-back-end' to go into that folder.
- This project uses packages that need to be installed in order for it to be run. To do this:

In Terminal, ensure you are in the 'help-me-choose-one-back-end' folder;
- type 'npm install'.

To connect to the development database and run the project, a development environment variable must be created:
- at repo root level, create a .env file named '.env.development';
- In this file, type in 'PGDATABASE=help_me_choose_one'.

If the database already exists and you want to drop it:
- in Terminal, type 'npm run dev-drop-database';

To create the database:
- in Terminal, type 'npm run dev-create-database'.

To create and seed all tables:
- in Terminal, type 'npm run dev-drop-create-and-seed-all-tables'.

To run the project:
- in Terminal, type 'npm run dev' to start listening to API requests.

View the JSON data at the various endpoints:
- Users - http://localhost:9090/bE2uT8XzAqG1yJ6fNvL3/users
- Posts - http://localhost:9090/bE2uT8XzAqG1yJ6fNvL3/posts
- Comments - http://localhost:9090/bE2uT8XzAqG1yJ6fNvL3/comments
- Reports - http://localhost:9090/bE2uT8XzAqG1yJ6fNvL3/reports
