class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

// Function to insert nodes in level order
function insertLevelOrder(arr, i) {
  let root = null;
  // Base case for recursion
  if (i < arr.length) {
    root = new Node(arr[i]);

    // insert left child
    root.left = insertLevelOrder(arr, 2 * i + 1);

    // insert right child
    root.right = insertLevelOrder(arr, 2 * i + 2);
  }
  return root;
}

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

function binaryTreeToNestedObject(tree) {
  if (!tree) {
    return null;
  }

  const nestedObject = {};

  Object.keys(tree).forEach((key) => {
    if (key !== "left" && key !== "right") {
      nestedObject[key] = tree[key];
      nestedObject["id"] = uid();
      nestedObject["showLevel"] = false;
    }
  });

  if (tree.left) {
    nestedObject.children = [];
    nestedObject.children.push(binaryTreeToNestedObject(tree.left));
  }

  if (tree.right) {
    if (!nestedObject.children) {
      nestedObject.children = [];
    }
    nestedObject.children.push(binaryTreeToNestedObject(tree.right));
  }

  return nestedObject;
}

export const generateTreeData = (arr) => {
  let res = [];
  let root = insertLevelOrder(arr, 0);
  let r = binaryTreeToNestedObject(root);
  if (r) res.push(r);
  return res;
};
