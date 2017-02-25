var deals = {
  code: 200,
  data: [{
    id: "pY02m7",
    title: "Thinkpad T420",
    price: {
      current: 100,
      original: 150
    }
  }, {
    id: "K928Kl",
    title: "HP ENVY DV7",
    price: {
      current: 300,
      original: 450
    }
  }]
};


// Iterate titles
function getTitle(deal) {
  console.log('Title: ' + deal.title);
}

function getCategory(deal) {
  for (var i = 0; i < deal.category.length; i++) {
    console.log('category[' + i + ']=' + deal.category[i]);
  }
}
for (var i = 0; i < deals.data.length; i++) {
  // Add category
  deals.data[i].category = ["Electronics", "Notebooks"];
  getTitle(deals.data[i]);
  getCategory(deals.data[i]);
}

console.log(deals);
