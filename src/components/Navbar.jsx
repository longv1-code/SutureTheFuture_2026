function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-8 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        <ul className="flex gap-8 ml-auto">
          <li>
            <a href="#home" className="hover:text-primary-cream transition font-dm-sans text-sm font-bold">
              suture the future
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary-cream transition font-dm-sans text-sm font-bold">
              meet the team
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
