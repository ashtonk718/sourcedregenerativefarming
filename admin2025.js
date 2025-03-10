



  function checkPassword() {
    const password = document.getElementById("logininput").value;
    
    const encodedPassword = atob("Ymlnc2V4eTQyMA=="); 
    
    if (password === encodedPassword) {
      document.getElementById("logincontainer").style.display="none"
      document.getElementById("addfarmerscontainer").style.display="block"


      

    } else {
      alert("Incorrect password! 🚫");
    }
  }

  document.getElementById("login").addEventListener("click", checkPassword);

  document.getElementById("logininput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkPassword();
    }
  });



    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";




// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCGgevC0HE0l0-3-J5jiCD0h-VP0rdckYU",
    authDomain: "sourcedfarming.firebaseapp.com",
    projectId: "sourcedfarming",
    storageBucket: "sourcedfarming.firebasestorage.app",
    messagingSenderId: "641070314151",
    appId: "1:641070314151:web:74e24724fb5d49a7712182",
    measurementId: "G-VS79D1D966",
    databaseURL: "https://sourcedfarming-default-rtdb.firebaseio.com/"
  };
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);



  document.getElementById("addfarmer").addEventListener("click", addfarm);



   async function addfarm() {

    const farmsRef = ref(db, "publicdata/farms");
    
      try {
        const snapshot = await get(farmsRef);
        if (snapshot.exists()) {
          const farms = snapshot.val();


const date = (function() {
  const today = new Date();
  
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const year = today.getFullYear();
  
  return `${month}-${day}-${year}`;
})();




const farmid = Math.floor(10000000 + Math.random() * 90000000);
const farmname = document.getElementById("farmname").value
const firstname = document.getElementById("firstname").value
const lastname = document.getElementById("lastname").value
const email = document.getElementById("email").value
const address = document.getElementById("address").value
const phone = document.getElementById("phone").value
const website = document.getElementById("website").value
const dateadded = date

const product1 = document.getElementById("product1").value
const product2 = document.getElementById("product2").value
const product3 = document.getElementById("product3").value
const product4 = document.getElementById("product4").value
const product5 = document.getElementById("product5").value
const product6 = document.getElementById("product6").value




set(ref(db, 'publicdata/farms/' + farmid + "/"),{
  address: address,
  email: email,
  farmname: farmname,
  firstname: firstname,
  lastname: lastname,
  phone: phone, 
  website: website,
  dateadded: dateadded

  }).then(()=>{
        
    
    alert("Added");

            
            
        })
        .catch((error)=>{
        alert("did not add"+error);
        
        
        });


  if(product1 !="" ) {set(ref(db, 'publicdata/farms/' + farmid + "/products/" + product1),{prodcut1:product1}).then(()=>{alert("Added");}).catch((error)=>{alert("did not add"+error);});}
  if(product2 !="" ) {set(ref(db, 'publicdata/farms/' + farmid + "/products/" + product2),{prodcut2:product2}).then(()=>{alert("Added");}).catch((error)=>{alert("did not add"+error);});}
  if(product3 !="" ) {set(ref(db, 'publicdata/farms/' + farmid + "/products/" + product3),{prodcut3:product3}).then(()=>{alert("Added");}).catch((error)=>{alert("did not add"+error);});}
  if(product4 !="" ) {set(ref(db, 'publicdata/farms/' + farmid + "/products/" + product4),{prodcut4:product4}).then(()=>{alert("Added");}).catch((error)=>{alert("did not add"+error);});}
  if(product5 !="" ) {set(ref(db, 'publicdata/farms/' + farmid + "/products/" + product5),{prodcut5:product5}).then(()=>{alert("Added");}).catch((error)=>{alert("did not add"+error);});}
  if(product6 !="" ) {set(ref(db, 'publicdata/farms/' + farmid + "/products/" + product6),{prodcut6:product6}).then(()=>{alert("Added");}).catch((error)=>{alert("did not add"+error);});}





        } else {
          farmsContainer.innerHTML = "<p>No farms found.</p>";
        }
      } catch (error) {
        console.error("Error fetching farms:", error);
      }
    }
    



