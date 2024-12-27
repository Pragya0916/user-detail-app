# user-detail-app

About the User Detail APP=>

This is a simple React Native app named User Detail app with two main screens. The Home Screen which allow users to enter their email address, which is validated using a regular expression. If the email is valid, the user is navigated to ListScreen; else an alert message shows "email is invalid". The List Screen shows a list of users, each with asome skills displayed horizontally scrollable section. The list is vertically scrollable. The app uses React Navigation specificically stack navigation for transitions between the HomeScreen and ListScreen, and its layout is responsive across different screen sizes for good user experience.



Test Case of User Detail APP Below => 

1. Home Screen Page Test Case
Test Case 1.1: Enter a Valid Email and click "Submit" Button n.
Expected Result: The app should navigate from Homescreen to Listscreen.
example => validemail@gmail.com

Test Case 1.2: Enter an invalid email (without '@') and click "Submit" button.
Expected result: An alert should visible with the message "Invalid Email".
example => validemail.com

2. List Screen Page Test Case
Test Case 2.1: When User Land in List Screen display them Users List
Expected result: The app should display a list users also it should navigate on correct page.

Test Case 2.2: Scroll horizontally through any user's skills data.
Expected Result: The skills should scroll horizontally for each user when there are many data.

3. App Responsiveness
Test Case 3.1: Open and check layout of screens of the app on a small screen.
Expected result: The layout should adjust to fit the screen without overlapping any elements.



