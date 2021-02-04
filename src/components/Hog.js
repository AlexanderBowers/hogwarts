import React from 'react'
import HogCard from './HogCard.js'

export default class Hog extends React.Component {

    constructor() {
        super()
        this.state = {
            selected: false
        }
    }

    handleClick = () => {
        this.setState(
            {
                selected: !this.state.selected
            }
        ) 
        }
        
    render(){
        return (
            <div className="pigTile" onClick={this.handleClick}>
                <h4>{this.props.name}</h4>
                {this.state.selected === true ? <HogCard weight={this.props.weight} specialty={this.props.specialty} name={this.props.name}  /> : null}
            </div>
        )
    }
}