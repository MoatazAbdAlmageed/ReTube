import React, {Component} from 'react';
import {DebounceInput} from 'react-debounce-input';


export class SearchBar extends Component {
    constructor(props) {
        super(props);
        // this.term = this.props.term;
        /*
                this.handleChange = this.props.handleChange.bind(this)
        */
    }


    handleChange = (e) => {
        let term = e.target.value;
        this.props.OnUserSearch(term);

    }

    componentDidMount() {
        // this.refs.search.focus();


    }

    render() {
        return (

            <div className="SearchBar">
                <h1>Search:<b> {this.props.term}</b></h1>

                <DebounceInput
                    minLength={2}
                    debounceTimeout={300}
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
