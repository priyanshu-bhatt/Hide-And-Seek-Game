var stopfunction=true;
const  gift1=Math.floor(Math.random() * 36)+1
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
        console.log(bomb);
       
        var win_counter=0;
        var loose_counter=0;
        
        var collection = document.getElementsByClassName("grid-item");
        
        ar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
            16,17,18,19,20,21,22,23,24,25,26,27,28,
            29,30,31,32,33,34,35,36];
            function fun(){
                
                //document.getElementById('lets-go').play();
                
                var input_value=parseInt(document.getElementById("inp1").value);
                if((input_value==gift1 || input_value==gift2 || input_value==gift3) && ar.includes(input_value)){
                    document.getElementById('lets-go').pause();
                    //console.log("gift!!")
                    //console.log(collection[input_value-1].innerHTML);
                    //document.getElementById('lets-go').pause();
                    ar = ar.filter(item => !(item == collection[input_value-1].innerHTML));
                    console.log(ar)
                    
                    collection[input_value-1].innerHTML="Gift🎁!!";
                    collection[input_value-1].style.background="linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722)";
                    
                    document.getElementById('gift-found').play();
                    //setTimeout('document.getElementById("lets-go").play();', 1000);
                    
                    //document.getElementById('lets-go').pause();
                    //document.getElementById('gift-found').play();
                    //setTimeout('document.getElementById("lets-go").play();', 1000)
                     // [1, 2, 3]
                     win_counter++;

                     if(win_counter==3){
                        stopfunction=false;
                        //document.getElementById('lets-go').pause();
                        //document.getElementById('gift-found').pause();
                        //document.getElementById('redeem').play();
                        collection[input_value-1].style.background="linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722)";

                        collection[input_value-1].style.opacity=1;
                        collection[input_value-1].innerHTML= "<a style='text-decoration:none;' href='#popup1'>Reedem Gift!!</a>";
                        
                        var lets=document.getElementById('lets-go')
                       lets.volume=0;
                       var found  =document.getElementById("gift-found");
                       found.volume=0;
                        //document.getElementById('gift-found').volume();
                        var final=document.getElementById('final-game').loop=true;
                        document.getElementById('final-game').play();
                        
                       
                        document.getElementById("accuracy").innerHTML="<b>You took "+ (loose_counter+ win_counter) +"chances to Win</b>";
                        win_counter=0;
                    }
                    // else{
                    //     alert("Just "+(3-win_counter)+" Gifts left to be found")
                    // }
                   }
                   else{

                    loose_counter++;
                    console.log("it runs")
                    if(input_value>=37){
                        document.getElementById("alert").innerHTML="Enter A Valid Value";
                        alertfun();
                    }
                        else{
                            
                            
                    console.log("loose"+loose_counter)
                    document.getElementById('loose').play();
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
        document.getElementById("guideline").style.display = "none";
        document.getElementById("main-button").style.display = "none";
        //document.getElementById("text").style.removeProperty('font-size');
        //document.getElementById("body").removeAttribute("class");
        //document.getElementById("body").setAttribute("class", "bodycss");   
    }
    function music(){
        document.getElementById('lets-go').play();
    }
    
    function timer(){
        var totaltry=0;
        var chances=2;
        var time=document.getElementsByClassName("timer")
         
         var timings=60;
         var i=1;
             var myInterval = setInterval(Timeout, 1000);
            function Timeout(){
             if(!stopfunction) return;
             else{
                time[0].innerHTML=`${(timings*60-i)%60}`
                
        i++;
       if(time[0].innerHTML==0 && totaltry<=2){
        console.log("total in if"+totaltry)
        var lets=document.getElementById('lets-go').loop=true;
        lets.volume=0;
        document.getElementById('game-over').play();
        lets.volume=1;
        alert("Opps Times Up, You have "+(chances-totaltry)+" chances left")
        
        //window.location = window.location.href;
        totaltry++;
        if(totaltry>2){
            alert("Time's UP,All Your progess is Lost !!")
            console.log("more than 3 times played")
            document.getElementById('game-over').play();
            window.location = "index.html"
           }
       }
    }
    
   
     }
       
            } 

            function alertfun(){
                document.getElementById("alert").style.display="inline";
              setTimeout(function func(){
                
                $("#alert").show("slow").hide("slow");
                },2000)
              }
            
            
          
    
    
     //The code to check the issue in the timer problem and I am 

        