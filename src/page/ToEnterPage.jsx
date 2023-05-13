import { Link } from "react-router-dom";
import bgVideo from "../assets/clean.mp4";

export const ToEnterPage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <video
          autoPlay
          muted
          loop
          className="fixed right-0 bottom-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="flex items-center justify-center flex-col p-20 rounded-lg bg-servicebg z-10">
          <h2 className="font-semibold text-text-2xl mb-10 text-white sm:text-4xl">
            Как войти
          </h2>
          <Link to="/home" className="Link-style mb-10">
            Клиент
          </Link>
          <Link to="/login" className="Link-style">
            Специалист
          </Link>
        </div>
      <a 
      href="https://aaidarov-portfolio.netlify.app"
      target="_black" 
      className="absolute bottom-1 right-4 z-10 text-text-xs"
      >
      made by aaidarov
      </a>
      </div>
    </>
  );
};
