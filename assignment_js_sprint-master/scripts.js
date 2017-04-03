// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(){  
    var array = [2,4,2,1,5,2,5];
    array.sort();
    return array.pop();
  },
  
  reversed: function(){  
    var input = "I am a special string!";
    var array = input.split("");
    return array.reverse().join("");
  },

  loudSnakeCase: function(){  
    var input = "I am a strange code. I like it though!";
    input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    input = input.replace(/[" "]/g, "_");
    return input;
  },

  function compareArrays(){ 
    var startArr = [1,2,3,4];
    var diffArr = [1,2,5,6];

    if (startArr.length != diffArr.length){
      return false;
    }

    for (i=0; i < startArr.length; i++){
      if (startArr[i] === diffArr[i]){
        continue;
      } else {
        return false;
      }
    }
    
    return true;
  },

compareArrays();
  function numberCounter(){
    var count = 0;

    for (count = 0; count <= 100; count++){
      if (count % 5 == 0 && count % 3 == 0){
        console.log("FizzBuzz");
      }
      else if (count % 3 == 0){
        console.log("Fizz");
      }
      else if (count % 5 == 0){
        console.log("Buzz");
      }
      else {
        console.log(count);
      }
    }
  }

  numberCounter(count);
  },

  myMap: function(){  
    function doSomething(array){
      array.forEach(function(element){
        console.log(element);
      });
    }

    function myMap(array, doSomething){
      doSomething(array);
    }


    myMap([1,2,3,4], doSomething);
  },

  primes: function(){  
    // your code here
  },
}


