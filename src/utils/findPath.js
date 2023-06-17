function hasPath(original, arr, item) {
  if (original == null) return false;

  arr.push(original.id);

  if (original.id === item.id) return true;

  let a =
    original?.children &&
    original?.children?.length > 0 &&
    hasPath(original?.children[0], arr, item);
  let b =
    original?.children &&
    original?.children?.length > 1 &&
    hasPath(original?.children[1], arr, item);
  if (a || b) return true;

  arr.pop();
  return false;
}

function finalPathUpdate(arr, treeData) {
  if (!treeData || treeData?.length === 0) return [];
  for (let i = 0; i < treeData.length; i++) {
    if (arr.includes(treeData[i].id)) {
      treeData[i].showLevel = true;
    } else {
      treeData[i].showLevel = false;
    }
    finalPathUpdate(arr, treeData[i].children);
  }
  return treeData;
}

export const findPath = (item, treeData) => {
  let arr = [];
  let res = treeData;
  if (hasPath(treeData[0], arr, item)) {
    res = finalPathUpdate(arr, treeData);
  }
  return res;
};
