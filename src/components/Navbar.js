import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className="navbar flex items-center bg-white px-6 py-4 border-b-2">
      <div className="navbarLogo">
        <img src={logo} alt="" className="w-12 h-12" />
      </div>
      <div className="navbarMenu flex m-auto">
        <nav className="font-semibold text-lg">
        <ul className="flex space-x-8">
          <li>
            <a className="duration-100 hover:text-sky-500" href="/">Beranda</a>
          </li>
          <li>
            <a className="duration-100 hover:text-sky-500" href="/">Beasiswa</a>
          </li>
          <li>
            <a className="duration-100 hover:text-sky-500" href="/">Informasi</a>
          </li>
          <li>
            <a className="duration-100 hover:text-sky-500" href="/">Tata Cara Pendaftaran</a>
          </li>
          <li>
            <a className="duration-100 hover:text-sky-500" href="/">Kontak</a>
          </li>
        </ul>
        </nav>
      </div>
      <div className="navbarLogin flex ml-6 pl-6 border-l-2">
        <ul className="flex space-x-2">
        <li>
            <a className="duration-100 hover:text-sky-500" href="/">Masuk</a>
          </li>
          <li>
            <a className="duration-100 hover:text-sky-500" href="/">Daftar</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar