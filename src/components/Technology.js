import React from 'react';
import Skill from './Skill';
import { v4 as uuid } from "uuid";
import { Consumer } from "../context";

function Technology() {

    // console.log(uuid()); can us v4 then import only v4 remove as uuid

    return(
        <Consumer>
            {(value) => {
                const { skills } = value;
                const FinalRow = [];
                for(let i = 0; i < 2; i++) {
                    let skillRow = skills.slice(i * 4, (i + 1) * 4);
                    FinalRow.push(
                        <div key={uuid()} className="d-flex justify-content-around py-3">   
                            {
                                skillRow.map((skill) => (
                                    <Skill key={uuid()} skill={skill} />
                                ))
                            }    
                        </div>
                    );
                }
                return (
                    <div className="bg-light w-100">
                        <div className="container text-center py-5 my-5">
                            <h1 className="font-weight-light">
                                <span className="text-successs">Technology</span> Stack
                            </h1>
                            <div className="lead pb-5">I design and develop and deliver with these weapons
                            </div>
                            {FinalRow}
                        </div>    
                    </div>
                );
            }}
        </Consumer>
    );
}

export default Technology; 