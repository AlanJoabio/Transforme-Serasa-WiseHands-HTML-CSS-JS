//criar variáveis
var auAu;
var auauImg;
var chao;



//função que carrega imagens
function preload(){
    
    //carregar imagens
    auauImg = loadAnimation("auAu.jpg");
}


//função que inicializa o arquivo
function setup(){
    //cria tamanho do fundo da tela
    //criar sprites
    //carregar imagem
    //colocar tamanho

    alert('-> ALERTA!!! Cuidado com a fofura ! Obrigado Professora Jessica!');

    createCanvas(1325,600);

    auAu = createSprite(655,590,500,200);

    auAu.addAnimation("auAu",auauImg);

    auAu.scale = 0.4;

    auAu.x = 700;

    chao = createSprite(655,590,500,200)
}


//função que executa o programa até que seja parado
function draw(){

    //colocar cor de fundo
    //condição para pular
    //exibir texto de instrução
    //comando que desenha sprites
    text("TE ADORO!!! OBRIGADO!", 200,500 - 30);

    // move();        
             
    if(keyDown("space")){        

        //o que acontece se a condição for verdadeira
        auAu.velocityY = -5; 
    } 

    auAu.velocityY = auAu.velocityY + 0.5;
    auAu.collide(chao);
        
    drawSprites();
    
}

// function move('auauImg'){}