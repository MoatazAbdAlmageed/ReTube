import React, {Component} from 'react';
import {DebounceInput} from 'react-debounce-input';


export class SearchBar extends Component {
    constructor(props) {
        super(props);
    }


    handleChange = (e) => {
        let term = e.target.value;
        this.props.OnUserSearch(term);

    }

    componentDidMount() {
    }

    render() {
        return (

            <div className="SearchBar">
                <h1>Search:<b className={'badge'}> {this.props.term}</b></h1>
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
