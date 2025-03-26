import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaCheckCircle,
  FaChartLine,
  FaBrain,
  FaPlug,
} from "react-icons/fa";
export default function Home() {
  const aiServices = [
    {
      title: "AI Chatbots",
      description:
        "Automate customer support and lead generation with intelligent conversational AI",

      imgSrc:
        "https://assets.grok.com/users/a687d284-b5c1-43eb-8a07-c6b450dff8b2/generated/4fHaZNsdrfZTgwOa/image.jpg",
      alt: "AI Chatbots",
    },
    {
      title: "AI Call Center",
      description:
        "24/7 AI voice bots for seamless customer support and service automation",

      imgSrc:
        "https://assets.grok.com/users/a687d284-b5c1-43eb-8a07-c6b450dff8b2/generated/VzuE521XkeceI8xc/image.jpg",
      alt: "AI Call Center",
    },
    {
      title: "AI Automation",
      description:
        "Streamline HR, Finance, and Workflow processes with intelligent automation",
      imgSrc:
        "https://assets.grok.com/users/a687d284-b5c1-43eb-8a07-c6b450dff8b2/generated/exhMuS3sjMymZaR8/image.jpg",
      alt: "AI Automation",
    },
    {
      title: "AI for Specific Industry",
      description:
        "Tailor AI solutions for healthcare, finance, retail, and more with industry-specific automation.",
      imgSrc: "",
      alt: "AI for Specific Industry",
    },
    {
      title: "Automate Quality Assurance",
      description:
        "Enhance software testing and defect detection with AI-driven quality assurance automation.",
      imgSrc: "",
      alt: "Automate Quality Assurance",
    },
    {
      title: "AI Sales & Lead Generation Agents",
      description:
        "Boost sales and marketing with AI-powered agents that automate lead generation and customer outreach.",
      imgSrc: "",
      alt: "AI Sales & Lead Generation Agents",
    },
  ];
  return (
    <>
      <div className="font-['Inter'] bg-gray-50">
        <header className="fixed top-0 w-full bg-white shadow-sm z-50 h-[10vh]">
          <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <img className="h-8" src="/logoAi.jpeg" alt="Company Logo" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                  <a
                    href="#"
                    className="text-gray-900 hover:text-custom font-medium"
                  >
                    Home
                  </a>
                  <div className="relative group">
                    <button className="text-gray-900 group-hover:text-custom font-medium inline-flex items-center">
                      Services
                      <i className="fas fa-chevron-down ml-2 text-xs"></i>
                    </button>
                    <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg mt-2 rounded-md">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        AI Chatbots
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        AI Call Center
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        AI Automation
                      </a>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-gray-900 hover:text-custom font-medium"
                  >
                    Case Studies
                  </a>
                  <a
                    href="#"
                    className="text-gray-900 hover:text-custom font-medium"
                  >
                    Contact
                  </a>
                  <button className="!rounded-button bg-black text-white px-6 py-2 font-medium hover:bg-custom/90">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main className="pt-16">
          <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden h-[100vh] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                {/* Left Content */}
                <div className="max-w-lg">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Automate Your Business with AI-Powered Solutions
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Transform your business operations with cutting-edge AI
                    technology. From chatbots to call centers and workflow
                    automation.
                  </p>
                  <button className="!rounded-button bg-black text-white px-8 py-4 text-lg font-medium hover:bg-custom/90">
                    Start Now
                  </button>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-end h-full">
                  <img
                    src="/aiRobo.png"
                    alt="AI Solutions"
                    className="w-full max-w-md object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-16">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {aiServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
                  >
                    <div className=" mb-6">
                      <img
                        src={service.imgSrc}
                        alt={service.alt}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <button className="!rounded-button text-custom border border-custom px-6 py-2 font-medium hover:bg-custom hover:text-white">
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-gray-50 h-[100vh] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                {/* Left Image - GPD (Good Proportions & Dimensions) */}
                <div className="relative flex justify-end h-full">
                  <img
                    src="/contactUseAi.png"
                    alt="Why Choose Us"
                    className="w-full max-w-md max-h-[80vh] object-contain"
                  />
                </div>

                {/* Right Content */}
                <div>
                  <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <FaCheckCircle className="text-custom mt-1 text-2xl" />
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">
                          24/7 AI-powered Support
                        </h3>
                        <p className="text-gray-600">
                          Round-the-clock customer support with intelligent AI
                          systems
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaChartLine className="text-custom mt-1 text-2xl" />
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">
                          40% Cost Reduction
                        </h3>
                        <p className="text-gray-600">
                          Significant cost savings through automated processes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaBrain className="text-custom mt-1 text-2xl" />
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">
                          Self-Learning AI
                        </h3>
                        <p className="text-gray-600">
                          Continuously improving AI systems that adapt to your
                          needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaPlug className="text-custom mt-1 text-2xl" />
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">
                          Easy Integration
                        </h3>
                        <p className="text-gray-600">
                          Seamless integration with your existing CRM and tools
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Get Started Today
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full !rounded-button border border-black  focus:outline-none p-2 shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full !rounded-button border border-black  focus:outline-none p-2 shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      className="w-full !rounded-button border border-black  focus:outline-none p-2 shadow-sm focus:ring-custom focus:border-custom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select className="w-full !rounded-button border border-black  focus:outline-none p-2 shadow-sm focus:ring-custom focus:border-custom">
                      <option>AI Chatbots</option>
                      <option>AI Call Center</option>
                      <option>AI Automation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea className="w-full !rounded-button border border-black  focus:outline-none p-2shadow-sm focus:ring-custom focus:border-custom"></textarea>
                  </div>
                  <button
                    type="submit"
                    className="!rounded-button w-full bg-black text-white py-3 font-medium hover:bg-custom/90"
                  >
                    Get a Free AI Demo
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <img
                  className="h-8 mb-4"
                  src="/logoAi.jpeg"
                  alt="Company Logo"
                />
                <p className="text-gray-400">
                  Transforming businesses with AI-powered solutions
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      AI Chatbots
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      AI Call Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      AI Automation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      AI for Specific Industry
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Automate Quality Assurance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      AI Sales & Lead Generation Agents
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>© 2025 AI Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
