
import {engine} from "./music/engine.js"

await engine.init()

document.getElementById("play").onclick=()=>engine.start()
document.getElementById("pause").onclick=()=>engine.stop()

document.getElementById("tempo").oninput=e=>engine.setTempo(e.target.value)
