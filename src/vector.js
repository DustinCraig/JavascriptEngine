

export default class Vector {

    constructor(_x, _y) {
        this.x = _x; 
        this.y = _y;
    }

    mag() {
        return(Math.sqrt((this.x * this.x) + (this.y * this.y)))
    }

    unit() {
        return [this.x = this.x / this.mag(), this.y = this.y / this.mag()]
    }
}