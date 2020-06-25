import React from "react";
import CounterButton from "./CounterButton";

export default class Header extends React.Component{
    render() {
        return (
            <div>
                <h1 className={'f1'}>RoboFriends</h1>
                <CounterButton color={'red'}/>
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState){
        return false;
    }
}