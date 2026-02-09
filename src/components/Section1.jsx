import starrybg from '../assets/images/starrybg.gif'

function Section1() {
  return (
    <section id="about" className="py-20 px-8" style={{ backgroundImage: `url(${starrybg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-6xl mx-auto my-[7rem]">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 mb-12">
          {/* First Column */}
          <div className="space-y-6 w-fit">
            <h2 className="text-4xl font-dm-sans text-primary-cream font-bold">What is Suture the Future?</h2>
            <p className="text-base font-dm-sans text-primary-white leading-relaxed font-bold">
              Suture the Future is a one-day interstellar innovation
              challenge hosted by the Global Surgery Student Alliance at
              Texas A&M University, bringing students together to create
              impactful surgical solutions
            </p>
            <p className="text-base font-dm-sans text-primary-white leading-relaxed font-bold">
              Participants will work in teams and attend hands-on
              workshops with industry professionals. The event concludes
              with presentations evaluated by a panel of experts, fostering
              professional growth and meaningful networking
              opportunities.
            </p>
          </div>

          {/* Divider (desktop only) */}
          <div className="hidden md:flex justify-center">
            <div className="w-px bg-primary-cream/60"></div>
          </div>

          {/* Second Column */}
          <div className="space-y-6 w-fit">
            <h2 className="text-4xl font-dm-sans text-primary-cream font-bold">EVENT INFORMATION</h2>

            <div className="space-y-6">
              <div>
                <u className="text-base font-dm-sans text-primary-white font-bold">
                  Location
                </u>
                <p className="text-base font-dm-sans text-primary-white font-bold">
                  ILCB 229
                </p>
                <p className="text-base font-dm-sans text-primary-white font-bold">
                  215 Lamar St, College Station, TX 77844
                </p>
              </div>

              <div>
                <u className="text-base font-dm-sans text-primary-white font-bold">
                  Parking
                </u>
                <p className="text-base font-dm-sans text-primary-white font-bold">
                  Free with any valid TAMU permit:
                </p>
                <p className="text-base font-dm-sans text-primary-white font-bold">
                  Lot 100, etc, etc
                </p>
              </div>
            </div>

            <p className="text-base font-dm-sans text-primary-white pt-4 font-bold">
              Paid parking at Stallings Blvd Garage or University Center Garage
            </p>
          </div>
        </div>

        {/* Note Section */}
        <div className="bg-primary-cream bg-opacity-40 rounded-3xl px-6 py-4 backdrop-blur-sm">
          <p className="text-s font-dm-sans text-primary-white font-bold text-center [text-shadow:0_2px_6px_rgba(0,0,0,0.4)]">
            <span className="font-dm-sans">Note:</span> The event is open and free to all participants; however, GSSA members receive priority during the
            application period. Membership is available through the GSSA website by paying annual or semester dues.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section1
