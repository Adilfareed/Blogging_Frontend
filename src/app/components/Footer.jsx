const Footer = () => {
    return (
      <footer className="bg-black text-white py-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-sm">
              Have a question or want to contribute? Contact us at:
            </p>
            <p className="text-sm mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@blogsite.com" className="hover:underline">
                info@blogsite.com
              </a>
            </p>
            <p className="text-sm mt-2">
              <strong>Follow Us:</strong> Stay updated with our latest blogs on social media!
            </p>
          </div>
  
          <hr className="my-6 border-gray-600" />
  
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 sm:mb-0">
              <a
                href="#"
                className="hover:text-gray-400"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a
                href="#"
                className="hover:text-gray-400"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="#"
                className="hover:text-gray-400"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="#"
                className="hover:text-gray-400"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube text-2xl"></i>
              </a>
              <a
                href="#"
                className="hover:text-gray-400"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
  
            
          </div>
  
          <div className="text-center text-sm mt-6">
            <p>© 2025 Blog Breeze, All rights reserved</p>
            <p className="mt-2">
              <a href="#" className="hover:underline">
                Terms of Use
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  