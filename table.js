class Table {
  constructor(w,h,b){
    this.w       = w;
    this.h       = h;
    this.b       = b; //grosimea chenarului imprejurul mesei
    this.baskets = [
      new Basket(1,  -b     ,-b  , b ),
      new Basket(2,  0.5*w  ,-b  , b ),
      new Basket(3,  w      ,-b  , b ),
      new Basket(4,  w      ,h   , b ),
      new Basket(5,  0.5*w  ,h   , b ),
      new Basket(6,  -b     ,h   , b )
    ]; //lista de cosuri
    this.balls   = []; //lista de bile
  }

  addBall(b){
    this.balls.push(b);
  }

  render(){
    var html=`
      <div id="table" style="width:${this.w}px; height=${this.h}px; border-width: ${this.b}px;">
      </div>
    `;
    document.body.innerHTML += html;
    for (var i = 0; i < this.baskets.length; i++) {
      this.baskets[i].render();
    }
    for (var i = 0; i < this.balls.length; i++) {
      this.balls[i].render();
    }
  }
}
