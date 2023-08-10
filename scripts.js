

function test(){
console.log("test");
}

document.getElementById("cat").style.display = "none";
document.getElementById("itoff").style.display = "none";
document.getElementById("game").style.display = "none";
document.getElementById("ajr").style.display = "none";
document.getElementById("name").style.display = "none";
document.getElementById("volume").style.display = "none";
document.getElementById("myself").style.display = "none";
document.getElementById("bday").style.display = "none";

let drum1 =false;
let drum2 =false; 
let drum3 =false; 
let drum4 =false; 
let drum5 =false; 
let drum6 =false; 
let drum7 =false;  

function openCard() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";

    var music = document.getElementById("music");
    music.play();
  }

  //new code below
function imgOff1(){
    document.getElementById("cat").style.display = "none";
    document.getElementById("").style.display = "none";
    document.getElementById("").style.display = "none";
    document.getElementById("").style.display = "none";
    document.getElementById("").style.display = "none";
}

function imgOff2(){
    document.getElementById("itoff").style.display = "none";
}

  function imgOff(){
    setTimeout(() => imgOff1(), 1000)
  }

  function imgOff3(){
    setTimeout(() => imgOff2(), 1500)
  }

  function imgOff4(){
    setTimeout(() => imgOff4a(), 2000)
  }
  function imgOff4a(){
    document.getElementById("game").style.display = "none";
}

function imgOff5(){
    setTimeout(() => imgOff5a(), 2300)
  }
  function imgOff5a(){
    document.getElementById("ajr").style.display = "none";
}

function imgOff6(){
    setTimeout(() => imgOff6a(),5900)
  }
  function imgOff6a(){
    document.getElementById("name").style.display = "none";
}

function imgOff7(){
    setTimeout(() => imgOff7a(),4000)
  }
  function imgOff7a(){
    document.getElementById("volume").style.display = "none";
}

function imgOff8(){
    setTimeout(() => imgOff8a(),4000)
  }
  function imgOff8a(){
    document.getElementById("myself").style.display = "none";
}
  

document.getElementById("one").onclick = function(){
    document.getElementById("itoff").style.display = "block";
    shake.play();
    imgOff3();
    drum1=true;
  };
  
document.getElementById("two").onclick = function(){
    document.getElementById("cat").style.display = "block";
    meow.play();
    imgOff();
    drum2=true;
  };

  document.getElementById("three").onclick = function(){
    document.getElementById("game").style.display = "block";
    games.play()
    imgOff4();
    drum3=true;
    };

  document.getElementById("four").onclick = function(){
    document.getElementById("ajr").style.display = "block";
    bang.play()
    imgOff5();
    drum4=true;
    };

  document.getElementById("five").onclick = function(){
    document.getElementById("name").style.display = "block";
    imgOff6();
    blank.play();
    drum5=true;

};

  document.getElementById("six").onclick = function(){
    document.getElementById("volume").style.display = "block";
    imgOff7();
      volume1.play()
      drum6=true;
    };

  document.getElementById("seven").onclick = function(){
    document.getElementById("myself").style.display = "block";
      imgOff8();
      intro.play()
        drum7=true;
    };

    function bday(){
        setTimeout(() => bdayOn(),60000)
      }
      function bdayOn(){
        ivy.play()
        document.getElementById("bday").style.display = "block";
        
    }

bday();