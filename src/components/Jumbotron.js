import React, {Component} from 'react';


export class Jumbotron extends Component {
    handleChange(e) {
        let title = e.target.value;
        this.props.changeTitle(title)
    }

    render() {

        return (
            <div className="Jumbotron">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">{this.props.title}</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its
                            contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply
                            skip over it entirely.</p>


                        <p>
                            <input
                                onChange={this.handleChange.bind(this)}
                                value={this.props.title}
                                type="text"/>
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Jumbotron;

