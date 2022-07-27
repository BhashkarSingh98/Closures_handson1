//qus 1--



function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}
var counter = counter();
// alert(counter());//1
// alert(counter());//2
// alert(counter());//3
// alert(counter());//4


//qus 2---



let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count);/// 1
  }
  console.log(count);/// 0
})();



// qus 3--


for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); /// three time 3
    }, 1000);
}

// qus 4--
//Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function outerFun(l,b)
{
    
    
    return innerFun=(area)=>{
        var area=l*b
        console.log(area);
        
    }
    
}
outerFun(3,5); 
innerFun();



// qus 5 ---
//Take a variable in outer function and create an inner function to increase the counter every time it is called.

function counter(){
    var count = 0;

    return incCounter=()=>{
        count++
        console.log(count);
    }
    
    
}
counter();
 incCounter();
 incCounter();
 incCounter();
 incCounter();



//qus 6
//Print Output

var a = 12;
(function () {
  alert(a);/// 12
})();

// qus 7 ---
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a); /// 12
  };
})();
x();

// qus 8--
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +//123
        "innerArg = " + innerArg + "\n" +//456
        "outerVar = " + outerVar + "\n" +//a
        "innerVar = " + innerVar + "\n" +//b
        "globalVar =" + globalVar);//xyz
    
    })(456);
})(123);
