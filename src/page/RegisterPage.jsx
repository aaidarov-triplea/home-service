import { FormRegister } from '../components/form'

export const RegisterPage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-full md:h-screen lg:h-screen xl:h-screen">
        <div className="flex flex-col items-center justify-center p-10 rounded-lg w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-servicebg">
          <FormRegister />
        </div>
      </div>
    </>
  )
}
