/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  dfs(callback) {
    let tracker = 0;

    if (this.root) {
      const dfs = [this.root];

      while (dfs.length > 0) {
        const current = dfs.pop();
        tracker = callback(tracker, current);

        for (const child of current.children) {
          dfs.push(child);
        }
      }
    }


    return tracker;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    return this.dfs((tracker, current) => {
      return tracker + current.val;
    });
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    return this.dfs((tracker, current) => {
      if (current.val % 2 === 0) {
        tracker++;
      }

      return tracker;
    });
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    return this.dfs((tracker, current) => {
      if (current.val > lowerBound) {
        tracker++;
      }

      return tracker;
    });
  }
}

module.exports = { Tree, TreeNode };
