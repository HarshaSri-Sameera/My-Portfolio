import React from 'react';
import BlockCard from "./BlockCard";
import { Consumer } from "../context";

function BlockSection() {
    return(
        <Consumer>
            {(value) => {
                const { Blocks } = value; // destructuring to extract the blocks and return the JSX.
                return (
                    <div className="container-fluid my-5">
                    <div className="row text-center d-flex flex-nowrap align-self-stretch overflow-auto">
                            {
                            Blocks.map((Block) => 
                            (
                                <div key={Block.id} className="col-12 col-md-4">
                                    <BlockCard
                                        recommendation={Block.recommendation}
                                        name={Block.name}
                                        designation={Block.designation}
                                        company={Block.company}
                                        // Block={Block}
                                    />
                                </div>    
                            ))
                            }
                    </div>
                    </div>
                );
            }}
        </Consumer>
    );
}

export default BlockSection;