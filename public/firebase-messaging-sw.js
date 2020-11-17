// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
// importScripts('/__/firebase/5.5.6/firebase-app.js');
// importScripts('/__/firebase/5.5.6/firebase-messaging.js');
// importScripts('/__/firebase/init.js');
importScripts('https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.11.0/firebase-messaging.js',
);

/**
 * Here is is the code snippet to initialize Firebase Messaging in the Service
 * Worker when your app is not hosted on Firebase Hosting.

 // [START initialize_firebase_in_sw]
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here, other Firebase libraries
 // are not available in the service worker.

 // Initialize the Firebase app in the service worker by passing in the
 // messagingSenderId.
 firebase.initializeApp({
   'messagingSenderId': 'YOUR-SENDER-ID'
 });

 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 // [END initialize_firebase_in_sw]
 * */

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
firebase.initializeApp({
  apiKey: 'AIzaSyBEqQqaWHM4TktiBbG2CIGLFW6Jr24_rx8',
  authDomain: 'proxiboxpharma-staging.firebaseapp.com',
  databaseURL: 'https://proxiboxpharma-staging.firebaseio.com',
  projectId: 'proxiboxpharma-staging',
  storageBucket: 'proxiboxpharma-staging.appspot.com',
  messagingSenderId: '96694346406',
  appId: '1:96694346406:web:569702d51d636dbd10ca67',
  measurementId: 'G-G5PKWF4HV9',
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  const title = payload.data.title;
  const options = {
    body: payload.data.score,
  };
  return self.registration.showNotification(title, options);
});

// messaging.setBackgroundMessageHandler(payload => {
//   console.log(
//     '[firebase-messaging-sw.js] Received background message ',
//     payload,
//   );
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png',
//   };

//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions,
//   );
// });
// [END background_handler]
