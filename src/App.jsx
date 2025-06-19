import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Income_Tax_eFiling from './components/Income_Tax_eFiling/income_Tax_eFiling';
import Book_Consultancy from './components/Book_Consultancy/book_Consultancy';
import ISO_Certification from './components/ISO_Certification/ISO_Certification';
import GST_Registration from './components/GST_Registration/GST_Registration';
import Gst_Return_Filing from './components/Gst_Return_Filing/gst_Return_Filing';
import MSME_Registration from './components/MSME_Registration/MSME_Registration';
import Private_Limited_Company_Registration from './components/Private_Limited_Company_Registration/Private_Limited_Company_Registration';
import Proprietorship_Firm_Registration from './components/Proprietorship_Firm_Registration/Proprietorship_Firm_Registration';
import FSSAI_Registration from './components/FSSAI_Registration/FSSAI_Registration';
import Trademark_Registration from './components/Trademark_Registration/Trademark_Registration';
import LLP_Registration from './components/LLP_Registration/LLP_Registration';

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
        <Route path="/popular/service3" element={<GST_Registration/>} />
        <Route path="/popular/service4" element={<Gst_Return_Filing/>} />
        <Route path="/popular/service5" element={<MSME_Registration/>} />
        <Route path="/popular/service6" element={<Private_Limited_Company_Registration/>} />
        <Route path="/popular/service7" element={<Proprietorship_Firm_Registration/>} />
        <Route path="/popular/service8" element={<FSSAI_Registration/>} />
        <Route path="/popular/service9" element={<Trademark_Registration/>} />
        {/* Business Registration submenu and sub-submenu */}
        <Route path="/business/company/service1" element={<Private_Limited_Company_Registration />} />
        <Route path="/business/company/service2" element={<LLP_Registration/>} />
        <Route path="/business/company/service3" element={<Placeholder text="business/company/service3" />} />
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
