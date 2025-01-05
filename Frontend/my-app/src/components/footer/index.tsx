export default function Footer() {
    return (
      <footer className="bg-black text-white mt-20 w-full py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
     
          <div className="mb-8 md:mb-0">
            <p className="font-semibold text-xl">Clinical Analysis Laboratory</p>
            <p>Your well-being, our priority</p>
          </div>

          <div className="mb-8 md:mb-0">
            <p className="font-semibold text-lg">Explore</p>
            <ul>
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">About</a></li>
              <li><a href="#" className="hover:text-blue-400">Register</a></li>
            </ul>
          </div>
  
          <div className="mb-8 md:mb-0">
            <p className="font-semibold text-lg">Other Sites</p>
            <ul>
              <li><a href="#" className="hover:text-blue-400">Link 1</a></li>
              <li><a href="#" className="hover:text-blue-400">Link 2</a></li>
              <li><a href="#" className="hover:text-blue-400">Link 3</a></li>
            </ul>
          </div>
  
          <div className="mb-8 md:mb-0">
            <p className="font-semibold text-lg">My Account</p>
            <ul>
              <li><a href="#" className="hover:text-blue-400">Profile</a></li>
              <li><a href="#" className="hover:text-blue-400">Orders</a></li>
              <li><a href="#" className="hover:text-blue-400">Settings</a></li>
            </ul>
          </div>
  

          <div className="mb-8 md:mb-0">
            <p className="font-semibold text-lg">Social Networks</p>
            <ul>
              <li><a href="#" className="hover:text-blue-400">X</a></li>
              <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
              <li><a href="#" className="hover:text-blue-400">Youtube</a></li>
            </ul>
          </div>
  
          <div className="mb-8 md:mb-0">
            <p className="font-semibold text-lg">Legal</p>
            <ul>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
  
        <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
          <p>© 2025 Clinical Analysis Laboratory. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  