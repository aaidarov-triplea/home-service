import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Office = () => {
  const user = useSelector((state) => state.user)
  const [getUser, setGetUser] = useState({})

  if (!user || !getUser) {
    return null;
  }

  //Получаем авторизованного user
  useEffect(() => {
    fetch('https://644cde8ecfdddac97097dc42.mockapi.io/clean/10')
    .then(res => res.json())
    .then((data) => {
      setGetUser(data)
    })
    .catch ((err)=>{
      console.error(err)
    })
    
  }, [])

  //функция для отправки в mockApi
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch('https://644cde8ecfdddac97097dc42.mockapi.io/clean/10', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(getUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Data successfully updated:', data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //отправляем измененные данные в MockApi
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setGetUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
    <>
      <Link to='/login' className="office-backBtn-link bg-button-hover-color hover:bg-opacity-50">Выйти</Link>
      <div className='mt-20 mx-5'>
        <h1 className='text-main-text-color text-center mb-5 md:text-4xl'>
          Добро пожаловать в личный кабинет,
          <b className='ml-2'>{getUser.firstName}</b>!
        </h1>
 
        <form onSubmit={handleFormSubmit} className='office-form'>
          <div className='office-img'>
            <img src={getUser.avatar} alt=""  className='w-full h-full object-cover rounded-lg'/>
          </div>
          <label className='md:text-text-1xl'>
            Фамилия:
          <input
            className='input-style py-3 w-full'
            type="text"
            name="firstName"
            value={getUser.firstName}
            disabled
          />
          </label>
          <label className='md:text-text-1xl'>
            Имя:
          <input
            className='input-style py-3 w-full'
            type="text"
            name="lastName"
            value={getUser.lastName}
            disabled
          />
          </label>
          <label className='md:text-text-1xl'>
            Дата рождения:
          <input
            className='input-style py-3 w-full'
            type="date"
            name="dateOfBirth"
            value={getUser.dateOfBirth}
            disabled
          />
          </label>
          <label className='md:text-text-1xl'>
            Почта:
          <input
            className='input-style py-3 w-full'
            type="email"
            name="email"
            value={getUser.email}
            disabled
          />
          </label>
          <label className='md:text-text-1xl'>
            Логин:
          <input
            className='input-style py-3 w-full'
            type="text"
            name="login"
            value={getUser.login}
            disabled
          />
          </label>
          <label className='md:text-text-1xl'>
            Пароль:
          <input
            className='input-style py-3 w-full'
            type="password"
            name="password"
            value={getUser.password}
            onChange={handleInputChange || ''}
          />
          </label>  
          <label className='md:text-text-1xl'>
            Потвердить пароль:
          <input
            className='input-style py-3 w-full'
            type="password"
            name="confirmPassword"
            value={getUser.confirmPassword || ''}
            onChange={handleInputChange}
          />
          </label>                       
        <label className='md:text-text-1xl' >
          номер телефона:
          <input
            className='input-style py-3 w-full'
            type="text"
            name="phoneNumber"
            value={getUser.phoneNumber || ''}
            onChange={handleInputChange}
          />
        </label>
        <label className='md:text-text-1xl' >
          Цена:
          <input
            className='input-style py-3 w-full'
            type="text"
            name="price"
            value={getUser.price || ''}
            onChange={handleInputChange}
          />
        </label>        
        <label className='md:text-text-1xl' >
          Направление:
          <input
            className='input-style py-3 w-full'
            type="text"
            name="direction"
            value={getUser.direction || ''}
            onChange={handleInputChange}
          />
        </label>
        <button className='office-btn' type="submit">Редактировать</button>
      </form>

      </div>
    </>
  )
}