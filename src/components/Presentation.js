import React, { Component } from 'react';

export default class Presentation extends Component {
    render() {
        const { name, role, resume } = this.props;

        return(
                <div>
                    <h1>{name}</h1>
                    <h2>{role}</h2>
                    <h3>{resume}</h3>
                </div>
        );
    }
}

