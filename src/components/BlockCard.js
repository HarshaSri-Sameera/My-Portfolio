import React from 'react';

function BlockCard(props) {
    const { tag, name, belongs } = props.Block;
    return (
        <div className="container-fluid my-3">
        <div className="row text-center d-flex flex-nowrap align-self-stretch overflow-auto scroll-bar">
            <div className="col-12">
                <div className="card shadow h-100">
                    <div className="card-body">
                        <h4 className="card-text">
                            {tag}
                        </h4>
                        <p className="card-text text-secondary mb-0">{name}</p>
                            <p className="card-text text-secondary">
                               {belongs}
                            </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
     
    );
}

export default BlockCard;