
const HeroBanner = () => {
  return (
    <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1685868556097-641c237f3fa5?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
        <p className="text-lg mb-6">Discover amazing features and get started today!</p>
        <div className="flex space-x-4">
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</a>
          <a href="#" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
