import React from "react";
import './styles/AddExercise.css';
import './styles/Card.css';


function AddExercise(props) {
    return (
            <footer>
                <div className="Add-Exercise">
                    <img src={props.img} alt="" />

                </div>
            </footer>
    )

}

export default AddExercise
