let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let comidas = {
    x: Math.floor(Math.random() * 15 + 1)* box,
    y: Math.floor(Math.random() * 15 + 1)* box
}


function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box );
}

function criarCobra(){
    for ( index = 0; index < snake.length; index++) {
        context.fillStyle = "blue";
        context.fillRect(snake[index].x, snake[index].y, box,box);
    }
}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function comida(){
    context.fillStyle = "red";
    context.fillRect(comidas.x, comidas.y, box, box);
}

function iniciarJogo(){

    

    if(snake[0].x>15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x<0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y>15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y<0 && direction == "up") snake[0].y = 16 * box;

for(i=1; i< snake.length; i++){
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
        clearInterval(jogo);
        alert("GAME OVER :(");
    }
}

    criarBG();
    criarCobra();
    comida();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX +=box;
    if(direction == "left") snakeX -=box
    if (direction == "up") snakeY -=box;
    if(direction == "down") snakeY +=box;

    if(snakeX != comidas.x || snakeY!= comidas.y){
        snake.pop();
    }else{
        comidas.x = Math.floor(Math.random() * 15 + 1)* box;
        comidas.y = Math.floor(Math.random() * 15 + 1)* box;
    }
    

    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);


