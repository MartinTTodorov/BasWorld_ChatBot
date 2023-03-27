Booking NL
The project is a full stack web application built using Spring Java for the back end and React.js for the front end. The purpose of the application is to provide a platform for customers to register, find destinations, make reservations, and update their profile information. Additionally, the admin can create, update, and delete destinations. SonarQube is used for quality assurance, and both the front end and back end are tested. Spring Security is applied to ensure secure user authentication and authorization. The project also includes a CI/CD pipeline and can be containerized using Docker.

Getting Started
To get started with the project, follow the instructions below:

Prerequisites
Java Development Kit (JDK) 8 or later
Node.js and npm
Git
Docker (if you plan on containerizing the application)
Installing
Clone the repository using the following command:

git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
Install the necessary dependencies for the front end by navigating to the client directory and running the following command:

Copy code
npm install
Install the necessary dependencies for the back end by navigating to the server directory and running the following command:

./mvnw install
Running the Application
To run the application, follow the instructions below:

Start the back end server by navigating to the server directory and running the following command:

./mvnw spring-boot:run


Start the front end server by navigating to the client directory and running the following command:

npm start
Open your web browser and navigate to http://localhost:3000 to access the application.


Testing
The application has been thoroughly tested to ensure quality and reliability. Both the front end and back end have been tested using automated test suites.
To run the test suites, navigate to the client or server directory and run the following command:

npm test

CI/CD Pipeline
The project includes a CI/CD pipeline that automatically builds, tests and does QA(quality assurance by SonarQube). Deployment is not finalized but the three of them (back-end, front-end and database) can be conterized because of the docker files initialized.

Built With
Spring Java
React.js
SonarQube
Spring Security
Docker

Authors
Georgi Zhizgov
