//What is meant by 'first class object'?

var men = function (objectOfAdmiration) {
    return objectOfAdmiration();
  };
  men.isSweetHeart = true;
  
  var women = function (objectOfAdmiration) {
    return objectOfAdmiration();
  };
  women.isSweetHeart = true;
  
  var aliens = function (objectOfAdmiration) {
    return objectOfAdmiration();
  };
  
  function like(obj){
    if (obj.isSweetHeart) {
        return function (){ return "Holy TRUE!"}; 
    }
    else {
        return function (){ return "Holy CRAP!"};
    }
  }
  
  document.write("Men like women is " + men(like(women))); // -> "Holly TRUE!"
  document.write("</br>");
  document.write("Women like men is " + women(like(men))); // -> "Holly TRUE!"
  document.write("</br>");
  document.write("Men like aliens is " + men(like(aliens))); // -> "Holly CRAP!"
  document.write("</br>");
  document.write("Aliens like women is " + aliens(like(women))); // -> "Holly TRUE!" :)
  document.write("</br>");
  //women(like(aliens)); //  Who knows? Life is sometimes so unpredictable... :)

  //https://stackoverflow.com/questions/705173/what-is-meant-by-first-class-object
  //More complete approval of Strachey-Sussman-Abelson's formulation. So if your 
  //language supports such a construct then you've got a function as a first-class language :)

  //In short, anything is a first-class object if it acts in the language as a state manipulation 
  //sort of object or type of object. Simply something you can operate on and pass around statements 
  //and evaluate in expressions at the same time. Or even shorter: when you can think of a function 
  //as an object that can be additionally invoked.