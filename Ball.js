class Ball {
    constructor(color, number, x, y, speed) {
        this.color = color;
        this.number = number;
        this.x = Math.round(Math.random()*1000);
        this.y = Math.round(Math.random()*500);
        this.speed = speed;
    }
    render() {
        var html = `
        <div class="ball ball--${this.color}" style="position: absolute; left: ${this.x}px; top:${this.y}px;">
            <div class="number">${this.number}</div>
        </div>
        `;
        document.getElementById('table').innerHTML += html;
    }
}
