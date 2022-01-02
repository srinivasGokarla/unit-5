const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    var prev = null,next=null;
    var curr = head;
    while(curr != null){
        next=curr.next;
        curr.next = prev;
        prev =  curr;
        curr = next;
    }
    head = prev;
    return head
}


