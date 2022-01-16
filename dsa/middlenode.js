const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// var middleNode = function(head) {
    
// };
var middleNode = function(head) {
  
  var first = head;
    var last = head;

    while(last!=null && last.next!=null)
    {
        last = last.next.next;
        first = first.next;
    }

    return first.data;
    

    
};
