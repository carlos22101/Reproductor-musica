export class Node {
    #data
    #next
    #prev

    constructor(data ){
        this.#data = data
        this.#next = null
        this.#prev = null
    }
    getData () {
        return this.#data
    }
    getNext(){
        return this.#next
    }
    getPrev(){
        return this.#prev
    }
}