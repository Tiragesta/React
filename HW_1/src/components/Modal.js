import React, { Component } from 'react';

export default class Modal extends Component {
    state = {}

    render() {
        return(
            <div className="Backdrop">
                <div className="ModalWindow">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Ea recusandae sapiente maiores adipisci consequuntur esse 
                       aut consequatur excepturi dolorum nobis possimus blanditiis
                       accusamus.
                    </p>
                    <button type="button">Close</button>
                </div>
            </div>
        );
    }
}

