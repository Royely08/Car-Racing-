canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 90;
car1_x = 10;
car1_y = 10;

car2_width = 100;
car2_height = 90;
car2_x = 10;
car2_y = 100;

background_img = "Racing Road.jpg";
car1_img = "Car 1.png";
car2_img = "Car 2.png"

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_img;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2()
{
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '38')
    {
        up();
        console.log("Up");
    }

    if (keyPressed == '40')
    {
        down();
        console.log("Down");
    }

    if (keyPressed == '37')
    {
        left();
        console.log("Left");
    }

    if (keyPressed == '39')
    {
        right();
        console.log("Right")
    }

    if (keyPressed == '61')
    {
        a();
        console.log("Up Car 2")
    }

    if (keyPressed == '73')
    {
        s();
        console.log("Down Car 2")
    }

    if (keyPressed == '77')
    {
        w();
        console.log("Left Car 2")
    }

    if (keyPressed == '61')
    {
        d();
        console.log("Rigth Car 2")
    }
}

function up()
{
    if (car1_y >= 0){
        car1_y -= 10;
        console.log("When UP arrow is pressed, x = " + car1_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2()
    }
}

function a()
{
    if (car2_y >= 0){
        car2_y -= 100;
        console.log("When UP arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2()
    }
}

function down()
{
    if(car1_y <= 500){
        car1_y += 10;
        console.log("When DOWN arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function s()
{
    if(car2_y <= 500){
        car2_y += 100;
        console.log("When DOWN arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function left()
{
    if (car1_x >= 0){
        car1_x -= 10;
        console.log("When LEFT arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function w()
{
    if (car2_x >= 0){
        car2_x -= 10;
        console.log("When LEFT arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function right()
{
    if (car1_x <= 700){
        car1_x += 10;
        console.log("When RIGHT arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function d()
{
    if (car2_x <= 700){
        car2_x += 10;
        console.log("When RIGHT arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
if(car2_x > 700)
{
    console.log("Car 1 Won");
    document.getElementById('game_status').innerHTML = 'Car 1 Won!!!';
}



