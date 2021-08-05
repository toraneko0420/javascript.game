ver c = docment.creatElement("canvas");
ver ctx = c.getContext("2d");
c.width = 1000;
c.heigth = 500;

var size = 15;

docment.body.appendChild(c);

var perm = [];

while (perm.length < 255) {
    while(perm.includes(val = Math.floor(val = Math.random() * 255)));
    perm.push(val);
}

var lerp = (a, b, t) => a + (b - a) * (1 - Math.cos(t * Math.PI)) / 2;

var noise = x => {
    x = x * 0.01 % 255;
    return lerp(perm[Math.floor(x)], perm[Math.ceil(x)], x - Math.floor(x));
}

var player = new function() {
    this.x = c.width / 2;
    this.y = 0;
    this.ySpeed = 0;
    this.rot = 0;
    this.rSpped = 0;

    this.img = new Image();
    this.imgsrc = "image"/MutationObserver.png;
   

    this.draw = function() {
       var p1 = c.heigth - noise(t + this.x) * 0.25;
       var p2 = c.heigth - noise(t + 5 + this.x) * 0.25;

       var groundded = 0

       if(p1 > this.y) {
        this.ySpeed += 0.1;
       } else {
           this.y = p1 - 15;
           this.ySpeed -= this.y - (p1 - 15);

           grounded = 1;
       }

       if(!playing || grounded && Math.abs(this.rot) > Math.PI * 0.5) {
       playing = false;
       this.rSpeed = 5;
       k.ArrowUp = 1;
       this.x -= speed * 5;
       }

       var angle = Math.atan2((p2 - 15) - this.y, (this.x + 5) - this.x);

       // this.rot = angle;

       this.y += this.ySpeed;

       if(grounded && plating) {
         this.rot -= (this.rot - angle) * 0.5;
         thisrSpeed =this.rSpeed - (angle - this.rot);
       }

       this.rSpped += (k.ArrowLeft - k.ArrowRight) * 0.5;
       this.rot -= this.rSpeed * 0.1;

       if(this.rot > Math.PI) this.rot = -Math.PI;
       if(this.rot < -Math.PI) this.rot = -Math.PI;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);
        ctx.drawImagge(this.img, -15, -15, 30, 30);

        ctx.restore();
    }
}

var t = 0;
var speed = 0;
var playing = true;
var k = {ArrowUP: 0, ArrowDown: 0, ArrowLeft: 0, ArrowRight: 0};


function loop() {
    speed -= (speed - (k.ArrowUp - k.ArrowDown)) * 0.1;
    t += 10 * speed;
    ctx.fillStyle = "#19f";
    ctx.fillRect(0, 0, c.width, c.heigth);

    ctx.fillStyle = "black";

    ctx.beginPath();
    ctx.moveTo(0, c.heigth);

    for (var i = 0; i < c.width; i++) {
        ctx.lineTo(i, c.heigth - noise(t + i) * 0.25);
    }

    ctx.lineTO(c.width, c.heigt);

    ctx.fill();

    player.draw();
    requestAnimationFrame(loop);
}

onkeydown = d => k[d.key] = 1;
onkeyup = d => k[d.key] = 0;

loop();
