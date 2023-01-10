var black = document.getElementById("black");
var blueSwatch = document.getElementById("blue");
var oliveSwatch = document.getElementById("olive");
var pinkSwatch = document.getElementById("pink");
var whiteSwatch = document.getElementById("white");
var navySwatch = document.getElementById("navy");
var image = document.getElementById("photo");
var price = document.getElementById("price");

black.addEventListener("mouseover", function() {
  console.log("Black");
  image.src = "img/black.png";
  price.innerHTML = "$159.99";
  price.style.color = "red";
  price.innerHTML += " (Sale)";
});


blueSwatch.addEventListener("mouseover", function() {
  console.log("Blue");
  image.src = "img/blue.png";
  price.innerHTML = "$159.99";
  price.style.color = "red";
  price.innerHTML += " (Sale)";
});

oliveSwatch.addEventListener("mouseover", function() {
  image.src = "img/green.png";
  price.innerHTML = "$169.99";
  price.style.color = "darkgreen";
});

pinkSwatch.addEventListener("mouseover", function() {
  image.src = "img/pink.png";
  price.innerHTML = "$89.99";
  price.style.color = "green";
  price.innerHTML += " (Clearance)";
});

whiteSwatch.addEventListener("mouseover", function() {
  image.src = "img/white.png";
  price.innerHTML = "$109.99";
  price.style.color = "green";
  price.innerHTML += " (Clearance)";
});

navySwatch.addEventListener("mouseover", function() {
  image.src = "img/navy.png";
  price.innerHTML = "$109.99";
  price.style.color = "green";
  price.innerHTML += " (Clearance)";
});

