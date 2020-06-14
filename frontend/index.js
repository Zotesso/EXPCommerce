window.addEventListener('load', function() {
  //  var navbarIcon = document.getElementById("myTopnav");
    var loginOpener = document.getElementsByClassName("Loginbtn")[0];
    ChangeCards(1);
    function ChangeCards(index){
       let activeIndex;
        var Cards = document.getElementsByClassName("card");
         for( i = 0 ; i < Cards.length; i++){
            if (Cards[i].className == "card active"){
                activeIndex = i;
                Cards[i].className = "card";
            }
         }
        
        let n = activeIndex + index;

        if( n > Cards.length - 1){n = 0}
        if( n < 0){n = Cards.length - 1}
         Cards[n].className += " active";
         if(index == -1){
         Cards[Cards.length - 1].parentNode.insertBefore(Cards[Cards.length - 1],Cards[0]);
         }
         if(index == 1){
            Cards[0].parentNode.insertBefore(Cards[0],Cards[Cards.length]);
         }

         setTimeout(ChangeCards.bind(null, 1 ), 2000)
       }
    //Open the form to login
    loginOpener.onclick = function(){
        document.getElementsByClassName("login-menu")[0].style.height = "100%";
    }

    //Close the form to login
    document.getElementsByClassName("closebtn")[0].onclick = function(){
        document.getElementsByClassName("login-menu")[0].style.height = "0%";
    }

    //Product Slides
    document.getElementsByClassName("next")[0].onclick = function(){

        ChangeCards(-1);
    }

    document.getElementsByClassName("prev")[0].onclick = function(){
 
        ChangeCards(1);
    }
})