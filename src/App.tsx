import ReactFlow, {
  addEdge,
  Background,
  Connection,
  ConnectionMode,
  Controls,
  Node,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { zinc } from "tailwindcss/colors";
import * as ToolBar from "@radix-ui/react-toolbar";

import { Square } from "./Components/Nodes/Square/Square";
import { Circle } from "./Components/Nodes/Circle/Circle";

import "reactflow/dist/style.css";
import { useCallback } from "react";
import DefaultEdge from "./Components/Edges/DefaultEdge";

const NODE_TYPES = {
  square: Square,
  circle: Circle,
};

const EDGE_TYPES = {
  default: DefaultEdge,
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
  {
    id: crypto.randomUUID(),
    type: "circle",
    position: {
      x: 1000,
      y: 400,
    },
    data: {},
  },
] satisfies Node[];

function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);

  const onConnect = useCallback((connection: Connection) => {
    return setEdges((edges) => addEdge(connection, edges));
  }, []);

  const addSquareNode = () => {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: "square",
        position: {
          x: 750,
          y: 350,
        },
        data: {},
      },
    ]);
  };

  const addCircleNode = () => {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: "circle",
        position: {
          x: 750,
          y: 350,
        },
        data: {},
      },
    ]);
  };

  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: "default",
        }}
      >
        <Background gap={12} size={2} color={zinc[200]} />
        <Controls />
      </ReactFlow>

      <ToolBar.Root className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border flex gap-3 border-zinc-300 px-8 h-20 w-96 overflow-hidden">
        <ToolBar.Button
          onClick={addSquareNode}
          className="w-32 h-32 bg-violet-500 mt-6 rounded transition-transform hover:-translate-y-2"
        />

        <ToolBar.Button
          onClick={addCircleNode}
          className="w-32 h-32 bg-sky-500 mt-6 rounded-full transition-transform hover:-translate-y-2"
        />
      </ToolBar.Root>
    </div>
  );
}

export default App;
