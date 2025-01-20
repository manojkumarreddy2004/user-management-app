React User Management App  

Overview :  
This project is a React.js application developed using Vite that fetches and displays a list of users from an API. It features a user-friendly interface for searching, sorting, and viewing detailed user information.  

Features :  

1. Home Page  
    Fetches and displays a list of users from the API: (https://jsonplaceholder.typicode.co    m/users).  
    Displays user information:
        1. Name  
        2. Email  
        3. City  
    Includes:
        Search bar: Filter users by name.  
        Sorting options: Sort users by name (A-Z, Z-A).  
        User Click Navigation: Clicking a user navigates to their detailed view page.  

2. User Detail Page  
    Displays complete user information:
        1. Name  
        2. Email  
        3. Phone  
        4. Company Name  
        5. Website  
    Includes a Go Back button for easy navigation to the home page.  

3. Additional Features  
    3.1. State Management: Implemented using React Context API.  
    3.2. Loading & Error Handling:  Displays a loading indicator while fetching data.  
    3.3. Shows error messages if the API fails to load data.  
    3.4. Responsive Design: Optimized for mobile and desktop devices.  
    3.5. Dark/Light Mode Toggle: A switch for theme preferences.  
    3.6. Pagination: Split the user list into pages for easier navigation.  

4. Tech Stack  
    4.1. React.js: Frontend framework.  
    4.2. React Router: Navigation between pages.  
    4.3. Vite: Fast and efficient development environment.  
    4.4. CSS and Material-UI: Styling for responsiveness and theme.  

5. Prerequisites  
    - Node.js (v14 or above).  
    - npm or yarn installed on your system.  

Installation and Starting the application  : 

1. Clone the repository:  
   ```bash  
   git clone https://github.com/manojkumarreddy2004/user-management-app.git 
   cd user-management-app  
2. Install dependencies:
    ```bash
    npm install
3. Start the application:
    ```bash
    npm run dev
4. Open your browser and navigate to http://localhost:5173 to view the application.
