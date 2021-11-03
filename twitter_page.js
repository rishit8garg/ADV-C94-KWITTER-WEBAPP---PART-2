const firebaseConfig = {
    apiKey: "AIzaSyBhKGyM8aGvKwoR5CjAp25Vf91ilbVv8K0",
    authDomain: "kwitter-859e2.firebaseapp.com",
    databaseURL: "https://kwitter-859e2-default-rtdb.firebaseio.com",
    projectId: "kwitter-859e2",
    storageBucket: "kwitter-859e2.appspot.com",
    messagingSenderId: "188281164765",
    appId: "1:188281164765:web:658d52f36aeed7c52e1c34",
    measurementId: "G-THFYD9ZL0N"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  user_name = localStorage.getItem("room_name");

  function send()
  {
      msg = document.getElementById("msg").value;
      firebaseConfig.databaseURL().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").Value = "";
  }
  