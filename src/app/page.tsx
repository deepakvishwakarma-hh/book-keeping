import Form from "./form";
import Link from "next/link";
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
            <img
              src="/hero-5.png"
              alt="Professional office workspace with computer and decorative flowers"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute inset-0 grid">
            <div className="max-w-5xl mx-auto flex justify-end items-center w-full">
              <div className="bg-[#b5cfcd] p-10 max-w-md mx-8 border-[#2a4741] border">
                <h1
                  id="hero-heading"
                  className="md:text-4xl text-2xl font-medium text-[#4a4a4a] mb-4 font-heading text-center tracking-[5px]"
                >
                  LEDGER DATA SOLUTIONS
                </h1>
                <p className="text-[#4a4a4a] mb-6 text-center font-medium">
                  Let’s Scale Up Your Business!
                  <br /> ¡Impulsemos tu Negocio!
                </p>
                <Link
                  href="#contact"
                  className="bg-[#4a4a4a] text-white py-2 px-16 rounded-full hover:bg-opacity-90 transition mx-auto block text-xs tracking-wide text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4a4a4a] uppercase"
                  aria-label="Contact us today"
                >
                  Schedule Your <br /> discovery call
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
                About Us
              </h2>
              <p className="text-[#2a4741] mb-4">
                At Ledger Data Solutions, we take the stress out of bookkeeping
                so you can focus on growing your business. Our remote virtual
                bookkeeping services turn your income and expenses into clear,
                actionable reports, giving you the insight to make smarter
                decisions without the headaches of tax deadlines or confusing
                spreadsheets. <br /> <br /> With accurate, organized financial
                data, you can spot opportunities, plan for growth, and scale
                your business with confidence. We provide the clarity and
                control you need to focus on what you do best while we keep your
                books in perfect order.
              </p>

              <h2
                id="about-heading"
                className="md:text-3xl text-2xl font-light text-[#2a4741] mb-6 font-heading"
              >
                What We Stand For
              </h2>

              <h3 className="text-xl font-bold text-[#4a4a4a] mt-6 mb-2">
                Accuracy First
              </h3>
              <p className="text-[#2a4741] mb-4">
                Every transaction is meticulously tracked and reconciled.
              </p>

              <h3 className="text-xl font-bold text-[#4a4a4a] mt-6 mb-2">
                Tech-Smart, Human Support
              </h3>
              <p className="text-[#2a4741]">
                QuickBooks Online and secure tools, backed by real people who
                know your business.
              </p>

              <h3 className="text-xl font-bold text-[#4a4a4a] mt-6 mb-2">
                Growth-Focused Partnership
              </h3>
              <p className="text-[#2a4741]">
                We organize your books and provide clear reports so you’re
                always accountant-ready, making tax season and financial reviews
                stress-free. <br /> <br /> At Ledger Data Solutions, clarity is
                the foundation of growth, and we’re here to build it with you.
              </p>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-5">
                <div className="flex flex-col items-center md:px-10 px-5">
                  <p className="text-center text-lg font-semibold">
                    Let&apos;s Scale <br /> Up Your
                  </p>
                  <img
                    src="/business.jpg"
                    alt="Accuracy"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="flex flex-col items-center md:px-10 px-5">
                  <p className="text-center text-lg font-semibold">
                    Impulsemos <br /> tu
                  </p>
                  <img
                    src="/nagotio.jpg"
                    alt="Tech-Smart"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src="/client.jpg"
                alt="Lightbulb representing innovative financial ideas and solutions"
                width={400}
                height={500}
                style={{
                  boxShadow: "100px 100px 0 #2a4741",
                }}
                className="object-cover rounded-md md:block hidden"
              />
              <img
                src="/client.jpg"
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
                  The Difference
                </h2>
                <dl className="space-y-4">
                  <div className="flex flex-col flex-wrap">
                    <dt className="font-bold">● Clear, Actionable Numbers</dt>
                    <dd className="pl-5">
                      ○ Accurate reports and insights you’ll actually use.
                    </dd>
                  </div>
                  <div className="flex flex-col flex-wrap">
                    <dt className="font-bold">● Tech-Smart, Human Support</dt>
                    <dd className="pl-5">
                      ○ Secure tools + QuickBooks Online, backed by real
                      support.
                    </dd>
                  </div>
                  <div className="flex flex-col flex-wrap">
                    <dt className="font-bold">● Growth-Focused Partnership</dt>
                    <dd className="pl-5">
                      ○ Hands-on, seamless support that fuels decisions; without
                      interrupting your day.
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="mt-auto">
                <img
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
                    CLEAN
                    <br />
                  </h3>
                </div>
                <div
                  className="border-t border-[#2a4741] my-4"
                  aria-hidden="true"
                ></div>
                <p className="text-[#2a4741] mb-6">
                  Bring your books up to date with our clean-up services. From
                  overdue records to disorganized finances, we’ll simplify and
                  clarify everything for you.
                </p>

                <h4 className="font-bold text-lg text-[#2a4741] mt-4 mb-2">
                  What You Get:
                </h4>
                <ul className="list-disc pl-5 text-[#2a4741] mb-4">
                  <li>
                    <span className="font-bold">Transaction Clean-Up:</span>{" "}
                    We’ll organize your records and bring order to any messy
                    transactions.
                  </li>
                  <li>
                    <span className="font-bold">Catch-Up Services:</span> Get up
                    to date on your bookkeeping, no matter how far behind you
                    are.
                  </li>
                  <li>
                    <span className="font-bold">Financial Clarity:</span> We’ll
                    ensure your financial records are accurate, clear, and ready
                    for smooth management moving forward.
                  </li>
                </ul>

                <div className="mt-auto">
                  <button
                    className="bg-[#4a4a4a] text-white py-2 px-4 w-full rounded hover:bg-opacity-90 transition text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4a4a4a]"
                    aria-label="Book your tax preparation consultation"
                  >
                    Book Your Discovery Call
                  </button>

                  <div className="mt-4 h-[250px] relative">
                    <img
                      src="/service-1.jpg"
                      alt="Clean and organized workspace representing our clean-up services"
                      className="object-cover rounded-md w-full h-full"
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
                    BOOKKEEPING
                    <br />
                  </h3>
                </div>
                <div
                  className="border-t border-[#2a4741] my-4"
                  aria-hidden="true"
                ></div>
                <p className="text-[#2a4741] mb-4">
                  Stay on top of your finances with our monthly bookkeeping and
                  reporting services. We handle the day-to-day so you can focus
                  on growing your business.
                </p>

                <h4 className="font-bold text-lg text-[#2a4741] mt-4 mb-2">
                  What You Get:
                </h4>
                <ul className="list-disc pl-5 text-[#2a4741] mb-6">
                  <li>
                    <span className="font-bold">Organize Transactions:</span>{" "}
                    Easily categorize income and expenses for your Profit &amp;
                    Loss (P&amp;L) and Schedule C.
                  </li>
                  <li>
                    <span className="font-bold">Reconcile Accounts:</span> Keep
                    your books accurate and up-to-date with seamless account
                    reconciliation.
                  </li>
                  <li>
                    <span className="font-bold">Financial Management:</span>{" "}
                    Streamline your financial statements, including Profit &amp;
                    Loss, Balance Sheets, Accounts Payable, and Accounts
                    Receivable.
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
                    <img
                      src="/service-2.jpg"
                      alt="Financial reports and documents representing our monthly bookkeeping services"
                      className="object-cover rounded-md w-full h-full"
                    />
                  </div>
                </div>
              </article>

              {/* Service 3 */}
              <article className="bg-[#b5cfcd] rounded-md p-6 flex flex-col h-full border border-[#2a4741]">
                <div className="min-h-[100px] flex items-center justify-center">
                  <h3 className="text-2xl font-medium text-center text-[#4a4a4a] mb-4 font-heading tracking-wide">
                    MONTHLY
                    <br />
                    REPORTING
                  </h3>
                </div>
                <div
                  className="border-t border-[#2a4741] my-4"
                  aria-hidden="true"
                ></div>
                <p className="text-[#2a4741] mb-4">
                  Stay tax-ready all year round with our reporting and tax
                  support. We organize your records, ensure accuracy, and work
                  with your CPA to make tax season stress-free.
                </p>

                <h4 className="font-bold text-lg text-[#2a4741] mt-4 mb-2">
                  What You Get:
                </h4>
                <ul className="list-disc pl-5 text-[#2a4741] mb-6">
                  <li>
                    <span className="font-bold">Comprehensive Reports:</span>{" "}
                    Detailed reports for your CPA to ensure smooth tax
                    preparation.
                  </li>
                  <li>
                    <span className="font-bold">Year-End Tax Planning:</span>{" "}
                    Support for tax planning and compliance to minimize tax
                    season stress.
                  </li>
                </ul>

                <div className="mt-auto">
                  <button
                    className="bg-[#4a4a4a] text-white py-2 px-4 w-full rounded hover:bg-opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4a4a4a]"
                    aria-label="Plan your financial future"
                  >
                    Plan Your Financial Future
                  </button>

                  <div className="mt-4 h-[250px] relative">
                    <img
                      src="/service-3.jpg"
                      alt="Tax documents and calculator representing our tax preparation support"
                      className="object-cover rounded-md w-full h-full"
                    />
                  </div>
                </div>
              </article>
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
                    className="text-[#2a4741] bg-[#c5d8d5] p-2 rounded-md font-bold"
                  >
                    <b>Q:</b> Do I require a long-term contract for your
                    services?
                  </h3>
                  <p className="text-[#2a4741] p-2" aria-labelledby="faq-1">
                    <b>A:</b> No, long-term contracts are not required. We offer
                    flexible arrangements tailored to your specific needs, so
                    you can get the support you need without being locked in.
                  </p>
                </div>

                <div>
                  <h3
                    id="faq-2"
                    className="text-[#2a4741] bg-[#c5d8d5] p-2 rounded-md font-bold"
                  >
                    <b>Q:</b> What's the first step to engage with you?
                  </h3>
                  <p className="text-[#2a4741] p-2" aria-labelledby="faq-2">
                    <b>A:</b> You can reach out through our online form or by
                    email at info@ledgerdatasolutions.com. You can also send
                    mail to 39873 US 27 #118, Davenport, FL 33837. Don’t forget
                    to follow us on Instagram, Facebook, and LinkedIn to stay
                    updated. <br /> <br />
                    After receiving your inquiry, we’ll schedule a discovery
                    call to discuss your business needs, answer your questions,
                    and provide a personalized quote.
                  </p>
                </div>

                <div>
                  <h3
                    id="faq-3"
                    className="text-[#2a4741] bg-[#c5d8d5] p-2 rounded-md font-bold"
                  >
                    <b>Q:</b> What are your fees?
                  </h3>
                  <p className="text-[#2a4741] p-2" aria-labelledby="faq-3">
                    <b>A:</b> Pricing varies based on your business model,
                    transactions, and accounts. Get a custom quote with a
                    discovery call.
                  </p>
                </div>

                <div>
                  <h3
                    id="faq-4"
                    className="text-[#2a4741] bg-[#c5d8d5] p-2 rounded-md font-bold"
                  >
                    <b>Q:</b> How will we maintain communication?
                  </h3>
                  <p className="text-[#2a4741] p-2" aria-labelledby="faq-4">
                    <b>A:</b> At Ledger Data Solutions, clear and effortless
                    communication is our priority. We provide the best tools and
                    apps to keep everything in one place. No more lost emails,
                    receipts, or unanswered questions. From secure messaging to
                    real-time updates and easy-to-use dashboards, we make it
                    simple for you to stay informed, connected, and confident in
                    your finances.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
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
            <p className="md:text-xl text-lg font-bold">
              For further inquiries{" "}
              <span className="text-white">CLICK HERE</span> to contact us
              today.
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
            <div className="p-12 flex flex-col items-center justify-center space-y-10">
              <div className="bg-white p-3 mb-8 w-60 h-40 flex items-center justify-center scale-110">
                <img
                  src="/LOGO.svg"
                  alt="Ledger Data Solutions Logo"
                  className="object-cover"
                  width={150}
                  height={150}
                />
              </div>

              <div className="max-w-md text-center text-white mb-8 text-2xl">
                <blockquote>
                  &ldquo;Let&rsquo;s scale up your business by keeping your
                  finances clear,&nbsp;organized, and stress-free.&rdquo;
                </blockquote>
              </div>

              <div
                className="flex flex-wrap justify-center items-center gap-5 "
                aria-label="Client logos"
              >
                <div className="max-w-xs h-32 w-32 bg-transparent mb-8">
                  <img
                    src="/client.webp"
                    alt="Client logo"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="max-w-xs h-32 w-32 bg-blue-100 mb-8">
                  <img
                    src="/cer1.jpg"
                    alt="Client logo"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="max-w-xs h-32 w-32 bg-blue-100 mb-8">
                  <img
                    src="/cer2.jpg"
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
                        <path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10z"></path>
                        <circle cx="12" cy="11" r="2.5"></circle>
                      </svg>
                    </div>
                    <a
                      href="tel:1234567890"
                      className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#9ebab7] rounded"
                      aria-label="Call us at 123-456-7890"
                    >
                      39873 US-27 #118 Davenport FL 33837
                    </a>
                  </div>
                  <div className="mb-8 flex gap-5">
                    <p className="text-white mb-2">FOLLOW US:</p>
                    <div className="flex space-x-4">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/ledgerdatasolutions"
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#2a4741]"
                        aria-label="Follow us on Instagram"
                      >
                        <img
                          src="/ig.png"
                          alt=""
                          width={20}
                          height={20}
                          className="object-cover"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/ledgerdatasolutions"
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#2a4741]"
                        aria-label="Follow us on Facebook"
                      >
                        <img
                          src="/fb.png"
                          alt=""
                          width={18}
                          height={18}
                          className="object-cover"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/company/ledgerdatasolutions"
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#2a4741]"
                        aria-label="Follow us on LinkedIn"
                      >
                        <img
                          src="/ln.png"
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
                  <p className="text-white font-semibold text-md">
                    We offer expert bookkeeping, financial reporting, and
                    business insights tailored to your unique needs. <br />
                    <br />
                    ¡Se habla español! Orgullosos de servir a la comunidad
                    hispana.
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
