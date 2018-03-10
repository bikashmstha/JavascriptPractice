function b() {
    
    console.log(myvar);
    function c() {
    
        console.log(myvar);
        
    }
    //var myvar=10;
    console.log(myvar);
    
    c();
}

function a() {
  var myvar=2;
    
    b();
}

var myvar=1;

a();
/*
Output is:
1
1
1
*/