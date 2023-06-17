import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/BinaryTree.css";
import GlobalStore from "../context/context";
import SingleLevelTree from "./SingleLevelTree";
import { generateTreeData } from "../utils/helper";
import { findPath } from "../utils/findPath";

const BinaryTreeVisualizer = () => {
  const { state } = useContext(GlobalStore);
  const [original, setOriginal] = useState([]);
  const [treeData, setTreeData] = useState([]);
  const [showTree, setShowTree] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (state?.inputArray?.length > 0) {
      let data = generateTreeData(state?.inputArray);
      setTreeData(data);
      setOriginal(data);
    }
  }, [state]);

  const findPathHandler = (item) => {
    let res = findPath(item, original);
    setTreeData(res);
    setShowTree(false);
    ref.current = setTimeout(() => {
      setShowTree(true);
    }, 0);
  };

  useEffect(() => {
    if (showTree) clearTimeout(ref.current);
  }, [showTree]);

  return (
    <div className="tree">
      {!showTree && (
        <SingleLevelTree
          treeData={treeData}
          findPathHandler={findPathHandler}
        />
      )}
      {showTree && (
        <SingleLevelTree
          treeData={treeData}
          findPathHandler={findPathHandler}
        />
      )}
    </div>
  );
};

export default BinaryTreeVisualizer;
