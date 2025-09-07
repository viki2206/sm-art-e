// Vegetable data
const vegetables = [
  {id:1,name:"Tomato",tamilName:"தக்காளி",image:"vegetables/tomato.jpg",price:50, isLeaf:false},
  {id:2,name:"Potato",tamilName:"உருளைக்கிழங்கு",image:"vegetables/potato.avif",price:40, isLeaf:false},
  {id:3,name:"Onion",tamilName:"வெங்காயம்",image:"vegetables/onion.webp",price:45, isLeaf:false},
  {id:4,name:"Carrot",tamilName:"கேரட்",image:"vegetables/carrot.webp",price:60, isLeaf:false},
  {id:5,name:"Cucumber",tamilName:"வெள்ளரிக்காய்",image:"vegetables/cucumber.jpeg",price:55, isLeaf:false},
  {id:6,name:"Capsicum",tamilName:"குடைமிளகாய்",image:"vegetables/capsicum.webp",price:70, isLeaf:false},
  {id:7,name:"Cabbage",tamilName:"முட்டைக்கோசு",image:"vegetables/cabbage.jpg",price:65, isLeaf:false},
  {id:8,name:"Cauliflower",tamilName:"பூசணிக்காய்",image:"vegetables/cauliflower.jpeg",price:80, isLeaf:false},
  {id:9,name:"Spinach",tamilName:"கீரை",image:"vegetables/spinach.jpeg",price:40, isLeaf:true},
  {id:10,name:"Beetroot",tamilName:"செங்கிழங்கு",image:"vegetables/beetroot.jpeg",price:60, isLeaf:false},
  {id:11,name:"Brinjal",tamilName:"கத்தரிக்காய்",image:"vegetables/brinjal.jpeg",price:55, isLeaf:false},
  {id:12,name:"Pumpkin",tamilName:"பூசணிக்காய்",image:"vegetables/pumpkin.jpg",price:90, isLeaf:false},
  {id:13,name:"Radish",tamilName:"முள்ளங்கி",image:"vegetables/radish.jpg",price:35, isLeaf:false},
  {id:14,name:"Ladyfinger",tamilName:"வெண்டைக்காய்",image:"vegetables/ladyfinger.jpg",price:50, isLeaf:false},
  {id:15,name:"Bottle Gourd",tamilName:"சுரைக்காய்",image:"vegetables/bottlegourd.jpg",price:45, isLeaf:false},
  {id:16,name:"Snake Gourd",tamilName:"புடலங்காய்",image:"vegetables/snakegourd.jpg",price:60, isLeaf:false},
  {id:17,name:"Bitter Gourd",tamilName:"பாகற்காய்",image:"vegetables/bittergourd.jpg",price:55, isLeaf:false},
  {id:18,name:"Green Chilli",tamilName:"பச்சை மிளகாய்",image:"vegetables/greenchilli.jpg",price:120, isLeaf:false},
  {id:19,name:"Garlic",tamilName:"பூண்டு",image:"vegetables/garlic.jpg",price:150, isLeaf:false},
  {id:20,name:"Ginger",tamilName:"இஞ்சி",image:"vegetables/ginger.jpg",price:90, isLeaf:false},
  {id:21,name:"Corn",tamilName:"சோளம்",image:"vegetables/corn.jpg",price:70, isLeaf:false},
  {id:22,name:"Mushroom",tamilName:"காளான்",image:"vegetables/mushroom.jpg",price:180, isLeaf:false},
  {id:23,name:"Celery",tamilName:"சிவரிக்கீரை",image:"vegetables/celery.jpg",price:80, isLeaf:true},
  {id:24,name:"Leek",tamilName:"லீக்",image:"vegetables/leek.jpg",price:100, isLeaf:false},
  {id:25,name:"Sweet Potato",tamilName:"சர்க்கரைவள்ளிக்கிழங்கு",image:"vegetables/sweetpotato.jpg",price:60, isLeaf:false},
  {id:26,name:"Zucchini",tamilName:"சீமை சுரைக்காய்",image:"vegetables/zucchini.jpg",price:65, isLeaf:false},
  {id:27,name:"Coriander Leaves",tamilName:"கொத்தமல்லி இலை",image:"vegetables/corianderleaves.jpg",price:40, isLeaf:true},
  {id:28,name:"Fenugreek Leaves",tamilName:"மேதிக்கீரை",image:"vegetables/fenugreekleaves.jpg",price:50, isLeaf:true},
  {id:29,name:"Mint Leaves",tamilName:"புதினா இலை",image:"vegetables/mintleaves.jpg",price:60, isLeaf:true},
  {id:30,name:"Spinach (Palak)",tamilName:"பாலக் கீரை",image:"vegetables/spinachpalak.jpg",price:45, isLeaf:true},
  {id:31,name:"Ridge Gourd",tamilName:"பாகற்காய்",image:"vegetables/ridgegourd.jpg",price:55, isLeaf:false},
  {id:32,name:"Tindora",tamilName:"கோவக்காய்",image:"vegetables/tindora.jpg",price:50, isLeaf:false},
  {id:33,name:"Yam",tamilName:"சேனைகிழங்கு",image:"vegetables/yam.jpg",price:65, isLeaf:false},
  {id:34,name:"Green Peas",tamilName:"பச்சை பட்டாணி",image:"vegetables/greenpeas.jpg",price:70, isLeaf:false},
  {id:35,name:"Broccoli",tamilName:"பச்சை பூக்கோசு",image:"vegetables/broccoli.jpg",price:120, isLeaf:false},
  {id:36,name:"drumstick",tamilName:"முருங்கைக்காய்",image:"vegetables/drumstick.jpg",price:90, isLeaf:false},
  {id:37,name:"chayote",tamilName:"சௌ சௌ",image:"vegetables/chayote.jpg",price:30, isLeaf:false},
  {id:38,name:"Brussels Sprouts",tamilName:"கிளைக்கோசு",image:"vegetables/brusselssprouts.jpg",price:150, isLeaf:false},
  {id:39,name:"Kale",tamilName:"சுருள்தட்டைக் கீரை",image:"vegetables/kale.jpg",price:130, isLeaf:false},
  {id:40,name:"Pearl onion",tamilName:"சின்ன வெங்காயம்",image:"vegetables/pearl onion.jpg",price:60, isLeaf:false}
];

// Get DOM elements
const container = document.getElementById("product-list");
const modal = document.getElementById("quantityModal");
const modalVegetableName = document.getElementById("modalVegetableName");
const qtyInput = document.getElementById("qtyInput");
const increaseQty = document.getElementById("increaseQty");
const decreaseQty = document.getElementById("decreaseQty");
const unitToggle = document.getElementById("unitToggle");
const addToCartBtn = document.getElementById("addToCartBtn");
const closeModal = document.getElementById("closeModal");

let currentItem = null;
let currentUnit = "g";

// Render vegetable cards
vegetables.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name} <span class="tamil-name">(${item.tamilName})</span></h3>
    <p>₹${item.price}</p>
    <button>Add to Cart</button>
  `;
  container.appendChild(card);

  const btn = card.querySelector("button");
  btn.addEventListener("click", () => {
    currentItem = item;
    modalVegetableName.innerHTML = `${item.name} (${item.tamilName})`;
    let defaultQty = item.isLeaf ? 100 : 250;
    qtyInput.value = defaultQty;
    qtyInput.min = defaultQty;
    currentUnit = "g";
    unitToggle.innerText = "g";
    modal.style.display = "flex";
  });
});

// Unit toggle
unitToggle.addEventListener("click", () => {
  let val = parseFloat(qtyInput.value);
  if (currentUnit === "g") {
    qtyInput.value = (val / 1000).toFixed(2);
    currentUnit = "kg";
    unitToggle.innerText = "kg";
    qtyInput.min = (parseInt(qtyInput.min) / 1000).toFixed(2);
  } else {
    qtyInput.value = Math.round(val * 1000);
    currentUnit = "g";
    unitToggle.innerText = "g";
    qtyInput.min = currentItem.isLeaf ? 100 : 250;
  }
});

// Increase/decrease quantity
increaseQty.addEventListener("click", () => {
  let step = currentUnit === "g" ? 50 : 0.05;
  let val = parseFloat(qtyInput.value);
  if ((currentUnit === "g" && val < 50000) || (currentUnit === "kg" && val < 50)) {
    qtyInput.value = (val + step).toFixed(currentUnit === "kg" ? 2 : 0);
  }
});
decreaseQty.addEventListener("click", () => {
  let step = currentUnit === "g" ? 50 : 0.05;
  let val = parseFloat(qtyInput.value);
  if (val > parseFloat(qtyInput.min)) {
    qtyInput.value = (val - step).toFixed(currentUnit === "kg" ? 2 : 0);
  }
});

// Add to cart
addToCartBtn.addEventListener("click", () => {
  let qty = parseFloat(qtyInput.value);
  let min = parseFloat(qtyInput.min);
  let max = currentUnit === "g" ? 50000 : 50;

  if (isNaN(qty) || qty < min || qty > max) {
    showToast(`Quantity must be between ${min}${currentUnit} and ${max}${currentUnit}`, true);
    return;
  }

  showToast(`Added ${qty}${currentUnit} of ${currentItem.name} to cart!`);
  modal.style.display = "none";
});

// Close modal
closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if(e.target === modal) modal.style.display = "none"; });

// Toast notifications
function showToast(message, isError=false) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.style.background = isError ? "#f44336" : "#4CAF50";
  toast.innerHTML = `${message} <button>&times;</button>`;
  document.body.appendChild(toast);
  toast.querySelector("button").addEventListener("click", () => toast.remove());
  setTimeout(() => { toast.remove(); }, 2000);
}
