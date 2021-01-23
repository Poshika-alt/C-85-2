var canvas= new fabric.Canvas('my_canvas');


car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=100;

background_imgtag="racing.png";
car1_imgtag="car1.png";
car2_imgtag="car2.png";

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=upload_background;
    background_imgtag.src=background_image;
    car1_imgtag=new Image();
    car1_imgtag.onload=upload_rover;
    car1_imgtag.src=rover_image;
    car2_imgtag=new Image();
    car2_imgtag.onload=upload_rover;
    car2_imgtag.src=rover_image;
}

function upload_background(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function upload_car1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);  
}
function upload_car2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);  
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        car1_up();
        console.log("up arrow");
    }
    if(keyPressed=='40'){
        car1_down();
        console.log("down arrow");
    }

    if(keyPressed=='37'){
        car1_left();
        console.log("left arrow");
    }

    if(keyPressed=='39'){
        car1_right();
        console.log("right arrow");
    }

    if(keyPressed=='87'){
        car2_up();
        console.log("w");
    }

    if(keyPressed=='83'){
        car2_down();
        console.log("s");
    }

    if(keyPressed=='65'){
        car2_left();
        console.log("a");
    }

    if(keyPressed=='68'){
        car2_right();
        console.log("d");
    }

}

function car1_up(){
    if(rover_y>=0){
        rover_y-=10;
        console.log("when up arrow is pressed="+rover_x+"-"+rover_y);
       upload_background();
       upload_rover();
    }
}

function car1_down(){
    if(rover_y<=500){
        rover_y+=10;
        console.log("when up arrow is pressed="+rover_x+"-"+rover_y);
       upload_background();
       upload_rover(); 
    }
}

function car1_left(){
    if(rover_x>=0){
        rover_x-=10;
        console.log("when up arrow is pressed="+rover_x+"-"+rover_y);
       upload_background();
       upload_rover(); 
    }
}

    function car1_right(){
        if(rover_x<=700){
            rover_x+=10;
            console.log("when up arrow is pressed="+rover_x+"-"+rover_y);
           upload_background();
           upload_rover(); 
        }
    }

    function car2_up(){
        if(rover_y>=0){
            rover_y-=10;
            console.log("when up arrow is pressed="+rover_x+"-"+rover_y);
           upload_background();
           upload_rover();
        }
    }
    
    function car2_down(){
        if(rover_y<=500){
            rover_y+=10;
            console.log("when up arrow is pressed="+rover_x+"-"+rover_y);
           upload_background();
           upload_rover(); 
        }
    }
    
    function car2_left(){
        if(rover_x>=0){
            rover_x-=10;
            console.log("when up arrow is pressed="+rover_x+"-"+rover_y);
           upload_background();
           upload_rover(); 
        }
    }
    
        function car2_right(){
            if(rover_x<=700){
                rover_x+=10;
                console.log("when up arrow is pressed="+rover_x+"-"+rover_y);
               upload_background();
               upload_rover(); 
            }
        }