import React from "react";
import exerciseImg from "../images/exercise.png";
import '../styles/Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div>
                        <div>
                            <img src={exerciseImg} alt=""/>
                        </div>
                        <div>
                            <h1>Technique Guide</h1>
                            <p>Learn amazin street workout and calisthenics</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default Card