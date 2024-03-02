import { list } from "./dependecies.mjs";
import { LinkedList } from "./models/LinkedList.mjs";
import { audios } from "./models/audios.mjs";


let audio1 = new audios()
audio1.setPath("/src/Album/01.wav")
 
let audio2 = new audios()
audio2.setPath("/src/Album/02.wav")

let audio3 = new audios()
audio3.setPath("/src/Album/03.wav")

let audio4 = new audios()
audio4.setPath("/src/Album/04.wav")



list.push(audio1)
list.push(audio2)
list.push(audio3)
list.push(audio4)



console.log(list.size())

let audio

let play = document.getElementById("play")
play.addEventListener("click" ,  ()=>{
audio = new Audio(audio1.getPath())
    audio.play()
})

let stop = document.getElementById("stop")
stop.addEventListener("click" , ()=>{
    audio.pause()
})


let j= 1
let next = document.getElementById("next")
next.addEventListener("click" , ()=>{
audio.pause()
let cancion
for( let i = 0; i<list.size();i++){
    if(i == j){
        console.log(list.getElementAt(i).getData().getPath())
  cancion = list.getElementAt(i).getData().getPath()
    }
}
j++
audio = new Audio(cancion)
audio.play()
})

let before = document.getElementById("before")
before.addEventListener("click" , ()=>{
    audio.pause()
    let cancion
    for( let i = 0; i<list.size();i++){
        if(i == j){
            console.log(list.getElementAt(i).getData().getPath())
      cancion = list.getElementAt(i).getData().getPath()

        }
    }
    j--

    audio = new Audio(cancion)
    audio.play()

})