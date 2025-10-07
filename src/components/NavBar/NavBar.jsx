import { useState } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
const NavBar = ({logo, logoAlt, textLogo, items, bars, close, barsAlt}) => {
    const [show, setShow] = useState(false)
    const showHandle = () => {
        setShow(!show)
    }
    return (
        <>
            <nav className=''>
                <div className="logo">
                    <img src={logo} alt={logoAlt} />
                    <span>{textLogo}</span>
                </div>
                <ul>
                    {items?.map((item, index) => {
                        return(
                            <li key={index}>
                                <NavLink to={item.url} className={({isActive}) => isActive ? "active" : ""} onClick={() => setShow(false)} >{item.content}</NavLink>
                            </li>
                        )
                    })}
                </ul>
                <img className="barsIcon" src={show ? close : bars} alt={barsAlt} onClick={showHandle} />
            </nav>
            <div className={`navMenu ${show ? "show" : ""}`}>
                <ul>
                    {items?.map((item, index) => {
                        return(
                            <li key={index}>
                                <NavLink to={item.url} className={({isActive}) => isActive ? "active" : ""} onClick={() => setShow(false)} >{item.content}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default NavBar
