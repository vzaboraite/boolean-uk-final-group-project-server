# Laravi (group project)

Full-stack crowdfunding web app for artists.

Main aim of this group project was to build full-stack CRUD application applying agile methodologies and ceremonies(standups, retrospectives), practising team/git collaboration.

## Deployed Application

This app is deployed on Heroku, feel free to check it [here](https://laravi.herokuapp.com/).

## Project build process

Time: 2 weeks

- [Requirements](https://github.com/vzaboraite/cohort-2-final-group-project-requirements)
- [Project board](https://github.com/lanaFerrari/boolean-uk-final-group-project-client/projects/1)
- [Wireframes](https://whimsical.com/final-group-project-wireframes-NWYXXmCNV35Ws4GhqALCoB)
- [Entity diagrams](https://whimsical.com/final-group-project-user-stories-entity-diagram-RUB5E1LxW5q5gdhu9yAn2m)

## Tech stack

1. **[Client Side](https://github.com/lanaFerrari/boolean-uk-final-group-project-client) stack:**

- JavaScript | HTML | CSS
- React
- React Router v5

2. **Server side stack:**

- NodeJs | Express

3. **Database stack:**

- PostgreSQL | Prisma ORM | ElephantSQL

## Domain model

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
