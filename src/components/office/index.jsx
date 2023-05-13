import { Link } from 'react-router-dom'

export const Office = () => {

  return (
    <>
      <Link to='/login' className="office-backBtn-link bg-button-hover-color hover:bg-opacity-50">Выйти</Link>
      <div className='h-screen'>
      </div>
    </>
  )
}