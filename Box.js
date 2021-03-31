class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("polygon.png");
      World.add(world, this.body);
    }

    score () {
      if(this.visibility<0){
        score++;
      }
    }

    display(){
    var pos =this.body.position;

     if(this.body.speed < 3){

      imageMode(CENTER);
      //fill("Blue");
      image(this.image,pos.x, pos.y, this.width, this.height);

     }

     else{

       //World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();

     }

    }
  };

  