import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"


export const Login = () => {

  const [err, setErr] = useState(false)
  const navigate = useNavigate()

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

  fetch('https://644cde8ecfdddac97097dc42.mockapi.io/employee')
    .then((response) => response.json())
    .then((users) => {
      const user = users.find((user) => user.email === email)
      console.log(user)
      if (user) {
        signInWithEmailAndPassword(auth, user.email, user.password)
          .then((userCredential) => {
            const loggedInUser = userCredential.user
            console.log(loggedInUser)
            navigate("/office")
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        setErr(true)
        console.log('Пользователь не найден!')
      }
    })
    .catch((error) => {
      console.log(error)
    })
    navigate("/office")
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
            {err && <span className="pb-3 text-[#ee1e0f] text-center">Почта или пароль не верно</span>}
          </form>
  )
}
