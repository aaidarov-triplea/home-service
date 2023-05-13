import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const FormRegister = () => {
  const [formData, setFormData] = useState({
    avatar: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    login: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    direction: "",
    price: "",
  })
const [image, setImage] = useState("")
const [showLabel, setShowLabel] = useState(true)
const navigate = useNavigate()

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData({ ...formData, [name]: files[0] })

    //показываем загруженный фото
    const reader = new FileReader()
    reader.onload = function(e) {
      setImage(e.target.result)

      // Скрываем элемент <label>
      setShowLabel(false)
    }
    //Проверяем, что files[0] является объектом типа Blob бинарные массив
    if (files[0] instanceof Blob) {
      reader.readAsDataURL(files[0]);
    } else {
      console.error('Ошибка при загрузке аватара')
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const endpoint = 'https://644cde8ecfdddac97097dc42.mockapi.io/employee'
    
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

      navigate('/login')
  }

  return (
    <>
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <h1 className="text-center mb-1 text-4xl font-bold text-main-text-color underline">
              Анкета
            </h1>
            <div className="flex items-center justify-center">
              {image && <img src={image} alt="Preview" className="label-style" />}
              {showLabel && (<label htmlFor="avatar" className="label-style">
                Загрузить фото
                <input className="hidden" type="file" id="avatar" name="avatar" onChange={handleFileChange}/>
              </label>)}
            </div>
            <input
              className="input-style py-3"
              type="text"
              placeholder="Фамилия"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input 
            className="input-style py-3" 
            type="text" 
            placeholder="Имя" 
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}  
            />
            <input className="input-style py-3" type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
             />
             <input className="input-style py-3" type="email"
             name="email"
             placeholder="Email"
             value={formData.email}
             onChange={handleInputChange}
              />
            <input
              className="input-style py-3"
              type="text"
              placeholder="логин"
              name="login"
              value={formData.login}
              onChange={handleInputChange}
            />
            <input
              className="input-style py-3"
              type="password"
              placeholder="Пароль"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              className="input-style py-3"
              type="password"
              placeholder="Повторите пароль"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <input
              className="input-style py-3"
              type="tel"
              placeholder="Телефон"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <input
              className="input-style py-3"
              type="text"
              placeholder="Цена"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />

              <select className="input-style py-3 px-1" name="direction" value={formData.direction} onChange={handleInputChange}>
                <option className="input-style" value="">Направление</option>
                <option className="input-style" value="Уборка">Уборка</option>
                <option className="input-style" value="Электрика">Электрика</option>
                <option className="input-style" value="Сантехника">Сантехника</option>
              </select>
            <button type="submit" className="Link-style mb-3">Регистрация</button>
          </form>
          <p className="text-main-text-color">
            Уже есть аккаунт?
            <Link to="/login" className="underline text-link-col">
              Войти
            </Link>
          </p>
    </>
  )
}