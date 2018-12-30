import Vector from "./vector"; 
import {add, multiply} from "./vector_math"; 

export default class Object {

    constructor() {
        this.position = new Vector(0,0); 
        this.velocity = new Vector(0,0); 
        this.mass = 0; 
        this.children = []; 
        
    }
    
    speed() {
        return(this.velocity.mag()); 
    }

    momentum() {
        return(multiply([this.velocity], this.mass))
    }

    translate(newPos) {
        var pos = add([this.position, newPos]);
        this.position.x = pos.x; 
        this.position.y = pos.y; 
    }

    setPos(newPos) {
        this.position = new Vector(newPos.x, newPos.y); 
    }

    setForce(newForce) {
        this.velocity = new Vector(newForce.x, newForce.y); 
    }

    addForce(newForce) {
        this.velocity = add([this.velocity, newForce]); 
    }

    

    draw(ctx) {
        ctx.save();
        if(this.velocity.x != 0 || this.velocity.y != 0) {
            this.position.x = this.position.x + this.velocity.x; 
            this.position.y = this.position.y + this.velocity.y; 
        }
        ctx.translate(this.position.x, this.position.y); 

        ctx.fillStyle = "red";
        ctx.fillRect(0,0, 50, 50); 

        ctx.restore(); 
    }
}