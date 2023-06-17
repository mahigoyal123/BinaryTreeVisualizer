import { useReducer } from "react";
import "./App.css";
import GlobalStore from "./context/context";
import action from "./context/action";
import store from "./context/store";
import FormComponent from "./components/FormComponent";
import BinaryTreeVisualizer from "./components/BinaryTreeVisualizer​​";

function App() {
  const [state, dispatch] = useReducer(action, store);
  return (
    <GlobalStore.Provider value={{ state, dispatch }}>
      <div className="App">
        <header className="header">
          <h3>BinaryTree Visualizer​​</h3>
        </header>
        <section>
          <FormComponent />
        </section>
        <section className="binary-tree-container">
          <BinaryTreeVisualizer />
        </section>
      </div>
    </GlobalStore.Provider>
  );
}

export default App;
