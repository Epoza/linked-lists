import Node from "./node.js";

function LinkedList () {
    const list = {
        head: null,
        size: 0
    };

    function append(value) {
        // Put a new node at the end of the list
        const newNode = Node(value);
        if (!list.head) {
            list.head = newNode;
        } else {
            let current = list.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        list.size++;
    };

    function prepend(value) {
        // Put a new node at the beginning of the list
        const newNode = Node(value);
        newNode.next = list.head;
        list.head = newNode;
        list.size++;
    };

    function size() {
        // return the amount of nodes
        return list.size;
    };

    function head() {
        return list.head;
    };

    function tail() {
        let tail = list.head;
        // Go through the nodes until the end is reached
        while(tail.next){
            tail = tail.next;
        }
        return tail
    };

    function at(index) {
        if (index < 0 || index >= list.size) {
            return null; // Out of bounds index
        }
        let nodeAtIndex = list.head;
        // Go through the nodes until index is reached
        while(index > 0){
            nodeAtIndex = nodeAtIndex.next;
            index--;
        };
        return nodeAtIndex;
    };

    function pop() {
        if (!list.head) {
            return null; // Empty list
        }
        let current = list.head;
        let prev = null;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        if (!prev) {
            list.head = null; // If only one element in list
        } else {
            prev.next = null; // Remove the last node
        }
        list.size--;
        return current.value; // Return the value of popped node
    };

    function contains(value) {
        let current = list.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    };

    function find(value) {
        let nodeAtValue = list.head;
        let index = 0;
        while(nodeAtValue){
            if(nodeAtValue.value === value){
                return index;
            }
            nodeAtValue = nodeAtValue.next;
            index++;
        };
        return null;
    };

    function toString() {
        if (!list.head) {
            return "( null )"
        }
        let current = list.head;
        let print = '';
        while (current) {
            print += `( ${current.value} ) -> `
            if(!current.next){
                return print + 'null'
            }
            current.value
            current = current.next;
        }
    };


    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString
    };
};

// Example 
const myLinkedList = LinkedList();
// Add item to linked list
myLinkedList.append("Alligator");
myLinkedList.append("Bird")
myLinkedList.append("Cat");
myLinkedList.append("Dog");
myLinkedList.append("Elephant");
myLinkedList.prepend("Pumpkin");
myLinkedList.append("Frog")
myLinkedList.append("Giraffe");
myLinkedList.append("Hyena");
myLinkedList.prepend("Tomato");

// Manipulate linked list
myLinkedList.pop();
console.log(myLinkedList.head());
console.log(myLinkedList.at(4));
console.log(myLinkedList.contains("Frog"));
console.log(myLinkedList.find("Elephant"));
console.log(myLinkedList.size());
console.log(myLinkedList.tail());
console.log(myLinkedList.toString());



