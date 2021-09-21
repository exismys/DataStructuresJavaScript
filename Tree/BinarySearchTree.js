class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

/**
 * BST: Binary Search Tree
 * Left child must be smaller and right side, larger
 */
class BST {
    constructor() {
        this.root = null;
    }
}

/**
 * Searches an item in the tree
 * @returns an object: {found: Boolean, parent: Node}
 * Time Complexity: O(n)
 */
BST.prototype.search = function(data) {
    let current = this.root;
    let result = {found: false, parent: null};
    while (current) {
        if (data == current.data) {
            result.found = true;
            break;
        } else if (data < current.data) {
            result.parent = current;
            current = current.left;
        } else {
            result.parent = current;
            current = current.right;
        }
    }
    return result;
}

/**
 * Inserts an item into the tree
 * Time Complexity: O(n)
 */
BST.prototype.insert = function(data) {
    let result = this.search(data);
    if (result.found) return;
    else if (!result.parent) this.root = new Node(data);
    else if (data < result.parent.data) result.parent.left = new Node(data);
    else result.parent.right = new Node(data);
}

/**
 * Pre-order traversal
 * Time Complexity: O(n)
 */
BST.prototype.preOrder = function(root = this.root) {
    if (root) {
        console.log(root.data);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
}

/**
 * In-order traversal
 * Time Complexity: O(n)
 */
BST.prototype.inOrder = function(root = this.root) {
    if (root) {
        this.inOrder(root.left);
        console.log(root.data);
        this.inOrder(root.right);
    }
}

/**
 * Post-order traversal
 * Time Complexity: O(n)
 */
BST.prototype.postOrder = function(root = this.root) {
    if (root) {
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.data);
    }
}

// Test
function main() {
    let bst = new BST();
    bst.insert(10);
    bst.insert(9);
    bst.insert(20);
    bst.insert(31);
    bst.insert(25);
    bst.insert(1);
    bst.inOrder();
}

main();