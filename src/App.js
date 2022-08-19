import logo from './logo.svg';
import './App.css';
import HeroSection from './Component/HeroSection/HeroSection';
import HowMint from './Component/HowMint/HowMint';
import Paralax from './Component/Paralax/Paralax';
import PersonalNftInfo from './Component/PersonalNftInfo/PersonalNftInfo';
import SocialConnect from './Component/SocialConnect/SocialConnect';
import Paralax1 from './Component/Paralax1/Paralax1';

function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <Paralax1></Paralax1>
      <HowMint></HowMint>
      <Paralax></Paralax>
      <PersonalNftInfo></PersonalNftInfo>
      <SocialConnect></SocialConnect>
    </div>
  );
}

export default App;
