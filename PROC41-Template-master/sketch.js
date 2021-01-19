const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
 var engine,world
 var umbrella,drops1=[]
 var maxDrops=100
 var thunder1,thunder2,thunder3,thunder4
 var thunderFrame
 var thunder

function preload(){
    thunder1=loadImage("1.png")
    thunder2=loadImage("2.png")
    thunder3=loadImage("3.png")
    thunder4=loadImage("4.png")

}

function setup(){
   createCanvas(400,700)
    engine=Engine.create()
    world=engine.world
    umbrella=new Umbrella(200,570) 
    for(var i=0;i<maxDrops;i++){
        drops1.push(new drops(random(0,400), random(0,400)))
    }
}

function draw(){
    background("black")
    Engine.update(engine)
    umbrella.display()
    for(var i=0;i<maxDrops;i++){
        drops1[i].display()
        drops1[i].update()
    }
    var select=Math.round(random(1,4))
    if(frameCount%80===0){
        console.log(frameCount)
        thunderFrame=frameCount
        thunder=createSprite(random(10,370),random(10,30),10,10)
        switch(select){
            case 1:thunder.addImage(thunder1)
            break
            case 2:thunder.addImage(thunder2)
            break
            case 3:thunder.addImage(thunder3)
            break
            case 4:thunder.addImage(thunder4)
            break
        }
        thunder.scale=random(0.3,0.6)
    }
    if(thunderFrame+10===frameCount && thunder){
        thunder.destroy()
    }
    drawSprites()
}   

