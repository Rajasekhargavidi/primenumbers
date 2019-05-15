/*let primenumber = function(){}
for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i==0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}
//console.log(counter);*/


 /*
  function prime(num) {

    var prime_num1 = [],
        prime_num2 = [];
    for (var i = 0; i <= num; i++) {
      prime_num2.push(true);
    }
    for (var i = 2; i <= num; i++) {
      if (prime_num2[i]) {
        prime_num1.push(i);
        for (var j = 1; i * j <= num; j++) {
          prime_num2[i * j] = false;
        }
      }
    }
  
    return prime_num1;
  }


  console.log(prime(19));*/

  function multiplyMatrix(matrixA, matrixB)
{
    var result = new Array();//declare an array   

    //var numColsRows=$("#matrixRC").val();
    numColsRows=2;
    
    //iterating through first matrix rows
    for (var i = 0; i < numColsRows; i++) 
    {
        //iterating through second matrix columns
        for (var j = 0; j < numColsRows; j++) 
        { 
            var matrixRow = new Array();//declare an array
            var rrr = new Array();
            var resu = new Array();
            //calculating sum of pairwise products
            for (var k = 0; k < numColsRows; k++) 
            {
                rrr.push(parseInt(matrixA[i][k])*parseInt(matrixB[k][j]));
            }//for 3
            resu.push(parseInt(rrr[i])+parseInt(rrr[i+1]));

            result.push(resu);
            
            //result.push(matrixRow);
        }//for 2
    }//for 1
   // console.log(result); return result;
    
}//
