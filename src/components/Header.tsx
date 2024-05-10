import React from 'react'
import NavDesktop from './Navbar/NavDesktop'

type Props = {}

const Header = (props: Props) => {
    return (
        <header>
            <div className="logo">

            </div>
            <div className="navbar">
                <div className='menu'>
                    <NavDesktop></NavDesktop>
                    {/* <div className="burgermenu-logo">
                    </div> */}

                </div>
                <div>
                    {/* Here come */}
                </div>
            </div>
        </header>
    )
}

export default Header