 const firebaseConfig = {
    apiKey: "AIzaSyB8aUIOcBeffD1egyYJ-RsiXWVfPUalSyQ",
    authDomain: "abh-services-d119c.firebaseapp.com",
    databaseURL: "https://abh-services-d119c-default-rtdb.firebaseio.com",
    projectId: "abh-services-d119c",
    storageBucket: "abh-services-d119c.firebasestorage.app",
    messagingSenderId: "692781764381",
    appId: "1:692781764381:web:8cade7833b4ac712771bf4"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById('contactForm').addEventListener('submit', submitForm);


  function submitForm(e){
    e.preventDefault();
    var name=getElementval('name');
    var email=getElementval('email');
    var rating=getElementval('rating');
    var message=getElementval('feedback')
    
    saveMessages(name, email, rating, message);

    //Enable Alert
    document.querySelector(".alert").style.display = "block";
    //remove the alert
    setTimeout(()=>{
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //reset the form
    document.getElementById('contactForm').reset();
  }

  const saveMessages = (name, email, rating, message) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name :name, 
        email : email,
        rating : rating,
        message : message,
    });
  };
  const getElementval = (id) => {
    return document.getElementById(id).value;
  };
  
