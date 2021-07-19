var products = -document.getElementById("data");
function addProduct(el) {
  var products = document.getElementById("products");
  var div = document.createElement("div");

  var p = document.createElement("p");
  p.innerHTML = el.name;

  var image = document.createElement("img");
    image.src = el.url;


  var but = document.createElement("button");
  but.innerHTML = `Add to cart`;

  div.append(image, p);
  products.append(div);
}
function showVisited() {
    JSON.parse(localStorage.getItem("cart"));
    data.forEach(function (el) {
        addProduct(el);

        
    });
}
showVisited();