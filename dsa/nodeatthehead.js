const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    const newHead = new LinkedListNode(data,null)
    
    newHead.next = head;
    head = newHead;
    return head
}