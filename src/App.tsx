import { Route, Routes, useLocation } from "react-router-dom"
import Main from "./pages/Main"
import Header from "./components/Header"
import Brands from "./pages/Brands"
import Footer from "./components/Footer"
import GoToTop from "./components/GoToTop"
import Category from "./pages/Category"
import NotFound from "./pages/NotFound"
import Search from "./pages/Search"
import AdminDashboard from "./pages/Admin/Dashboard"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'react-hot-toast';

function App() {
  const { pathname } = useLocation()

  const isAdminRoute = pathname.startsWith("/admin")

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        {
          !isAdminRoute && <><Header /><Toaster position="bottom-right" reverseOrder={false}/>
      <Header /></>
        }
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/search/:keyword" element={<Search />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {
          !isAdminRoute && <>
            <GoToTop />
            <Footer />
          </>
        }
      </ThemeProvider>
    </>
  )
}

export default App
