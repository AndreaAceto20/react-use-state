import { useState } from "react";



export default function Accordion(props) {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="accordion">

                <button className="accordion__btn"
                    onClick={props.onToggle}>
                    {props.titolo}
                </button>
            </div>
            <div className="card">
                {props.isOpen && props.contenuto}
            </div>


        </>
    )
}