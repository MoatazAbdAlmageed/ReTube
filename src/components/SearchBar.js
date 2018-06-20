import React, {Component} from 'react';


export class SearchBar extends Component {

    render() {
        return (

            <div className="SearchBar">
                <input
                    /*
                                        onChange={this.handleChange.bind(this)}
                    */
                    className={'form-control'}
                    /*
                                        value={this.props.term}
                    */
                    type="text"/>
            </div>
        );
    }
}

export default SearchBar;
