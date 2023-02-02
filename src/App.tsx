import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

function App() {
  return (
    <div className="maindiv">
      <ReactFlow>
        <Background gap={12} size={2} color="#DDD" />
      </ReactFlow>
    </div>
  );
}

export default App;
