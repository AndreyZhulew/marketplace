import React, { useState } from "react";
import './accordian.css';
import {MdAdd} from "react-icons/md";
import { BiMinusCircle } from "react-icons/bi";

const Accordian = (props) => {
    const [show, setShow] = useState(false)
    return (
        <div className="accordian_box" onClick={() => setShow(!show)}>
            <div className="ques-icon-div">
                <div className="ques-ans-div">
                    <h3>{props.question}</h3>
                    {show && <p>{props.answer}</p>}
                </div>
                <div className="icon-div">
                    <p>
                        {
                            show ? (<BiMinusCircle style={{marginRight: "1rem"}}/>)
                            : (<MdAdd style={{marginRight: "1rem"}}/>)
                        }
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Accordian;