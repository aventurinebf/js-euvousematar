function setup() {
  createCanvas(600, 600);
  background("	#ffb399");     
}

function draw() {

      stroke("#b32d00") 
      fill("pink") 
  
  //console.log(mouseIsPressed);
  
  if (mouseIsPressed) {
     rect(mouseX, mouseY, 20, 35)
  }
}
