// function myFunction() {
//   var img = new Image();
//   img.src = "img/rainbow-star-2.png";
//   img.height = 50;
//   img.width = 50;
// }

        function addimage() {
          var img = document.createElement("img");
          img.src = "img/rainbow-star-2.png";
          img.height = 50;
          img.width = 50;

          //optionally set a css class on the image
          var id_name = "star";
          img.setAttribute("id", id_name);

          document.getElementById('star-container-1').appendChild(img);

        };

        function removeimage() {
          //var img = document.getElementById("star");
          var img = document.getElementById("star");
          img.remove();
        }
