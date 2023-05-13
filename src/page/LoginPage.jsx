import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import { Login } from "../components/form/Login"

export const LoginPage = () => {
 
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center p-10 rounded-lg bg-servicebg">
          <Link to="/" className="text-center w-32 h-32 mb-4">
            <img
              src={logo}
              alt=""
              className="w-full h-full object-cover mb-10"
            />
          </Link>

          <Login />

          <p className="text-main-text-color">
            Нет аккаунта?
            <Link to="/register">
              <span className="underline text-link-col">Регистрация</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
