import React from 'react';

function BlockCard(props) {
    const { name, company, designation, recommendation } = props;
    return (
        <div className="col-12">
            <div className="card shadow h-100">
                <div className="card-body card-height">
                    <h4 className="card-text">
                        {recommendation}
                    </h4>
                    <p className="card-text text-dark mb-0">{name}</p>
                        <p className="card-text text-dark">
                            {designation} at {company}
                        </p>
                </div>
            </div>
        </div>
    );
}

export default BlockCard;