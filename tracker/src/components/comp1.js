import React from 'react'

export default class Comp1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
        this.buttonPressed = this.buttonPressed.bind(this);
    }

    buttonPressed() {
        this.setState({
            count: this.state.count + 1,
    })

    }
    render() {
        return <div>
                 <h2>Count {this.state.count}</h2>
                 <button onClick={this.buttonPressed}> Click moi!</button>
            </div>
    }

}
