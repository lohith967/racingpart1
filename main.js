canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 80;
car1_height = 70;

car2_width = 80;
car2_height = 50;

background_image =
  "https://thumbs.dreamstime.com/t/f-race-track-start-finish-f-race-track-start-finish-asphalt-road-background-135909190.jpg";

car1_image =
  "https://drive.google.com/uc?export=view&id=1eoL12H3qAnbFBxkm4ldq9LkN1gGP9N-j";

car1_x = 30;
car1_y = 20;

car2_image =
  "https://drive.google.com/uc?export=view&id=1FJDpRhL4dxkxhUJeA965I-ZemIelSJLc";

car2_x = 30;
car2_y = 90;

function add() {
  background_imgTag = new Image();
  background_imgTag.onload = uploadBackground; 
  background_imgTag.src = background_image; 

  car1_imgTag = new Image(); 
  car1_imgTag.onload = uploadcar1; 
  car1_imgTag.src = car1_image; 

  car2_imgTag = new Image(); 
  car2_imgTag.onload = uploadcar2; 
  car2_imgTag.src = car2_image;
}
function uploadBackground() {
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
  ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
  ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
window.addEventListener("keyup", my_keyup);

function my_keyup(e) {
  if (e.keyCode in map) {
    map[e.keyCode] = false;
  }
}

var map = {
  87: false,
  83: false,
  65: false,
  68: false,
  85: false,
  74: false,
  72: false,
  75: false
};

function my_keydown(e) {
  keyPressed = e.keyCode;
  if (e.keyCode in map) {
    map[e.keyCode] = true;
  }
  console.log(keyPressed);
  if (map[87]) {
    w();
    console.log("w");
  }
  if (map[83]) {
    s();
    console.log("s");
  }
  if (map[65]) {
    a();
    console.log("a");
  }
  if (map[68]) {
    d();
    console.log("d");
  }
}

