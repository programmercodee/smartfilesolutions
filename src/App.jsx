import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Income_Tax_eFiling from './components/Income_Tax_eFiling/income_Tax_eFiling';
import Book_Consultancy from './components/Book_Consultancy/book_Consultancy';
import ISO_Certification from './components/ISO_Certification/ISO_Certification';

function Placeholder({ text }) {
  return <div className="p-8 text-center text-xl">{text}</div>;
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main menu routes */}
        <Route path="/income-tax-filing" element={<Income_Tax_eFiling/>} />
        <Route path="/book-consultancy" element={<Book_Consultancy/>} />
        {/* Popular Services submenu */}
        <Route path="/popular/service1" element={<Income_Tax_eFiling/>} />
        <Route path="/popular/service2" element={<ISO_Certification/>} />
        <Route path="/popular/service3" element={<Placeholder text="GST REGISTRATION" />} />
        <Route path="/popular/service4" element={<Placeholder text="GST RETURN FILING" />} />
        <Route path="/popular/service5" element={<Placeholder text="MSME REGISTRATION" />} />
        <Route path="/popular/service6" element={<Placeholder text="COMPANY REGISTRATION" />} />
        <Route path="/popular/service7" element={<Placeholder text="FIRM REGISTRATION" />} />
        <Route path="/popular/service8" element={<Placeholder text="FSSAI LICENSE" />} />
        <Route path="/popular/service9" element={<Placeholder text="TRADEMARK REGISTRATION" />} />
        {/* Business Registration submenu and sub-submenu */}
        <Route path="/business/llp" element={<Placeholder text="COMPANY REGISTRATION" />} />
        <Route path="/business/llp/private-ltd" element={<Placeholder text="Private Limited" />} />
        <Route path="/business/llp/public-ltd" element={<Placeholder text="Public Limited" />} />
        <Route path="/business/private-ltd" element={<Placeholder text="FIRM REGISTRATION" />} />
        <Route path="/business/private-ltd/private-ltd" element={<Placeholder text="Private Limited (Firm)" />} />
        <Route path="/business/private-ltd/public-ltd" element={<Placeholder text="Public Limited (Firm)" />} />
        {/* GST Services submenu */}
        <Route path="/gst/registration" element={<Placeholder text="GST REGISTRATION" />} />
        <Route path="/gst/filing" element={<Placeholder text="GST FILING" />} />
        {/* Support submenu */}
        <Route path="/support/contact" element={<Placeholder text="CONTACT US" />} />
        <Route path="/support/faq" element={<Placeholder text="FAQ" />} />
        {/* Home route */}
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
