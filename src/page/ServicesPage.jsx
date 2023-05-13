import React from 'react'
import { Header } from '../components/header'

export const ServicesPage = () => {
  return (
    <>
    <Header />
    <div className='mt-20 text-[#0e0d0d] text-center px-2 md:text-start'>
        <h1 className='text-4xl text-center font-bold uppercase text-main-text-color'>Наши услуги</h1>
        <div>
            <h2 className='text-4xl'>Уборка дома</h2>
            <ul>
                <li className='pb-3'>
                    <b className='text-text-1xl font-semibold'>Ежедневная уборка:</b>
                    <p className='text-text-18'>Мы предлагаем ежедневную уборку вашего дома, чтобы вы могли наслаждаться чистотой и порядком без лишних забот.</p>
                </li>
                <li className='pb-3'>
                    <b className='text-text-1xl font-semibold'>Глубокая уборка:</b>
                    <p className='text-text-18'> Если вам требуется тщательная очистка вашего дома, включая мытье окон, чистку ковров и мебели, мы обеспечим профессиональную глубокую уборку.</p>
                </li>
                <li className='pb-3'>
                    <b className='text-text-1xl font-semibold'>Уборка после ремонта или переезда:</b>
                    <p className='text-text-18'>Наша команда поможет вам с уборкой после ремонта или переезда, чтобы ваш дом стал безупречно чистым и пригодным для проживания.</p>
                </li>
            </ul>
        </div>

        <div>
            <h2 className='text-4xl text-[#0e0d0d]'>Электрика</h2>
            <ul>
                <li className='pb-3'>
                    <b className='text-text-1xl font-semibold'>Установка электропроводки:</b>
                    <p className='text-text-18'>Мы предлагаем услуги по установке и ремонту электрических систем в вашем доме. Наши квалифицированные электрики гарантируют безопасность и качество работы.</p>
                </li>
                <li className='pb-3'>
                    <b className='text-text-1xl font-semibold'>Ремонт электрооборудования:</b>
                    <p className='text-text-18'>Если у вас возникли проблемы с электрооборудованием, наши специалисты помогут провести диагностику и выполнить ремонт в кратчайшие сроки.</p>
                </li>
            </ul>
        </div>

        <div className='text-[#0e0d0d]'>
            <h2 className='text-4xl'>Сантехника</h2>
            <ul>
                <li className='pb-3'>
                    <b className='text-text-1xl font-semibold'>Установка и ремонт сантехники:</b>
                    <p className='text-text-18'>Мы предлагаем услуги по установке и ремонту сантехнических систем. Наша команда сантехников обеспечит эффективное функционирование ваших водопроводных и канализационных систем.</p>
                </li>
                <li className='pb-3'>
                    <b className='text-text-1xl font-semibold'>Чистка и прочистка труб:</b>
                    <p className='text-text-18'>Если ваши трубы забилась или требуется профилактическая чистка, мы предлагаем услуги по прочистке и чистке труб с использованием современного оборудования.</p>
                </li>
            </ul>
        </div>

    </div>
    </>
  )
}