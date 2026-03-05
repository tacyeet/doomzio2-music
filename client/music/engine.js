
import {BIOMES} from './biomes.js'

let ctx=new (window.AudioContext||window.webkitAudioContext)()
let running=false
let biome="forest"

function tone(f,t){
let o=ctx.createOscillator()
let g=ctx.createGain()
o.frequency.value=f
g.gain.value=0.05
o.connect(g)
g.connect(ctx.destination)
o.start()
o.stop(ctx.currentTime+t)
}

function step(){
if(!running)return
let base=200+Math.random()*200
tone(base,0.4)
setTimeout(step,500)
}

export const engine={
settings:{
tempo:70,
intensity:0.3,
variation:0.5,
density:0.5,
ambient:0.4,
drums:0.3,
bass:0.4,
melody:0.6,
reverb:0.5,
swing:0,
random:0.5
},
start(){
running=true
step()
},
stop(){
running=false
},
reset(){
running=false
ctx=new (window.AudioContext||window.webkitAudioContext)()
},
setBiome(b){
biome=b
let cfg=BIOMES[b]
if(cfg)this.settings.tempo=cfg.tempo
}
}
