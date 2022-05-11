## Calculate How much you should charge for a project

This is a project that will allow you to calculate how much you should charge for a project, according to the activities to be carried out. For this, the PERT method.

# To clone the project
```sh
git clone https://github.com/violeta-maldonado/pert.git
```
# To see the page and use it
Go to the next link https://pert.vercel.app/

# About this project
The project is made in the framework next.js with Typescript, and has the following packages configured:
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [MUI5](https://mui.com/getting-started/installation/)
- [Chart js](https://www.chartjs.org/docs/latest/api/)

In web you can perform the following actions.
- Add the activities you do and three durations for this, Optimistic duration, Most likely duration, Pessimistic duration.
- Delete an activity
- Add the name project and cost per hour
- Import an Excel with the activities
- Expost an Excel
 
 Once the activities have been entered, it will perform the calculation and display a table with the duration of the project in three percentages: 68%, 95% and 97%. Also, shows a graph with the duration.
 
[<img src="public/pagePert.JPG" width="600"/>](public/pagePert.JPG)
[<img src="public/pagePert2.JPG" width="600"/>](public/pagePert2.JPG)

# Pert method
Program Evaluation and Review Technique (PERT) is a method used to examine the tasks in a schedule and determine a Critical Path Method variation (CPM). It analyzes the time required to complete each task and its associated dependencies to determine the minimum time to complete a project. This helps in the creation of more realistic schedules and cost estimates.

For this analysis: 
Step 1: Determine optimistic, pessimistic, and most likely estimates duration for each activity
Step 2: Calculate PERT Estimate using the PERT Formula

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- This project is licensed under the terms of the **[MIT license](LICENSE)**
