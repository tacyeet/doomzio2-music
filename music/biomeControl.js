
import {BIOMES} from './music/biomes.js'

let currentBiome="forest"

export function setBiome(b){
currentBiome=b
const cfg=BIOMES[b]
if(cfg && window.lofiEngine){
window.lofiEngine.setTempo(cfg.tempo)
}
}
