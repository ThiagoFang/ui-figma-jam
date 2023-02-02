import ReactFlow, { Background, Controls, Node } from "reactflow";
import { zinc } from "tailwindcss/colors";

import { Square } from "./Components/Nodes/Square/Square";

import "reactflow/dist/style.css";

const NODE_TYPES = {
  square: Square,
};

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: "square",
    position: {
      x: 200,
      y: 400,
    },
    data: {},
  },
] satisfies Node[];

function App() {
  return (
    <div className="w-screen h-screen">
      <ReactFlow nodeTypes={NODE_TYPES}>
        <Background gap={12} size={2} color={zinc[200]} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
