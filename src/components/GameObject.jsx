import React, { PureComponent } from "react";
import './GameObject.css'


export default class Game extends PureComponent {

    render() {
        const game = this.props.item
        if (game) {
            return (
                <div className="Game container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <img src={game.images[0]} alt={game.name} className="img-thumbnail"></img>
                        </div>
                        <div className="col-8">
                            <h1> {game.name}</h1>
                            <span> Released : </span>
                            <span> {game.launchDate}</span>
                            <hr />
                            <ul>
                                {game.supports.map(function (item, i) {
                                    return (<li key={i}> {item} </li>)
                                })}
                            </ul>

                        </div>
                    </div>
                </div >
            )
        }
    }
}