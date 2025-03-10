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
  
  // Function to Fetch and Display Farms
  async function loadFarms() {
    const farmsContainer = document.getElementById("farmingoutput");
    const farmsRef = ref(db, "publicdata/farms");
  
    try {
      const snapshot = await get(farmsRef);
      if (snapshot.exists()) {
        const farms = snapshot.val();
        farmsContainer.innerHTML = ""; // Clear existing content
        Object.keys(farms).forEach((key) => {
          const farm = farms[key];
          const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(farm.address)}`;
  
          const visualweb = farm.website.replace("https://", "");

          farmsContainer.innerHTML += `
            <div class="farm-card">
              <h2>${farm.farmname}</h2>
              <p><strong>Address:</strong> <a href="${googleMapsLink}" target="_blank">${farm.address}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${farm.phone}">${farm.phone}</a></p>
              <p><strong>Website:</strong> <a href="${farm.website}" target="_blank">${visualweb}</a></p>
<p><strong>Produce:</strong> ${farm.products ? Object.keys(farm.products).join(", ") : "None"}</p>

            </div>
          `;
        });
      } else {
        farmsContainer.innerHTML = "<p>No farms found.</p>";
      }
    } catch (error) {
      console.error("Error fetching farms:", error);
    }
  }
  
  
  // Load farms on page load
  document.addEventListener("DOMContentLoaded", loadFarms);
  






