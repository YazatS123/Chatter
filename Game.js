var second = 2;
class Game {
          constructor(){
            this.chat = createInput("").attribute("placeholder", "text");
            this.enter = createButton("Go");
          }
        
          /*getState(){
            var gameStateRef  = database.ref('gameState');
            gameStateRef.on("value",function(data){
               gameState = data.val();
            })
        
          }*/
        
          /*update(state){
            database.ref('/').update({
              gameState: state
            });
          }*/
        
          async start(){
              player = new Player();
              var playerCountRef = await database.ref('playerCount').once("value");
              if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
              }
              form = new Form()
              form.display();

          }
        
          play(){
            if(filledOut === 1){
            form.hides();
            }
            //var defv = "chats";
            //console.log(database);
            //database.ref(defv).set();
            Player.getPlayerInfo();
            //player.getFinishedPlayers();

            if(allPlayers !== undefined){
              //var display_position = 100;
              //index of the array
              //var index =0-1, y=1;
              /*while(y < 2){
              for(var plr in allPlayers){
                if(plr.name = player.name){
                  y = 3;
                }
                index += 1;
              }}*/
              //x and y position of the cars
              //var x =200;
              //var y;
              this.enter.mousePressed(()=>{
                player.setChatCount();
                //second+=1;
                second = second + 1;
                
                var chatter = "chats/chat" + second;
                var name = player.name;
                var text = this.chat.value();
                database.ref(chatter).set({
                  sender: name,
                  message: text
                })
                
                console.log(second);
                player.updateChatCount(second)
              })
            }
        /*console.log(displayHeight)
        console.log(  player.distance  )*/
          
          //display sprites
          drawSprites();
        }
        display(){
          //var allChats
          var chatRef = database.ref('chats');
          chatRef.on('value',(data)=>{
            allChats = data.val();
          })
          //console.log(allChats)
          var yPos = 50;
          for(var texta in allChats){
            yPos += 500;
            var five = texta.message;
            var sender = texta.sender;
            console.log(five + "     " + sender);
            imageMode(CENTER);
            //image(chatbox, displayWidth/2, yPos, 160, 400);
            textSize(15);
            text(sender, yPos + 5, displayWidth/2 - 375);
            textSize(20);
            text(five, yPos + 10, displayWidth/2 - 380);
          }
        }
        
  }
