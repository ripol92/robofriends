import React from "react";

export default class CounterButton extends React.PureComponent{
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return <button color={this.props.color} onClick={this.updateCount}>
            Count: {this.state.count}
        </button>
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.state.count !== nextState.count;
    }

    updateCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}