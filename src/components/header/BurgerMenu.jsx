import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block absolute right-0 top-0 text-right text-4xl text-main-text-color md:hidden lg:hidden xl:hidden">
      <button className="pr-5 pt-5" onClick={handleToggle}>
        {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu/>}
      </button>
      {isOpen && (
        <ul className="bg-[#fff] flex items-center justify-center flex-col h-screen w-screen z-20 mt-ul-mt">
          <li className="mb-5 uppercase font-semibold text-4xl delay-1000 text-main-text-color hover:underline">
            <Link to="/">
              На главную
            </Link>
          </li>
          <li className="mb-5 uppercase font-semibold text-4xl delay-1000 text-main-text-color hover:underline">
            <Link to="/home">
              Каталог
            </Link>
          </li>
          <li className="mb-5 uppercase font-semibold text-4xl delay-1000 text-main-text-color hover:underline">
            <Link to="/about">
              О Нас
            </Link>
          </li>
          <li className="mb-5 uppercase font-semibold text-4xl delay-1000 text-main-text-color hover:underline">
            <Link to="/services">
              Сервис
            </Link>
          </li>
          <li className="mb-5 uppercase font-semibold text-4xl delay-1000 text-main-text-color hover:underline">
            <Link to="/contact">
              Контакт
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};