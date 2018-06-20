import React, {Component} from 'react';


export class SearchBar extends Component {
    constructor(props) {
        super(props);
        // this.term = this.props.term;
    }
    render() {
        return (

            <div className="SearchBar">
                <input
                    /*
                                        onChange={this.handleChange.bind(this)}
                    */
                    className={'form-control'}
                    value={this.props.term}
                    /*
                                        value={this.props.term}
                    */
                    type="text"/>
            </div>
        );
    }
}

export default SearchBar;
