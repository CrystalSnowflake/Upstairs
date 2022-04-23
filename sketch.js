//the variables where the images will be uploaded
var wasdImage, spaceImage;
var livingRoomImage, hallwayImage, playRoomImage, mazeImage, chase, readImage, bedroomsImage, deadImage;
var catterpillarImage, spiderImage;
var photoImage, lampImage, sideTableImage, shine, sleepingBag;
var guestBedroomImage, drawerImage;
var officeImage, laptopImage, bookShelfImage, letterImage, prescriptionImage, paperImage, paintingImage;
var ballsyNormal, ballsyScary, blocksImage, booksImage, curtainImage, chestImage, babyCameraImage;
var masterBedroomImage, zenImage, keyImage, pictureImage, sideTablesImage;
var leftWalk, rightWalk, upWalk, sakinaImage;
var upstairsImage;

//variables storing the above
var Sakina;
var backGround, wasd, square, space;
var sprite, sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7, sprite8, sprite9, sprite10, sprite11, sprite12, sprite13, sprite14, sprite15, sprite16, sprite17, sprite18, sprite19, sprite20, sprite21, sprite22, sprite23;
var sprite24, sprite25, sprite26, sprite27;
var lamp, lamp1, lamp2, lamp3;
var sideTable, sideTable2;
var photo, family;
var sleep, ballsy;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26;
var curtain, chest, camera;
var blocks, blocks2, blocks3;
var books, books2;
var book, book2, book3, book4, book5, book6
var bookShelf, bookShelf2, bookShelf3, bookShelf4, bookShelf5, bookShelf6;
var painting, letter, prescription;
var picture, key, drawer, drawer2;
var table, table2;
var stick, laptop;
var paper, paper2, paper3, paper4;
var s, s2, s3;
var c, c2, c3;
//walls for the chase
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17;
var wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26;

gameState = 'upstairs'; //gamestate


function preload(){
 //the house
 catterpillarImage = loadImage("images/catterpillar.png");
 spiderImage = loadImage("images/spider.png");

 //upstairs
 upstairsImage = loadImage("images/background/stairs.jpg");
 
}

function setup(){
 createCanvas(1250, 560)

  //creating the living room
  backGround = createSprite(630, 280);
  backGround.scale = 0.65;

 //upper boundary for obstacle course
 sprite20 = createSprite(600, 119, 1250, 10);
 sprite20.visible = true;

 //lower boundary for obstacle course
 sprite23 = createSprite(600, 425, 1250, 10);
 sprite23.visible = true;

 //spiders
 s = createSprite(1055, 140, 10, 10); //right
 s.addImage(spiderImage);
 s.scale = 0.2;
 s.setCollider('rectangle', 0, 0, 400, 400);
 s.debug = true;
 s2 = createSprite(675, 150, 10, 10); //middle
 s2.addImage(spiderImage);
 s2.scale = 0.2;
 s2.debug = true;
 s3 = createSprite(355, 150, 10, 10); //left
 s3.addImage(spiderImage);
 s3.scale = 0.2;
 s3.debug = true;

 //catterpillars
 c = createSprite(870, 405, 10, 10); //right
 c.addImage(catterpillarImage);
 c.scale = 0.3;
 c.debug = true;
 c.setCollider('rectangle', 0, 0, 50, 50)
 c2 = createSprite(510, 405, 10, 10); //middle
 c2.addImage(catterpillarImage);
 c2.scale = 0.3;
 c2.debug = true;
 c2.setCollider('rectangle', 0, 0, 50, 50)
 c3 = createSprite(215, 405, 10, 10); //left
 c3.addImage(catterpillarImage);
 c3.scale = 0.3;
 c3.setCollider('rectangle', 0, 0, 50, 50)
 c3.debug = true;

 //creating the main character Sakina
 Sakina = createSprite(330, 175, 20, 20);
 Sakina.shapeColor = "white";
 Sakina.scale = 0.4;
 Sakina.debug = true;


}

function draw(){

  //controls of the Sakina
  if(keyDown("UP") || keyDown('w')){
    //animation
    //Sakina.addAnimation('up', upWalk)
    //controls
    Sakina.x = Sakina.x + 0;
    Sakina.y = Sakina.y - 10;
  } else if(keyDown("DOWN") || keyDown('s')){
    Sakina.x = Sakina.x + 0;
    Sakina.y = Sakina.y + 10;
  } else if(keyDown("RIGHT") || keyDown('d')){
    //animation
    //Sakina.addAnimation('right', rightWalk)
    //controls
    Sakina.x = Sakina.x + 10;
    Sakina.y = Sakina.y + 0;
  } else if(keyDown("LEFT") || keyDown('a')){
     //animation
     //Sakina.addAnimation('leftWalk', leftWalk)
     //controls
     Sakina.x = Sakina.x - 10;
     Sakina.y = Sakina.y + 0;
  }

 //Sakina in the obstacle course
 if(gameState === 'upstairs'){
   backGround.addImage(upstairsImage)

   //visibility of objects
   s.visible = true;
   Sakina.visible = true;
   

   //collisions with the boundaries
   s.velocityY = 3;

   if(s.isTouching(sprite23)){
     s.velocityY = -10;
   }
   
  }
  drawSprites();

  textSize(20);
  fill('white')
  text("Coordinates: " + mouseX + ', ' + mouseY, 500, 540);
}
