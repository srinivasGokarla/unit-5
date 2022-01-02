const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
            if(!head)
            {
                head = new LinkedListNode(data,null)
                return head;
            }
   let cur = head;
   
   while(cur.next)
   {
       cur = cur.next;
   }
   
   cur.next = new LinkedListNode(data,null)
   return head
}