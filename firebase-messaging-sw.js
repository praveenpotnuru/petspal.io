importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


var config = {
    apiKey: "AIzaSyD0FxTQbbmTQMA1ibrSldyG30lNYxzftvc",
    authDomain: "petpalsweb.firebaseapp.com",
    databaseURL: "https://petpalsweb.firebaseio.com",
    projectId: "petpalsweb",
    storageBucket: "petpalsweb.appspot.com",
    messagingSenderId: "674308957467"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Hello World from SW!';
    const options = {
        body: payload.data.status
    };
    return self.registration.showNotification(title, options);
});