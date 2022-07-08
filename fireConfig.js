const firebaseConfig = {
    apiKey: "AIzaSyBFqSZJC-46DmGK0roxc2wGW2QUeegwdIo",
    authDomain: "library-management-8511f.firebaseapp.com",
    databaseURL: "https://library-management-8511f-default-rtdb.firebaseio.com",
    projectId: "library-management-8511f",
    storageBucket: "library-management-8511f.appspot.com",
    messagingSenderId: "815727644285",
    appId: "1:815727644285:web:f244af88754302213c6b14",
    measurementId: "G-PV91CSDVB2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);