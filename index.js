const farms = [
    { name: "Prairie Farms", zip: 68106, address: "123 Farm Rd, Omaha, NE", phone: "(402) 123-4567", products: ["beef", "pork", "chicken"] },
    { name: "Sunrise Organics", zip: 68116, address: "456 Greenway Dr, Omaha, NE", phone: "(402) 234-5678", products: ["carrots", "tomatoes", "potatoes"] },
    { name: "Green Haven Farms", zip: 68102, address: "789 Harvest Ln, Omaha, NE", phone: "(402) 345-6789", products: ["apples", "blueberries", "carrots"] }
  ];
  
  function calculateDistance(zip1, zip2) {
    return Math.abs(zip1 - zip2);
  }
  
  document.getElementById("quizForm").onsubmit = function(e) {
    e.preventDefault();
    const userZip = parseInt(document.getElementById("zip").value);
    const selectedProducts = Array.from(document.querySelectorAll("input[name='products']:checked")).map(input => input.value);
    const results = document.getElementById("results");
    results.innerHTML = "";
  
    const matchingFarms = farms.filter(farm =>
      selectedProducts.some(product => farm.products.includes(product))
    ).sort((a, b) => calculateDistance(userZip, a.zip) - calculateDistance(userZip, b.zip));
  
    if (matchingFarms.length === 0) {
      results.innerHTML = "<p>No farms found matching your request.</p>";
      return;
    }
  
    matchingFarms.forEach(farm => {
      results.innerHTML += `<div class="farm-result">
        <h3>${farm.name}</h3>
        <p><strong>Distance:</strong> ${calculateDistance(userZip, farm.zip)} miles away</p>
        <p><strong>Address:</strong> ${farm.address}</p>
        <p><strong>Phone:</strong> ${farm.phone}</p>
        <p><strong>Products:</strong> ${farm.products.join(", ")}</p>
      </div>`;
    });
  };