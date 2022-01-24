const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var checkWavePattern = function (head) {
    var curr = head.next;
    var prev = head.data;
    if(head == null || head.next == null) {
        return null
    }
    while(curr.next != null) {
        if(curr.data > curr.next.data) {
            if(prev > curr.data) {
                return "false"
            }
        } else if(curr.data < curr.next.data) {
            if(prev < curr.data) {
                return "false"
            }
        }
        prev = curr.data;
        curr = curr.next;
    }
    return "true"
};


