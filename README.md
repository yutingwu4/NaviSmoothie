# Smoothie Recipes Collection

## Summary

Webapp where smoothie enthusiasts can create and manage their own unique smoothie recipes!

This exercise achieves the following objectives:
- Users can create new smoothie cards with unique smoothie names
- Users can enter ingredients, instructions, and other notes on each smoothie card
- Users can delete a smoothie card
- Users can edit/update existing info on a smoothie card
- Users can return to their smoothies in a new browser session with Window.localStorage
- Users can search smoothies by name


## Getting Started

1) In the project directory, run in terminal:

### `npm start`

Runs the app in the development mode.\

2) Open [http://localhost:3000](http://localhost:3000) to view it in the browser OR --

3) Go to [https://yutingwu4.github.io/NaviSmoothie/] and play with it!

4) **_Navi welcomes you to a NEW YOU!_**

![homePage](https://user-images.githubusercontent.com/74384669/117894219-b6ed0500-b270-11eb-9257-8ab5196605b6.PNG)

The homepage consists of a navbar, a welcome slogan, a search bar, and a few starter smoothie recipes for the new smoothie enthusiast!  The "View All" links users back to the homepage at any time.  You can create new smoothie cards and record your favorite smoothie recipes by clicking on "Create New."  Once created, smoothie cards populate the homepage in square tiles by smoothie names with latest additions at the end of the pool.  

![createNewPage](https://user-images.githubusercontent.com/74384669/117894346-03d0db80-b271-11eb-87d6-aa77d6e65aa8.PNG)


5) Upon clicking on the smoothie cards, a window pops up displaying the smoothie name, ingredients, instructions, and notes, where users can make and save changes or delete the card altogether.  But remember!  As much as we would like to use fave names, we can only have unique names for our smoothie recipes collection!   

![uniqueName](https://user-images.githubusercontent.com/74384669/117895725-d6d1f800-b273-11eb-8387-eb447c124abb.PNG)

The search bar allows you to get to your smoothie cards without scrolling down the page - a few keystrokes with a click on the "Search" button can bring up relative matches based on the input characters.  You can then select the desirable smoothie card to recall the recipe.  What was that smoothie you made last week?  Found a new fave recipe you want to keep?  No worries!  Create a new smoothie card and it will stay even after you refresh the page!

![searchBar](https://user-images.githubusercontent.com/74384669/117895863-231d3800-b274-11eb-9f28-7bc520880d46.PNG)

Whoops!  Are you searching for a smoothie that has not been recorded?  We have friendly reminders, too. :)

![noSearch](https://user-images.githubusercontent.com/74384669/117896060-97f07200-b274-11eb-915e-61946d06c3b2.PNG)

Dear smoothie enthusiast, we hope you enjoy this tool.


## Tech Stack

1) React, React Hooks, React Router
2) Sass
3) Bootstrap


## Design Considerations

- styling consistency/assign variables - preferrable way to organize color palettes
- React - single page application, deterministic view rendering
- hooks - scope (compartmentalize state/reusability, able to interact with component lifecycle without classes, keep business logic in relatively close proximity, reduce prop drill pattern, no asynch i/o, state localized to a single component; not as strong distinction between container and display components
- useLocalStorage hooks function - allows users to save or update current state on browser
- Unit tests


## Future Implementations

- Styling to account for long smoothie names, spacing of buttons on edit form, the display grid for smoothie cards
- Website mostly complies to WCAG contrast ratios, but would like to account for other web accessibility standards more thoroughly
- Fix searching mode to allow users to edit or delete smoothie card.  State of modified data in input fields remain only in edit mode; the view does not get updated.
- Delete functionality possibly has overlapping code; needs to be refactored.

