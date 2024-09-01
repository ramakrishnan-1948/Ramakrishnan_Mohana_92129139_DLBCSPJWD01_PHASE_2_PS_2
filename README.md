**Banking Application Setup and Installation Guide**

**Project Overview**

This banking application is a full-stack web project built using React
for the frontend and Express.js for the backend, with PostgreSQL as the
database. The application allows users to view customer information,
perform transactions between accounts, and check transaction history.

Key features include:

- Customer list display

- Money transfer between accounts

- Transaction history viewing

The frontend is structured as a Single Page Application (SPA) with
components for Home, Customers, Transactions, and History. The backend
provides RESTful API endpoints for data retrieval and transaction
processing.

The project demonstrates modern web development practices, including
responsive design, state management in React, server-side data
processing, and database interactions.

**Software and Technologies Used**

1.  **Frontend**:

    - React.js: JavaScript library for building user interfaces

    - React Router: For handling navigation in the single-page
      application

    - react-dom: Renders React components in the DOM, enabling
      interaction between React and the browser\'s document object
      model.

    - react-scripts: Configures and manages build processes, development
      server, and other tools for Create React App projects.

    - JavaScript (ES6+): A programming language for frontend logic

2.  **Backend**:

    - Node.js: JavaScript runtime for server-side development

    - Express.js: Web application framework for Node.js

3.  **Database Used:**

    - PostgreSQL: Open-source relational database

4.  **Development Tools**:

    - npm (Node Package Manager): For managing project dependencies

    - Git: Version control system

    - GitHub (optional): For remote repository hosting

5.  **API**:

    - RESTful API: For communication between frontend and backend

6.  **Database Interface**:

    - node-postgres (pg): Node.js module to interface with PostgreSQL

7.  **Additional Libraries**:

    - cors: Middleware for handling Cross-Origin Resource Sharing

    - dotenv: For managing environment variables

8.  **Development Environment**:

    - Visual Studio Code (or any preferred code editor)

    - Terminal/Command Prompt

**Setup Instructions**

**Frontend Setup**

**Option 1: Using create-react-app**

1\. Open a terminal and navigate to where you want to create your
project.

2\. Run the following commands:

npx create-react-app frontend

cd frontend

npm install react-dom react-router-dom react-scripts

3\. Replace the contents of the \`src\` folder with the provided
components and files.

4\. Update \`App.js\` and other components as per the project
requirements.

After Creation Goto Step 3 of Manual Setup

**Option 2: Manual Setup**

1\. Create the directory structure:

mkdir -p banking-app/frontend/src/components

mkdir -p banking-app/frontend/src/ images

mkdir -p banking-app/frontend/public

cd banking-app/frontend

2\. Initialize the project and install dependencies:

npm init -y

npm install react react-dom react-scripts react-router-dom

3\. Create the necessary files (App.js, index.js, etc.) in the \`src\`
folder.

Navigate to the frontend directory

cd frontend

Create component files

touch src/components/Customers.js

touch src/components/Header.js

touch src/components/History.js

touch src/components/Home.js

touch src/components/Transact.js

Create main App and index files

touch src/App.js

touch src/App.css

touch src/index.js

touch src/index.css

touch src/reportWebVitals.js

4\. Create a \`public\` folder with \`index.html\` and public files

touch public/index.html

touch public/manifest.json

touch public/robots.txt

\# Create configuration files

touch .gitignore

touch README.md

**Backend Setup**

1\. Create the backend directory and navigate into it:

mkdir backend

cd backend

2\. Initialize the project and install dependencies:

npm init -y

npm install express pg cors dotenv

3\. Create the necessary files:

touch index.js db.js .env database.sql

4\. Set up your PostgreSQL database and update the \`.env\` file with
your database credentials.

Node Modules to Install

Frontend

\- react

\- react-dom

\- react-scripts

\- react-router-dom

Backend

\- express

\- pg (node-postgres)

\- cors

\- dotenv

**Additional Steps**

1\. Update \`package.json\` in both frontend and backend to include
appropriate scripts.

2\. Set up your database schema using the \`database.sql\` file.

3\. Implement the components, API routes, and database queries as per
your application logic.

4\. Test your application by running both frontend and backend servers.

**Start the Backend Server**

1.  While in the backend directory, run: node index.js

2.  You should see a message indicating the server is running, typically
    on port 5000.

**Start the Frontend**

1.  Open a new terminal window/tab.

2.  Navigate to the frontend directory: cd frontend

3.  While in the frontend directory, run: npm start

4.  This will start the development server, typically on port 3000.

5.  Your default web browser should automatically open to

**Necessary Tools Installation Guide:**

**\# 1. Installing Node.js and React.js**

1\. Visit the official Node.js website: https://nodejs.org/

2\. Download the LTS (Long Term Support) version for your operating
system.

3\. Run the installer and follow the installation wizard:

\- Accept the license agreement

\- Choose the installation location (default is usually fine)

\- Select the components to install (Node.js runtime, npm package
manager, and Add to PATH)

\- Click \"Install\"

4\. After installation, open a command prompt or terminal and verify the
installation:

node \--version

npm --version

npm install react

These commands should display the installed versions of Node.js and npm.

**\# 2. Installing PostgreSQL**

1\. Go to the PostgreSQL download page:
https://www.postgresql.org/download/

2\. Choose your operating system and click on the download link for the
installer.

3\. Run the downloaded installer:

\- Choose an installation directory

\- Select the components to install (PostgreSQL Server, pgAdmin 4,
Command Line Tools)

\- Choose a data directory

\- Enter a password for the database superuser (remember this!)

\- Select the port number (default is 5432)

\- Choose the default locale

4\. Complete the installation process.

5\. The installer might offer to launch Stack Builder; you can skip this
for now.

6\. To verify the installation, you can use pgAdmin 4 (installed with
PostgreSQL) or use the command line:

\- Open Command Prompt or Terminal

\- Type: \`psql -U postgres\`

\- Enter the password you set during installation

\- If successful, you\'ll see the PostgreSQL command line interface

**\# 3. Installing Visual Studio Code**

1\. Visit the VS Code website: https://code.visualstudio.com/

2\. Click the download button for your operating system.

3\. Run the installer:

\- For Windows: Follow the installation wizard, accepting the agreement
and choosing install location.

\- For macOS: Drag the VS Code app to your Applications folder.

\- For Linux: Follow the instructions provided for your specific
distribution.

4\. Launch VS Code after installation.

5\. Customize VS Code (optional):

\- Install extensions: Click on the Extensions icon in the left sidebar
(looks like four squares)

\- Popular extensions for this project might include:

\- ESLint (for JavaScript linting)

\- Prettier (for code formatting)

\- PostgreSQL (for database management within VS Code)

\- React snippets

**\# Additional Steps**

1\. Configure Node.js in VS Code:

\- Open VS Code

\- Open the integrated terminal (View \> Terminal)

\- Verify Node.js is accessible by typing \`node \--version\`

2\. Set up PostgreSQL for your project:

\- Create a new database for your project using pgAdmin or the command
line

\- Note down your database credentials for use in your application

3\. Install Git (if not already installed):

\- Download from https://git-scm.com/downloads

\- Install following the wizard

\- Configure your name and email in Git:

\`\`\`

git config \--global user.name \"Your Name\"

git config \--global user.email \"your.email@example.com\"

\`\`\`
