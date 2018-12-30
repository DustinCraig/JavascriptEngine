import Vector from "./vector"; 

function add(vectors) {
    var summationVector = new Vector(0,0); 
    // console.log(summationVector);
    vectors.forEach(vector => {
        summationVector.x = summationVector.x + vector.x; 
        summationVector.y = summationVector.y + vector.y; 

    });
    //console.log(summationVector);
    return summationVector; 
}

function multiply(vectors, scalar) {
    if(vectors.length > 1) {    
        var result = []; 
        vectors.forEach(vector => {
            result.push(new Vector(vector.x * scalar, vector.y * scalar)); 
        })
        return result; 
    }
    else {
        return(new Vector(vectors[0].x * scalar, vectors[0].y * scalar)); 
    }
}


export {add, multiply};