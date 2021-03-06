# The Poughkeepsie Pushers

An Epicodus exercise utilizing Angular 2 | 2017.08.25

This website has been deployed for easy viewing: [The Poughkeepsie Pushers](https://js-poughkeepsie-pushers.firebaseapp.com/)

![homepageScreenshot](/src/assets/screenshots/homepage.png?raw=true)

<details>
<summary>View Screenshots</summary>
  <br>
  View Player Detail:  
  <img style="max-width: 350px" src="/src/assets/screenshots/player-detail.png">
  <br><br>

About Page:  
 <img style="max-width: 350px" src="/src/assets/screenshots/about.png">
<br><br>

Message Board:  
 ![message-board](/src/assets/screenshots/messageboard.png?raw=true)
<br><br>

Adding a New Message:  
 <img style="max-width: 200px" src="/src/assets/screenshots/add-message-dropdown.png">
<img style="max-width: 210px" src="/src/assets/screenshots/add-message-note.png">
<br><br>

Add New Player:  
 <img style="max-width: 250px" src="/src/assets/screenshots/add-player-button.png">  
 <br>
<img style="max-width: 400px" src="/src/assets/screenshots/add-player-form.png">
<br><br>

Edit Existing Player:  
 ![edit-player](/src/assets/screenshots/edit-player.png?raw=true)
<br>

</details>

## Description

This website is used to maintain an active roster for the intramural baseball team, The Poughkeepsie Pushers. Additionally, team members are able to communicate through the site's message board.

## Specifications

* A user can view a list of all team members
* A user can click a team member's entry to visit their profile page
* A profile page will include more details about the team member
* A user can visit an 'About' page that explains what this is all about
* A user can rest assured all data is persisted in a database.
* A user can view a message board where all the players have posted messages.
* A player can add a new message
* A player can delete an existing message
* An administrator can add new team members
* An administrator can edit existing team members
* An administrator can delete existing team members

## Prerequisites

You will need the following things properly installed on your computer.

* [Node.js](https://nodejs.org/) (with NPM).
* [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.
* An existing [Firebase](https://firebase.google.com/) account.

* Once installed, you will need to install bower globally:
* `$ npm install bower -g`

## Configuration/Dependencies

* angular-cli
* angularFire
* bower
* bootstrap

The app will use angular-cli and assets and dependencies packaged with it.

## Setup/Installation

In Terminal...  
`$ git clone js-poughkeepsie-pushers`  
`$ cd js-poughkeepsie-pushers`  
`$ npm install`  
`$ bower install`

Log in to your [Firebase](https://firebase.google.com/) account, and sign in.

* Click Get Started.
* Click Add project, and name it js-poughkeepsie-pushers.
* Click Add Firebase to your web app.
* Copy all lines starting with "apiKey" and ending with "messagingSenderId".

In Terminal...  
`touch src/app/api-keys.ts.`

On line 1 of api-keys.ts, type...  
`export var masterFirebaseConfig = { }`

Be sure to paste your copied firebase code between the curly braces. It should look something like this...

```
export var masterFirebaseConfig = {
  apiKey: "xxxx",  
  authDomain: "xxxx.firebaseapp.com",  
  databaseURL: "https://xxxx.firebaseio.com",  
  storageBucket: "xxxx.appspot.com",  
  messagingSenderId: "xxxx"  
};
```

Add the following to your .gitignore file...

```
# Firebase credentials
/src/app/api-keys.ts
```

* Go back to the database section of your new project in firebase.
* Click the three vertical dots on the right side and select "Import JSON", click BROWSE, navigate to and select the mock-players.json file in the main project directory and click import.
* Click the RULES button in your firebase database and set read and write to "true" if you want others to be able to interact with the data.

You should now be able to run `$ npm start` in terminal, and view the app at localhost:4200 in your browser.

## Known Bugs / Future Improvements

* On the admin page, if edit box is open on one player card and another edit button is clicked, the first player's edit fields should close.
* On the admin page, display some indication that they are currently in admin-mode

8.  player cards should have a back button or something that makes it intuitive/easy to get back to the player list.
9.  Debug to improve load performance.

## License

MIT License  
Copyright &copy; 2017 Max Scher
