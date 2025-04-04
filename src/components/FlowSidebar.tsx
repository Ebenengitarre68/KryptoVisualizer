import React from 'react';
import { useDnD } from './DnDContext.tsx';

export default () => {
    const [_, setType] = useDnD();

    const onDragStart = (event:any, nodeType:any) => {
        setType(nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
            <div className="aside" >
                <div className="description">
                    You can drag these nodes to the pane on the left. The blues are input,
                    the red are output and the black are calculation.
                </div>

                <div style={{
                    overflow: 'auto',
                    display: "grid",
                    alignItems: "center",
                    maxHeight: "400px",
                    borderRadius: "1px",
                    marginRight: "5px",
                    marginLeft: "5px",
                }}>
                    <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'text')} draggable>
                        Text input Node
                    </div>
                    <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'random')} draggable>
                        Random Gen Node
                    </div>
                    <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'bytesIn')} draggable>
                        Bytes Input Node
                    </div>
                    <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'monitor')} draggable>
                        Monitor Node
                    </div>
                    <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'comment')} draggable>
                        Comment Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'xor')} draggable>
                        Xor Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 't2binary')} draggable>
                        Text to Binary Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'b2text')} draggable>
                        Binary to Text Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'split')} draggable>
                        Split Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'pad')} draggable>
                        Padding Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'dePad')} draggable>
                        De-Padding Node
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'subBytes')} draggable>
                        Sub Bytes
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'invSubBytes')} draggable>
                        Inverse Sub Bytes
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'shiftR')} draggable>
                        Shift Rows
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'invShiftR')} draggable>
                        Inverse Shift Rows
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'colMajor')} draggable>
                        Column Major Order
                    </div>
                    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'mixColumns')} draggable>
                        Mix Columns
                    </div>
                </div>

            </div>
    );
};
