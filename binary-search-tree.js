class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root) {
      let activeNode = this.root;

      while (activeNode) {
        if (val < activeNode.val) {
          if (activeNode.left) {
            activeNode = activeNode.left;
          } else {
            activeNode.left = new Node(val);
            activeNode = null;
          }
        } else {
          if (activeNode.right) {
            activeNode = activeNode.right;
          } else {
            activeNode.right = new Node(val);
            activeNode = null;
          }
        }
      }
    } else {
      this.root = new Node(val);
    }

    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (this.root) {
      if (val < this.root.val) {
        if (this.root.left) {
          (new BinarySearchTree(this.root.left)).insertRecursively(val);
        } else {
          this.root.left = new Node(val);
        }
      } else {
        if (this.root.right) {
          (new BinarySearchTree(this.root.right)).insertRecursively(val);
        } else {
          this.root.right = new Node(val);
        }
      }
    } else {
      this.root = new Node(val);
    }

    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
