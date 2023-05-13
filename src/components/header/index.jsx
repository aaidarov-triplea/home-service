import { Link } from "react-router-dom"
import { BurgerMenu } from "./BurgerMenu"
import { SiHomebridge } from 'react-icons/si'
import { ImInfo } from 'react-icons/im'
import { RiCustomerService2Fill, RiContactsFill } from 'react-icons/ri'
import logo from "../../assets/images/logo.png"

export const Header = () => {
  return (
    <>
    <BurgerMenu/>
       <header className="hidden sm:h-header-h m-auto md:block md:w-1/2 lg:block lg:w-1/3">
        <div className="flex items-center flex-col w-full h-full pt-2">
          <Link to="/" className="w-36 h-36 mb-5">
            <img src={logo} alt="logo" className="w-full h-full" />
          </Link>
          <nav className="px-3">
            <ul className="flex items-center justify-between">
              <li className="li-style">
                <Link to="/home" className="flex items-center">
                  <SiHomebridge className="mr-1 text-main-text-color" /> 
                  home
                </Link>
              </li>
              <li className="li-style">
                <Link to='/about' className="flex items-center">
                  <ImInfo className="mr-1 text-main-text-color" />
                  about
                </Link>
              </li>
              <li className="li-style">
                <Link to='/services' className="flex items-center">
                  <RiCustomerService2Fill className="mr-1 text-main-text-color"/>
                  services
                </Link>
              </li>
              <li className="li-style">
                <Link to='/contact' className="flex items-center">
                  <RiContactsFill className="mr-1 text-main-text-color"/>
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

