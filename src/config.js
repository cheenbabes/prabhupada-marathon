/**
 * NOTE: This file is ignored from git tracking. In a CI environment it is
 * generated by firebase-ci based on config in .firebaserc (see .gitlab-ci.yaml).
 * This is done so that environment specific settings can be applied.
 */

export const env = 'local'

// Config for firebase
export const firebase = {
  apiKey: 'AIzaSyAkm7TiZ3UZeybf6nFYIzRrkVcpaChVM8Y',
  authDomain: 'react-app-3bb2d.firebaseapp.com',
  databaseURL: 'https://react-app-3bb2d.firebaseio.com',
  projectId: "react-app-3bb2d",
  storageBucket: 'react-app-3bb2d.appspot.com',
  messagingSenderId: '1019607135675'
}

// Config to override default reduxFirebase config in store/createStore
// which is not environment specific.
// For more details, visit http://react-redux-firebase.com/docs/api/enhancer.html
export const reduxFirebase = {
  enableLogging: false, // enable/disable Firebase Database Logging
}

export const analyticsTrackingId = ''

export const publicVapidKey = 'BJop_6-bqT4SJIBzbQ1gPSIqVVfgZ2j77OMU82Dfl3ujtItCD43fyR71T2tyRhK5Zvq1DpUSOLWte35jZhQ7mJw'

export default {
  env,
  firebase,
  reduxFirebase,
  publicVapidKey,
  analyticsTrackingId
}
