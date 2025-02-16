// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//
// // SERVICES
// import { checkSession } from "@/backend/services/auth/checkSession";
//
// // STATES
// import useUserState from "@/lib/states/userStates";
// import useCheckStoreState from "@/lib/states/userStoreState";
//
// // UI
// import { Navbar, Footer, Reset } from "@/components";
// import { LoadingScreen } from "@/components/ui/loading";
// import { Toaster } from 'sonner';
//
// // PAGES
// import {
//   Home,
//   JewelleryDetails,
//   Collections,
//   StoreDetails,
//   Error,
//   Policies,
//   AboutDetails,
//   Contact,
//   CartDetails,
//   SellDetails,
//   SettingsDetails,
//   EditDetails,
//   BrowseDetails,
//   UpdateDetails,
//   CreateDetails,
//   VerifyDetails,
// } from "./pages";
// import ResetPassword from "@/components/reset/ResetPassword.tsx";
//
// export default function App() {
//   // Active loading screen while fetching data
//   const [activeLoadingScreen, setActiveLoadingScreen] = useState<boolean>(true);
//
//   // Get the userState that tracks whether the User is Logged in or Not
//   const { isLoggedin, setIsLoggedin } = useUserState();
//
//   // Check isStoreValid State
//   const { isStoreValid } = useCheckStoreState();
//
//   // State to store backend data
//   const [backendData, setBackendData] = useState(null);
//
//   // Check if there's an active session by calling the checkSession() and check its returns
//   async function sessionCheck() {
//     try {
//       const response = await checkSession();
//       setIsLoggedin(response);
//     } catch (error) {
//       console.error('Error checking session:', error);
//       setIsLoggedin(false);
//     } finally {
//       setActiveLoadingScreen(false);
//     }
//   }
//
//   // Fetch data from the backend
//   const fetchData = async () => {
//     try {
//       const backendEndpoint = import.meta.env.VITE_BACKEND_ENDPOINT;
//       const response = await fetch(`${backendEndpoint}/api/data`);
//       const data = await response.json();
//       setBackendData(data); // Store the data in state
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//
//   // Return specific route based on specific checks
//   function storeRoute() {
//     if (isLoggedin === true && isStoreValid === true) {
//       return <StoreDetails />;
//     } else if (isLoggedin === true && isStoreValid === false) {
//       return <CreateDetails />;
//     } else if (isLoggedin === false && isStoreValid === false) {
//       return <Home />;
//     }
//   }
//
//   // Run checks every time App gets mounted
//   useEffect(() => {
//     sessionCheck();
//     fetchData(); // Fetch data when the app mounts
//   }, []);
//
//   return (
//       <>
//         {activeLoadingScreen ? (
//             <LoadingScreen />
//         ) : (
//             <BrowserRouter>
//               <Toaster richColors />
//
//               <div>
//                 <Navbar />
//                 <div className="pb-10"></div>
//               </div>
//               <Routes>
//                 {/* Basic Routes */}
//                 <Route index element={<Home />} />
//                 <Route path='*' element={<Error />} />
//                 <Route path='policies' element={<Policies />} />
//                 <Route path='about' element={<AboutDetails />} />
//                 <Route path='cart' element={<CartDetails />} />
//                 <Route path='collections' element={<BrowseDetails />} />
//                 <Route path="reset" element={<Reset />} />
//                 <Route path="reset-password" element={<ResetPassword />} />
//                 <Route path='contact' element={<Contact />} />
//
//                 {/* If NOT Logged-in */}
//                 <Route path='verify' element={isLoggedin ? <VerifyDetails /> : <Navigate to="/" />} />
//                 <Route path='update' element={isLoggedin ? <UpdateDetails /> : <Navigate to="/" />} />
//                 <Route path='settings' element={isLoggedin ? <SettingsDetails /> : <Navigate to="/" />} />
//                 <Route path='sell' element={isLoggedin ? <SellDetails /> : <Navigate to="/" />} />
//                 <Route path="store/create" element={storeRoute()} />
//
//                 <Route path='edit' element={isLoggedin ? <EditDetails /> : <Navigate to="/" />} />
//
//                 {/* Custom Routes */}
//                 <Route path='collections/:id' element={<Collections />} />
//                 <Route path='jewelleries/:id' element={<JewelleryDetails />} />
//                 <Route path="store/:id" element={<StoreDetails />} />
//
//                 {/* Redirect Routes */}
//                 <Route path="jewelleries" element={<Navigate to="/" />} />
//                 <Route path="store" element={<Navigate to="/" />} />
//                 <Route path="edit" element={<Navigate to="/" />} />
//               </Routes>
//               <div>
//                 <Footer />
//               </div>
//             </BrowserRouter>
//         )}
//       </>
//   );
// }

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// SERVICES
import { checkSession } from "@/backend/services/auth/checkSession";

// STATES
import useUserState from "@/lib/states/userStates";
import useCheckStoreState from "@/lib/states/userStoreState";

// UI
import { Navbar, Footer, Reset } from "@/components";
import { LoadingScreen } from "@/components/ui/loading";
import { Toaster } from 'sonner';

// PAGES
import {
  Home,
  JewelleryDetails,
  Collections,
  StoreDetails,
  Error,
  Policies,
  AboutDetails,
  Contact,
  CartDetails,
  SellDetails,
  SettingsDetails,
  EditDetails,
  BrowseDetails,
  UpdateDetails,
  CreateDetails,
  VerifyDetails,
} from "./pages";
import ResetPassword from "@/components/reset/ResetPassword.tsx";

export default function App() {
  // Active loading screen while fetching data
  const [activeLoadingScreen, setActiveLoadingScreen] = useState<boolean>(true);

  // Get the userState that tracks whether the User is Logged in or Not
  const { isLoggedin, setIsLoggedin } = useUserState();

  // Check isStoreValid State
  const { isStoreValid } = useCheckStoreState();

  // Check if there's an active session by calling the checkSession() and check its returns
  async function sessionCheck() {
    try {
      const response = await checkSession();
      setIsLoggedin(response);
    } catch (error) {
      console.error('Error checking session:', error);
      setIsLoggedin(false);
    } finally {
      setActiveLoadingScreen(false);
    }
  }

  // Return specific route based on specific checks
  function storeRoute() {
    if (isLoggedin === true && isStoreValid === true) {
      return <StoreDetails />;
    } else if (isLoggedin === true && isStoreValid === false) {
      return <CreateDetails />;
    } else if (isLoggedin === false && isStoreValid === false) {
      return <Home />;
    }
  }

  // Run checks every time App gets mounted
  useEffect(() => {
    sessionCheck();
  }, []);

  return (
      <>
        {activeLoadingScreen ? (
            <LoadingScreen />
        ) : (
            <BrowserRouter>
              <Toaster richColors />

              <div>
                <Navbar />
                <div className="pb-10"></div>
              </div>
              <Routes>
                {/* Basic Routes */}
                <Route index element={<Home />} />
                <Route path='*' element={<Error />} />
                <Route path='policies' element={<Policies />} />
                <Route path='about' element={<AboutDetails />} />
                <Route path='cart' element={<CartDetails />} />
                <Route path='collections' element={<BrowseDetails />} />
                <Route path="reset" element={<Reset />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route path='contact' element={<Contact />} />

                {/* If NOT Logged-in */}
                <Route path='verify' element={isLoggedin ? <VerifyDetails /> : <Navigate to="/" />} />
                <Route path='update' element={isLoggedin ? <UpdateDetails /> : <Navigate to="/" />} />
                <Route path='settings' element={isLoggedin ? <SettingsDetails /> : <Navigate to="/" />} />
                <Route path='sell' element={isLoggedin ? <SellDetails /> : <Navigate to="/" />} />
                <Route path="store/create" element={storeRoute()} />

                <Route path='edit' element={isLoggedin ? <EditDetails /> : <Navigate to="/" />} />

                {/* Custom Routes */}
                <Route path='collections/:id' element={<Collections />} />
                <Route path='jewelleries/:id' element={<JewelleryDetails />} />
                <Route path="store/:id" element={<StoreDetails />} />

                {/* Redirect Routes */}
                <Route path="jewelleries" element={<Navigate to="/" />} />
                <Route path="store" element={<Navigate to="/" />} />
                <Route path="edit" element={<Navigate to="/" />} />
              </Routes>
              <div>
                <Footer />
              </div>
            </BrowserRouter>
        )}
      </>
  );
}