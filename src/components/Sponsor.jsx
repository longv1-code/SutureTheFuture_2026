import GoodBullLogo from '../assets/images/GoodBullFundLogo.png' // adjust path if needed

function Sponsor() {
  return (
    <section
      id="sponsor"
      className="bg-[#191919] py-24 px-6 flex justify-center"
    >
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        
        {/* Sponsor Text */}
        <p className="text-primary-white text-lg md:text-xl font-dm-sans mb-10 opacity-80">
          This event is made possible by the <span className="font-semibold">Good Bull Fund</span>.
        </p>


      </div>
    </section>
  )
}

export default Sponsor
