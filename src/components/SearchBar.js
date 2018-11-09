import React from 'react';
import {DebounceInput} from 'react-debounce-input';

const SearchBar = ({term, OnUserSearch, type, changeType}) => {
    return (

        <div className="SearchBar">
            <div className="row">
                <div className="col-md-9">

                    <DebounceInput
                        debounceTimeout={600}
                        onChange={OnUserSearch}
                        className={'form-control'}
                        value={term}
                        type="text"
                    />
                </div>
                <div className="col-md-3">
                    <div className="radio">
                        <label> <input onChange={changeType} type="radio" name="type" value="video"
                                       checked={type === 'video'}/>Video</label>
                    </div>
                    <div className="radio">
                        <label><input onChange={changeType} type="radio" name="type" value="playlist"
                                      checked={type === 'playlist'}/>Playlist</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
