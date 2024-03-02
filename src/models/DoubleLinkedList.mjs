import { LinkedList } from "./LinkedList.mjs";

export class DoubleLinkedList extends LinkedList{
    constructor(equalsFn = defaultEquals){
        super (equalsFn)
    }

}