import React from 'react';
import { v4 as uuid } from "uuid";

function Skill(props) {
    const { name, imageUrl, starTotal, starActive } = props.skill;
    let starList = [];
    for (let i=0; i<starTotal; i++)
    {
        if(i<starActive)
        {
            starList.push(
                <span key={uuid()} className="text-success">&#x2605;</span>
            );
        }
        else{
            starList.push(<span key={uuid()} >&#x2605;</span>);
        }
    }
    return (
        <div>
            <img
                className="rounded"
                src={imageUrl}
                alt={name}
                style={{width: "100px", height: "100px"}}
            />
            <div>
                {starList}
            </div>
        </div> 
    );
}

export default Skill;