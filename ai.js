const recipes = {
  "chicken biriyani": {
    vegetables: [
      { name: "Onion", qty: 1, unit: "medium" },
      { name: "Tomato", qty: 0.5, unit: "medium" },
      { name: "Green Chili", qty: 1, unit: "piece" },
      { name: "Mint Leaves", qty: 5, unit: "g" }
    ],
    groceries: [
      { name: "Basmati Rice", qty: 200, unit: "g", brands: ["India Gate", "Daawat", "Kohinoor"] },
      { name: "Oil", qty: 1, unit: "tbsp", brands: ["Fortune", "Gold Winner", "Saffola"] },
      { name: "Salt", qty: 0.5, unit: "tsp" },
      { name: "Biryani Masala", qty: 1, unit: "tsp", brands: ["Everest", "Aachi", "Sakthi", "MDH"] }
    ],
    nonveg: [
      { name: "Chicken", qty: 250, unit: "g" }
    ]
  },
  "sambar": {
    vegetables: [
      { name: "Tamarind", qty: 20, unit: "g" },
      { name: "Drumstick", qty: 2, unit: "pieces" },
      { name: "Tomato", qty: 1, unit: "medium" },
      { name: "Onion", qty: 1, unit: "medium" }
    ],
    groceries: [
      { name: "Toor Dal", qty: 100, unit: "g", brands: ["Patanjali", "Aachi"] },
      { name: "Sambar Powder", qty: 1, unit: "tbsp", brands: ["Aachi", "MTR"] },
      { name: "Oil", qty: 1, unit: "tbsp", brands: ["Fortune", "Gold Winner"] },
      { name: "Salt", qty: 1, unit: "tsp" }
    ],
    nonveg: []
  },
  "rasam": {
    vegetables: [
      { name: "Tomato", qty: 2, unit: "medium" },
      { name: "Tamarind", qty: 15, unit: "g" },
      { name: "Green Chili", qty: 2, unit: "pieces" }
    ],
    groceries: [
      { name: "Toor Dal", qty: 50, unit: "g", brands: ["Patanjali", "Aachi"] },
      { name: "Rasam Powder", qty: 1, unit: "tsp", brands: ["Aachi", "MTR"] },
      { name: "Salt", qty: 1, unit: "tsp" }
    ],
    nonveg: []
  },
  "idli": {
    vegetables: [],
    groceries: [
      { name: "Rice", qty: 100, unit: "g", brands: ["Patanjali", "Daawat"] },
      { name: "Urad Dal", qty: 50, unit: "g", brands: ["Aachi", "Patanjali"] },
      { name: "Salt", qty: 0.5, unit: "tsp" }
    ],
    nonveg: []
  },
  "dosa": {
    vegetables: [
      { name: "Onion", qty: 1, unit: "medium" },
      { name: "Green Chili", qty: 1, unit: "piece" }
    ],
    groceries: [
      { name: "Rice", qty: 100, unit: "g", brands: ["Daawat", "Kohinoor"] },
      { name: "Urad Dal", qty: 50, unit: "g", brands: ["Aachi", "Patanjali"] },
      { name: "Salt", qty: 0.5, unit: "tsp" },
      { name: "Oil", qty: 1, unit: "tbsp", brands: ["Fortune", "Gold Winner"] }
    ],
    nonveg: []
  },
  "pongal": {
    vegetables: [
      { name: "Ginger", qty: 5, unit: "g" },
      { name: "Green Chili", qty: 2, unit: "pieces" }
    ],
    groceries: [
      { name: "Rice", qty: 100, unit: "g", brands: ["Daawat", "Kohinoor"] },
      { name: "Moong Dal", qty: 50, unit: "g", brands: ["Patanjali", "Aachi"] },
      { name: "Black Pepper", qty: 0.5, unit: "tsp" },
      { name: "Ghee", qty: 1, unit: "tbsp", brands: ["Amul", "Mother Dairy"] },
      { name: "Salt", qty: 0.5, unit: "tsp" }
    ],
    nonveg: []
  },
  "vadai": {
    vegetables: [
      { name: "Green Chili", qty: 2, unit: "pieces" },
      { name: "Curry Leaves", qty: 5, unit: "leaves" }
    ],
    groceries: [
      { name: "Urad Dal", qty: 100, unit: "g", brands: ["Aachi", "Patanjali"] },
      { name: "Salt", qty: 0.5, unit: "tsp" },
      { name: "Oil", qty: 2, unit: "tbsp", brands: ["Fortune", "Gold Winner"] }
    ],
    nonveg: []
  },
  "chicken 65": {
    vegetables: [
      { name: "Green Chili", qty: 2, unit: "pieces" },
      { name: "Curry Leaves", qty: 10, unit: "leaves" }
    ],
    groceries: [
      { name: "Corn Flour", qty: 2, unit: "tbsp", brands: ["Patanjali", "Aachi"] },
      { name: "Oil", qty: 2, unit: "tbsp", brands: ["Fortune", "Saffola"] },
      { name: "Salt", qty: 1, unit: "tsp" },
      { name: "Red Chili Powder", qty: 1, unit: "tsp", brands: ["Everest", "Aachi"] }
    ],
    nonveg: [
      { name: "Chicken", qty: 250, unit: "g" }
    ]
  },
  // More Tamil Nadu dishes: parotta, keema, meen curry, kuzhambu, etc.
  "meen kuzhambu": {
    vegetables: [
      { name: "Tamarind", qty: 15, unit: "g" },
      { name: "Tomato", qty: 1, unit: "medium" },
      { name: "Onion", qty: 1, unit: "medium" }
    ],
    groceries: [
      { name: "Meen Masala", qty: 1, unit: "tsp", brands: ["Aachi", "MTR"] },
      { name: "Oil", qty: 1, unit: "tbsp", brands: ["Fortune", "Saffola"] },
      { name: "Salt", qty: 1, unit: "tsp" }
    ],
    nonveg: [
      { name: "Fish", qty: 250, unit: "g" }
    ]
  }
  // You can continue adding more dishes until 50+
};
// Auto-suggestions while typing
function showSuggestions() {
  const input = document.getElementById("dish").value.toLowerCase();
  const suggestionsDiv = document.getElementById("suggestions");
  suggestionsDiv.innerHTML = "";

  if (!input) return;

  const suggestions = Object.keys(recipes).filter(d => d.includes(input));
  suggestions.forEach(s => {
    const div = document.createElement("div");
    div.textContent = s;
    div.className = "suggestion-item";
    div.onclick = () => {
      document.getElementById("dish").value = s;
      suggestionsDiv.innerHTML = "";
    };
    suggestionsDiv.appendChild(div);
  });
}

// Step 1 → Show Ingredients
function getRecipe() {
  const dish = document.getElementById("dish").value.toLowerCase();
  const members = parseInt(document.getElementById("members").value);
  const recipe = recipes[dish];

  if (!recipe) {
    document.getElementById("ai-output").innerHTML = `<p style='color:red;'>Vigo 🤖: Dish not found!</p>`;
    return;
  }

  let output = `<h2>Vigo 🤖 suggests: ${dish.toUpperCase()} for ${members} members</h2>`;

  if(recipe.vegetables.length) output += "<h4>Vegetables:</h4>" + makeList(recipe.vegetables, members);
  if(recipe.groceries.length) output += "<h4>Groceries:</h4>" + makeList(recipe.groceries, members);
  if(recipe.nonveg.length) output += "<h4>Non-Veg:</h4>" + makeList(recipe.nonveg, members);

  output += `
    <button onclick="showBrandOptions('${dish}', ${members})">Order Now</button>
    <button onclick="addToCart('${dish}', ${members})">Add to Cart</button>
  `;

  document.getElementById("ai-output").innerHTML = output;
  document.getElementById("suggestions").innerHTML = "";
}

function makeList(items, members) {
  if (!items || items.length === 0) return "";
  return `<ul>${items.map(i => `<li>${i.name}: ${i.qty * members} ${i.unit}</li>`).join("")}</ul>`;
}

// Step 2 → Show Brand Options
function showBrandOptions(dish, members) {
  const recipe = recipes[dish];
  let html = "<h2>Vigo 🤖: Choose Brands</h2>";

  recipe.groceries.forEach(i => {
    if (i.brands) {
      html += `<p>${i.name} (${i.qty * members} ${i.unit}): 
                <select id="brand-${i.name}">${i.brands.map(b => `<option>${b}</option>`).join("")}</select></p>`;
    }
  });

  html += `<button onclick="checkout('${dish}', ${members})">Proceed to Checkout</button>`;
  document.getElementById("ai-output").innerHTML = html;
}

// Step 3 → Checkout
function checkout(dish, members) {
  const recipe = recipes[dish];
  const selectedItems = {};

  recipe.groceries.forEach(i => {
    if(i.brands) {
      selectedItems[i.name] = {
        qty: i.qty * members,
        unit: i.unit,
        brand: document.getElementById(`brand-${i.name}`).value
      };
    } else {
      selectedItems[i.name] = { qty: i.qty * members, unit: i.unit };
    }
  });

  document.getElementById("ai-output").innerHTML = `<h2>✅ Vigo 🤖: Order Confirmed!</h2>
  <p>Your selected items have been added to cart:</p>
  <pre>${JSON.stringify(selectedItems, null, 2)}</pre>`;
}

// Back button
function goBack() {
  window.history.back();
}

// Add to Cart functionality
let cart = [];
function addToCart(dish, members) {
  cart.push({ dish, members });
  alert(`Vigo 🤖: ${dish} added to cart for ${members} members!`);
}
