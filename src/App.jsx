import React ,{useContext , useEffect , useState} from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import History from "./components/History"
import Welcome from "./components/Welcome"
import { TransactionContext } from "./context/TransactionContex";
const App = () => {  
  const { results } = useContext(TransactionContext);
  const [load , setLoad] = useState(false);

  useEffect(()=>{
    if(results){
      setLoad(true);
    }
  },[results]);

  return (
    <div className="h-screen scroll-smooth bg-black overflow-x-hidden">
      <Header />
      <Welcome />
      {load ? <History {...results}/> : <p className='flex justify-center text-sm text-white h-[80%] sm:text-xl'>Loading results make sure connect your wallet : )</p>}
      <Footer />
    </div>
  )
}

export default App
