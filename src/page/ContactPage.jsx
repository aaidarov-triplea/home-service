import React from 'react'
import { Header } from '../components/header'

export const ContactPage = () => {
  return (
    <>
    <Header />
    <div className='text-main-text-color mt-20 text-center px-5 h-80 md:h-128 md:mt-0 md:pt-5'>
        <h1 className='text-4xl text-center uppercase font-bold'>Контакты</h1>
        <div>
            <h2 className='text-text-2xl text-main-text-color'>Как связаться с нами</h2>
            <ul>
                <li className='py-3 text-text-1xl'>
                    <b className='mr-2'>Телефон:</b>
                    <a href='tel:+996555001008'>+996 (555) 001-008</a>
                </li>
                <li className='py-3 text-text-1xl'>
                    <b className='mr-2'>Электронная почта:</b>
                    <a href='mailto:info@homeservice.com'>info@homeservice.com</a>
                </li>
            </ul>
        </div>

        <div>
            <h2 className='text-text-2xl text-main-text-color'>Рабочие часы</h2>
            <ul>
            <li className='py-3 text-text-1xl'>
                    <b className='mr-2'>Понедельник - Пятница:</b>
                    <div>8:00 - 18:00</div>
                </li>
                <li className='py-3 text-text-1xl'>
                    <b className='mr-2'>Суббота - Воскресенье:</b>
                    <div> 9:00 - 14:00</div>
                </li>
            </ul>
        </div>

        <div>
            <h2 className='text-text-2xl text-main-text-color'>Местоположение</h2>
            <ul>
            <li className='py-3 text-text-1xl'>
                    <b className='mr-2'>Наш офис находится по адресу:</b>
                    <div>дом 123, ул. Примерная, Город Неизвестная, Страна Мировая, Индекс 000000</div>
                </li>
            </ul>
        </div>

    </div>
    </>
  )
}