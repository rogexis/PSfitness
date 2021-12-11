import React from "react";
import './styles/AddExercise.css';
import './styles/Card.css';
import { Link } from 'react-router-dom'


const AddExercise = (props) => (
    <Link to="/exercise/new">
        <img className="Fitness-Add" src={props.img} alt="" />

    </Link>
)


export default AddExercise
