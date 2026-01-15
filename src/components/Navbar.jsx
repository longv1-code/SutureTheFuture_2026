import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-8 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        <ul className="flex gap-8 ml-auto">
          <li>
            <Link to="/" className="hover:text-primary-cream transition font-dm-sans text-sm font-bold">suture the future</Link>
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
