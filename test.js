// var b1 = new Ball("red", 1, 20, 20,0);

var table = new Table(1100,550,50);

// add balls

table.addBall(new Ball("red"  ,0,10,10) );
table.addBall(new Ball("green",1,400,10) );

console.log("intersecreaza?" , table.balls[0].intersects(table.balls[1]));

table.render();


// b1.render();
