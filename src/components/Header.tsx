
const Header = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl font-bold">MyApp</a>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-200">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
