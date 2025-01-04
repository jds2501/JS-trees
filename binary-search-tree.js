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
    let foundNode = undefined;

    if (this.root) {
      let activeNode = this.root;

      while (activeNode) {

        if (val === activeNode.val) {
          foundNode = activeNode;
          activeNode = null;
        } else if (val < activeNode.val) {
          activeNode = activeNode.left;
        } else {
          activeNode = activeNode.right;
        }
      }
    }

    return foundNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    let foundNode = undefined;

    if (this.root) {
      if (this.root.val === val) {
        foundNode = this.root;
      } else if (val < this.root.val) {
        foundNode = (new BinarySearchTree(this.root.left)).findRecursively(val);
      } else {
        foundNode = (new BinarySearchTree(this.root.right)).findRecursively(val);
      }
    }

    return foundNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = [];

    if (this.root) {
      visited.push(this.root.val);

      if (this.root.left) {
        visited = visited.concat((new BinarySearchTree(this.root.left).dfsPreOrder()));
      }


      if (this.root.right) {
        visited = visited.concat((new BinarySearchTree(this.root.right).dfsPreOrder()));
      }

    }

    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];

    if (this.root) {
      if (this.root.left) {
        visited = visited.concat((new BinarySearchTree(this.root.left).dfsInOrder()));
      }

      visited.push(this.root.val);

      if (this.root.right) {
        visited = visited.concat((new BinarySearchTree(this.root.right).dfsInOrder()));
      }

    }

    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];

    if (this.root) {
      if (this.root.left) {
        visited = visited.concat((new BinarySearchTree(this.root.left).dfsPostOrder()));
      }

      if (this.root.right) {
        visited = visited.concat((new BinarySearchTree(this.root.right).dfsPostOrder()));
      }

      visited.push(this.root.val);
    }

    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = [];

    if (this.root) {
      const toVisit = [this.root];

      while (toVisit.length > 0) {
        const current = toVisit.shift();
        visited.push(current.val);

        if (current.left) {
          toVisit.push(current.left);
        }

        if (current.right) {
          toVisit.push(current.right);
        }
      }
    }

    return visited;
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
