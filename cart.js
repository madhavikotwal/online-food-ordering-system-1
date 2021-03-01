// define global items array
var  items=[];

// set empty array as sessionstorage data
 sessionStorage.setItem("cart",JSON.stringify(items));
 
 var addToCart = function () {
  var pname = document.getElementById("SII1").value;
  var pquant = document.getElementById("SIP1").value;
  var prod = {
    productName: SII1,
    productQuantity: SIP1,
  };
  if (typeof Storage != "undefined") {
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    cart[cart.length] = prod;
    sessionStorage.setItem("cart", JSON.stringify(cart));
  } else console.log("storage not supported");
};

var removeFromCart = function () {
  var pname = document.getElementById("SII1").value;
  var pquant = document.getElementById("SIP1").value;
  if (typeof Storage != "undefined") {
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    var newcart = [cart.length-1];
    var j=0;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].productName != pname) {
        newcart[j] = cart[i];
        j++;
      }
    }
    sessionStorage.setItem("cart", JSON.stringify(newcart));
  } else console.log("storage not supported");
};

var showAll = function () {
  var cart = JSON.parse(sessionStorage.getItem("cart"));
  var docId = document.getElementById("showList");
  for (var i = 0; i < cart.length; i++) {
    docId.innerHTML += JSON.stringify(cart[i]) + "<br/>";
  }
};
