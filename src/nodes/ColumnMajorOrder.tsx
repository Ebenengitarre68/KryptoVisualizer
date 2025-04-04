import {ChangeEventHandler, memo, useEffect } from 'react';
import {
    Position,
    Handle,
    useReactFlow,
    useHandleConnections,
    useNodesData,
    type NodeProps,
} from '@xyflow/react';

import {type MyNode} from './utils';
import {BaseNode} from "@/components/base-node.tsx";

function ColumnMajorOrder({ id, data }: NodeProps) {

    const { updateNodeData } = useReactFlow();
    const connections = useHandleConnections({
        type: 'target',
    });
    const nodesData:Pick<MyNode, "id" | "type" | "data"> | null = useNodesData<MyNode>(connections[0]?.source);

    useEffect(() => {
        let mode:unknown = 0;
        if (data["mode"] != null){
            mode = data["mode"];
        }

        if(nodesData !== null && nodesData.data !== null && nodesData.data[connections.at(0).sourceHandle] !== undefined) {
            let data = nodesData.data[connections.at(0).sourceHandle];
            let out = [];
            if(data.length == 16){
                switch (mode) {
                    case 0:
                        out = [ data[0], data[4], data[8], data[12],
                                data[1], data[5], data[9], data[13],
                                data[2], data[6], data[10],data[14],
                                data[3], data[7], data[11],data[15],
                        ]
                        break;
                    default:
                }
            }
            updateNodeData(id, {bytes: out});
        }

    }, [nodesData, data["mode"]]);

    const onChange: ChangeEventHandler<HTMLSelectElement> =(evt) => {
        updateNodeData(id, {mode : evt.target.value})
    };

    return (
        <BaseNode
            className="node"
        >
            <Handle
                type="target"
                position={Position.Top}
                isConnectable={connections.length === 0}
            />
            <div style={{ display:"flex", justifyContent:"center"}}>Column major order</div>
            <div>
                <select className="select" onChange={onChange}>
                    <option value={0}>4x4</option>
                </select>
            </div>
            <Handle id="bytes" type="source" position={Position.Bottom}/>
        </BaseNode>
    );
}

export default memo(ColumnMajorOrder);
