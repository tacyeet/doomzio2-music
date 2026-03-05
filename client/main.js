
import {engine} from './music/engine.js'

const play=document.getElementById("play")
const pause=document.getElementById("pause")
const reset=document.getElementById("reset")

play.onclick=()=>engine.start()
pause.onclick=()=>engine.stop()
reset.onclick=()=>engine.reset()

const biome=document.getElementById("biome")
biome.onchange=()=>engine.setBiome(biome.value)

document.querySelectorAll("input").forEach(i=>{
i.oninput=()=>engine.settings[i.id]=parseFloat(i.value)
})
