import { useEffect, useState } from "react"
import { LoadingPage } from "../../page/LoadingPage"
import { Header } from "../header"
import { HireBtn } from "../buttons"

export const Clean = () => {
    const [getSpecialist, setGetSpecialist] = useState()
    const MockApiUrl = "https://644cde8ecfdddac97097dc42.mockapi.io/clean"
  
    useEffect(() => {
      fetch(MockApiUrl)
        .then((res) => res.json())
        .then((data) => {
          setGetSpecialist(data)
        })
    }, [])
    return (
      <>
          <Header />
        <h1 className=" text-center font-bold text-4xl mt-10 mb-5 underline text-main-text-color">
          Список Специалистов
        </h1>
        <div className="flex flex-wrap mt-5">
          {!getSpecialist ? (
            <LoadingPage />
          ) : (
            getSpecialist.map((specialist) => (
              <div
                key={specialist.id}
                className="employers-card"
              >
                <div className="flex flex-col justify-center items-center w-full h-full">
                  <div className="w-full h-1/2 flex items-center justify-center mb-5 rounded-sm">
                    <img
                      src={specialist.avatar}
                      alt="avatar"
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col w-full p-5">
                  <div className="font-bold mb-3 uppercase text-text-18 w-full flex items-start justify-center">
                        {specialist.firstName}
                      <span className="ml-1">{specialist.lastName}</span>
                    </div>
                    <div className="text-text-base">
                      <b className="mr-3">Должность:</b>
                      {specialist.direction}
                    </div>
                    <div className="text-text-base">
                      <b className="mr-3">Цена:</b>
                      {specialist.price} KGS
                    </div>
                    <HireBtn phoneNumber={specialist.phoneNumber}/>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </>
    );
}