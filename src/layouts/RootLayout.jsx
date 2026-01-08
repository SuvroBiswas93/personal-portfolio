import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="grow">
       <Outlet/>
      </main>
      <Footer />
      <FloatingCTA />

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
    </div>
  );
};

export default RootLayout;
