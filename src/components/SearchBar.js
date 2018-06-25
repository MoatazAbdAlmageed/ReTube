import React, {Component} from 'react';
import {DebounceInput} from 'react-debounce-input';


export class SearchBar extends Component {


    handleChange = (e) => {
        const term = e.target.value;
        this.props.OnUserSearch(term);

    }
    handleType = (e) => {
        const type = e.target.value;
        this.props.changeType(type);

    }

    render() {
        return (

            <div className="SearchBar">
                <h1>Search: {this.props.term}{/*- <b className={'badge'}>{this.props.type}</b>*/}</h1>
                <DebounceInput
                    // minLength={2}
                    debounceTimeout={600}
                    onChange={this.handleChange}
                    className={'form-control'}
                    value={this.props.term}
                    type="text"
                />


                <input onChange={this.handleType} type="radio" name="type" value="video"
                       checked={this.props.type == 'video'}/> video
                <input onChange={this.handleType} type="radio" name="type" value="playlist"
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
