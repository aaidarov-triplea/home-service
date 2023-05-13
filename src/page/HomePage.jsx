import { Link } from "react-router-dom";
import { Header } from "../components/header";


export const HomePage = () => {
  return (
    <>
      <Header />
      <main className="flex items-center justify-between text-center h-full sm:flex flex-col flex-wrap md:flex-row">
        <div className="catalogs" to="/cleaning">
          <div className="service-cleaning-top lg:bg-cover">
            <div className="bg-servicebg flex items-center justify-center flex-col w-9/12 h-2/6 rounded-lg p-5">
              <h2 className="service-title-style">Уборка</h2>
              <p className="service-subtitle-style">Service</p>
              <Link to="/clean" className="Link-style uppercase">
                Перейти →
              </Link>
            </div>
          </div>
        </div>
        <div className="catalogs" to="/electric">
          <div className="service-electric-top lg:bg-cover">
            <div className="bg-servicebg flex items-center justify-center flex-col w-9/12 h-2/6 rounded-lg p-5">
              <h2 className="service-title-style">Электрика</h2>
              <p className="service-subtitle-style">Service</p>
              <Link to="/electric" className="Link-style uppercase">
                Перейти →
              </Link>
            </div>
          </div>
        </div>
        <div className="catalogs" to="/plumping">
          <div className="service-plumping-top lg:bg-cover">
            <div className="bg-servicebg flex items-center justify-center flex-col w-9/12 h-2/6 rounded-lg p-5">
              <h2 className="service-title-style">Сантехника</h2>
              <p className="service-subtitle-style">Service</p>
              <Link to="/plumbing" className="Link-style uppercase">
                Перейти →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}