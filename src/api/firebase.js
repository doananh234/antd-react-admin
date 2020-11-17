import * as firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

let messaging = null;

export const initFirebase = () => {
  try {
    firebase.initializeApp(firebaseConfig);
    messaging = firebase.messaging();
    messaging.usePublicVapidKey(
      process.env.REACT_APP_FIREBASE_PUBLIC_MESSAGING_KEY,
    );

    // navigator.serviceWorker
    //   .register('/firebase-messaging-sw.js')
    //   .then(registration => {
    //     firebase.messaging().useServiceWorker(registration);
    //   });
  } catch (error) {
    console.log(error);
  }
};

try {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // ...
    } else {
      console.log('Unable to get permission to notify.');
    }
  });
} catch (error) {
  if (error instanceof TypeError) {
    Notification.requestPermission(permission => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve an Instance ID token for use with FCM.
        // ...
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }
}

export const handleFirebaseMessage = callback => {
  try {
    messaging.onMessage(payload => {
      callback(payload);
    });
  } catch (error) {
    callback({ actionType: 'error' });
  }
};
