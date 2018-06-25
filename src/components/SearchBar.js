import React, {Component} from 'react';
import {DebounceInput} from 'react-debounce-input';


export class SearchBar extends Component {


    handleChange = (e) => {
        let term = e.target.value;
        this.props.OnUserSearch(term);

    }
    hangleType = (e) => {
        let type = e.target.value;
        this.props.changeType(type);

    }

    componentDidMount() {
    }

    render() {
        return (

            <div className="SearchBar">
                <h1>Search: {this.props.term}{/*- <b className={'badge'}>{this.props.type}</b>*/}</h1>
                <DebounceInput

                    minLength={2}
                    debounceTimeout={600}
                    // onChange={event => this.setState({value: event.target.value})}
                    onChange={this.handleChange}
                    className={'form-control'}
                    ref="search"

                    value={this.props.term}
                    type="text"
                />


                <input onChange={this.hangleType} type="radio" name="type" value="video"
                       checked={this.props.type == 'video'}/> video
                <input onChange={this.hangleType} type="radio" name="type" value="playlist"
                       checked={this.props.type == 'playlist'}/> playlist

                {/*<input*/}
                {/*onChange={this.handleChange}*/}
                {/*className={'form-control'}*/}
                {/*ref="search"*/}
                {/*value={this.props.term}*/}
                {/*type="text"/>*/}
            </div>
        );
    }
}

export default SearchBar;
