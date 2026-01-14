function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-8 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        <ul className="flex gap-8">
          <li>
            <a href="#home" className="hover:text-gray-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300 transition">
              About
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-gray-300 transition">
              FAQ
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
