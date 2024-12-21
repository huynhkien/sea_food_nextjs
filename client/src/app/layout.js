"use client";
import { usePathname } from 'next/navigation';
import { Inter } from "next/font/google";
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/redux';
import { ToastContainer } from "react-toastify";


import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Sidebar from "../ui/Sidebar";

// Import CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/animate.css";
import "../../public/css/magnific-popup.css";
import "../../public/css/main.css";
import "../../public/css/meanmenu.css";
import "../../public/css/nice-select.css";
import "../../public/css/slick.css";
import "../../public/css/spacing.css";
import "../../public/css/admin.css";
import 'react-toastify/dist/ReactToastify.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');
  const isUserRoute = pathname.startsWith('/user');
  const value = {
    inputStyle: 'filled',
  };

  return (
    <html lang="en">
      <head>
        <title>Your Website</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <PrimeReactProvider value={value}>
              {isAdminRoute || isUserRoute ? (
                <div className='admin-layout'>
                  <Sidebar />
                  <div className='content'>
                    <Header />
                    <main>
                      {children}
                    </main>
                    <Footer />
                  </div>
                </div>
              ) : (
                <div className='non-admin-layout'>
                  <Header />
                  <main>
                    {children}
                  </main>
                  <Footer />
                </div>
              )}
               <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            <ToastContainer />
            </PrimeReactProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
