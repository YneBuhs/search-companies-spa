# JavaScript Coding Exercise

## Overview

Brightwheel uses internal and third-party APIs extensively throughout our platform to process and store data, as well as manage communication to end users. The goal of the exercise will be to consume a live API and display and update the data according to the specifications given below. This exercise is meant to assess your overall frontend skillset and your design aesthetic.

## The Exercise

Build a single-page web app that uses the provided API to create a search engine landing page with the ability to “star” results.
Provide us the link to your final product as a cloneable repo on Github or Bitbucket

---

IMPORTANT STUFF BELOW

# Implementation Requirements

This will be a simple exercise, but structure and organize your code as if it were going into production. It should be fully-functioning code that can be run.
We have provided a local backend to use, and an empty React app that you may use as a starting point if you wish. If you are more comfortable using Angular/Vue/Polymer/Svelte/Web Components/etc... that is perfectly fine. We are interested in how you build and structure an application, how you put together a good user experience, and your fluency with javascript. Pick the tools you know best.

Documentation on the API and how to run it can be found in the project README.
The API provides mock data about fake Companies with endpoints for interacting with the data. Each company should be rendered to show the relevant details as outlined below.

> **If you miss any of the acceptance critera listed below, explain yourself in your README file.
> We love feedback as well!**

## Product Focused Acceptance Criteria

```
D:There should be an Input field you can type in 
D:The results should be displayed as you type 
D:Show the first 10 results below the search input 
D:Show name, description, address and starred status, as well as an image if there is one.
D: Clicking on a result should toggle the starred/unstarred state for the result and should make an API call to update the record in the database. (api call, update state)
D: There should be a counter that displays the total number of starred results in the database
D: Make sure the user knows what is happening with appropriate prompts or indicators
```

## Technical Focused Acceptance Criteria

```
- Error Handling. We expect this from engineers.
- Semantic HTML is a must have. (https://www.w3schools.com/html/html5_semantic_elements.asp)
- We expect the product to have a beautiful design. Look to the brightwheel marketing website (https://mybrightwheel.com/) for cues and ideas. We expect our developers to be able to implement designs based on sample sets, not fully designed pages.
- Modernize your CSS with a grid or even a component library. We expect more than just DIVs and CSS block alignments.
- DRY, use abstraction and encapsulation where it makes sense.

```

---

We’d prefer to see you use React-based features to manage state over a library like Redux. Use any component or style libraries you like to showcase your ability to write clean, reusable code. We want to see your approach to handling UI-state and business logic as well as your design choices and your ability to write semantic and accessible HTML.

**Try not to spend more than 2-3 hours on this exercise.**
If you have extra time, bonus points for:

- Showing a complete list of starred results when user clicks on the star count
- Component or integration tests

## How we will Review

- Functionality: Does the app meet the AC listed above?
- Code Quality: Is the code easy to read, well organized, commented, and tested?
- Technical Choices: Is the implemented technical approach appropriate for what was asked?
- Design Choices: Does the app have a cohesive look and feel?

Feel free to modify the README to provide any additional context or tell us anything that would be good to know while reviewing the challenge. If you ran out of time, or there was something you had hoped to implement, this would be a good place to tell us about that.
