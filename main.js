var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30; 
block_image_height = 30;
player_x = 10; player_y = 10;
var player_object= "";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
         player_object.scaleToHeight(140);
         player_object.set({
             top:player_y,
             left:player_x
         });
         canvas.add(player_object);

    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object  .scaleToHeight(block_image_height);
    block_image_object.set({
             top:player_y,
             left:player_x
         });
         canvas.add(block_image_object);

    });
   
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey==true&&keyPressed=='80'){
    console.log("p and shift pressed together");
    block_image_width=block_image_width+10;
  document.getElementById("current_width").innerHTML=block_image_width; 
  block_image_height=block_image_height+10;
  document.getElementById("current_height").innerHTML=block_image_height; 
}
if(e.shiftKey==true&&keyPressed=='77'){
    console.log("m and shift pressed together");
    block_image_width=block_image_width-10;
  document.getElementById("current_width").innerHTML=block_image_width; 
  block_image_height=block_image_height-10;
  document.getElementById("current_height").innerHTML=block_image_height; 
}
if(keyPressed=='38'){
    console.log("up arrow key");

}
if(keyPressed=='40'){
    console.log("down arrow key");
    
}
if(keyPressed=='37'){
    console.log("left arrow key");
    
}
if(keyPressed=='39'){
    console.log("right arrow key");
    
}
if(keyPressed=='87'){
    console.log("w key");
    
}
if(keyPressed=='71'){
    console.log("g key");
    
}
if(keyPressed=='76'){
    console.log("l key");
    
}
if(keyPressed=='84'){
    console.log("t key");
    
}
if(keyPressed=='82'){
    console.log("r key");
    
}
if(keyPressed=='89'){
    console.log("y key");
    
}
if(keyPressed=='68'){
    console.log("d key");
    
}
if(keyPressed=='85'){
    console.log("u key");
    
}
if(keyPressed=='67'){
    console.log("c key");
    
}
}