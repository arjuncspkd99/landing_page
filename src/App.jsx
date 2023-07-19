import './App.css'
import Navbar from './components/navbar/navbar';
import Frame1 from './components/frame1/Frame1';
import Frame2 from './components/frame2/Frame2';
import Frame3 from './components/frame3/Frame3';
import Frame4 from './components/frame4/Frame4';
import Footer from './components/footer/Footer.jsx';




function App() {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update the window width when the window is resized
  // window.addEventListener('resize', () => {
  //   setWindowWidth(window.innerWidth);
  // });

  return (
    <>
      <div className="container ">
        <Navbar menuItems={["About", "Pricing", "Review"]} />
        <Frame1 />
        <Frame2 />
        <Frame3 />
        <Frame4 />
        <Footer />
      </div>

    </>
  )
}

export default App
