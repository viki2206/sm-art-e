const recipes = {
  "chicken biriyani (சிக்கன் பிரியாணி)": {
    vegetables: [
      { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
      { name: "Tomato (தக்காளி)", qty: 1, unit: "medium" },
      { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" },
      { name: "Mint Leaves (புதினா இலை)", qty: 5, unit: "g" }
    ],
    groceries: [
      { name: "Basmati Rice (பாஸ்மதி அரிசி)", qty: 200, unit: "g", brands: ["India Gate","Daawat","Kohinoor"] },
      { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune","Gold Winner","Saffola"] },
      { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
      { name: "Biryani Masala (பிரியாணி மசாலா)", qty: 1, unit: "tsp", brands: ["Everest","Aachi","MDH"] }
    ],
    nonveg: [
      { name: "Chicken (சிக்கன்)", qty: 250, unit: "g" }
    ]
  },
  "mutton biriyani (மாட்டுப் பிரியாணி)": {
    vegetables: [
      { name: "Onion (வெங்காயம்)", qty: 2, unit: "medium" },
      { name: "Tomato (தக்காளி)", qty: 1, unit: "medium" },
      { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" }
    ],
    groceries: [
      { name: "Basmati Rice (பாஸ்மதி அரிசி)", qty: 250, unit: "g", brands: ["Daawat","Kohinoor"] },
      { name: "Ghee (நெய்)", qty: 2, unit: "tbsp", brands: ["Amul","Mother Dairy"] },
      { name: "Mutton Masala (மாட்டுக் மசாலா)", qty: 1, unit: "tbsp", brands: ["Everest","Aachi"] },
      { name: "Salt (உப்பு)", qty: 1, unit: "tsp" }
    ],
    nonveg: [
      { name: "Mutton (மாடு)", qty: 300, unit: "g" }
    ]
  },
  "fish curry (மீன் குழம்பு)": {
    vegetables: [
      { name: "Tamarind (புளி)", qty: 20, unit: "g" },
      { name: "Tomato (தக்காளி)", qty: 1, unit: "medium" },
      { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" }
    ],
    groceries: [
      { name: "Meen Masala (மீன் மசாலா)", qty: 1, unit: "tsp", brands: ["Aachi","MTR"] },
      { name: "Oil (எண்ணெய்)", qty: 1, unit: "tbsp", brands: ["Fortune","Saffola"] },
      { name: "Salt (உப்பு)", qty: 1, unit: "tsp" }
    ],
    nonveg: [
      { name: "Fish (மீன்)", qty: 250, unit: "g" }
    ]
  },
  "chicken 65 (சிக்கன் 65)": {
    vegetables: [
      { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" },
      { name: "Curry Leaves (கறிவேப்பிலை)", qty: 10, unit: "leaves" }
    ],
    groceries: [
      { name: "Corn Flour (மக்காசோளம் மாவு)", qty: 2, unit: "tbsp", brands: ["Patanjali","Aachi"] },
      { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune","Saffola"] },
      { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
      { name: "Red Chili Powder (சிவப்பு மிளகாய் தூள்)", qty: 1, unit: "tsp", brands: ["Everest","Aachi"] }
    ],
    nonveg: [
      { name: "Chicken (சிக்கன்)", qty: 250, unit: "g" }
    ]
  },
  "sambar (சாம்பார்)": {
    vegetables: [
      { name: "Tamarind (புளி)", qty: 20, unit: "g" },
      { name: "Drumstick (முருங்கைக்காய்)", qty: 2, unit: "pieces" },
      { name: "Tomato (தக்காளி)", qty: 1, unit: "medium" },
      { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" }
    ],
    groceries: [
      { name: "Toor Dal (துவரம்பருப்பு)", qty: 100, unit: "g", brands: ["Patanjali","Aachi"] },
      { name: "Sambar Powder (சாம்பார் தூள்)", qty: 1, unit: "tbsp", brands: ["Aachi","MTR"] },
      { name: "Oil (எண்ணெய்)", qty: 1, unit: "tbsp", brands: ["Fortune","Gold Winner"] },
      { name: "Salt (உப்பு)", qty: 1, unit: "tsp" }
    ],
    nonveg: []
  },

  "rasam (ரசம்)": {
    vegetables: [
      { name: "Tomato (தக்காளி)", qty: 2, unit: "medium" },
      { name: "Tamarind (புளி)", qty: 15, unit: "g" },
      { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" }
    ],
    groceries: [
      { name: "Toor Dal (துவரம்பருப்பு)", qty: 50, unit: "g", brands: ["Patanjali","Aachi"] },
      { name: "Rasam Powder (ரசம் தூள்)", qty: 1, unit: "tsp", brands: ["Aachi","MTR"] },
      { name: "Salt (உப்பு)", qty: 1, unit: "tsp" }
    ],
    nonveg: []
  },

  "parotta (பரோட்டா)": {
  vegetables: [],
  groceries: [
    { name: "Maida (மைதா)", qty: 200, unit: "g", brands: ["Aachi", "Patanjali"] },
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune", "Gold Winner"] },
    { name: "Salt (உப்பு)", qty: 0.5, unit: "tsp" }
  ],
  nonveg: []
},

"keema curry (கீமா குழம்பு)": {
  vegetables: [
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Tomato (தக்காளி)", qty: 1, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" }
  ],
  groceries: [
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune", "Saffola"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Red Chili Powder (சிவப்பு மிளகாய் தூள்)", qty: 1, unit: "tsp", brands: ["Everest", "Aachi"] },
    { name: "Garam Masala (கரம் மசாலா)", qty: 0.5, unit: "tsp", brands: ["Everest", "MDH"] }
  ],
  nonveg: [
    { name: "Minced Meat (மாஸ் கீமா)", qty: 250, unit: "g" }
  ]
},

"meen roast (மீன் ரோஸ்ட்)": {
  vegetables: [
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" },
    { name: "Curry Leaves (கறிவேப்பிலை)", qty: 8, unit: "leaves" }
  ],
  groceries: [
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune", "Saffola"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Red Chili Powder (சிவப்பு மிளகாய் தூள்)", qty: 1, unit: "tsp", brands: ["Everest", "Aachi"] },
    { name: "Turmeric Powder (மஞ்சள் தூள்)", qty: 0.5, unit: "tsp", brands: ["Everest", "Aachi"] }
  ],
  nonveg: [
    { name: "Fish (மீன்)", qty: 250, unit: "g" }
  ]
},

"egg curry (முட்டை குழம்பு)": {
  vegetables: [
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Tomato (தக்காளி)", qty: 1, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" }
  ],
  groceries: [
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune", "Saffola"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Red Chili Powder (சிவப்பு மிளகாய் தூள்)", qty: 1, unit: "tsp", brands: ["Everest", "Aachi"] },
    { name: "Turmeric Powder (மஞ்சள் தூள்)", qty: 0.5, unit: "tsp", brands: ["Everest", "Aachi"] }
  ],
  nonveg: [
    { name: "Boiled Eggs (உடைத்து வேக வைத்த முட்டை)", qty: 4, unit: "pieces" }
  ]
},

"chicken roast (சிக்கன் ரோஸ்ட்)": {
  vegetables: [
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" },
    { name: "Curry Leaves (கறிவேப்பிலை)", qty: 8, unit: "leaves" }
  ],
  groceries: [
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune", "Saffola"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Red Chili Powder (சிவப்பு மிளகாய் தூள்)", qty: 1, unit: "tsp", brands: ["Everest", "Aachi"] },
    { name: "Turmeric Powder (மஞ்சள் தூள்)", qty: 0.5, unit: "tsp", brands: ["Everest", "Aachi"] },
    { name: "Ginger-Garlic Paste (இஞ்சி பூண்டு விழுது)", qty: 1, unit: "tsp" }
  ],
  nonveg: [
    { name: "Chicken (சிக்கன்)", qty: 250, unit: "g" }
  ]
},

"idli (இட்லி)": {
  vegetables: [],
  groceries: [
    { name: "Rice (அரிசி)", qty: 100, unit: "g", brands: ["Patanjali", "Daawat"] },
    { name: "Urad Dal (உளுத்தம்பருப்பு)", qty: 50, unit: "g", brands: ["Aachi", "Patanjali"] },
    { name: "Salt (உப்பு)", qty: 0.5, unit: "tsp" }
  ],
  nonveg: []
},

"dosa (தோசை)": {
  vegetables: [
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 1, unit: "piece" }
  ],
  groceries: [
    { name: "Rice (அரிசி)", qty: 100, unit: "g", brands: ["Daawat", "Kohinoor"] },
    { name: "Urad Dal (உளுத்தம்பருப்பு)", qty: 50, unit: "g", brands: ["Aachi", "Patanjali"] },
    { name: "Salt (உப்பு)", qty: 0.5, unit: "tsp" },
    { name: "Oil (எண்ணெய்)", qty: 1, unit: "tbsp", brands: ["Fortune", "Gold Winner"] }
  ],
  nonveg: []
},

"pongal (பொங்கல்)": {
  vegetables: [
    { name: "Ginger (இஞ்சி)", qty: 5, unit: "g" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" }
  ],
  groceries: [
    { name: "Rice (அரிசி)", qty: 100, unit: "g", brands: ["Daawat", "Kohinoor"] },
    { name: "Moong Dal (பாசிப்பருப்பு)", qty: 50, unit: "g", brands: ["Patanjali", "Aachi"] },
    { name: "Black Pepper (மிளகு)", qty: 0.5, unit: "tsp" },
    { name: "Ghee (நெய்)", qty: 1, unit: "tbsp", brands: ["Amul", "Mother Dairy"] },
    { name: "Salt (உப்பு)", qty: 0.5, unit: "tsp" }
  ],
  nonveg: []
},

"vadai (வடை)": {
  vegetables: [
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" },
    { name: "Curry Leaves (கறிவேப்பிலை)", qty: 5, unit: "leaves" }
  ],
  groceries: [
    { name: "Urad Dal (உளுத்தம்பருப்பு)", qty: 100, unit: "g", brands: ["Aachi", "Patanjali"] },
    { name: "Salt (உப்பு)", qty: 0.5, unit: "tsp" },
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune", "Gold Winner"] }
  ],
  nonveg: []
},

"masala dosa (மசாலா தோசை)": {
  vegetables: [
    { name: "Potato (உருளைக்கிழங்கு)", qty: 2, unit: "medium" },
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 1, unit: "piece" }
  ],
  groceries: [
    { name: "Rice (அரிசி)", qty: 100, unit: "g", brands: ["Daawat", "Kohinoor"] },
    { name: "Urad Dal (உளுத்தம்பருப்பு)", qty: 50, unit: "g", brands: ["Aachi", "Patanjali"] },
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune", "Gold Winner"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Turmeric Powder (மஞ்சள் தூள்)", qty: 0.5, unit: "tsp", brands: ["Everest", "Aachi"] }
  ],
  nonveg: []
},
"puli kuzhambu (புளி குழம்பு)": {
  vegetables: [
    { name: "Tamarind (புளி)", qty: 30, unit: "g" },
    { name: "Drumstick (முருங்கைக்காய்)", qty: 2, unit: "pieces" },
    { name: "Brinjal (கத்திரிக்காய்)", qty: 2, unit: "medium" },
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" }
  ],
  groceries: [
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune","Saffola"] },
    { name: "Tamarind Paste (புளி விழுது)", qty: 1, unit: "tbsp" },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Red Chili Powder (சிவப்பு மிளகாய் தூள்)", qty: 1, unit: "tsp", brands: ["Everest","Aachi"] },
    { name: "Puli Kuzhambu Powder (புளி குழம்பு தூள்)", qty: 1, unit: "tsp", brands: ["Aachi","MTR"] }
  ],
  nonveg: []
},

"avial (அவியல்)": {
  vegetables: [
    { name: "Carrot (கேரட்)", qty: 1, unit: "medium" },
    { name: "Beans (பீன்ஸ்)", qty: 100, unit: "g" },
    { name: "Drumstick (முருங்கைக்காய்)", qty: 2, unit: "pieces" },
    { name: "Yam (சேகரி)", qty: 100, unit: "g" },
    { name: "Raw Banana (வாழைக்காய்)", qty: 1, unit: "medium" }
  ],
  groceries: [
    { name: "Coconut (தேங்காய்)", qty: 50, unit: "g" },
    { name: "Curry Leaves (கறிவேப்பிலை)", qty: 10, unit: "leaves" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Yogurt (தயிர்)", qty: 50, unit: "g" }
  ],
  nonveg: []
},

"mor kuzhambu (மோர் குழம்பு)": {
  vegetables: [
    { name: "Drumstick (முருங்கைக்காய்)", qty: 2, unit: "pieces" },
    { name: "Ash Gourd (புடலங்காய்)", qty: 100, unit: "g" },
    { name: "Okra (வெண்டைக்காய்)", qty: 100, unit: "g" }
  ],
  groceries: [
    { name: "Curd/Yogurt (தயிர்)", qty: 200, unit: "g" },
    { name: "Coconut (தேங்காய்)", qty: 30, unit: "g" },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" },
    { name: "Curry Leaves (கறிவேப்பிலை)", qty: 10, unit: "leaves" }
  ],
  nonveg: []
},

"kezhvaragu pongal (கேழ்வரகு பொங்கல்)": {
  vegetables: [
    { name: "Ginger (இஞ்சி)", qty: 5, unit: "g" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" }
  ],
  groceries: [
    { name: "Kezhvaragu / Finger Millet (கேழ்வரகு)", qty: 100, unit: "g" },
    { name: "Moong Dal (பாசிப்பருப்பு)", qty: 50, unit: "g" },
    { name: "Ghee (நெய்)", qty: 1, unit: "tbsp", brands: ["Amul","Mother Dairy"] },
    { name: "Black Pepper (மிளகு)", qty: 0.5, unit: "tsp" },
    { name: "Salt (உப்பு)", qty: 0.5, unit: "tsp" }
  ],
  nonveg: []
},

"vada curry (வடை குழம்பு)": {
  vegetables: [
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Tomato (தக்காளி)", qty: 1, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" }
  ],
  groceries: [
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune","Saffola"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Sambar Powder (சாம்பார் தூள்)", qty: 1, unit: "tbsp", brands: ["Aachi","MTR"] }
  ],
  nonveg: []
},

"prawn masala (இறால் மசாலா)": {
  vegetables: [
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Tomato (தக்காளி)", qty: 1, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" }
  ],
  groceries: [
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune","Saffola"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Red Chili Powder (சிவப்பு மிளகாய் தூள்)", qty: 1, unit: "tsp", brands: ["Everest","Aachi"] },
    { name: "Turmeric Powder (மஞ்சள் தூள்)", qty: 0.5, unit: "tsp", brands: ["Everest","Aachi"] }
  ],
  nonveg: [
    { name: "Prawns (இறால்)", qty: 250, unit: "g" }
  ]
},

"mutton keema dosa (மட்டன் கீமா தோசை)": {
  vegetables: [
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 1, unit: "piece" },
    { name: "Potato (உருளைக்கிழங்கு)", qty: 2, unit: "medium" }
  ],
  groceries: [
    { name: "Rice (அரிசி)", qty: 100, unit: "g", brands: ["Daawat","Kohinoor"] },
    { name: "Urad Dal (உளுத்தம்பருப்பு)", qty: 50, unit: "g", brands: ["Aachi","Patanjali"] },
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune","Gold Winner"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" }
  ],
  nonveg: [
    { name: "Minced Mutton (மாஸ் கீமா)", qty: 250, unit: "g" }
  ]
},
"mutton curry (மட்டன் குழம்பு)": {
  vegetables: [
    { name: "Onion (வெங்காயம்)", qty: 2, unit: "medium" },
    { name: "Tomato (தக்காளி)", qty: 2, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" }
  ],
  groceries: [
    { name: "Oil (எண்ணெய்)", qty: 3, unit: "tbsp", brands: ["Fortune","Saffola"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Red Chili Powder (சிவப்பு மிளகாய் தூள்)", qty: 1.5, unit: "tsp", brands: ["Everest","Aachi"] },
    { name: "Turmeric Powder (மஞ்சள் தூள்)", qty: 1, unit: "tsp", brands: ["Everest","Aachi"] },
    { name: "Garam Masala (கரம் மசாலா)", qty: 1, unit: "tsp", brands: ["Everest","MDH"] },
    { name: "Ginger-Garlic Paste (இஞ்சி பூண்டு விழுது)", qty: 2, unit: "tsp" }
  ],
  nonveg: [
    { name: "Mutton (மட்டன்)", qty: 300, unit: "g" }
  ]
},

"chicken gravy (சிக்கன் கிரேவி)": {
  vegetables: [
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Tomato (தக்காளி)", qty: 2, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" }
  ],
  groceries: [
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune","Saffola"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Red Chili Powder (சிவப்பு மிளகாய் தூள்)", qty: 1, unit: "tsp", brands: ["Everest","Aachi"] },
    { name: "Turmeric Powder (மஞ்சள் தூள்)", qty: 0.5, unit: "tsp", brands: ["Everest","Aachi"] },
    { name: "Coriander Powder (கொத்தமல்லி தூள்)", qty: 1, unit: "tsp", brands: ["Everest","MDH"] }
  ],
  nonveg: [
    { name: "Chicken (சிக்கன்)", qty: 250, unit: "g" }
  ]
},

"mutton biriyani (மட்டன் பிரியாணி)": {
  vegetables: [
    { name: "Onion (வெங்காயம்)", qty: 2, unit: "medium" },
    { name: "Tomato (தக்காளி)", qty: 1, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" },
    { name: "Mint Leaves (புதினா இலைகள்)", qty: 5, unit: "g" }
  ],
  groceries: [
    { name: "Basmati Rice (பாஸ்மதி அரிசி)", qty: 200, unit: "g", brands: ["India Gate","Daawat","Kohinoor"] },
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune","Saffola"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Biryani Masala (பிரியாணி மசாலா)", qty: 1, unit: "tbsp", brands: ["Everest","Aachi","MDH"] },
    { name: "Yogurt (தயிர்)", qty: 50, unit: "g" }
  ],
  nonveg: [
    { name: "Mutton (மட்டன்)", qty: 250, unit: "g" }
  ]
},

"egg biriyani (முட்டை பிரியாணி)": {
  vegetables: [
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Tomato (தக்காளி)", qty: 1, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" },
    { name: "Mint Leaves (புதினா இலைகள்)", qty: 5, unit: "g" }
  ],
  groceries: [
    { name: "Basmati Rice (பாஸ்மதி அரிசி)", qty: 200, unit: "g", brands: ["India Gate","Daawat","Kohinoor"] },
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune","Saffola"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Biryani Masala (பிரியாணி மசாலா)", qty: 1, unit: "tbsp", brands: ["Everest","Aachi","MDH"] },
    { name: "Yogurt (தயிர்)", qty: 50, unit: "g" }
  ],
  nonveg: [
    { name: "Boiled Eggs (உடைத்து வேக வைத்த முட்டை)", qty: 4, unit: "pieces" }
  ]
},

"vegetable biriyani (காய்கறி பிரியாணி)": {
  vegetables: [
    { name: "Carrot (கேரட்)", qty: 1, unit: "medium" },
    { name: "Beans (பீன்ஸ்)", qty: 50, unit: "g" },
    { name: "Green Peas (பச்சை பட்டாணி)", qty: 50, unit: "g" },
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Tomato (தக்காளி)", qty: 1, unit: "medium" }
  ],
  groceries: [
    { name: "Basmati Rice (பாஸ்மதி அரிசி)", qty: 200, unit: "g", brands: ["India Gate","Daawat","Kohinoor"] },
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune","Saffola"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Biryani Masala (பிரியாணி மசாலா)", qty: 1, unit: "tbsp", brands: ["Everest","Aachi","MDH"] }
  ],
  nonveg: []
},

"chicken fry (சிக்கன் ஃப்ரை)": {
  vegetables: [
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" },
    { name: "Curry Leaves (கறிவேப்பிலை)", qty: 10, unit: "leaves" }
  ],
  groceries: [
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune","Saffola"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Red Chili Powder (சிவப்பு மிளகாய் தூள்)", qty: 1, unit: "tsp", brands: ["Everest","Aachi"] },
    { name: "Turmeric Powder (மஞ்சள் தூள்)", qty: 0.5, unit: "tsp", brands: ["Everest","Aachi"] },
    { name: "Ginger-Garlic Paste (இஞ்சி பூண்டு விழுது)", qty: 1, unit: "tsp" }
  ],
  nonveg: [
    { name: "Chicken (சிக்கன்)", qty: 250, unit: "g" }
  ]
},

"mutton pepper fry (மட்டன் மிளகு ஃப்ரை)": {
  vegetables: [
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" }
  ],
  groceries: [
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune","Saffola"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Black Pepper Powder (கருப்பு மிளகு தூள்)", qty: 1, unit: "tsp", brands: ["Everest","Aachi"] },
    { name: "Turmeric Powder (மஞ்சள் தூள்)", qty: 0.5, unit: "tsp", brands: ["Everest","Aachi"] }
  ],
  nonveg: [
    { name: "Mutton (மட்டன்)", qty: 250, unit: "g" }
  ]
},

"meen masala (மீன் மசாலா)": {
  vegetables: [
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Tomato (தக்காளி)", qty: 1, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" },
    { name: "Curry Leaves (கறிவேப்பிலை)", qty: 10, unit: "leaves" }
  ],
  groceries: [
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune","Saffola"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Red Chili Powder (சிவப்பு மிளகாய் தூள்)", qty: 1, unit: "tsp", brands: ["Everest","Aachi"] },
    { name: "Turmeric Powder (மஞ்சள் தூள்)", qty: 0.5, unit: "tsp", brands: ["Everest","Aachi"] },
    { name: "Coriander Powder (கொத்தமல்லி தூள்)", qty: 1, unit: "tsp", brands: ["Everest","MDH"] }
  ],
  nonveg: [
    { name: "Fish (மீன்)", qty: 250, unit: "g" }
  ]
},
"pongal (பொங்கல்)": {
  vegetables: [
    { name: "Ginger (இஞ்சி)", qty: 5, unit: "g" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" }
  ],
  groceries: [
    { name: "Rice (அரிசி)", qty: 100, unit: "g", brands: ["Daawat","Kohinoor"] },
    { name: "Moong Dal (பச்சை பருப்பு)", qty: 50, unit: "g", brands: ["Patanjali","Aachi"] },
    { name: "Black Pepper (மிளகு)", qty: 0.5, unit: "tsp" },
    { name: "Ghee (நெய்)", qty: 1, unit: "tbsp", brands: ["Amul","Mother Dairy"] },
    { name: "Salt (உப்பு)", qty: 0.5, unit: "tsp" }
  ],
  nonveg: []
},

"upma (உப்புமா)": {
  vegetables: [
    { name: "Carrot (கேரட்)", qty: 50, unit: "g" },
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 1, unit: "piece" }
  ],
  groceries: [
    { name: "Rava / Semolina (ரவை)", qty: 100, unit: "g", brands: ["Patanjali","Aachi"] },
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune","Saffola"] },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" },
    { name: "Mustard Seeds (கடுகு)", qty: 0.5, unit: "tsp" }
  ],
  nonveg: []
},

"vada (வடை)": {
  vegetables: [
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" },
    { name: "Curry Leaves (கறிவேப்பிலை)", qty: 5, unit: "leaves" }
  ],
  groceries: [
    { name: "Urad Dal (உளுத்தம்பருப்பு)", qty: 100, unit: "g", brands: ["Aachi","Patanjali"] },
    { name: "Salt (உப்பு)", qty: 0.5, unit: "tsp" },
    { name: "Oil (எண்ணெய்)", qty: 2, unit: "tbsp", brands: ["Fortune","Gold Winner"] }
  ],
  nonveg: []
},

"kesari (கேசரி)": {
  vegetables: [],
  groceries: [
    { name: "Rava / Semolina (ரவை)", qty: 100, unit: "g", brands: ["Patanjali","Aachi"] },
    { name: "Sugar (சர்க்கரை)", qty: 50, unit: "g" },
    { name: "Ghee (நெய்)", qty: 2, unit: "tbsp", brands: ["Amul","Mother Dairy"] },
    { name: "Saffron (குங்குமப்பூ)", qty: 0.5, unit: "tsp" }
  ],
  nonveg: []
},

"pongal sweet (சக்கரை பொங்கல்)": {
  vegetables: [],
  groceries: [
    { name: "Rice (அரிசி)", qty: 100, unit: "g", brands: ["Daawat","Kohinoor"] },
    { name: "Jaggery (வேப்பம்)", qty: 50, unit: "g" },
    { name: "Ghee (நெய்)", qty: 2, unit: "tbsp", brands: ["Amul","Mother Dairy"] },
    { name: "Cardamom Powder (ஏலக்காய் தூள்)", qty: 0.5, unit: "tsp" }
  ],
  nonveg: []
},

"kesari bath (கேசரி பத்)": {
  vegetables: [],
  groceries: [
    { name: "Rava (ரவை)", qty: 100, unit: "g", brands: ["Patanjali","Aachi"] },
    { name: "Sugar (சர்க்கரை)", qty: 50, unit: "g" },
    { name: "Ghee (நெய்)", qty: 2, unit: "tbsp", brands: ["Amul","Mother Dairy"] },
    { name: "Saffron (குங்குமப்பூ)", qty: 0.5, unit: "tsp" },
    { name: "Cashew Nuts (காஜு)", qty: 10, unit: "pieces" },
    { name: "Raisins (தேங்காய் வறுவல்)", qty: 10, unit: "pieces" }
  ],
  nonveg: []
},

"tomato chutney (தக்காளி சட்னி)": {
  vegetables: [
    { name: "Tomato (தக்காளி)", qty: 2, unit: "medium" },
    { name: "Onion (வெங்காயம்)", qty: 1, unit: "medium" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 1, unit: "piece" }
  ],
  groceries: [
    { name: "Oil (எண்ணெய்)", qty: 1, unit: "tbsp", brands: ["Fortune","Saffola"] },
    { name: "Salt (உப்பு)", qty: 0.5, unit: "tsp" },
    { name: "Tamarind (புளி)", qty: 5, unit: "g" },
    { name: "Coriander Seeds (கொத்தமல்லி விதை)", qty: 0.5, unit: "tsp" }
  ],
  nonveg: []
},

"coconut chutney (தேங்காய் சட்னி)": {
  vegetables: [],
  groceries: [
    { name: "Grated Coconut (தேங்காய் துருவல்)", qty: 50, unit: "g" },
    { name: "Green Chili (பச்சை மிளகாய்)", qty: 2, unit: "pieces" },
    { name: "Ginger (இஞ்சி)", qty: 5, unit: "g" },
    { name: "Salt (உப்பு)", qty: 0.5, unit: "tsp" }
  ],
  nonveg: []
},

"milagai podi (மிளகாய் பொடி)": {
  vegetables: [],
  groceries: [
    { name: "Dry Red Chili (உலர் சிவப்பு மிளகாய்)", qty: 20, unit: "g" },
    { name: "Coriander Seeds (கொத்தமல்லி விதை)", qty: 5, unit: "g" },
    { name: "Urad Dal (உளுத்தம்பருப்பு)", qty: 10, unit: "g" },
    { name: "Salt (உப்பு)", qty: 1, unit: "tsp" }
  ],
  nonveg: []
}

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


// Step 1 → AI suggests
function getRecipe() {
  const dishInput = document.getElementById("dish").value.toLowerCase();
  const members = parseInt(document.getElementById("members").value) || 1;
  const recipeEntry = Object.entries(recipes).find(([key,_]) => key.toLowerCase() === dishInput);

  if(!recipeEntry) {
    document.getElementById("ai-output").innerHTML = `<p style='color:red;'>Vigo 🤖: Dish not found!</p>`;
    return;
  }



  const [dishKey, dishData] = recipeEntry;
  let output = `<h2>Vigo 🤖 Suggests: ${dishKey.toUpperCase()} for ${members} members</h2>`;
  if(dishData.vegetables.length) output += buildCategoryCard("Vegetables", dishData.vegetables, members, false);
  if(dishData.groceries.length) output += buildCategoryCard("Groceries", dishData.groceries, members, false);
  if(dishData.nonveg.length) output += buildCategoryCard("Non-Veg", dishData.nonveg, members, false);

  output += `<button onclick="showUserAdjust('${dishKey}', ${members})">Adjust Quantities / Order</button>`;
  document.getElementById("ai-output").innerHTML = output;
}

// Build card
function buildCategoryCard(title, items, members, editable){
  let html = `<div class="category-card"><div class="category-title">${title}</div><ul>`;
  items.forEach(i=>{
    let qty = i.qty*members;
    let unit = i.unit;
    if(unit==="g" && qty>=1000) { qty=(qty/1000).toFixed(2); unit="kg"; }

    if(editable){
      html += `<li>${i.name} (${unit}): <input type="number" id="qty-${i.name}" value="${qty}" step="0.1">
      ${i.brands ? `<select id="brand-${i.name}">${i.brands.map(b=>`<option>${b}</option>`).join("")}</select>` : ""}</li>`;
    } else {
      html += `<li>${i.name}: ${qty} ${unit}${i.brands ? " ("+i.brands[0]+")":""}</li>`;
    }
  });
  html += "</ul></div>";
  return html;
}

// Step 2 → User adjusts
function showUserAdjust(dishKey, members){
  const recipe = recipes[dishKey];
  let html = `<h2>Adjust Quantities & Brands for ${dishKey.toUpperCase()}</h2>`;
  html += buildCategoryCard("Vegetables", recipe.vegetables, members, true);
  html += buildCategoryCard("Groceries", recipe.groceries, members, true);
  html += buildCategoryCard("Non-Veg", recipe.nonveg, members, true);
  html += `<button onclick="checkout('${dishKey}', ${members})">Proceed to Checkout</button>`;
  document.getElementById("ai-output").innerHTML = html;
}

// Checkout
function checkout(dishKey, members){
  const recipe = recipes[dishKey];
  const categories = [
    {name:"Vegetables", items: recipe.vegetables},
    {name:"Groceries", items: recipe.groceries},
    {name:"Non-Veg", items: recipe.nonveg}
  ];

  let html=`<h2>✅ VIGo 🤖: Order Confirmed!</h2>
            <p>Your selected items for ${dishKey.toUpperCase()} (${members} members):</p>`;

  categories.forEach(cat=>{
    if(!cat.items || cat.items.length===0) return;
    let list = "";
    cat.items.forEach(i=>{
      const qty = parseFloat(document.getElementById(`qty-${i.name}`).value)||0;
      if(qty>0){
        let unit=i.unit;
        let displayQty = qty;
        if(unit==="g" && qty>=1000){ displayQty=(qty/1000).toFixed(2); unit="kg"; }
        const brand = i.brands ? document.getElementById(`brand-${i.name}`).value : null;
        list += `<li>${i.name}: ${displayQty} ${unit}${brand ? " ("+brand+")":""}</li>`;
      }
    });
    if(list) html += `<div class="category-card"><div class="category-title">${cat.name}</div><ul>${list}</ul></div>`;
  });

  document.getElementById("ai-output").innerHTML = html;
}
function goBack() {
  // Option 1: reset inputs & output
  document.getElementById("dish").value = "";
  document.getElementById("members").value = "";
  document.getElementById("ai-output").innerHTML = "";
  document.getElementById("suggestions").innerHTML = "";
}

