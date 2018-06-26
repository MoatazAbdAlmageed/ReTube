import React from 'react';
import {DebounceInput} from 'react-debounce-input';

function SearchBar(props) {
    return (

        <div className="SearchBar">
            <h1>Search: {props.term}</h1>
            <DebounceInput
                debounceTimeout={600}
                onChange={props.OnUserSearch}
                className={'form-control'}
                value={props.term}
                type="text"
            />


            <input onChange={props.changeType} type="radio" name="type" value="video"
                   checked={props.type == 'video'}/> video
            <input onChange={props.changeType} type="radio" name="type" value="playlist"
                   checked={props.type == 'playlist'}/> playlist

        </div>
    );
}

export default SearchBar;
