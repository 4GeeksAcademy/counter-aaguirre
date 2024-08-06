import React from "react";

const SecondsCounter = ({ seis, cinco, cuatro, tres, dos, uno }) => {
    return (
        <div className=" principal">
            <div className="reloj ">
                <i className="fa  fa-clock"></i>
            </div>
            <div className="seis">{seis % 10}</div>
            <div className="cinco ">{cinco % 10}</div>
            <div className="cuatro">{cuatro % 10}</div>
            <div className="tres">{tres % 10}</div>
            <div className="dos">{dos % 10}</div>
            <div className="uno">{uno % 10}</div>
        </div>
    )

}





export default SecondsCounter; 