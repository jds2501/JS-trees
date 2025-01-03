/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let depth = 0;

    if (this.root) {
      depth++;

      const leftDepth = (new BinaryTree(this.root.left)).minDepth();
      const rightDepth = (new BinaryTree(this.root.right)).minDepth();

      if (leftDepth < rightDepth) {
        depth += leftDepth;
      } else {
        depth += rightDepth;
      }
    }

    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let depth = 0;

    if (this.root) {
      depth++;

      const leftDepth = (new BinaryTree(this.root.left)).maxDepth();
      const rightDepth = (new BinaryTree(this.root.right)).maxDepth();

      if (leftDepth > rightDepth) {
        depth += leftDepth;
      } else {
        depth += rightDepth;
      }
    }

    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function pathSum(node) {
      let sum = 0;

      if (node) {
        const leftSum = pathSum(node.left);
        const rightSum = pathSum(node.right);
        result = Math.max(result, node.val + leftSum + rightSum);
        sum = Math.max(0, leftSum + node.val, rightSum + node.val);
      }

      return sum;
    }

    pathSum(this.root);
    return result;
  }



  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let closest = null;

    if (this.root) {
      if (this.root.val - lowerBound > 0) {
        closest = this.root.val;
      }

      const leftClosest = (new BinaryTree(this.root.left)).nextLarger(lowerBound);
      if (leftClosest && (leftClosest - lowerBound) < (closest - lowerBound)) {
        closest = leftClosest;
      }

      const rightClosest = (new BinaryTree(this.root.right)).nextLarger(lowerBound);
      if (rightClosest && (rightClosest - lowerBound) < (closest - lowerBound)) {
        closest = rightClosest;
      }

    }

    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
