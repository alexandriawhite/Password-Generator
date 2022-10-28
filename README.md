# Password-Generator
## Table of Contents:

* Description 
* User Story
* Acceptance Criteria
* Screenshot
* License
* Links
* Notes

## Description
In challenge 3 we learned how to modify starter code to create an application that enables employees to generate random passwords based on criteria selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code. 

### User Story 
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

### Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```


# Screenshot  
![Input number](./Assets/JS%20enter%20number.PNG)
![Generated password](./Assets/JS%20generated%20password.PNG)

# License

* MIT License

# Links
* URL of GitHub Repository: https://github.com/alexandriawhite/Password-Generator
* URL of deployed application: https://alexandriawhite.github.io/Password-Generator/Develop/index.html

# 📝 Notes
* parseInt takes any string and tries to turn it into a number value
* Best practice is to remove console.log from JS code 
* window.confirm displays a dialog with a message that the user either confirms or cancels
* While true creates a loop that executes a specified statement as long as the test condition evaluates to true
