let divisible = (num) => {
    let array1 = [];
    for ( let i = 1; i <= num; i++ ) {
        if( i%2 === 0 ) {
            if ( i % 3 ===  0 && i % 5 === 0 ) {

                array1.push('yu-gi-oh');

            } else if( i % 3 === 0 ) {

                array1.push('yu-gi');

            } else if ( i % 5 === 0 ) {

                array1.push("yu-oh");

            } else {

                array1.push('yu');

            }
        } else if ( i%3 === 0 ) {
            if ( i % 2 ===  0 && i % 5 === 0 ) {

                array1.push('yu-gi-oh');

            } else if( i % 2 === 0 ) {

                array1.push('gi-yu');

            } else if ( i % 5 === 0 ) {

                array1.push("gi-oh");

            } else {

                array1.push('gi');

            }
        }else if ( i%5 === 0 ) {
            if ( i % 2 ===  0 && i % 3 === 0 ) {

                array1.push('yu-gi-oh');

            } else if( i % 2 === 0 ) {

                array1.push('oh-yu');

            } else if ( i % 3 === 0 ) {

                array1.push("oh-gi");

            } else {

                array1.push('oh');

            }
        } else {

            array1.push(i);
        }
    }
    return array1;
}

console.log( divisible(100) );
console.log( divisible(500) );
