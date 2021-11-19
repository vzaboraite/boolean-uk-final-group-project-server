#domain model

<!-- //the user will be able to see all users projects -->
<!-- the user can search for projects by user name-->
<!-- the user can create an account -->
<!-- the user can see the list of their own projects -->

| methods             | inputs           | outputs       |
| ------------------- | ---------------- | ------------- |
| getAllProjects()    |                  | projects[]    |
| searchByUserName    | userName(string) | projects[]    |
| createAccount       | userDetails{}    | userAccount{} |
| getProjectsByUserId | userId(number)   | projects[]    |
