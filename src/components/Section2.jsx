import FingerprintScan from '../assets/images/fingerprint-scan.gif'
import AudioWaveGif from '../assets/images/audio-wave-ever1.gif'
import { useTimer } from 'react-timer-hook'

function Section2() {
  const expiryTimestamp = new Date('2026-04-11T00:00:00')
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    interval: 20,
  })

  const sliderPositions = ['12%', '62%', '28%', '44%', '20%']

  const faqs = [
    {
      title: 'Who can attend?',
      text: 'Any student 18+ is welcome to apply. No prior experience is required; participants from all majors and backgrounds are encouraged to join if they are excited to collaborate, learn, and innovate. If you are currently under the age of 18, we will not be able to host you at Suture the Future.',
    },
    {
      title: 'How much does it cost?',
      text: 'Suture the Future is completely free to attend, with meals and swag provided throughout the day. Winning teams will also take home exciting prizes!',
    },
    {
      title: 'When is the deadline to apply for Suture the Future?',
      text: 'GSSA members have priority registration until February 1st at 11:59 PM. Non-GSSA members may begin applying on February 2nd, and applications will close on April 1st at 11:59 PM. Admissions are rolling and capacity is limited, so early applications are strongly encouraged.',
    },
    {
      title: 'How do teams work?',
      text: 'Teams must have 5 members. If you already have a full team, all members must submit applications before the deadline, and each team must include at least 1 freshman or sophomore to encourage peer learning. Don’t have a team yet? There will be dedicated time for team formation after the event kickoff.',
    },
    {
      title: 'How will the presentation work?',
      text: 'The event will conclude with team presentations showcasing their projects. Each team will have 10 minutes to present, and submissions will be evaluated based on ingenuity, impact, and overall execution.',
    },
    {
      title: 'Does Suture the Future cover travel?',
      text: 'At this time, travel expenses are not covered. This policy may be revisited in future semesters depending on participation.',
    },
  ]

  return (
    <section id="faq" className="bg-[#0f0d0c] py-20 px-6">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-center mb-10">
          <div className="px-10 py-3 rounded-full border border-[#b59f91] bg-gradient-to-b from-[#b9a598] via-[#9d887b] to-[#0f0d0c] text-primary-cream text-2xl md:text-3xl font-hk-modular tracking-widest">
            FREQUENTLY ASKED QUESTIONS
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#b9a598] via-[#9d887b] to-[#0f0d0c] rounded-t-[28px] rounded-b-none p-8 md:p-10 shadow-[0_18px_40px_rgba(0,0,0,0.35)] border border-[#bba79a] border-b-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8">
            <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8">
              <div className="md:w-5/12 lg:max-w-[360px] flex">
                <div className="flex-1 flex flex-col justify-between space-y-6">
                  {[0, 1, 2, 3, 4].map((row) => (
                    <div key={row} className="relative">
                      <div
                        className="h-3 rounded-full border border-[#c7a77c] bg-[#d4a66d]"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(90deg, rgba(255,255,255,0.55) 0 2px, transparent 2px 14px)',
                        }}
                      />
                      <div
                        className="absolute -top-2 h-7 w-4 rounded-sm border border-[#f7e8cf] bg-[#f5d9aa] shadow-[0_3px_0_rgba(0,0,0,0.2)]"
                        style={{ left: sliderPositions[row] }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 rounded-2xl bg-[#b9a598] border border-[#dccbc0] p-6 shadow-lg overflow-hidden">
                <h3 className="font-hk-modular text-lg text-primary-white mb-3">
                  {faqs[0].title}
                </h3>
                <p className="font-dm-sans text-sm text-primary-white/90 leading-relaxed">
                  {faqs[0].text}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="relative w-16 h-40 rounded-full bg-[#caa678] border-2 border-[#a47945] flex items-center justify-center">
                  <div className="absolute inset-2 rounded-full bg-[#e6c79c]" />
                  <div className="relative z-10 h-14 w-14 rounded-full bg-[#f7e8cf] border-2 border-[#a47945]" />
                </div>
                <div className="flex-1 rounded-2xl bg-[#b9a598] border border-[#dccbc0] p-6 shadow-lg">
                  <h3 className="font-hk-modular text-lg text-primary-white mb-3">
                    {faqs[1].title}
                  </h3>
                  <p className="font-dm-sans text-sm text-primary-white/90 leading-relaxed">
                    {faqs[1].text}
                  </p>
                </div>

              </div>

              <div className="flex justify-evenly items-center gap-4">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="h-10 w-10 rounded-full bg-[#f1ddc2] border border-[#a47945] flex items-center justify-center"
                  >
                    <div
                      className="h-4 w-0.5 bg-[#a47945]"
                      style={{
                        transform:
                          index === 0
                            ? 'rotate(-20deg)'
                            : index === 1
                              ? 'rotate(15deg)'
                              : 'rotate(35deg)',
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center gap-4">
                {[0, 1, 2,3,4,5].map((index) => (
                  <div
                    key={index}
                    className="h-10 w-10 rounded-full bg-[#f1ddc2] border border-[#a47945] flex items-center justify-center"
                  >
                    <div
                      className="h-4 w-0.5 bg-[#a47945] "
                      style={{
                        transform:
                          index === 0
                            ? 'rotate(-20deg)'
                            : index === 1
                              ? 'rotate(15deg)'
                              : 'rotate(35deg)',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
            <div className="rounded-2xl bg-[#b9a598] border border-[#dccbc0] p-6 shadow-lg">
              <h3 className="font-hk-modular text-lg text-primary-white mb-3">
                {faqs[2].title}
              </h3>
              <p className="font-dm-sans text-sm text-primary-white/90 leading-relaxed">
                {faqs[2].text}
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-[220px] rounded-2xl">
                <img
                  src={AudioWaveGif}
                  alt="Audio wave"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-[#b9a598] border border-[#dccbc0] p-6 shadow-lg">
              <h3 className="font-hk-modular text-lg text-primary-white mb-3">
                {faqs[3].title}
              </h3>
              <p className="font-dm-sans text-sm text-primary-white/90 leading-relaxed">
                {faqs[3].text}
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-6 items-center">
            <div className="w-24 h-24 rounded-2xl border border-[#e6d3bd] bg-[#6f5f54]/40 flex items-center justify-center">
              <img
                src={FingerprintScan}
                alt="Fingerprint scan"
                className="w-16 h-16 object-contain"
              />
            </div>

            <div className="rounded-2xl bg-[#b9a598] border border-[#dccbc0] p-6 shadow-lg">
              <h3 className="font-hk-modular text-lg text-primary-white mb-3">
                {faqs[4].title}
              </h3>
              <p className="font-dm-sans text-sm text-primary-white/90 leading-relaxed">
                {faqs[4].text}
              </p>
            </div>
                
            <div className="rounded-2xl bg-[#b9a598] border border-[#dccbc0] p-6 shadow-lg">
              <h3 className="font-hk-modular text-lg text-primary-white mb-3">
                {faqs[5].title}
              </h3>
              <p className="font-dm-sans text-sm text-primary-white/90 leading-relaxed">
                {faqs[5].text}
              </p>
            </div>
          </div>

        </div>

        <div
          className="-mt-px w-full h-[220px] md:h-[280px] lg:h-[320px] rounded-b-[28px] rounded-t-none border border-[#bba79a] border-t-0 shadow-[0_18px_40px_rgba(0,0,0,0.35)] bg-center bg-no-repeat bg-[length:100%_auto] bg-cover flex justify-center items-center"
        >
          <div className="rounded-3xl border border-[#b59f91] bg-gradient-to-b from-[#b9a598] via-[#9d887b] to-[#0f0d0c] px-6 py-4 text-primary-cream shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
            <p className="text-center font-hk-modular text-lg md:text-xl tracking-widest">
              COUNTDOWN TO APRIL 11, 2026
            </p>
            <div className="mt-3 flex items-center justify-center gap-4 text-center font-dm-sans text-sm md:text-base">
              <div>
                <div className="text-2xl md:text-3xl font-bold">{days}</div>
                <div className="uppercase tracking-widest">Days</div>
              </div>
              <div className="text-xl md:text-2xl">:</div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">{hours}</div>
                <div className="uppercase tracking-widest">Hours</div>
              </div>
              <div className="text-xl md:text-2xl">:</div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">{minutes}</div>
                <div className="uppercase tracking-widest">Minutes</div>
              </div>
              <div className="text-xl md:text-2xl">:</div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">{seconds}</div>
                <div className="uppercase tracking-widest">Seconds</div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Section2
