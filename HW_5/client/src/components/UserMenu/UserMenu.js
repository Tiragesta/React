import React from 'react';
import Button from './Button';
import s from './UserMenu.module.css';

const UserMenu = ({
  image = 'https://semantic-ui.com/images/avatar2/large/matthew.png',
  name = 'Nielsen Norman',
  onSignOut = () => null
}) => (
  <section className={s.container}>
    <img className={s.avatar} src={image} alt="user avatar" width="60" />
    <span className={s.name}>{name}</span>

    <Button label="Sign Out" onClick={onSignOut} customClassName={s.button} />
  </section>
);

export default UserMenu;

//import React, { Component, createRef } from 'react';
//import Dropdown from './Dropdown/Dropdown';
//import Avatar from '../Avatar/Avatar';
//import avatar from '../AppHeader/assets/avatar.jpg';
//import style from './UserMenu.module.css'

/*export default class UserMenu extends Component {
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
              className={style.container} 
              ref={this.containerRef}
            >
                <Avatar image={avatar}/>
                <span className={style.name}>Mag Ross</span>
                {isDropDownOpen && <Dropdown />}
            </div>
        );
    }
}*/