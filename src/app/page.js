import HeroSection from "./components/HeroSection";
import MobileDownload from "./components/MobileDownload";


export default function Home() {
  return (
    <main>
      <div className='modal-root'>
          <MobileDownload />
        </div>
      <HeroSection />
    </main>
  )
}
