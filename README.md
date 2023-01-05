# onlineTestFrontend - A React Project

A front end website made using React libraries for a sample quiz web application.

Prerequisites:

1. Install the react. Steps for installing - https://www.geeksforgeeks.org/how-to-install-reactjs-on-windows/
2. Install any source code editor (preferbly visual studio).


Steps to host the project:

1. After installing the react, open the terminal in the project downloaded folder.
2. run "npm start" to start the local development server.
3. Start the Spring Boot server (steps can be found in onlineTestBackend readme file)
3. open the browser and go to the localhost address.
4. This loads up the Online_test website.

Website go-through guide:

1. The first page is the Login page. Use username="admin" and password="admin" credentials for validation purposes.
2. Click on "Login" button, you will be redirected to the home (welcome) page.
3. Click on "Select" to choose the available tests.
4. Click on one of the tests, you will be redirected to the respective test.
5. Now, choose the best answer to the given question and click "Next" (must select an option to enable the "Next" button to proceed to the next question)
6. Once you answer the final (here it is 3) question, you will have "Submit" button.
7. Click on "Submit" to submit the test.
8. Your score is displayed along with the "Retake the test" button.
9. You can click on it to retake the test which will land you on the Login page.
10. Repeat the steps from step1 to retake the test.
