import './App.css'
import Header from './components/header'
import { SideBar } from './components/sideBar'
import CampaignContainer from './components/CampaignContainer'  
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
      <div className="mainLayout">
        <SideBar />
        <div className="contentArea">
          <Header />
          <CampaignContainer /> 
        </div>
      </div>
    </>
  )
}

export default App
