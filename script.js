let name = "oyindamola";
let course = ["HTML", "CSS", "JavaScript", "NodeJs"];

if((course.length%2) === 0){
    const evenNumber = [];
    for(let i=0; i<=200; i++) {
        if( i%2 === 0 ){
            evenNumber.push(i);
        }
    }
    console.log(evenNumber);
} else {
    const oddNumber = [];
    for(let i=0; i<=200; i++) {
        if( i%2 !== 0 ){
            oddNumber.push(i);
        }
    }
    console.log(oddNumber);
}

