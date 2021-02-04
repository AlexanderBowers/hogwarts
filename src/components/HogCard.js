import React from 'react'


export default class HogCard extends React.Component{

    changeName = () => {
        let name = this.props.name.toLowerCase()
        name = name.replaceAll(' ', '_')
        return name
    }


    render(){
        let pigImage = require(`../hog-imgs/${this.changeName()}.jpg`)
        return (
            <div>
                <img src={pigImage} alt={`${this.props.name}`} />
                <h4>{this.props.weight}</h4>
                <h4>{this.props.specialty}</h4>
            </div>
        )
    }

}