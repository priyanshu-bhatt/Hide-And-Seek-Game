
const  gift1=Math.floor(Math.random() * 9)+1
            const blrand = function(min, max, blacklist) {
            if(!blacklist)
             blacklist = []
             let rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
                let retv = 0;
                while(blacklist.indexOf(retv = rand(min,max)) > -1) { }
                return retv;
        }
        let gift2 = blrand(1, 9, [gift1]);
        let gift3=blrand(1,9,[gift1,gift2]);
        let bomb=blrand(1,9,[gift1,gift2,gift3]);
        
        console.log(gift1);
        console.log(gift2);
        console.log(gift3);
        console.log("bomb "+bomb)
        
        var win_counter=0;
        var loose_counter=0;
        var collection = document.getElementsByClassName("grid-item");
        ar = [1,2, 3,4,5,6,7,8,9];
            function fun(){
                //document.getElementById('lets-go').play();
                
                var input_value=parseInt(document.getElementById("inp1").value);
                if((input_value==gift1 || input_value==gift2 || input_value==gift3) && ar.includes(input_value)){
                    //document.getElementById('lets-go').pause();
                    //console.log("gift!!")
                    //console.log(collection[input_value-1].innerHTML);
                    //document.getElementById('lets-go').pause();
                    ar = ar.filter(item => !(item == collection[input_value-1].innerHTML));
                    console.log(ar)
                    
                    collection[input_value-1].innerHTML="Gift🎁!!";
                    
                    collection[input_value-1].style.background="linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722)";
                    //collection[input_value-1].style.background="none";
                    //collection[input_value-1].style.opacity=0;
                    //collection[input_value-1].innerHTML="R";
                    
                    document.getElementById('gift-found').play();
                    setTimeout('document.getElementById("lets-go").play();', 1000);
                    
                    //document.getElementById('lets-go').pause();
                    //document.getElementById('gift-found').play();
                    //setTimeout('document.getElementById("lets-go").play();', 1000)
                     // [1, 2, 3]
                     win_counter++;

                     if(win_counter==3){
                        //document.getElementById('lets-go').pause();
                        //document.getElementById('gift-found').pause();
                        //document.getElementById('redeem').play();
                        collection[input_value-1].style.background="linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722)";

                        collection[input_value-1].style.opacity=1;
                        collection[input_value-1].innerHTML= "<a style='text-decoration:none;' href='#popup1'>Reedem Gift!!</a>";
                        
                        var lets=document.getElementById('lets-go')
                       lets.volume=0;
                       var found=document.getElementById("gift-found");
                       found.volume=0;
                        //document.getElementById('gift-found').volume();
                        document.getElementById('redeem').play();
                        
                        
                        document.getElementById("accuracy").innerHTML="<b>You took "+ (loose_counter+ win_counter) +"chances to Win</b>";
                        win_counter=0;
                    }
                    //else{
                       //alert("Just "+(3-win_counter)+" Gifts left to be found")
                      //document.getElementById("alert").innerHTML='Just '+(3-win_counter)+' Gifts left to be found';
                    //}
                   }
                   else{

                    loose_counter++;
                    console.log("it runs")
                    if(input_value>=10){
                        document.getElementById("alert").innerHTML="Enter A Valid Value";
                        alertfun();
                        //alert("enter a valid value")
                        //window.location.reload();
                    }
                        else{
                            
                            
                    console.log("loose"+loose_counter)
                    document.getElementById('loose').play();
                    //alert("Duplicate Or Wrong Value given");
                    
                    document.getElementById("alert").innerHTML="Duplicate Or Wrong Value given";
                    alertfun();
                    if(input_value==bomb){
                        document.getElementById('bomb').play();
                        collection[input_value-1].style.background="red";
                        collection[input_value-1].style.color="black";
                        collection[input_value-1].innerHTML="Bomb💣";

                        document.getElementById("alert").innerHTML="All Progress Lost";
                        setTimeout('window.location.reload();', 1000);
                    }
                    else{
                        collection[input_value-1].style.background="Blue";
                        collection[input_value-1].style.color="white";
                        collection[input_value-1].innerHTML="Miss";
                        
                    }
                    
                    console.log("Duplicate Or Wrong Value given");
                          
                    }
                   }
        }
        function showHidden(){
        document.getElementById("hidden").style.display = "grid";
        document.getElementById("glow").style.display = "none";
        document.getElementById("marq").style.display = "none";
        document.getElementById("main-button").style.display = "none";
        //document.getElementById("text").style.removeProperty('font-size');
        //document.getElementById("body").removeAttribute("class");
        //document.getElementById("body").setAttribute("class", "bodycss");   
    }
    function alertfun(){
        document.getElementById("alert").style.display="inline";
      setTimeout(function func(){
        
        $("#alert").show("slow").hide("slow");
        },1100)
      }
    
    
     

        
