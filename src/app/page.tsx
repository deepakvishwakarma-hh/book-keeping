import ReviewCard from "@/component/review-card";
import Image from "next/image";
import Link from "next/link";
// import { Instagram, Facebook } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-[#2f5653] text-white p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center bg-white justify-center">
            <Image
              src="/logo.svg"
              alt="Ledger Data Solutions"
              width={60}
              height={60}
            />
          </Link>
          <div className="hidden md:flex space-x-6 text-sm tracking-widest font-semibold">
            <Link href="/" className="hover:text-gray-300">
              HOME
            </Link>
            <Link href="#about" className="hover:text-gray-300">
              ABOUT US
            </Link>
            <Link href="#services" className="hover:text-gray-300">
              SERVICES
            </Link>
            <Link href="#why-choose-us" className="hover:text-gray-300">
              WHY CHOOSE US?
            </Link>
            <Link href="#testimonials" className="hover:text-gray-300">
              TESTIMONIALS
            </Link>
            <Link href="#faqs" className="hover:text-gray-300">
              FAQS
            </Link>
            <Link href="#contact" className="hover:text-gray-300">
              CONTACT
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0 md:w-[60%] w-[100%]">
          <Image
            src="/hero-2.jpg"
            alt="Office desk with computer and flowers"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 grid">
          <div className="max-w-5xl mx-auto flex justify-end items-center  w-full">
            <div className="bg-[#b5cfcd] p-10 max-w-md mx-8 border-[#2a4741] border">
              <h1 className="text-4xl font-light text-[#4a4a4a] mb-4 font-heading text-center tracking-[5px]">
                YOUR PATH TO FINANCIAL CONFIDENCE
              </h1>
              <p className="text-[#4a4a4a] mb-6 text-center font-bold">
                Guiding Your Business <br /> to Clarity and Success
              </p>
              <button className="bg-[#4a4a4a] text-white py-2 px-16 rounded-full hover:bg-opacity-90 transition mx-auto block text-xs tracking-wide">
                CONTACT US <br /> TODAY!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[1.5fr_1fr] gap-8">
          <div>
            <h2 className="text-4xl font-light text-[#2a4741] mb-6 font-heading">
              WELCOME TO
              <br />
              LEDGER DATA SOLUTIONS
            </h2>
            <p className="text-[#2a4741] mb-4">
              As a business owner, managing your finances shouldn't hold you
              back from what you do best. At Ledger Data Solutions, we're here
              to be the helping hand that lifts the burden of financial jargon,
              tax deadlines, and spreadsheets, so you can focus on what truly
              matters—growing your business.
            </p>

            <h3 className="text-xl font-bold text-[#4a4a4a] mt-6 mb-2">
              Experience and Credentials:
            </h3>
            <p className="text-[#2a4741] mb-4">
              "With 10+ years of hands-on experience and QuickBooks Intuit
              Certification, we've helped countless individuals and small
              businesses navigate tax seasons, balance their books, and plan for
              a secure financial future. For us, this isn't just a job—it's a
              passion to help businesses thrive.
            </p>

            <h3 className="text-xl font-bold text-[#4a4a4a] mt-6 mb-2">
              What We Believe:
            </h3>
            <p className="text-[#2a4741]">
              We believe in making numbers simple and actionable. Our approach
              goes beyond crunching data—we give you the insights and tools to
              make confident financial decisions and grow your business.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/ideas.jpg"
              alt="Lightbulb"
              width={400}
              height={500}
              style={{
                boxShadow: "100px 100px 0 #2a4741",
              }}
              className="object-cover rounded-md
            
              
              "
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Banner */}
      <section className="bg-[#2f5653] text-white py-12">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[2fr_1fr] gap-2 items-center">
          <div className="flex justify-between flex-col gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Why Choose Us</h2>
              <div className="space-y-4">
                <div className="flex flex-wrap">
                  <p className="font-bold">Personalized Service - </p>
                  <p>Solutions tailored to your unique needs</p>
                </div>
                <div className="flex flex-wrap">
                  <p className="font-bold">Transparency - </p>
                  <p>Clear, easy-to-understand reports and insights.</p>
                </div>
                <div className="flex flex-wrap">
                  <p className="font-bold">Expertise - </p>
                  <p>Certified professionals with 10+ years of experience.</p>
                </div>
                <div className="flex flex-wrap">
                  <p className="font-bold">Security - </p>
                  <p>
                    Your data's security is our top priority. We use
                    industry-leading encryption to ensure your financial
                    information is always protected and confidential.
                  </p>
                </div>
              </div>
              <button className="mt-8 bg-white text-[#2a4741] py-2 px-20 rounded hover:bg-gray-100 transition block mx-auto tracking-[5px]">
                BOOK NOW
              </button>
            </div>
            <div className="mt-auto">
              <Image
                src="/choose-us-2.jpg"
                alt="Workspace with flowers and coffee"
                width={800}
                height={400}
                className="rounded-md"
              />
            </div>
          </div>
          <div
            className="bg-white h-full rounded-md overflow-hidden"
            style={{
              backgroundImage: "url('/choose-us-1.jpg')",
            }}
          ></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-6xl font-light text-[#4a4a4a] text-center mb-12 font-heading">
            SERVICES
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-[#b5cfcd] rounded-md p-6 flex flex-col h-full border border-[#2a4741]">
              <div className=" min-h-[100px] flex items-center justify-center">
                <h3 className="text-2xl font-medium  text-[#4a4a4a] mb-4 font-heading tracking-wider">
                  CLEAN &<br />
                  CATCH-UP
                </h3>
              </div>
              <div className="border-t border-[#2a4741] my-4"></div>
              <p className="text-[#2a4741] mb-6">
                Get your books back on track with our clean-up and catch-up
                services. Whether you're behind on bookkeeping or need to
                organize messy records, we'll bring clarity to your finances.
              </p>

              <h4 className="font-medium text-[#2a4741] mt-4 mb-2">
                What You Get:
              </h4>
              <ul className="list-disc pl-5 text-[#2a4741] mb-6">
                <li>Organized and up-to-date financial records.</li>
                <li>Accurate reconciliation of accounts and transactions.</li>
                <li>A clear foundation for ongoing bookkeeping.</li>
              </ul>

              <h4 className="font-medium text-[#2a4741] mt-4 mb-2">
                Who It's For:
              </h4>
              <ul className="list-disc pl-5 text-[#2a4741] mb-6">
                <li>Businesses with disorganized or outdated books.</li>
                <li>Anyone seeking a fresh start for their finances.</li>
              </ul>

              <div className="mt-auto">
                <button className="bg-[#4a4a4a] text-white py-2 px-4 w-full rounded hover:bg-opacity-90 transition text-sm ">
                  Book Your Tax Prep Consultation
                </button>

                <div className="mt-4 h-[250px] relative">
                  <Image
                    src="/service-1.jpg"
                    alt="Clean workspace"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-[#b5cfcd] rounded-md p-6 flex flex-col h-full border border-[#2a4741]">
              <div className=" min-h-[100px] flex items-center justify-center">
                <h3 className="text-2xl font-medium text-center text-[#4a4a4a] mb-4 font-heading tracking-wide">
                  MONTHLY
                  <br />
                  BOOKKEEPING &<br />
                  REPORTING
                </h3>
              </div>
              <div className="border-t border-[#2a4741] my-4"></div>
              <p className="text-[#2a4741] mb-6">
                Stay on top of your finances with our monthly bookkeeping and
                reporting services. We'll handle the day-to-day so you can focus
                on growing your business.
              </p>

              <h4 className="font-medium text-[#2a4741] mt-4 mb-2">
                What You Get:
              </h4>
              <ul className="list-disc pl-5 text-[#2a4741] mb-6">
                <li>Reliable monthly bookkeeping services.</li>
                <li>
                  Detailed financial reports (profit & loss, balance sheet, cash
                  flow).
                </li>
                <li>Customized dashboards for actionable insights.</li>
              </ul>

              <h4 className="font-medium text-[#2a4741] mt-4 mb-2">
                Who It's For:
              </h4>
              <ul className="list-disc pl-5 text-[#2a4741] mb-6">
                <li>
                  Great for businesses of any size, as well as individuals
                  wanting to keep their finances in check.
                </li>
              </ul>

              <div className="mt-auto">
                <button className="bg-[#4a4a4a] text-white py-2 px-4 w-full rounded hover:bg-opacity-90 transition">
                  Organize Your Books Today
                </button>

                <div className="mt-4 h-[250px] relative">
                  <Image
                    src="/service-2.jpg"
                    alt="Clean workspace"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-[#b5cfcd] rounded-md p-6 flex flex-col h-full border border-[#2a4741]">
              <div className=" min-h-[100px] flex items-center justify-center">
                <h3 className="text-2xl font-medium text-center text-[#4a4a4a]  mb-4 font-heading tracking-wide">
                  TAX
                  <br />
                  PREPARATION
                  <br />
                  SUPPORT
                </h3>
              </div>
              <div className="border-t border-[#2a4741] my-4"></div>
              <p className="text-[#2a4741] mb-6">
                Stay tax-ready all year round with our tax preparation support.
                We'll organize records, ensure accuracy, and work with your CPA
                to make tax season stress-free.
              </p>

              <h4 className="font-medium text-[#2a4741] mt-4 mb-2">
                What You Get:
              </h4>
              <ul className="list-disc pl-5 text-[#2a4741] mb-6">
                <li>Organized financial records ready for tax filing.</li>
                <li>Comprehensive reports for your CPA.</li>
                <li>Year-end tax planning and compliance support.</li>
              </ul>

              <h4 className="font-medium text-[#2a4741] mt-4 mb-2">
                Who It's For:
              </h4>
              <ul className="list-disc pl-5 text-[#2a4741] mb-6">
                <li>Business owners preparing for tax season.</li>
              </ul>

              <div className="mt-auto">
                <button className="bg-[#4a4a4a] text-white py-2 px-4 w-full rounded hover:bg-opacity-90 transition">
                  Plan Your Financial Future
                </button>

                <div className="mt-4 h-[250px] relative">
                  <Image
                    src="/service-3.jpg"
                    alt="Clean workspace"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 bg-[#c5d8d5]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-light text-[#2a4741] text-center mb-12 font-heading">
            WHY CHOOSE US?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-md p-4 text-center border border-[#2a4741]">
              <h3 className="text-lg font-semibold text-[#2a4741] mb-2">
                EXPERTISE
              </h3>
              <p className="text-[#2a4741]">
                Certified professional with 20+ years of hands-on financial
                experience.
              </p>
            </div>

            <div className="bg-white rounded-md p-4 text-center border border-[#2a4741]">
              <h3 className="text-lg font-semibold text-[#2a4741] mb-2">
                TRANSPARENCY
              </h3>
              <p className="text-[#2a4741]">
                Honest, easy-to-understand insights for confident
                decision-making.
              </p>
            </div>

            <div className="bg-white rounded-md p-4 text-center border border-[#2a4741]">
              <h3 className="text-lg font-semibold text-[#2a4741] mb-2">
                TECHNOLOGY
              </h3>
              <p className="text-[#2a4741]">
                Innovative tools for efficient, accurate, and modern
                bookkeeping.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            <ReviewCard
              comment="Ledger Data Solutions saved me from spreadsheet chaos. Now, my
                books are always accurate, and I have more time to focus on
                growing my business."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B3FEDE385-E4DD-4620-8F27-A14A15153891%7D-pFCVt8bzId6TZMWvLtjFUidGt5GOVi.png"
              name="NAME GOES HERE"
            />

            <ReviewCard
              comment="Ledger Data Solutions saved me from spreadsheet chaos. Now, my
                books are always accurate, and I have more time to focus on
                growing my business."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B3FEDE385-E4DD-4620-8F27-A14A15153891%7D-pFCVt8bzId6TZMWvLtjFUidGt5GOVi.png"
              name="NAME GOES HERE"
            />

            <ReviewCard
              comment="Ledger Data Solutions saved me from spreadsheet chaos. Now, my
                books are always accurate, and I have more time to focus on
                growing my business."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B3FEDE385-E4DD-4620-8F27-A14A15153891%7D-pFCVt8bzId6TZMWvLtjFUidGt5GOVi.png"
              name="NAME GOES HERE"
            />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[1.5fr_1fr] gap-10">
          <div>
            <h2 className="text-5xl font-light text-[#4a4a4a] mb-8 font-heading tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="space-y-2">
              <div>
                <h3 className="text-[#2a4741]  bg-[#c5d8d5] p-2 rounded-md">
                  <b>Q:</b> Do I require a long-term contract for your services?
                </h3>
                <p className="text-[#2a4741] p-2">
                  <b>A:</b> "No, long-term contracts are not a requirement. We
                  offer flexible arrangements tailored to your specific needs.""
                </p>
              </div>

              <div>
                <h3 className="text-[#2a4741]  bg-[#c5d8d5] p-2 rounded-md">
                  <b>Q:</b> What's the first step to engage with you?
                </h3>
                <p className="text-[#2a4741] p-2">
                  <b>A:</b> "The initial step is to reach out via our online
                  form or email. If needed, we can follow up with a call or
                  video chat to discuss your financial needs."
                </p>
              </div>

              <div>
                <h3 className="text-[#2a4741]  bg-[#c5d8d5] p-2 rounded-md">
                  <b>Q:</b> What are your fees?
                </h3>
                <p className="text-[#2a4741] p-2">
                  <b>A:</b> Pricing varies based on your business model,
                  transactions, and accounts. Get a custom quote with a free
                  consultation.
                </p>
              </div>

              <div>
                <h3 className="text-[#2a4741]  bg-[#c5d8d5] p-2 rounded-md">
                  <b>Q:</b> How will we maintain communication?
                </h3>
                <p className="text-[#2a4741] p-2">
                  <b>A:</b> "We utilize multiple channels including email, and
                  video conferencing for efficient and clear communication.
                  You'll receive regular updates to keep you fully informed."
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/faqs.jpg"
              alt="Financial documents"
              width={500}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Pre-Footer */}
      <section className="py-8 bg-[#c5d8d5] text-[#2a4741] text-center">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-lg font-semibold">
            For further inquiries or to get started, send us an email to
            schedule <br /> your consultation today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#2f5653] mt-1">
        <div className="grid md:grid-cols-2">
          <div className="p-12 flex flex-col items-center">
            <div className="bg-white p-6 mb-8 w-32 h-32 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Ledger Data Solutions"
                width={100}
                height={100}
              />
            </div>

            <div className="w-full max-w-xs h-36 bg-blue-100 mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B166B456B-5F83-4762-9AAE-BB38A019F620%7D-5mxOGqj9VTN6OvX4rmQ0lymPlOiGlj.png"
                alt="Landscape"
                width={200}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-[#9ebab7] p-12">
            <h2 className="text-5xl font-light font-heading  text-white mb-16 mt-16 text-center">
              CONTACT US
            </h2>

            <p className="text-white mb-8 font-semibold text-xl text-center">
              "Let's get your finances on track. Reach out today to start a
              conversation about how we can help you manage and grow your
              business."
            </p>

            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-5">
              <div className="space-y-4 mb-8 lg:border-r">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#2a4741] flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <p className="text-white">info@ledgerdatasolutions.com</p>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#2a4741] flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <p className="text-white">www.ledgerdata.solutions.com</p>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#2a4741] flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <p className="text-white">123-456-7890</p>
                </div>
                <div className="mb-8 flex gap-5">
                  <p className="text-white mb-2">FOLLOW US:</p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                    >
                      {/* <Instagram     size={16} className="text-white" /> */}
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                    >
                      {/* <Facebook size={16} className="text-white" /> */}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-white font-semibold text-lg">
                  We offer expert bookkeeping, financial reporting, and business
                  insights tailored to your unique needs. Get in touch now!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2f5653] text-white py-4 text-center text-sm mt-1">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center gap-10 text-[10px]">
            <Link href="/privacy-policy" className=" uppercase  tracking-[8px]">
              PRIVACY POLICY
            </Link>
            <span>|</span>
            <Link href="/terms" className=" uppercase tracking-[8px]">
              TERMS & CONDITIONS
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
