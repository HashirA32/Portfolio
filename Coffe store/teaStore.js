// Select all price elements
let prices = document.querySelectorAll(".price");
let DisplayPrice = document.querySelector(".DisplayPrice");
let NoOfItem = document.querySelector(".NoOfItem"); // Corrected selector

// Initialize an empty array to store clicked prices
let selectedPrices = [];
let items = 0;
// Function to calculate total price
function calculateTotal() {
    let totalPrice = 0;
    selectedPrices.forEach((price) => {
        totalPrice += parseFloat(price.textContent.replace("$", ""));
    });
    return totalPrice.toFixed(2); // Return total price with 2 decimal places
}

// Add click event listener to each price element
prices.forEach((price) => {
    price.addEventListener("click", () => {
        // Add clicked price to the selectedPrices array
        selectedPrices.push(price);
        // Log the current selected prices array
        console.log("Selected prices:", selectedPrices);
        items++;
        // Update the number of items selected
        NoOfItem.innerHTML = items;
    });
});

// Example: Calculate total price when a button is clicked
let calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", () => {
    // Calculate total price and log it
    console.log("Total price:", calculateTotal());
    DisplayPrice.innerHTML = calculateTotal();
});

