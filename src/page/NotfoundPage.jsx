import { Link } from "react-router-dom"
import err404 from "../assets/images/404.png"

export const NotfoundPage = () => {
  return (
    <>
      <div className="w-srceen h-screen relative">
      <Link to='/' className="err-backBtn-link bg-button-hover-color hover:bg-opacity-50">На главную страницу</Link>
        <div className="err-style">
          <h1 className="err-title-style bg-button-hover-color">Ошибка 404:</h1>
          <p className="err-subtitle-style text-center">Страница не найдена</p>
          <img className="object-cover" src={err404} alt="" />
        </div>
      </div>
    </>
  )
}
