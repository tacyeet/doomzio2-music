
let ctx
let buffers={}
let running=false
let tempo=70

const notes=["C4","A4","C5","Ds4","Fs4"]

async function load(){
ctx=new (window.AudioContext||window.webkitAudioContext)()

for(const n of notes){
let r=await fetch("./assets/samples/"+n+".mp3")
let b=await r.arrayBuffer()
buffers[n]=await ctx.decodeAudioData(b)
}

let r=await fetch("./assets/loops/drumloop70_1.mp3")
let b=await r.arrayBuffer()
buffers.drum=await ctx.decodeAudioData(b)
}

function play(buf,v){
let s=ctx.createBufferSource()
let g=ctx.createGain()
s.buffer=buf
g.gain.value=v
s.connect(g)
g.connect(ctx.destination)
s.start()
}

function melody(){
let n=notes[Math.floor(Math.random()*notes.length)]
play(buffers[n],0.4)
}

function drums(){
play(buffers.drum,0.25)
}

function tick(){
if(!running)return
melody()
if(Math.random()>0.65)drums()
setTimeout(tick,60000/tempo)
}

export const engine={
async init(){await load()},
start(){running=true;tick()},
stop(){running=false},
setTempo(t){tempo=t}
}
