import { Node } from "./Node.mjs"
import { defaultEquals } from "./Util.js"
export class LinkedList {
    #count
    #head
    #equalsFn
    #tail

    constructor(equalsFn = defaultEquals){
        this.#count = 0
        this.#head = null
        this.#equalsFn = equalsFn
        this.#tail = null
    }
    getTail(){
        return this.#tail
    }
    
    getHead(){
        return this.#head
    }

    push(item) {
        const node = new Node(item)
        let current
        if (this.#head == null) {
            this.#head = node
        } else {
            current = this.#head
            while (current.next != null)
                current = current.next
            current.next = node
        }
        this.#count++
    }

    addlist(item){
        const node = new Node(item)
            if (this.#head == null) {
                this.#head = node
                this.#tail = node  
            } else {
                node.prev = this.#tail
                this.#tail.next = node
                this.#tail = node
            }
            this.#count++
        }
    

    getElementAt(index) {
        if (index>=0 && index<this.#count) {
            let node = this.#head
            for (let i=0;i<index && node != null; i++)
                node = node.next
            return node
        }
        return undefined
    }
    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.#count
    }
    removeAt(index) {
        if (index >= 0 && index ){
            let current =this.#head;
            if (index === 0){
                this.head = current.next
                if ( this.#count ===1){
                    this.tail = undefined
                }   else {
                    this.head.prev = undefined
                }
            } else if ( index === this.#count - 1){
                current = this.tail;
                this.tail = current.prev 
                this.tail.next = undefined
            } else{
                current = this.getElementAt( index)
                const previous = current.prev
                previous.next = current.next
                current.next.prev = previous
            }
            this.#count--
            return current.element
        }
            return undefined
    }
 
    insert ( element, index){
        if ( index >= 0 && index <= this.#count){
            const node = new node(element)
            let current = this.#head
            if ( index === 0){
                if(this.#head == null){
                this.head = node
                node.next = this.head
            } else {
                node.next = current
                current = this.getElementAt(this.size())
                this.head = node
                current.next = this.head}
            } else {
                const previous = this.getElementAt(index - 1)
                node.next = previous.next
                previous.next = node
            }
            this.#count++
            return true
        }
        return false
    }

    indexOf(element) {
        let current = this.#head
        for (let i = 0; i < this.#count && current != null; i++){
            if (this.equalsFN(element , current.element)){
            return i
        }
        current = current.next
    }
    return -1
    }

    remove(element){
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    getHead(){
        return this.#head
    }

}