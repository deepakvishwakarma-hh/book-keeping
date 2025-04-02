import Form from "./form";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ReviewCard from "@/component/review-card";

export const metadata: Metadata = {
  title: "Ledger Data Solutions",
  description:
    "Ledger Data Solutions offers expert bookkeeping, financial reporting, and business insights tailored to your unique needs. Get in touch now!",
  keywords:
    "bookkeeping, financial reporting, business insights, financial planning, tax preparation, tax planning, financial consulting, financial services, financial management, financial analysis, financial advice, financial solutions, financial support, financial guidance, financial expertise, financial security, financial success, financial future, financial confidence, financial clarity, financial decisions, financial tools, financial help, financial assistance, financial consultation",
};

export default function Home() {
  return (
    <>
      <main id="main-content" className="min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-[500px]" aria-labelledby="hero-heading">
          <div className="absolute inset-0 md:w-[60%] w-[100%]">
            <Image
              src="/hero-5.png"
              alt="Professional office workspace with computer and decorative flowers"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 grid">
            <div className="max-w-5xl mx-auto flex justify-end items-center w-full">
              <div className="bg-[#b5cfcd] p-10 max-w-md mx-8 border-[#2a4741] border">
                <h1
                  id="hero-heading"
                  className="md:text-4xl text-2xl font-light text-[#4a4a4a] mb-4 font-heading text-center tracking-[5px]"
                >
                  YOUR PATH TO FINANCIAL CONFIDENCE
                </h1>
                <p className="text-[#4a4a4a] mb-6 text-center font-bold">
                  Guiding Your Business <br /> to Clarity and Success
                </p>
                <Link
                  href="#contact"
                  className="bg-[#4a4a4a] text-white py-2 px-16 rounded-full hover:bg-opacity-90 transition mx-auto block text-xs tracking-wide text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4a4a4a]"
                  aria-label="Contact us today"
                >
                  CONTACT US <br /> TODAY!
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section
          id="about"
          className="py-16 bg-white"
          aria-labelledby="about-heading"
        >
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[1.5fr_1fr] gap-8">
            <div>
              <h2
                id="about-heading"
                className="md:text-4xl text-2xl font-light text-[#2a4741] mb-6 font-heading"
              >
                WELCOME TO
                <br />
                LEDGER DATA SOLUTIONS
              </h2>
              <p className="text-[#2a4741] mb-4">
                As a business owner, managing your finances shouldn't hold you
                back from what you do best. At Ledger Data Solutions, we're here
                to be the helping hand that lifts the burden of financial
                jargon, tax deadlines, and spreadsheets, so you can focus on
                what truly matters—growing your business.
              </p>

              <h3 className="text-xl font-bold text-[#4a4a4a] mt-6 mb-2">
                Experience and Credentials:
              </h3>
              <p className="text-[#2a4741] mb-4">
                With 10+ years of hands-on experience and QuickBooks Intuit
                Certification, we've helped countless individuals and small
                businesses navigate tax seasons, balance their books, and plan
                for a secure financial future. For us, this isn't just a
                job—it's a passion to help businesses thrive.
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
                alt="Lightbulb representing innovative financial ideas and solutions"
                width={400}
                height={500}
                style={{
                  boxShadow: "100px 100px 0 #2a4741",
                }}
                className="object-cover rounded-md md:block hidden"
              />
              <Image
                src="/ideas.jpg"
                alt="Lightbulb representing innovative financial ideas and solutions"
                width={400}
                height={500}
                className="object-cover rounded-md md:hidden block"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Banner */}
        <section
          id="why-choose-us"
          className="bg-[#2f5653] text-white py-12"
          aria-labelledby="why-choose-us-heading"
        >
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[2fr_1fr] gap-2 items-center">
            <div className="flex justify-between flex-col gap-10">
              <div>
                <h2
                  id="why-choose-us-heading"
                  className="text-2xl font-semibold mb-6"
                >
                  Why Choose Us
                </h2>
                <dl className="space-y-4">
                  <div className="flex flex-wrap">
                    <dt className="font-bold">Personalized Service - </dt>
                    <dd>Solutions tailored to your unique needs</dd>
                  </div>
                  <div className="flex flex-wrap">
                    <dt className="font-bold">Transparency - </dt>
                    <dd>Clear, easy-to-understand reports and insights.</dd>
                  </div>
                  <div className="flex flex-wrap">
                    <dt className="font-bold">Expertise - </dt>
                    <dd>
                      Certified professionals with 10+ years of experience.
                    </dd>
                  </div>
                  <div className="flex flex-wrap">
                    <dt className="font-bold">Security - </dt>
                    <dd>
                      Your data's security is our top priority. We use
                      industry-leading encryption to ensure your financial
                      information is always protected and confidential.
                    </dd>
                  </div>
                </dl>
                <Link
                  href="#contact"
                  className="mt-8 bg-white text-[#2a4741] py-2 px-20 rounded hover:bg-gray-100 transition block mx-auto tracking-[5px] text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  BOOK NOW
                </Link>
              </div>
              <div className="mt-auto">
                <Image
                  src="/choose-us-2.jpg"
                  alt="Professional workspace with flowers and coffee"
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
              aria-hidden="true"
              role="presentation"
            ></div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-16 bg-white"
          aria-labelledby="services-heading"
        >
          <div className="max-w-5xl mx-auto px-4">
            <h2
              id="services-heading"
              className="md:text-5xl text-2xl font-light text-[#4a4a4a] text-center mb-12 font-heading"
            >
              SERVICES
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Service 1 */}
              <article className="bg-[#b5cfcd] rounded-md p-6 flex flex-col h-full border border-[#2a4741]">
                <div className="min-h-[100px] flex items-center justify-center">
                  <h3 className="text-2xl font-medium text-[#4a4a4a] mb-4 font-heading tracking-wider">
                    CLEAN &<br />
                    CATCH-UP
                  </h3>
                </div>
                <div
                  className="border-t border-[#2a4741] my-4"
                  aria-hidden="true"
                ></div>
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
                  <button
                    className="bg-[#4a4a4a] text-white py-2 px-4 w-full rounded hover:bg-opacity-90 transition text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4a4a4a]"
                    aria-label="Book your tax preparation consultation"
                  >
                    Book Your Tax Prep Consultation
                  </button>

                  <div className="mt-4 h-[250px] relative">
                    <Image
                      src="/service-1.jpg"
                      alt="Clean and organized workspace representing our clean-up services"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
              </article>

              {/* Service 2 */}
              <article className="bg-[#b5cfcd] rounded-md p-6 flex flex-col h-full border border-[#2a4741]">
                <div className="min-h-[100px] flex items-center justify-center">
                  <h3 className="text-2xl font-medium text-center text-[#4a4a4a] mb-4 font-heading tracking-wide">
                    MONTHLY
                    <br />
                    BOOKKEEPING &<br />
                    REPORTING
                  </h3>
                </div>
                <div
                  className="border-t border-[#2a4741] my-4"
                  aria-hidden="true"
                ></div>
                <p className="text-[#2a4741] mb-6">
                  Stay on top of your finances with our monthly bookkeeping and
                  reporting services. We'll handle the day-to-day so you can
                  focus on growing your business.
                </p>

                <h4 className="font-medium text-[#2a4741] mt-4 mb-2">
                  What You Get:
                </h4>
                <ul className="list-disc pl-5 text-[#2a4741] mb-6">
                  <li>Reliable monthly bookkeeping services.</li>
                  <li>
                    Detailed financial reports (profit & loss, balance sheet,
                    cash flow).
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
                  <button
                    className="bg-[#4a4a4a] text-white py-2 px-4 w-full rounded hover:bg-opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4a4a4a]"
                    aria-label="Organize your books today"
                  >
                    Organize Your Books Today
                  </button>

                  <div className="mt-4 h-[250px] relative">
                    <Image
                      src="/service-2.jpg"
                      alt="Financial reports and documents representing our monthly bookkeeping services"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
              </article>

              {/* Service 3 */}
              <article className="bg-[#b5cfcd] rounded-md p-6 flex flex-col h-full border border-[#2a4741]">
                <div className="min-h-[100px] flex items-center justify-center">
                  <h3 className="text-2xl font-medium text-center text-[#4a4a4a] mb-4 font-heading tracking-wide">
                    TAX
                    <br />
                    PREPARATION
                    <br />
                    SUPPORT
                  </h3>
                </div>
                <div
                  className="border-t border-[#2a4741] my-4"
                  aria-hidden="true"
                ></div>
                <p className="text-[#2a4741] mb-6">
                  Stay tax-ready all year round with our tax preparation
                  support. We'll organize records, ensure accuracy, and work
                  with your CPA to make tax season stress-free.
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
                  <button
                    className="bg-[#4a4a4a] text-white py-2 px-4 w-full rounded hover:bg-opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4a4a4a]"
                    aria-label="Plan your financial future"
                  >
                    Plan Your Financial Future
                  </button>

                  <div className="mt-4 h-[250px] relative">
                    <Image
                      src="/service-3.jpg"
                      alt="Tax documents and calculator representing our tax preparation support"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-16 bg-[#c5d8d5]"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-5xl mx-auto px-4">
            <h2
              id="testimonials-heading"
              className="md:text-5xl text-2xl font-light text-[#2a4741] text-center mb-12 font-heading"
            >
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

            {/* Client Testimonials */}
            <div
              className="grid md:grid-cols-3 gap-8"
              aria-label="Client testimonials"
            >
              <ReviewCard
                comment="Ledger Data Solutions saved me from spreadsheet chaos. Now, my
                  books are always accurate, and I have more time to focus on
                  growing my business."
                image="/review-1.jpg"
                name="NAME GOES HERE"
              />

              <ReviewCard
                comment="Ledger Data Solutions saved me from spreadsheet chaos. Now, my
                  books are always accurate, and I have more time to focus on
                  growing my business."
                image="/review-2.avif"
                name="NAME GOES HERE"
              />

              <ReviewCard
                comment="Ledger Data Solutions saved me from spreadsheet chaos. Now, my
                  books are always accurate, and I have more time to focus on
                  growing my business."
                image="/review-3.jpg"
                name="NAME GOES HERE"
              />
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section
          id="faqs"
          className="py-16 bg-white"
          aria-labelledby="faqs-heading"
        >
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[1.5fr_1fr] gap-10">
            <div>
              <h2
                id="faqs-heading"
                className="md:text-5xl text-2xl font-light text-[#4a4a4a] mb-8 font-heading tracking-wider"
              >
                FREQUENTLY ASKED QUESTIONS
              </h2>

              <div className="space-y-2">
                <div>
                  <h3
                    id="faq-1"
                    className="text-[#2a4741] bg-[#c5d8d5] p-2 rounded-md"
                  >
                    <b>Q:</b> Do I require a long-term contract for your
                    services?
                  </h3>
                  <p className="text-[#2a4741] p-2" aria-labelledby="faq-1">
                    <b>A:</b> No, long-term contracts are not a requirement. We
                    offer flexible arrangements tailored to your specific needs.
                  </p>
                </div>

                <div>
                  <h3
                    id="faq-2"
                    className="text-[#2a4741] bg-[#c5d8d5] p-2 rounded-md"
                  >
                    <b>Q:</b> What's the first step to engage with you?
                  </h3>
                  <p className="text-[#2a4741] p-2" aria-labelledby="faq-2">
                    <b>A:</b> The initial step is to reach out via our online
                    form or email. If needed, we can follow up with a call or
                    video chat to discuss your financial needs.
                  </p>
                </div>

                <div>
                  <h3
                    id="faq-3"
                    className="text-[#2a4741] bg-[#c5d8d5] p-2 rounded-md"
                  >
                    <b>Q:</b> What are your fees?
                  </h3>
                  <p className="text-[#2a4741] p-2" aria-labelledby="faq-3">
                    <b>A:</b> Pricing varies based on your business model,
                    transactions, and accounts. Get a custom quote with a free
                    consultation.
                  </p>
                </div>

                <div>
                  <h3
                    id="faq-4"
                    className="text-[#2a4741] bg-[#c5d8d5] p-2 rounded-md"
                  >
                    <b>Q:</b> How will we maintain communication?
                  </h3>
                  <p className="text-[#2a4741] p-2" aria-labelledby="faq-4">
                    <b>A:</b> We utilize multiple channels including email, and
                    video conferencing for efficient and clear communication.
                    You'll receive regular updates to keep you fully informed.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/faqs.jpg"
                alt="Financial documents and calculator representing frequently asked questions about our services"
                width={500}
                height={400}
                className="rounded-md"
              />
            </div>
          </div>
        </section>

        {/* Pre-Footer */}
        <section
          className="py-8 bg-[#c5d8d5] text-[#2a4741] text-center"
          aria-label="Contact information"
        >
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-lg font-semibold">
              For further inquiries or to get started, send us an email to
              schedule <br /> your consultation today.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-[#2f5653] mt-1"
          aria-labelledby="contact-heading"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-12 flex flex-col items-center">
              <div className="bg-white p-3 mb-8 w-32 h-32 flex items-center justify-center">
                <Image
                  src="/LOGO.svg"
                  alt="Ledger Data Solutions Logo"
                  width={150}
                  height={150}
                />
              </div>

              <div className="max-w-md text-center text-white mb-8 text-xl">
                <blockquote>
                  Let's get your finances on track. Reach out today to start a
                  conversation about how we can help you manage and grow your
                  business.
                </blockquote>
              </div>

              <div
                className="flex flex-wrap justify-center items-center gap-5"
                aria-label="Client logos"
              >
                <div className="max-w-xs h-32 w-32 bg-blue-100 mb-8">
                  <Image
                    src="/client.webp"
                    alt="Client logo"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="max-w-xs h-32 w-32 bg-blue-100 mb-8">
                  <Image
                    src="/tags/1.svg"
                    alt="Client logo"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="max-w-xs h-32 w-32 bg-blue-100 mb-8">
                  <Image
                    src="/tags/2.svg"
                    alt="Client logo"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#9ebab7] md:p-12 p-5">
              <h2
                id="contact-heading"
                className="md:text-5xl text-2xl font-light font-heading text-white mb-16 mt-16 text-center"
              >
                CONTACT US
              </h2>

              <Form />

              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-5">
                <div className="space-y-4 mb-8 lg:border-r">
                  <div className="flex items-center">
                    <div
                      className="w-8 h-8 rounded-full bg-[#2a4741] flex items-center justify-center mr-4"
                      aria-hidden="true"
                    >
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
                        aria-hidden="true"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <a
                      href="mailto:info@ledgerdatasolutions.com"
                      className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#9ebab7] rounded"
                    >
                      info@ledgerdatasolutions.com
                    </a>
                  </div>

                  <div className="flex items-center">
                    <div
                      className="w-8 h-8 rounded-full bg-[#2a4741] flex items-center justify-center mr-4"
                      aria-hidden="true"
                    >
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
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </div>
                    <a
                      href="https://www.ledgerdatasolutions.com"
                      className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#9ebab7] rounded"
                    >
                      www.ledgerdatasolutions.com
                    </a>
                  </div>

                  <div className="flex items-center">
                    <div
                      className="w-8 h-8 rounded-full bg-[#2a4741] flex items-center justify-center mr-4"
                      aria-hidden="true"
                    >
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
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <a
                      href="tel:1234567890"
                      className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#9ebab7] rounded"
                      aria-label="Call us at 123-456-7890"
                    >
                      123-456-7890
                    </a>
                  </div>
                  <div className="mb-8 flex gap-5">
                    <p className="text-white mb-2">FOLLOW US:</p>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#2a4741]"
                        aria-label="Follow us on Instagram"
                      >
                        <Image
                          src="/ig.png"
                          alt=""
                          width={20}
                          height={20}
                          className="object-cover"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#2a4741]"
                        aria-label="Follow us on Facebook"
                      >
                        <Image
                          src="/fb.png"
                          alt=""
                          width={18}
                          height={18}
                          className="object-cover"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-white font-semibold text-lg">
                    We offer expert bookkeeping, financial reporting, and
                    business insights tailored to your unique needs. Get in
                    touch now!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
