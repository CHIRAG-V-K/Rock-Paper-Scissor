
function rpsGame(yourchoice){
   var humanchoice = yourchoice.id;
   var botchoice = numberToChoice(randomSelector());//0=rock,1=paper,2=scissor
   var result = decideWinner(humanchoice, botchoice);//[1,0]or[0,1]or[0.5,0.5]
   var message = finalMessage(result); //youwon or you lost!
   rpsFrontEnd(humanchoice,message,botchoice);

   var playAgain =document.createElement('button');
   playAgain.setAttribute('class','btn btn-primary');
   playAgain.setAttribute('onclick','pAButton()');
   playAgain.innerHTML="Play Again";
   document.getElementById('button').appendChild(playAgain);



}
function pAButton(){
   window.location.reload();
}






function randomSelector(){
   return Math.floor(Math.random()*3);
}

function numberToChoice(number){
   return ['rock', 'paper', 'scissor'][number] ;
 }
 
 function decideWinner(humanchoice,botchoice){
   var rpsdatabase= {
     "rock": {"rock":0.5,"paper":0,"scissor":1},
     "paper": {"rock":1,"paper":0.5,"scissor":0},
     "scissor": {"rock":0,"paper":1,"scissor":0.5}
   };
   var humanscore = rpsdatabase[humanchoice][botchoice];
   return humanscore;
 }
 
 function finalMessage(results){
   if(results === 1){
     return {'message':"You Won :)",'color':'green'};
   } else if(results === 0.5){
     return {'message':"Tied",'color':"yellow"};
   }else{
     return {'message':"You Lost :(",'color':"red"};
   }
 }
 
 function rpsFrontEnd(_humanchoice,_message, _botchoice){
   var imagedatabase = {
     "rock": document.getElementById('rock').src,
     "paper": document.getElementById('paper').src,
     "scissor": document.getElementById('scissor').src
   };
   //lets remove all imges and replace it with result
   document.getElementById('rock').remove();
   document.getElementById('paper').remove();
   document.getElementById('scissor').remove();
   
   //lets set the visual result screen
   var botdiv= document.createElement("div");
   botdiv.innerHTML= "<h5>Bot</h5><img src= '"+imagedatabase[_botchoice]+"'width= 150px height= 150px style= 'box-shadow: 0px 20px 75px red;'>";  
   document.getElementById('flex-box-rps-div').appendChild(botdiv);
 
   var messagediv= document.createElement('div');
   messagediv.innerHTML="<h1 style='color:"+_message['color'] +";font-size:60px; padding: 30px;'>"+_message['message']+ "</h1>";
   document.getElementById('flex-box-rps-div').appendChild(messagediv);
 
   var humandiv= document.createElement("div");
   humandiv.innerHTML= "<h5>You</h5><img src= '"+imagedatabase[_humanchoice]+"'width= 150px height= 150px style= 'box-shadow: 0px 20px 75px blue;'>";  
   document.getElementById('flex-box-rps-div').appendChild(humandiv);
}


