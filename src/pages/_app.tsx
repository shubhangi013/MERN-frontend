import axios from "axios";
import "tailwindcss/tailwind.css";
import "../../styles/globals.css";
import { ThemeProvider } from 'next-themes'
axios.defaults.baseURL=process.env.NEXT_PUBLIC_API_BASE_ENDPOINT;

function MyApp({ Component, pageProps }) {
  return<div className="h-screen font-serif bg-gray-900 grid place-items-center text-white">
 
   <Component {...pageProps} />
   </div>

}

export default MyApp;
