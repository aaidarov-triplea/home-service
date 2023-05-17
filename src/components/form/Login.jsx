import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../store/userSlice'

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const error = useSelector((state) => state.user.error)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()

    dispatch(loginUser({ email, password }))
    .then((user) => {
      console.log(user)
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/office')
    })
    .catch((error) => {
      console.error('Ошибка входа:', error)
    })
  }

  return (
    <form className="flex flex-col" onSubmit={handleLogin}>
      <input
        className="input-style py-1"
        type="text"
        placeholder="email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        className="input-style py-1"
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={handlePasswordChange}
      />
      <Link
        to="/reset"
        className="text-end text-s underline mb-7 text-link-col"
      >
        Забыли пароль?
      </Link>
      <button className="Link-style mb-5">Войти</button>
      {error && (
        <span className="pb-3 text-[#ee1e0f] text-center">
          Почта или пароль не верно
        </span>
      )}
    </form>
  )
}