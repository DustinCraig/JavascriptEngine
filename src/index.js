import Engine from "./engine"; 
import Object from "./object"; 
import Vector from "./vector";

let engine = new Engine(); 
let testObj = new Object(); 
testObj.mass = 2; 
engine.addObject(testObj); 

engine.update = (dt) => {
    //console.log(testObj.momentum(), testObj.velocity); 
    if(engine.input.isKeyDown("KeyW")) {
        testObj.addForce(new Vector(0, -5*dt)); 
    }
    if(engine.input.isKeyDown("KeyS")) {
        testObj.addForce(new Vector(0, 5*dt)); 
    }
    if(engine.input.isKeyDown("KeyA")) {
        testObj.addForce(new Vector(-5*dt, 0)); 
    }
    if(engine.input.isKeyDown("KeyD")) {
        testObj.addForce(new Vector(5*dt, 0)); 
    }
}