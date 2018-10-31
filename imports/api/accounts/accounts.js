import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

//method to create our admin account
Meteor.methods({
  'accounts.login' ({ password }) {
    console.log(password);
    Accounts.loginWithPassword({
      username: "admin",
      password: password,
    });
  },
});




