//Function are objects (NAME (optional), CODE)

function getDeals() {
  console.log("Retrived deals");
}

// Attach a new property 'type'
getDeals.type = "daily-deals";

console.log(getDeals.type);
console.log(getDeals);
