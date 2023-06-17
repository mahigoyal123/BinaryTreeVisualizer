import React from "react";
import "../styles/BinaryTree.css";

const SingleLevelTree = ({ treeData , findPathHandler}) => {

  return (
    <>
     {
       <ul>
      {treeData.map((item) => (
        <li key={item.id}>
          <div
            onClick={() => findPathHandler(item)}
            className={item.showLevel ? "show-level" : "show"}
          >
            {item.data}
          </div>
          {item.children && item.children.length ? (
            <SingleLevelTree treeData={item.children} findPathHandler={findPathHandler} />
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
     }
    </>
  );
};

export default SingleLevelTree;
