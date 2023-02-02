import { NodeProps, Handle, Position } from "reactflow";

export const Square = (props: NodeProps) => {
  return (
    <div className="bg-violet-500 rounded w-[200px] h-[200px]">
      <Handle id="right" type="source" position={Position.Right} />
      <Handle id="left" type="source" position={Position.Left} />
    </div>
  );
};
