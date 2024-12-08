let level = 0
let img = [];
let x1,y1;
let image_size = 125;

function setup() {
  createCanvas(720, 400);
  x1 = width/2.3;
  y1 = height/3.5;
  rectMode(RADIUS);
  strokeWeight(2);

  img_main = loadImage('amt_game_level1.jpeg'); 
  img[0] = loadImage('dog.png');
  img[1] = loadImage('cat.png');
  img[2] = loadImage('tiger.png');
  img[3] = loadImage('whale.png');
  img[4] = loadImage('elephant.png');
  img[5] = loadImage('octopus.png');
  img[6] = loadImage('pencil.png');
  img[7] = loadImage('book.png');
  img[8] = loadImage('chair.png');
  img[9] = loadImage('lamp.png');
  img[10] = loadImage('cup.png');
  img[11] = loadImage('shoe.png');
  img[12] = loadImage('four.png');
  img[13] = loadImage('seven.png');
  img[14] = loadImage('eight.png');
  img[15] = loadImage('three.png');
  img[16] = loadImage('two.png');
  img[17] = loadImage('six.png');
  img[18] = loadImage('threeplusone.png');
  img[19] = loadImage('twoplusfive.png');
  img[20] = loadImage('fourplusfour.png');
  img[21] = loadImage('sixminusthree.png');
  img[22] = loadImage('sevenminusfive.png');
  img[23] = loadImage('eightminustwo.png');
  img[24] = loadImage('a.png');
  img[25] = loadImage('b.png');
  img[26] = loadImage('c.png');
  img[27] = loadImage('d.png');
  img[28] = loadImage('g.png');
  img[29] = loadImage('h.png');
  img[30] = loadImage('z.png'); 
  
  whale_som = createAudio('whale.mp3');
  tiger_som = createAudio('tiger.mp3');
  dog_som = createAudio('dog.mp3');
  a_som = createAudio('a.mp3');
  b_som = createAudio('b.mp3');
  blue_som = createAudio('blue.mp3');
  book_som = createAudio('book.mp3');
  c_som = createAudio('c.mp3');
  cat_som = createAudio('cat.mp3');
  chair_som = createAudio('chair.mp3');
  cup_som = createAudio('cup.mp3');
  d_som = createAudio('d.mp3'); 
  eightminustwo_som = createAudio('eightminustwo.mp3');
  elephant_som = createAudio('elephant.mp3');
  fourplusfour_som = createAudio('fourplusfour.mp3');
  g_som = createAudio('g.mp3');
  green_som = createAudio('green.mp3');
  h_som = createAudio('h.mp3');
  lamp_som = createAudio('lamp.mp3');
  octopus_som = createAudio('octopus.mp3');
  pencil_som = createAudio('pencil.mp3');
  pink_som = createAudio('pink.mp3');
  purple_som = createAudio('purple.mp3');
  red_som = createAudio('red.mp3');
  sevenminusfive_som = createAudio('sevenminusfive.mp3');
  shoe_som = createAudio('shoe.mp3');
  sixminusthree_som = createAudio('sixminusthree.mp3');
  threeplusone_som = createAudio('threeplusone.mp3');
  twoplusfive_som = createAudio('twoplusfive.mp3');
  yellow_som = createAudio('yellow.mp3');
  z_som = createAudio('z.mp3');
  celeb_som = createAudio('celeb.mp3');
  font = loadFont('Montserrat-Bold.otf');
  
  celeb_som.play();
}

function draw() {
  background(255);
  image(img_main, 0, 0, width, height);
  
  if (level == 0) {
    level0();
  } else if (level == 1) {
    level1_1();
  } else if (level == 2) {
    level1_2();
  } else if (level == 3) {
    level1_3();
  } else if (level == 4) {
    level1_4();
  } else if (level == 5) {
    level1_5();
  } else if (level == 6) {
    level1_6();
  } else if (level == 7) {
    level2_1();
  } else if (level == 8) {
    level2_2();
  } else if (level == 9) {
    level2_3();
  } else if (level == 10) {
    level2_4();
  } else if (level == 11) {
    level2_5();
  } else if (level == 12) {
    level2_6();
  } else if (level == 13) {
    level3_1();
  } else if (level == 14) {
    level3_2();
  } else if (level == 15) {
    level3_3();
  } else if (level == 16) {
    level3_4();
  } else if (level == 17) {
    level3_5();
  } else if (level == 18) {
    level3_6();
  } else if (level == 19) {
    level4_1();
  } else if (level == 20) {
    level4_2();
  } else if (level == 21) {
    level4_3();
  } else if (level == 22) {
    level4_4();
  } else if (level == 23) {
    level4_5();
  } else if (level == 24) {
    level4_6();
  } else if (level == 25) {
    level5_1();
  } else if (level == 26) {
    level5_2();
  } else if (level == 27) {
    level5_3();
  } else if (level == 28) {
    level5_4();
  } else if (level == 29) {
    level5_5();
  } else if (level == 30) {
    level5_6();
  }else if (level == 31) {
    level5_7();
  }
}

function level0(){
  textFont(font);
  fill(0); 
  textSize(30);
  text('Olá!', width/2.2, height/4);
  textSize(20);
  text('Hello!', width/2.2, height/3);
  textSize(30);
  text('Escolhe um jogo!', width/3.2, height/2.2);
  textSize(20);
  text('Choose a game!', width/2.5, height/1.8);
  image(img[3], width/2.5, height/2, 150, 150);
}

function level1_1(){
    textSize(25);
    textFont(font);
    fill(0);
    text('elephant', width/3.5, height/1.3);
    text('dog', width/2.2, height/1.3); 
    text('tiger', width/1.7, height/1.3);
    image(img[0], x1, y1, image_size, image_size); 
    dog_som.play();
}

function level1_2(){
    textSize(25);
    textFont(font);
    fill(0);
    text('cat', width/3.5, height/1.3);
    text('dog', width/2.2, height/1.3); 
    text('whale', width/1.7, height/1.3);
    image(img[1], x1, y1, image_size, image_size); 
    cat_som.play();
}

function level1_3(){
    textSize(25);
    textFont(font);
    fill(0);
    text('octopus', width/3.5, height/1.3);
    text('tiger', width/2.2, height/1.3); 
    text('cat', width/1.7, height/1.3);
    image(img[2], x1, y1, image_size, image_size);  
    tiger_som.play();
}

function level1_4(){
    textSize(25);
    textFont(font);
    fill(0);
    text('tiger', width/3.5, height/1.3);
    text('cat', width/2.2, height/1.3); 
    text('whale', width/1.7, height/1.3);
    image(img[3], x1, y1, image_size, image_size);
    whale_som.play();
}

function level1_5(){
    textSize(25);
    textFont(font);
    fill(0);
    text('elephant', width/3.5, height/1.3);
    text('dog', width/2.2, height/1.3); 
    text('tiger', width/1.7, height/1.3);
    image(img[4], x1, y1, image_size, image_size); 
    elephant_som.play();
}

function level1_6(){
    textSize(25);
    textFont(font);
    fill(0);
    text('cat', width/3.5, height/1.3);
    text('octopus', width/2.5, height/1.3); 
    text('whale', width/1.7, height/1.3);
    image(img[5], x1, y1, image_size, image_size); 
    octopus_som.play();
}

function level2_1(){
  textSize(25);
  textFont(font);
  fill(0); 
  text('pencil', width/3.5, height/1.3); 
  text('book', width/2.2, height/1.3);
  text('chair', width/1.7, height/1.3);
  image(img[6], x1, y1, image_size, image_size);   
  pencil_som.play();
}

function level2_2(){
    textSize(25);
    textFont(font);
    fill(0);
    text('chair', width/3.5, height/1.3);
    text('book', width/2.2, height/1.3); 
    text('lamp', width/1.7, height/1.3);
    image(img[7], x1, y1, image_size, image_size); 
    book_som.play();
}

function level2_3(){
    textSize(25);
    textFont(font);
    fill(0);
    text('lamp', width/3.5, height/1.3);
    text('cup', width/2.2, height/1.3); 
    text('chair', width/1.7, height/1.3);
    image(img[8], x1, y1, image_size, image_size);  
    chair_som.play();
}

function level2_4(){
    textSize(25);
    textFont(font);
    fill(0);
    text('lamp', width/3.5, height/1.3);
    text('cup', width/2.2, height/1.3); 
    text('shoe', width/1.7, height/1.3);
    image(img[9], x1, y1, image_size, image_size);
    lamp_som.play();
}

function level2_5(){
    textSize(25);
    textFont(font);
    fill(0);
    text('pencil', width/3.5, height/1.3);
    text('cup', width/2.2, height/1.3); 
    text('lamp', width/1.7, height/1.3);
    image(img[10], x1, y1, image_size, image_size); 
    cup_som.play();
}

function level2_6(){
    textSize(25);
    textFont(font);
    fill(0);
    text('pencil', width/3.5, height/1.3);
    text('book', width/2.2, height/1.3); 
    text('shoe', width/1.7, height/1.3);
    image(img[11], x1, y1, image_size, image_size); 
    shoe_som.play();
}

function level3_1(){
  textSize(25);
  textFont(font);
  fill(0); 
  text('green', width/3.5, height/1.3); 
  text('blue', width/2.3, height/1.3); 
  text('red', width/1.6, height/1.3);
  fill(0,0,255);
  rect(x1+image_size/2.7, y1+image_size/2, image_size/3, image_size/3);
  blue_som.play();
}

function level3_2(){
  textSize(25);
  textFont(font);
  fill(0); 
  text('yellow', width/3.5, height/1.3); 
  text('pink', width/2.3, height/1.3); 
  text('blue', width/1.6, height/1.3);
  fill(255,204,0);
  rect(x1+image_size/2.7, y1+image_size/2, image_size/3, image_size/3);
  yellow_som.play();
}

function level3_3(){
  textSize(25);
  textFont(font);
  fill(0); 
  text('purple', width/3.5, height/1.3); 
  text('red', width/2.3, height/1.3); 
  text('pink', width/1.6, height/1.3);
  fill(255,0,0);
  rect(x1+image_size/2.7, y1+image_size/2, image_size/3, image_size/3);
  red_som.play();
}

function level3_4(){
  textSize(25);
  textFont(font);
  fill(0); 
  text('purple', width/3.5, height/1.3); 
  text('blue', width/2.3, height/1.3); 
  text('green', width/1.7, height/1.3);
  fill(0,255,0);
  rect(x1+image_size/2.7, y1+image_size/2, image_size/3, image_size/3);
  green_som.play();
}

function level3_5(){
  textSize(25);
  textFont(font);
  fill(0); 
  text('pink', width/3.5, height/1.3); 
  text('blue', width/2.3, height/1.3); 
  text('red', width/1.6, height/1.3);
  fill(255,192,203);
  rect(x1+image_size/2.7, y1+image_size/2, image_size/3, image_size/3);
  pink_som.play();
}

function level3_6(){
  textSize(25);
  textFont(font);
  fill(0); 
  text('yellow', width/3.5, height/1.3); 
  text('purple', width/2.3, height/1.3); 
  text('blue', width/1.6, height/1.3);
  fill(106,13,173);
  rect(x1+image_size/2.7, y1+image_size/2, image_size/3, image_size/3);
  purple_som.play();
}

function level4_1(){
  textSize(25);
  textFont(font);
  fill(0); 
  image(img[17], width/3.3, height/1.4,image_size/3,image_size/3); 
  image(img[12], width/2.2, height/1.4,image_size/3,image_size/3);
  image(img[14], width/1.6, height/1.4,image_size/3,image_size/3);
  image(img[18], x1, y1, image_size, image_size/2);   
  threeplusone_som.play();
}
function level4_2(){
  textSize(25);
  textFont(font);
  fill(0); 
  image(img[13], width/3.3, height/1.4,image_size/3,image_size/3); 
  image(img[12], width/2.2, height/1.4,image_size/3,image_size/3);
  image(img[14], width/1.6, height/1.4,image_size/3,image_size/3);
  image(img[19], x1, y1, image_size, image_size/2);   
  twoplusfive_som.play();
}
function level4_3(){
  textSize(25);
  textFont(font);
  fill(0); 
  image(img[12], width/3.3, height/1.4,image_size/3,image_size/3); 
  image(img[14], width/2.2, height/1.4,image_size/3,image_size/3);
  image(img[15], width/1.6, height/1.4,image_size/3,image_size/3);
  image(img[20], x1, y1, image_size, image_size/2);   
  fourplusfour_som.play();
}
function level4_4(){
  textSize(25);
  textFont(font);
  fill(0); 
  image(img[14], width/3.3, height/1.4,image_size/3,image_size/3); 
  image(img[13], width/2.2, height/1.4,image_size/3,image_size/3);
  image(img[15], width/1.6, height/1.4,image_size/3,image_size/3);
  image(img[21], x1, y1, image_size, image_size/2);   
  sixminusthree_som.play();
}
function level4_5(){
  textSize(25);
  textFont(font);
  fill(0); 
  image(img[16], width/3.3, height/1.4,image_size/3,image_size/3); 
  image(img[13], width/2.2, height/1.4,image_size/3,image_size/3);
  image(img[14], width/1.6, height/1.4,image_size/3,image_size/3);
  image(img[22], x1, y1, image_size, image_size/2);   
  sevenminusfive_som.play();
}
function level4_6(){
  textSize(25);
  textFont(font);
  fill(0); 
  image(img[12], width/3.3, height/1.4,image_size/3,image_size/3); 
  image(img[17], width/2.2, height/1.4,image_size/3,image_size/3);
  image(img[15], width/1.6, height/1.4,image_size/3,image_size/3);
  image(img[23], x1, y1, image_size, image_size/2);   
  eightminustwo_som.play();
}

function level5_1(){
  image(img[24], width/3.5, height/4, image_size/1.5, image_size/1.5); 
  image(img[25], width/2.4, height/4, image_size/1.5, image_size/1.5);
  image(img[26], width/1.8, height/4, image_size/1.5, image_size/1.5);
  image(img[27], width/1.5, height/4, image_size/1.5, image_size/1.5);
  image(img[28], width/2.8, height/1.8, image_size/1.5, image_size/1.5);
  image(img[29], width/2.1, height/1.8, image_size/1.5, image_size/1.5);
  image(img[30], width/1.7, height/1.8, image_size/1.5, image_size/1.5);
  d_som.play(); 
}

function level5_2(){
  image(img[24], width/3.5, height/4, image_size/1.5, image_size/1.5); 
  image(img[25], width/2.4, height/4, image_size/1.5, image_size/1.5);
  image(img[26], width/1.8, height/4, image_size/1.5, image_size/1.5);
  image(img[28], width/2.8, height/1.8, image_size/1.5, image_size/1.5);
  image(img[29], width/2.1, height/1.8, image_size/1.5, image_size/1.5);
  image(img[30], width/1.7, height/1.8, image_size/1.5, image_size/1.5);
  a_som.play(); 
}

function level5_3(){ 
  image(img[25], width/2.4, height/4, image_size/1.5, image_size/1.5);
  image(img[26], width/1.8, height/4, image_size/1.5, image_size/1.5);
  image(img[28], width/2.8, height/1.8, image_size/1.5, image_size/1.5);
  image(img[29], width/2.1, height/1.8, image_size/1.5, image_size/1.5);
  image(img[30], width/1.7, height/1.8, image_size/1.5, image_size/1.5);
  h_som.play(); 
}

function level5_4(){ 
  image(img[25], width/2.4, height/4, image_size/1.5, image_size/1.5);
  image(img[26], width/1.8, height/4, image_size/1.5, image_size/1.5);
  image(img[28], width/2.8, height/1.8, image_size/1.5, image_size/1.5);
  image(img[30], width/1.7, height/1.8, image_size/1.5, image_size/1.5);
  b_som.play(); 
}

function level5_5(){ 
  image(img[26], width/1.8, height/4, image_size/1.5, image_size/1.5);
  image(img[28], width/2.8, height/1.8, image_size/1.5, image_size/1.5);
  image(img[30], width/1.7, height/1.8, image_size/1.5, image_size/1.5);
  z_som.play(); 
}

function level5_6(){ 
  image(img[26], width/1.8, height/4, image_size/1.5, image_size/1.5);
  image(img[28], width/2.8, height/1.8, image_size/1.5, image_size/1.5);
  g_som.play(); 
}

function level5_7(){ 
  image(img[26], width/1.8, height/4, image_size/1.5, image_size/1.5);
  c_som.play(); 
}

function mousePressed() {
  //escolhe jogo
  if(mouseX>(width/7.5)-85 && mouseX<(width/7.5)+85 && mouseY>(height/1.6)-25 && mouseY<(height/1.6)+25){
    level = 1;
    x1 = width/2.3;
    y1 = height/3.5;
  }
  
  if(mouseX>(width/7.5)-85 && mouseX<(width/7.5)+85 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
    level = 7;
    x1 = width/2.3;
    y1 = height/3.5; 
  }
  
  if(mouseX>(width/7.5)-85 && mouseX<(width/7.5)+85 && mouseY>(height/1.1)-25 && mouseY<(height/1.1)+25){
    level = 13;
    x1 = width/2.3;
    y1 = height/3.5; 
  }
  
   if(mouseX>(width/1.2)-80 && mouseX<(width/1.2)+80 && mouseY>(height/1.5)-35 && mouseY<(height/1.5)+35){
    level = 19;
    x1 = width/2.3;
    y1 = height/3.5; 
  }
  
  if(mouseX>(width/1.2)-80 && mouseX<(width/1.2)+80 && mouseY>(height/1.2)-20 && mouseY<(height/1.2)+20){
    level = 25;
  }
  
  //niveis jogo 1
  if(level == 1){
    if(mouseX>(width/2)-34 && mouseX<(width/2)+34 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 2;
    }
  }
  if(level == 2){
    if(mouseX>(width/2.7)-56 && mouseX<(width/2.7)+56 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 3;
    }
  }
  if(level == 3){
    if(mouseX>(width/2)-34 && mouseX<(width/2)+34 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 4;
    }
  }
  if(level == 4){
    if(mouseX>(width/1.5)-42 && mouseX<(width/1.5)+42 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 5;
    }
  }
  if(level == 5){
    if(mouseX>(width/2.7)-56 && mouseX<(width/2.7)+56 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 6;
    }
  }
  if(level == 6){
    if(mouseX>(width/2.1)-56 && mouseX<(width/2.1)+56 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 0;
      celeb_som.play();
    }
  }
   //niveis jogo 2
  if(level == 7){
    if(mouseX>(width/2.7)-56 && mouseX<(width/2.7)+56 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 8;
    }
  }
  if(level == 8){
    if(mouseX>(width/2)-34 && mouseX<(width/2)+34 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 9;
    }
  }
  if(level == 9){
    if(mouseX>(width/1.6)-42 && mouseX<(width/1.6)+42 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 10;
    }
  }
  if(level == 10){
    if(mouseX>(width/2.7)-56 && mouseX<(width/2.7)+56 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 11;
    }
  }
  if(level == 11){
    if(mouseX>(width/2)-34 && mouseX<(width/2)+34 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 12;
    }
  }
  if(level == 12){
    if(mouseX>(width/1.6)-42 && mouseX<(width/1.6)+42 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 0;
      celeb_som.play();
    }
  }
   //niveis jogo 3
  if(level == 13){
    if(mouseX>(width/2.1)-34 && mouseX<(width/2.1)+34 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 14;
    }
  }
  if(level == 14){
    if(mouseX>(width/2.8)-56 && mouseX<(width/2.8)+56 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 15;
    }
  }
  if(level == 15){
    if(mouseX>(width/2.1)-34 && mouseX<(width/2.1)+34 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 16;
    }
  }
  if(level == 16){
    if(mouseX>(width/1.6)-42 && mouseX<(width/1.6)+42 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+2){
      level = 17;
    }
  }
  if(level == 17){
    if(mouseX>(width/2.8)-56 && mouseX<(width/2.8)+56 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 18;
    }
  }
  if(level == 18){
    if(mouseX>(width/2)-42 && mouseX<(width/2)+42 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 0;
      celeb_som.play();
    }
  }
   //niveis jogo 4
  if(level == 19){
    if(mouseX>(width/2)-34 && mouseX<(width/2)+34 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 20;
    }
  }
  if(level == 20){
    if(mouseX>(width/2.7)-56 && mouseX<(width/2.7)+56 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 21;
    }
  }
  if(level == 21){
    if(mouseX>(width/2)-34 && mouseX<(width/2)+34 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 22;
    }
  }
  if(level == 22){
    if(mouseX>(width/1.6)-42 && mouseX<(width/1.6)+42 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+2){
      level = 23;
    }
  }
  if(level == 23){
    if(mouseX>(width/2.7)-56 && mouseX<(width/2.7)+56 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 24;
    }
  }
  if(level == 24){
    if(mouseX>(width/2)-42 && mouseX<(width/2)+42 && mouseY>(height/1.3)-25 && mouseY<(height/1.3)+25){
      level = 0;
      celeb_som.play();
    }
  }
  //niveis jogo 5
  if(level == 25){
    if(mouseX>(width/1.5)-30 && mouseX<(width/1.5)+30 && mouseY>(height/3)-30 && mouseY<(height/3)+30){
      level = 26;
    }
  }
  if(level == 26){
    if(mouseX>(width/3.1)-30 && mouseX<(width/3.1)+30 && mouseY>(height/3)-30 && mouseY<(height/3)+30){
      level = 27;
    }
  }
  if(level == 27){
    if(mouseX>(width/2)-30 && mouseX<(width/2)+30 && mouseY>(height/1.5)-30 && mouseY<(height/1.5)+30){
      level = 28;
    }
  }
  if(level == 28){
    if(mouseX>(width/2.3)-30 && mouseX<(width/2.3)+30 && mouseY>(height/3)-30 && mouseY<(height/3)+30){
      level = 29;
    }
  }
  if(level == 29){
    if(mouseX>(width/1.6)-30 && mouseX<(width/1.6)+30 && mouseY>(height/1.5)-30 && mouseY<(height/1.5)+30){
      level = 30;
    }
  }
  if(level == 30){
    if(mouseX>(width/2.7)-30 && mouseX<(width/2.7)+30 && mouseY>(height/1.5)-30 && mouseY<(height/1.5)+30){
      level = 31;
    }
  }
  if(level == 31){
    if(mouseX>(width/2.7)-30 && mouseX<(width/1.7)+30 && mouseY>(height/3)-30 && mouseY<(height/3)+30){
      level = 0;
      celeb_som.play();
    }
  }
}


