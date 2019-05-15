//    let a=0;
  //  let b=1;
    //let c;




//for(i=0;i<=10;i++) {
 //c= a+b;
 //a=b;
 //b=c;
 //console.log(c)
//};
let fib = function(n){
    let a=0;
    let b=1;
    let c;
    for(i=0;i<=n;i++) {
     c=a+b;
     a=b;
     b=c;
     console.log(c)
    }
}

fib(20)

