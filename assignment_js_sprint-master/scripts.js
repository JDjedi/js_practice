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

  compareArrays: function(){ 
    var startArr = [1,2,4,3];
    var diffArr = [1,2,3,4];

    if (startArr.length != diffArr.length){
      return false;
    }

    for (i=0; i < startArr.length; i++){
      if (startArr[i] === diffArr[i]){
        //console.log(startArr[i] + " " + diffArr[i]);
      } else {
        //console.log(startArr[i] + " " + diffArr[i]);
      };
      console.log(i)
    };
  },

  fizzBuzz: function(){  
    // your code here
  },

  myMap: function(){  
    // your code here
  },

  primes: function(){  
    // your code here
  },
}