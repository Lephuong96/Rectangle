function Rectangle(width,height) {
    this.height = height;
    this.width = width;
    this.getPerimeter = function () {
        return (this.height + this.width) * 2;
    }
    this.getArea = function () {
        return this.height * this.width;
    }
}
function creatRectangle() {
    var ctx = document.getElementById('myCanvas').getContext('2d');
    var width = Math.floor(Math.random()*100);
    var height = Math.floor(Math.random()*100);
    var rec = new Rectangle(width,height);
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(600,350,rec.width,rec.height);
    var peri = rec.getPerimeter();
    var area = rec.getArea();
    document.write('Perimeter: ' + peri + '; ' + 'Area: ' + area);
}
creatRectangle();