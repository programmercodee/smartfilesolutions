import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer/footer';

function Placeholder({ text }) {
  return <div className="p-8 text-center text-xl">{text}</div>;
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main menu routes */}
        <Route path="/income-tax-filing" element={<Placeholder text="INCOME TAX FILING" />} />
        <Route path="/book-consultancy" element={<Placeholder text="BOOK CONSULTANCY" />} />
        {/* Popular Services submenu */}
        <Route path="/popular/service1" element={<Placeholder text="ITR FILING SERVICES" />} />
        <Route path="/popular/service2" element={<Placeholder text="ISO CERTIFICATION" />} />
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
        <Route path="/" element={<Placeholder text="HOME" />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
