import React from "react";
import circlesImg from "../images/circles.png";
import exerciseImg from "../images/exercise.png";
import './styles/Card.css';

class Card extends React.Component {
    render() {
        const { title, description, img, leftColor, rightColor } = this.props
        return (
            <div className="card mx-auto Fitness-Card"
                /* background: url('../../images/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB); */
                style={{
                    backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#f0f0f0'}, ${rightColor || '#0f0f0f'})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img className="float-right" src={img || exerciseImg} alt="" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default Card