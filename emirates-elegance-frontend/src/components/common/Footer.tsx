// UI
import { Link } from 'react-router-dom'

// ICON
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {

    // Scroll top when click on Link
    function scrollTopFunc() {
        window.scrollTo({
            top: -10,
            behavior: 'instant'
        });
    }

    return (
        <footer className="container py-6 bg-black text-white xl:rounded-t-xl">

            <div className="mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-6 mt-5 mb-10">

                <div className="flex items-center">
                    <div className="info lg:text-start w-full text-sm">
                        <ul>
                            <li className="mb-5 max-w-fit">
                                <Link onClick={scrollTopFunc} to="/">
                                    <img src="/images/logo-main.svg" className="h-10 w-10 bg-white rounded-full p-1" />
                                </Link>


                            </li>
                            <li className="text-gray-400">
                                Address
                            </li>
                            <li>
                                Gold & Diamond Park, Kathmandu   Nepal
                            </li>

                            <br />

                            <li className="text-gray-400">
                                Contact
                            </li>
                            <li>
                                <Link onClick={scrollTopFunc} to="mail:firasdabbabi@gmail.com">
                                    emirates_elegance@gmail.com
                                </Link>
                            </li>
                            <li>
                                +971 4 347 8089
                            </li>

                            <br />

                            <li className="text-gray-400 lg:text-start text-center">
                                <div className="flex space-x-4 text-sm my-3 lg:my-auto">
                                    <Link onClick={scrollTopFunc} className="text-gray-400 hover:text-white" target="_blank" to="https://np.linkedin.com/in/ashish-mool">
                                        <FaLinkedin className="h-7 w-7" />
                                    </Link>
                                    <Link onClick={scrollTopFunc} className="text-gray-400 hover:text-white" target="_blank" to="https://github.com//ashishmool/emirates-elegance">
                                        <FaGithub className="h-7 w-7" />
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex text-sm lg:justify-end justify-center lg:mt-[-50px] mt-5 w-full nav-links">
                    <div className="text-center">
                        {/* Payment Options Title */}
                        <p className="text-gray-200 mb-2">Payment Options</p>

                        {/* Payment Icons */}
                        <div className="flex justify-center items-center space-x-4">
                            <img className="h-8 w-auto" src="https://www.iconarchive.com/download/i76280/designbolts/credit-card-payment/Visa.ico" alt="Visa" />
                            <img className="h-6 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png" alt="MasterCard" />
                            <img className="h-4 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1200px-PayPal_logo.svg.png" alt="PayPal" />
                        </div>
                    </div>
                </div>



            </div>


            <div className="mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-6 mt-5">
                <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold">Emirate Elegance by Sushmita Bishwakarma</span>
                    <span className="text-sm">© {new Date().getFullYear()} All Rights Reserved</span>
                </div>


                <div className="flex items-center text-center justify-center space-x-4 text-xs my-3 lg:my-auto">
                    <Link onClick={scrollTopFunc} className="text-gray-400 hover:text-white" to="/policies#Privacy">
                        Privacy Policy
                    </Link>
                    <Link onClick={scrollTopFunc} className="text-gray-400 hover:text-white" to="/policies#Privacy">
                        Terms of Service
                    </Link>
                    <Link onClick={scrollTopFunc} className="text-gray-400 hover:text-white" to="/policies#Privacy">
                        Cookies Settings
                    </Link>
                </div>
            </div>

        </footer>
    )
}