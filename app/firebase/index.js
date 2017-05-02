var firebase = require('firebase');


// Initialize Firebase
try {
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID

  };
  firebase.initializeApp(config);
} catch(e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();

// ADDING DATA TO DATABASE
export var firebaseRef = firebase.database().ref();
export default firebase;
// firebaseRef.set({
//   appName: 'Fuck',
  // isRunning: true,
  // user: {
  //   name: 'Andrew',
  //   age: 28
  // }
// })

// firebaseRef.set({
//     app: {
//       name: 'Andrew',
//       version: '1.00'
//     },
//     isRunning: true,
//     user: {
//       name: 'Andrew',
//       age: 28
//     },
// }).then(() => {
//   console.log('Set Worked');
// }, (e) => {
//   console.log(e)
// })





// set will completely wipe the first one and replace it with this
//
// firebaseRef.set({
//   appName: 'Fuck ka'
// })
// UPDATING DATA TO DATABASE
// firebaseRef.child('app').set({
//   name: 'Plue'
// })
//
// DELETING DATA FROM DATABASE
// firebaseRef.remove();
//
// firebaseRef.child('app/name').remove();
//
// firebaseRef.child('app').update({
//   version: '3.0',
//   name: null
// })
//
// FETCHING ALL DATA FROM DATABASE
// firebaseRef.once('value').then((snapshot)=> {
//   console.log('Got entire database', snapshot.val())
// }, (e) => {
//   console.log('Unable fetch value', e);
// })
//
// FETCHING A CHILD DATA FROM DATABASE
// firebaseRef.child('app').once('value').then((snapshot)=> {
//   console.log('Got entire database', snapshot.val(), snapshot.key)
// }, (e) => {
//   console.log('Unable fetch values', e);
// })
// FETCHING DATA CONTINOUSLY USE THE ON
// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('Got value', snapshot.val())
// })
// TO OFF THE ON USE OFF
// firebaseRef.child('user').off();

// BECAUSE YOU USE OFF THIS WILL NOT RUN
// firebaseRef.child('user').update({name: "damn"})

// WORKING WITH ARRAYS
// Add the child
// var notesRef = firebaseRef.child('notes');
//
// var newNoteRef = notesRef.push();
// newNoteRef.set({
//   text: 'Fuck you ka'
// })
//
// // Shortcut way to add arrays
// var sampleRef = firebaseRef.child('samp');
// var newSampleRef = sampleRef.push({
//   text: 'fucker'
// })
//
// // Listen for added new items use child_added
// notesRef.on('child_added', (snapshot) => {
//   console.log('Child Added Note', snapshot.key, snapshot.val())
// });
// // Listen for change items use child_change
// notesRef.on('child_changed', (snapshot) => {
//   console.log('Child Changed Note', snapshot.key, snapshot.val())
// });
// // Listen for remove items use child_removed
// notesRef.on('child_removed', (snapshot) => {
//   console.log('Child Removed Note', snapshot.key, snapshot.val())
// });
