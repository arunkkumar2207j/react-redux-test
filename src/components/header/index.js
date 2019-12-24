import React from 'react'
import './styles.scss'

const Header = (props) => {
    return (
        <header data-test="headerComponent" className="headerComponent">
            <div className="wrap">
                <div data-test="logoIMG">SimpleTuts</div>
            </div>
        </header>
    )
}

export default Header;