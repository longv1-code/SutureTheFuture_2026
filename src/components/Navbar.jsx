import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-black text-white py-3 sm:py-4 px-4 sm:px-8 fixed w-full top-0 z-50">
      <div className="flex justify-center sm:justify-between items-center">
        <ul className="flex gap-4 sm:gap-8 sm:ml-auto">
          <li>
            <a href="#home" className="hover:text-primary-cream transition font-dm-sans text-xs sm:text-sm font-bold tracking-wide">suture the future</a>
          </li>
          {/*<li>
            <Link to="/team" className="hover:text-primary-cream transition font-dm-sans text-sm font-bold">meet the team</Link>
          </li>*/}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
