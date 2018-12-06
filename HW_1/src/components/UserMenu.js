import React, { Component, createRef } from 'react';
import Dropdown from './Dropdown';
import Avatar from './Avatar';
import avatar from './avatar.jpg';

export default class UserMenu extends Component {
    containerRef = createRef();
    state = {
        isDropDownOpen: false
    }

    componentDidMount(){
        window.addEventListener('click', this.handleWindowClick)
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { isDropDownOpen } = this.state;
        
        return nextState.isDropDownOpen !== isDropDownOpen;
    }

    componentWillUnmount(){
        window.removeEventListener('click', this.handleWindowClick)
    }

    handleWindowClick = evt => {
        const isTargetInsideContainer = this.containerRef.current.contains(evt.target);
        
        const { isDropDownOpen } = this.state;

        if (!isTargetInsideContainer && isDropDownOpen){
            this.closeDropdown();
        }
    }

    openDropdown = () => {
        this.setState({ isDropDownOpen: true})
    }

    closeDropdown = () => {
        this.setState({ isDropDownOpen: false})
    }
    
    render(){
        const { isDropDownOpen } = this.state;

        return (
            <div 
              onClick={this.openDropdown} 
              className="UserMenu" 
              ref={this.containerRef}
            >
                <Avatar image={avatar}/>
                <span className="UserName">Mag Ross</span>
                {isDropDownOpen && <Dropdown />}
            </div>
        );
    }
}