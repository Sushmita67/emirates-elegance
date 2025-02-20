// import { useState } from "react";
// import { login } from "@/backend/services/auth/login";
//
//
// // UI
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import Loading from "../ui/loading";
// import { LoadingGoogleAccess } from "../ui/loading";
// import { toast } from "sonner";
//
//
//
// // ICONS
// import { FcGoogle } from "react-icons/fc";
//
// // STATES
// import useSignupData from "@/lib/states/signupData";
// import errorsStore from "@/lib/errors/errorsStore";
// import checkOnAuthErrors from "@/lib/errors/checkOnAuthErrors";
// import useUserState from "@/lib/states/userStates";
//
// // AUTH
// import { googleAuth } from "@/backend/services/auth/googleAuth";
//
//
//
// export default function Login() {
//
//     // Get the user data after a successful Sign up (If its ready), then place its specific inputs
//     const
//         // Email:
//         { email: EmailFromSignup } = useSignupData(),
//         [email, setEmail] = useState<string>(`${EmailFromSignup}`),
//         // Password:
//         { password: PasswordFromSignup } = useSignupData(),
//         [password, setPassword] = useState<string>(`${PasswordFromSignup}`);
//
//     const
//         // Update the user Logged-in state
//         { setIsLoggedin } = useUserState()
//
//     const
//         // Show Loading Spinner while Submit
//         [loading, setLoading] = useState<boolean>(false),
//         // Loading Spinner While Google Auth
//         [loadingGoogleAuth, setLoadingGoogleAuth] = useState<boolean>(false);
//
//
//
//     // Handle data submit
//     async function handleSubmit() {
//         setLoading(true)
//
//         try {
//             const results = await login({ email: email.toLowerCase(), password: password });
//
//             // Check on Errors store if there's a match to the Error occurred,
//             // if there's any, error type must be send to checkOnAuthError and return with its error description
//             const isTheresError = errorsStore.includes(results)
//             if (isTheresError) {
//                 const errorType = errorsStore.find(errorType => errorType === results)
//                 toast.error(`${checkOnAuthErrors(errorType).errordescription}`)
//                 setLoading(false)
//             } else if (!isTheresError && results) {
//
//                 setIsLoggedin(true);
//                 setLoading(false)
//
//             } else {
//                 setLoading(false)
//             }
//
//         } catch (error) {
//             setLoading(false)
//             console.error('An error occurred while Handling data submit (Signup form): ', error)
//         }
//     }
//
//
//     // Disable the "Enter" key from submitting a form or doing anything in a form or component
//     const handleKeyDown = (e: React.KeyboardEvent) => {
//         if (e.key === 'Enter') {
//             e.preventDefault();
//         }
//     }
//
//     // Handle the Authrization with Google Btn
//     async function handleAuthWithGoogle() {
//         setLoadingGoogleAuth(true)
//         const res = await googleAuth()
//         console.log(res)
//     }
//
//     return (
//         <>
//             <div className="mt-6" onKeyDown={handleKeyDown}>
//
//                 {/* Email */}
//                 <div>
//                     <p className="text-gray-500 text-sm mb-6">
//                         <div className="space-y-2">
//                             <Label htmlFor="email" className="font-bold text-black text-[15px]">Email Address</Label>
//                             <p className="text-gray-500 text-sm">
//                                 Please provide your registered email address.
//                             </p>
//                             <Input
//                                 className={email ? 'text-black' : ''}
//                                 id="email"
//                                 type="email"
//                                 placeholder="example@email.com"
//                                 value={email ? email : ''}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                         </div>
//                     </p>
//                 </div>
//
//                 {/* Password + "I forget it" Link */}
//                 <div>
//                     <div className="space-y-2">
//                         <Label htmlFor="password" className="font-bold text-black text-[15px]">Password</Label>
//                         <p className="text-gray-500 text-sm">
//                             Please enter your password.
//                         </p>
//                         <Input
//                             className={password ? 'text-black' : ''}
//                             id="password"
//                             type="password"
//                             placeholder="••••••••••"
//                             value={password || ''}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         {/* "Having trouble logging in? Reset Password" Link */}
//                         <div className="text-sm text-gray-500 mt-2">
//                             Having trouble logging in?{' '}
//                             <a href="/reset" className="text-blue-900 hover:underline">
//                                 Reset Password
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//
//
//             </div>
//             <Button className='w-full mt-4' disabled={email.length < 3 || password.length < 8} onClick={handleSubmit}>
//                 {loading ? (<Loading w={24} />) : 'Get in'}
//             </Button>
//
//             <div className={`flex items-center text-sm my-4`}>
//                 <div className="flex-grow border-t border-gray-300"></div>
//                 <span className="mx-4 text-gray-500">or</span>
//                 <div className="flex-grow border-t border-gray-300"></div>
//             </div>
//
//             <Button variant="outline" className={`mx-auto w-full hover:bg-white`} onClick={handleAuthWithGoogle}>
//                 {loadingGoogleAuth ?
//                     (<LoadingGoogleAccess />) :
//                     (<span className="flex">
//                         <FcGoogle className="mr-2" size="20" /> Continue with Google
//                     </span>)}
//
//             </Button>
//         </>
//     )
// }


//
// import { useState } from "react";
// import axios, { AxiosError } from "axios";
// import { toast } from "sonner";
//
// // UI
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import Loading from "../ui/loading";
// import { LoadingGoogleAccess } from "../ui/loading";
//
// // ICONS
// import { FcGoogle } from "react-icons/fc";
//
// // STATES
// import useSignupData from "@/lib/states/signupData";
// import useUserState from "@/lib/states/userStates";
//
// export default function Login() {
//     const { email: EmailFromSignup } = useSignupData();
//     const { password: PasswordFromSignup } = useSignupData();
//     const [email, setEmail] = useState<string>(`${EmailFromSignup}`);
//     const [password, setPassword] = useState<string>(`${PasswordFromSignup}`);
//     const { setIsLoggedin } = useUserState();
//     const [loading, setLoading] = useState<boolean>(false);
//     const [loadingGoogleAuth, setLoadingGoogleAuth] = useState<boolean>(false);
//
//     async function handleSubmit() {
//         setLoading(true);
//
//         try {
//             const response = await axios.post("http://localhost:5000/api/users/login1", {
//                 email: email.toLowerCase(),
//                 password,
//             });
//
//             const { token, user_id, email: userEmail, role, photo } = response.data;
//
//             localStorage.setItem("token", token);
//             localStorage.setItem("user_id", user_id);
//             localStorage.setItem("email", userEmail);
//             localStorage.setItem("role", role);
//             localStorage.setItem("photo", photo);
//
//             setIsLoggedin(true);
//             toast.success("Login successful!");
//
//             // Redirect based on role
//             if (role === "admin") {
//                 window.location.href = "/admin/home"; // Redirect to admin dashboard
//             } else {
//                 window.location.href = "/user/dashboard"; // Redirect to user dashboard
//             }
//         } catch (error) {
//             const errorMessage =
//                 (error as AxiosError)?.response?.data?.message || "Unable to login. Please try again.";
//             toast.error(errorMessage);
//         } finally {
//             setLoading(false);
//         }
//     }
//
//     const handleKeyDown = (e: React.KeyboardEvent) => {
//         if (e.key === "Enter") {
//             e.preventDefault();
//         }
//     };
//
//     async function handleAuthWithGoogle() {
//         setLoadingGoogleAuth(true);
//         try {
//             const response = await axios.get("http://localhost:5000/api/auth/google");
//             window.location.href = response.data.redirectUrl;
//         } catch (error) {
//             toast.error("Failed to initiate Google login.");
//         } finally {
//             setLoadingGoogleAuth(false);
//         }
//     }
//
//     return (
//         <>
//             <div className="mt-6" onKeyDown={handleKeyDown}>
//                 <div>
//                     <p className="text-gray-500 text-sm mb-6">
//                         <div className="space-y-2">
//                             <Label htmlFor="email" className="font-bold text-black text-[15px]">Email Address</Label>
//                             <p className="text-gray-500 text-sm">Please provide your registered email address.</p>
//                             <Input
//                                 className={email ? 'text-black' : ''}
//                                 id="email"
//                                 type="email"
//                                 placeholder="example@email.com"
//                                 value={email ? email : ''}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                         </div>
//                     </p>
//                 </div>
//
//                 <div>
//                     <div className="space-y-2">
//                         <Label htmlFor="password" className="font-bold text-black text-[15px]">Password</Label>
//                         <p className="text-gray-500 text-sm">Please enter your password.</p>
//                         <Input
//                             className={password ? 'text-black' : ''}
//                             id="password"
//                             type="password"
//                             placeholder="••••••••••"
//                             value={password || ''}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <div className="text-sm text-gray-500 mt-2">
//                             Having trouble logging in?{' '}
//                             <a href="/reset" className="text-blue-900 hover:underline">Reset Password</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//             <Button className='w-full mt-4' disabled={email.length < 3 || password.length < 8} onClick={handleSubmit}>
//                 {loading ? (<Loading w={24} />) : 'Get in'}
//             </Button>
//
//             <div className={`flex items-center text-sm my-4`}>
//                 <div className="flex-grow border-t border-gray-300"></div>
//                 <span className="mx-4 text-gray-500">or</span>
//                 <div className="flex-grow border-t border-gray-300"></div>
//             </div>
//
//             <Button variant="outline" className={`mx-auto w-full hover:bg-white`} onClick={handleAuthWithGoogle}>
//                 {loadingGoogleAuth ?
//                     (<LoadingGoogleAccess />) :
//                     (<span className="flex">
//                         <FcGoogle className="mr-2" size="20" /> Continue with Google
//                     </span>)}
//             </Button>
//         </>
//     );
// }

import { useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

// UI Components
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Loading from "../ui/loading";
import { LoadingGoogleAccess } from "../ui/loading";

// Icons
import { FcGoogle } from "react-icons/fc";

// State Management
import useSignupData from "@/lib/states/signupData";
import useUserState from "@/lib/states/userStates";

export default function Login() {
    const { email: EmailFromSignup, password: PasswordFromSignup } = useSignupData();
    const [email, setEmail] = useState<string>(EmailFromSignup || "");
    const [password, setPassword] = useState<string>(PasswordFromSignup || "");
    const { setIsLoggedin } = useUserState();
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingGoogleAuth, setLoadingGoogleAuth] = useState<boolean>(false);

    // ✅ Handle login without bcrypt (plaintext password comparison ⚠ NOT SECURE)
    async function handleSubmit() {
        setLoading(true);
        try {
            console.log("🔍 Sending Login Data:", { email, password }); //  Debugging input before request

            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email: email.toLowerCase(),
                password,
            });

            console.log("✅ Login Response:", response.data); //

            const { token, user_id, email: userEmail, role, photo } = response.data;

            // ✅ Store token & user info in localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("user_id", user_id);
            localStorage.setItem("email", userEmail);
            localStorage.setItem("role", role);
            localStorage.setItem("photo", photo);

            setIsLoggedin(true);
            toast.success("Login successful!");

            //  No redirection logic here, user stays on the same page

        } catch (error) {
            console.error("❌ Login Error:", error); //  Log error details

            const errorMessage =
                (error as AxiosError)?.response?.data?.message || "Unable to login. Please try again.";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    //  Prevent form submission on Enter key press
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    // ✅ Handle Google Authentication
    async function handleAuthWithGoogle() {
        setLoadingGoogleAuth(true);
        try {
            const response = await axios.get("http://localhost:5000/api/auth/google");
            window.location.href = response.data.redirectUrl;
        } catch (error) {
            toast.error("Failed to initiate Google login.");
        } finally {
            setLoadingGoogleAuth(false);
        }
    }

    return (
        <>
            <div className="mt-6" onKeyDown={handleKeyDown}>
                {/* ✅ Email Field */}
                <div>
                    <Label htmlFor="email" className="font-bold text-black text-[15px]">
                        Email Address
                    </Label>
                    <p className="text-gray-500 text-sm">Please provide your registered email address.</p>
                    <Input
                        className={email ? "text-black" : ""}
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* ✅ Password Field */}
                <div className="mt-4">
                    <Label htmlFor="password" className="font-bold text-black text-[15px]">
                        Password
                    </Label>
                    <p className="text-gray-500 text-sm">Please enter your password.</p>
                    <Input
                        className={password ? "text-black" : ""}
                        id="password"
                        type="password"
                        placeholder="••••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="text-sm text-gray-500 mt-2">
                        Having trouble logging in?{" "}
                        <a href="/reset" className="text-blue-900 hover:underline">
                            Reset Password
                        </a>
                    </div>
                </div>
            </div>

            {/* ✅ Submit Button */}
            <Button className="w-full mt-4" disabled={email.length < 3 || password.length < 8} onClick={handleSubmit}>
                {loading ? <Loading w={24} /> : "Get in"}
            </Button>

            {/* ✅ OR Divider */}
            <div className="flex items-center text-sm my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* ✅ Google Login Button */}
            <Button variant="outline" className="mx-auto w-full hover:bg-white" onClick={handleAuthWithGoogle}>
                {loadingGoogleAuth ? (
                    <LoadingGoogleAccess />
                ) : (
                    <span className="flex">
                        <FcGoogle className="mr-2" size="20" /> Continue with Google
                    </span>
                )}
            </Button>
        </>
    );
}