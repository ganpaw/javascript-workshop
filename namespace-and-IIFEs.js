// Namespace and IIFE

var DEALSCANDY = DEALSCANDY || {};

DEALSCANDY.main = (function() {
  'use strict';

  var categories = [{
        "_id": "computers",
        "title": "Computers",
        "parent": "all",
        "order": 10,
        "left": 2,
        "right": 25,
        "dealsCount": 504,
        "children": [{
            "_id": "laptops",
            "title": "Laptops",
            "parent": "computers",
            "order": 10,
            "left": 3,
            "right": 4,
            "dealsCount": 36
          },
          {
            "_id": "desktops",
            "title": "Desktops",
            "parent": "computers",
            "order": 20,
            "left": 5,
            "right": 6,
            "dealsCount": 26
          },
          {
            "_id": "tablets",
            "title": "Tablets",
            "parent": "computers",
            "order": 30,
            "left": 7,
            "right": 8,
            "dealsCount": 36
          },
          {
            "_id": "monitors",
            "title": "Monitors",
            "parent": "computers",
            "order": 40,
            "left": 9,
            "right": 10,
            "dealsCount": 20
          }
        ]
      },
      {
        "_id": "electronics",
        "title": "Electronics",
        "parent": "all",
        "order": 20,
        "left": 24,
        "right": 53,
        "dealsCount": 314,
        "children": [{
            "_id": "tv",
            "title": "TVs",
            "parent": "electronics",
            "order": 10,
            "left": 25,
            "right": 28,
            "dealsCount": 39
          },
          {
            "_id": "cell-phones",
            "title": "Cell Phones",
            "parent": "electronics",
            "order": 20,
            "left": 27,
            "right": 30,
            "dealsCount": 34
          },
          {
            "_id": "cellphones-accessories",
            "title": "Cell Phone Accessories",
            "parent": "electronics",
            "order": 30,
            "left": 29,
            "right": 32,
            "dealsCount": 38
          },
          {
            "_id": "cameras",
            "title": "Cameras",
            "parent": "electronics",
            "order": 40,
            "left": 31,
            "right": 34,
            "dealsCount": 37
          }
        ]
      }
    ],
    hotdeals = [{
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
    }];


  function validateCategories() {
    if (categories.length > 0) {
      console.log("Total categories :" + categories.length);
    } else {
      console.log('No categories found.');
    }
  }

  function validateHotdeals() {
    if (hotdeals.length > 0) {
      console.log("Total Hot Deals :" + hotdeals.length);
    } else {
      console.log("No Hot Deal is found.");
    }
  }

  function initialize() {
    validateCategories();
    validateHotdeals();
  }

  // Initialize
  initialize();

  return {
    ctg: categories,
    hdl: hotdeals
  };
}());


console.log(DEALSCANDY.main.ctg);
console.log(DEALSCANDY.main.hdl);

// Let is make an alias;
var DC = DEALSCANDY.main;
console.log(JSON.stringify(DC.hdl));

// Attach one more property
DC.dailydeals = [{
    "storeName": "eBay",
    "details": "eBay with techreplay has the 3D Systems Cubify Cube 2 (2nd Generation) 3D Printer (Silver, 381000) for $280 - $15 off with coupon code <B>C15SPRING</B> [Exp 3/22 at 2PM PT] = <b>$265</b> with free shipping. Up to 5.5\" x 5.5\" x 5.5\" build volume, built-in Wi-Fi and 200 microns layer thickness.<br><br>Here's Pocket-lint's review of this 2nd generation model; the Amazon reviews are not as kind.",
    "currentPrice": "265.0",
    "originalPrice": "1300.0"
  },
  {
    "storeName": "Amazon",
    "details": "Amazon has the Seapro SP8111 Storm Analog Display Quartz Silver Men's Watch for <b>$33</b> with free shipping on $49+ or with Prime.<br><br><li>Seapro SP1323 Dive Analog Display Quartz Silver Men's Watch for <b>$186</b>",
    "currentPrice": "33.0",
    "originalPrice": "995.0"
  },
  {
    "storeName": "eBay",
    "details": "eBay with qualitycellz has the Amazon Fire 64GB Unlocked GSM Smartphone for <b>$110</b> with free shipping.<br><br><li>4G LTE, Fire OS 3.5.0, 13MP camera w/ 1080p video<br><li>2.2GHz Quad-core CPU, 4.7\" 1280x720 LCD, nano-SIM",
    "currentPrice": "110.0",
    "originalPrice": "680.0"
  }
];

console.log(DC);

var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log(jsonValue);
