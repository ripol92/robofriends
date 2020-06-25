import React, {Component} from "react";
import {connect} from "react-redux";
import ErrorBoundry from "../components/ErrorBoundry";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import Header from "../components/Header";

import {setSearchField, requestRobots} from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.fetchRobots.robots,
        isPending: state.fetchRobots.isPending,
        error: state.fetchRobots.error
    }
};

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

class App extends Component{

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
         const { searchField, onSearchChange, robots, isPending } = this.props;
         const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
         return isPending ?
             <h1>Loading...</h1> :
         (
             <div className={'tc'}>
                 <Header/>
                 <SearchBox searchChange={onSearchChange}/>
                 <Scroll>
                     <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                     </ErrorBoundry>
                 </Scroll>
             </div>
         )
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(App);