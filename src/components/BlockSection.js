import React from 'react';
import BlockCard from "./BlockCard";

function BlockSection() {
    const Blocks = [
        {
            id: 1,
            tag: 'She is a good girl',
            name: 'Random guy 1',
            belongs: 'CEO at ABC company',
        },
        {
            id: 2,
            tag: 'She is hardworking and an excellent developer',
            name: 'Random guy 2',
            belongs: 'Director at XYZ company',
        },
        {
            id: 3,
            tag: 'She is lazy but has good communication skills',
            name: 'Random guy 3',
            belongs: 'Manager at DEF company',
        },
        {
            id: 4,
            tag: 'She gets things done quickly!',
            name: 'Random guy 4',
            belongs: 'SDE at JKL company',
        },
    ];

    return (
        <div className="container-fluid my-5">
        <div className="row text-center d-flex flex-nowrap overflow-auto">
                {
                Blocks.map((Block) => 
                (
                    <div key={Block.id} className="col-12 col-md-4">
                        <BlockCard
                            // tag={Block.tag}
                            // name={Block.name}
                            // belongs={Block.belongs}
                            Block={Block}
                        />
                    </div>    
                ))
                }
        </div>
        </div>
    );
}

export default BlockSection;