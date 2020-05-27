// function myFunction() {
//   var img = new Image();
//   img.src = "img/rainbow-star-2.png";
//   img.height = 50;
//   img.width = 50;
// }

// Row 2
function addimage() {
  var img = document.createElement("img");
  img.src = "img/rainbow-star-2.png";
  img.height = 50;
  img.width = 50;

//optionally set a css class on the image
  var id_name = "star1";
  img.setAttribute("id", id_name);

  document.getElementById('star-container-1').appendChild(img);

  };

function removeimage() {
  //var img = document.getElementById("star");
  var img = document.getElementById("star1");
  img.remove();
}

// Row 2 
function addimage2() {
  var img = document.createElement("img");
  img.src = "img/rainbow-star-2.png";
  img.height = 50;
  img.width = 50;

//optionally set a css class on the image
  var id_name = "star2";
  img.setAttribute("id", id_name);

  document.getElementById('star-container-2').appendChild(img);

  };

function removeimage2() {
  //var img = document.getElementById("star");
  var img = document.getElementById("star2");
  img.remove();
}

// Row 3
function addimage3() {
  var img = document.createElement("img");
  img.src = "img/rainbow-star-2.png";
  img.height = 50;
  img.width = 50;

  var id_name = "star3";
  img.setAttribute("id", id_name);

  document.getElementById('star-container-3').appendChild(img);

  };

function removeimage3() {
  var img = document.getElementById("star3");
  img.remove();
}

// Row 4
function addimage4() {
  var img = document.createElement("img");
  img.src = "img/rainbow-star-2.png";
  img.height = 50;
  img.width = 50;

  var id_name = "star4";
  img.setAttribute("id", id_name);

  document.getElementById('star-container-4').appendChild(img);

  };

function removeimage4() {
  var img = document.getElementById("star4");
  img.remove();
}

// Row 5
function addimage5() {
  var img = document.createElement("img");
  img.src = "img/rainbow-star-2.png";
  img.height = 50;
  img.width = 50;

  var id_name = "star5";
  img.setAttribute("id", id_name);

  document.getElementById('star-container-5').appendChild(img);

  };

function removeimage5() {
  var img = document.getElementById("star5");
  img.remove();
}

// Row 6
function addimage6() {
  var img = document.createElement("img");
  img.src = "img/rainbow-star-2.png";
  img.height = 50;
  img.width = 50;

  var id_name = "star6";
  img.setAttribute("id", id_name);

  document.getElementById('star-container-6').appendChild(img);

  };

function removeimage6() {
  var img = document.getElementById("star6");
  img.remove();
}