import Link from "next/link";
import Navbar from "../navbar";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Security & Privacy Policy | Ledger Data Solutions",
  description:
    "Learn about how Ledger Data Solutions protects your data and our privacy policies regarding the collection and use of your personal information.",
  keywords:
    "privacy policy, data protection, online security, personal data, cookies, GDPR, data rights, financial security",
};

export default function OnlineSecurity() {
  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black focus:outline-none"
      >
        Skip to main content
      </a>

      <main id="main-content" className="min-h-screen overflow-hidden">
        {/* Introduction Section */}
        <section
          id="introduction"
          className="py-16 bg-white"
          aria-labelledby="intro-heading"
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-1 gap-8">
              <div>
                <h2
                  id="intro-heading"
                  className="md:text-4xl text-2xl font-light text-[#2a4741] mb-6 font-heading"
                >
                  WHO WE ARE
                </h2>
                <p className="text-[#2a4741] mb-4">
                  This privacy policy applies to Ledger Data Solutions, a
                  Davenport Florida-based company. This privacy policy will
                  explain how our organization uses the personal data we collect
                  from you when you use our Website.
                </p>

                <h3 className="text-xl font-bold text-[#4a4a4a] mt-6 mb-2">
                  Privacy Notice
                </h3>
                <p className="text-[#2a4741] mb-4">
                  Our Privacy Policy was last updated on March 26, 2025.
                </p>
                <p className="text-[#2a4741] mb-4">
                  We use your data to provide and improve
                  www.ledgerdatasolutions.com ("Website"). By using our Website,
                  you agree to the collection and use of your personal
                  information under this Privacy Policy.
                </p>
                <p className="text-[#2a4741]">
                  This privacy notice discloses our privacy policies and
                  practices for our Website. The privacy notice applies solely
                  to information collected by this Website. It will notify you
                  of the following:
                </p>
                <ol className="list-decimal pl-8 text-[#2a4741] my-4 space-y-2">
                  <li>
                    Which personal information is collected from you via the
                    Website, how that information is used, and with whom that
                    information may be shared.
                  </li>
                  <li>
                    The choices that are available to you regarding the use of
                    your data.
                  </li>
                  <li>
                    All security procedures in place to protect the misuse of
                    your information.
                  </li>
                  <li>
                    The ways by which you may correct inaccuracies in the
                    information.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Definitions Section */}
        <section
          id="definitions"
          className="bg-[#2f5653] text-white py-12"
          aria-labelledby="definitions-heading"
        >
          <div className="max-w-5xl mx-auto px-4">
            <h2
              id="definitions-heading"
              className="text-2xl font-semibold mb-6 text-center"
            >
              Definitions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <dl className="space-y-4">
                <div>
                  <dt className="font-bold">Account</dt>
                  <dd>
                    An individual account created for you to access our Service
                    or parts of our Service.
                  </dd>
                </div>

                <div>
                  <dt className="font-bold">Company</dt>
                  <dd>
                    Refers to Ledger Data Solutions (also referred to as "the
                    Company," "We," "Us," or "Our").
                  </dd>
                </div>

                <div>
                  <dt className="font-bold">Country</dt>
                  <dd>Refers to United States of America (USA).</dd>
                </div>

                <div>
                  <dt className="font-bold">Cookies</dt>
                  <dd>
                    Small files placed on Your computer, mobile device, or any
                    other device by a website, containing the details of Your
                    browsing history on that Website among its many uses.
                  </dd>
                </div>

                <div>
                  <dt className="font-bold">Device</dt>
                  <dd>
                    Any device that can access our Website, such as a computer,
                    a cell phone, or a digital tablet.
                  </dd>
                </div>
              </dl>

              <dl className="space-y-4">
                <div>
                  <dt className="font-bold">Do Not Track (DNT)</dt>
                  <dd>
                    A concept promoted by U.S. regulatory authorities for the
                    Internet industry to develop and implement a mechanism for
                    allowing Internet users to control the tracking of their
                    online activities across websites.
                  </dd>
                </div>

                <div>
                  <dt className="font-bold">Personal Data</dt>
                  <dd>
                    Any information related to an identified or identifiable
                    individual.
                  </dd>
                </div>

                <div>
                  <dt className="font-bold">Service</dt>
                  <dd>Refers to the Website.</dd>
                </div>

                <div>
                  <dt className="font-bold">Service Provider</dt>
                  <dd>
                    Any natural or legal person who processes the data on behalf
                    of the Company.
                  </dd>
                </div>

                <div>
                  <dt className="font-bold">Website</dt>
                  <dd>
                    Refers to Ledger Data Solution accessible from
                    www.ledgerdatasolutions.com
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Information Collection Section */}
        <section
          id="information-collection"
          className="py-16 bg-white"
          aria-labelledby="collection-heading"
        >
          <div className="max-w-5xl mx-auto px-4">
            <h2
              id="collection-heading"
              className="md:text-4xl text-2xl font-light text-[#2a4741] mb-6 font-heading"
            >
              INFORMATION COLLECTION, USE, AND SHARING
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">
                  What We Collect
                </h3>
                <p className="text-[#2a4741] mb-4">
                  We collect the following data:
                </p>
                <ul className="list-disc pl-5 text-[#2a4741] mb-6">
                  <li>
                    Personal identification information, such as name, email
                    address, phone number, etc.
                  </li>
                </ul>

                <p className="text-[#2a4741] mb-4">
                  We are the only owners of all information collected on and by
                  this Website. We shall only have access to or collect
                  information that you voluntarily give us via email or other
                  direct forms of contact from you. We will not sell or rent
                  your information to anyone.
                </p>

                <p className="text-[#2a4741]">
                  We will use your information to respond to you regarding the
                  reason you contacted us. We will not share your information
                  with any third party outside of our organization except as
                  necessary to fulfill your request (for example, to ship an
                  order).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">
                  How We Use Your Information
                </h3>
                <p className="text-[#2a4741] mb-4">
                  The Company may use your information for the following
                  purposes:
                </p>
                <ul className="list-disc pl-5 text-[#2a4741] mb-6">
                  <li>
                    To provide and maintain our Service, including monitoring
                    our Service's usage.
                  </li>
                  <li>
                    To manage your Account and provide you access to different
                    Service functionalities.
                  </li>
                  <li>
                    For the performance of a contract for products or services
                    you have purchased.
                  </li>
                  <li>
                    To contact you regarding updates or informative
                    communications related to our services.
                  </li>
                  <li>
                    To provide you with updates and special offers about our
                    services.
                  </li>
                  <li>To manage your requests to us.</li>
                  <li>
                    For business transfers in case of merger, acquisition, or
                    sale of assets.
                  </li>
                </ul>

                <p className="text-[#2a4741]">
                  Please note that, unless you ask us not to, we may contact you
                  via email in the future to inform you about specials, new
                  products or services, or changes to this privacy policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sharing Section */}
        <section
          id="data-sharing"
          className="py-16 bg-[#c5d8d5]"
          aria-labelledby="sharing-heading"
        >
          <div className="max-w-5xl mx-auto px-4">
            <h2
              id="sharing-heading"
              className="md:text-4xl text-2xl font-light text-[#2a4741] mb-6 font-heading"
            >
              DATA SHARING AND TRANSFERS
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">
                  How We Share Your Data
                </h3>
                <p className="text-[#2a4741] mb-4">
                  We may share your personal information in the following
                  situations:
                </p>
                <ul className="list-disc pl-5 text-[#2a4741] mb-6">
                  <li>
                    With Service Providers to monitor and analyze the use of our
                    Service.
                  </li>
                  <li>
                    For business transfers during negotiations of merger, sale,
                    or acquisition.
                  </li>
                  <li>
                    With Affiliates, requiring them to honor this Privacy
                    Policy.
                  </li>
                  <li>
                    With business partners to offer you certain products or
                    services.
                  </li>
                  <li>
                    With other users when you share information in public areas.
                  </li>
                  <li>With Your Consent for any other purpose you agree to.</li>
                </ul>

                <p className="text-[#2a4741] mb-4">
                  If you agree, Company may share your data with our partner
                  companies so that they may offer you their products and
                  services.
                </p>
                <p className="text-[#2a4741] font-bold">NONE</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">
                  Transfer of Your Personal Data
                </h3>
                <p className="text-[#2a4741] mb-4">
                  Your information, including personal data, is processed at the
                  Company's operating offices and in any other places where the
                  parties involved in the processing are located. This
                  information may be transferred to computers outside your
                  jurisdiction where data protection laws may differ.
                </p>
                <p className="text-[#2a4741] mb-4">
                  Your consent to this Privacy Policy and your submission of
                  such information represents your agreement to that transfer.
                  The Company will take all steps reasonably necessary to treat
                  your data securely and in accordance with this Privacy Policy.
                </p>

                <h3 className="text-xl font-bold text-[#4a4a4a] mt-6 mb-4">
                  Legal Requirements
                </h3>
                <p className="text-[#2a4741]">
                  The Company may disclose your personal data if required by law
                  or in the good faith belief that such action is necessary to
                  comply with legal obligations, protect our rights, investigate
                  wrongdoing, or protect the safety of our users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights Section */}
        <section
          id="your-rights"
          className="py-16 bg-white"
          aria-labelledby="rights-heading"
        >
          <div className="max-w-5xl mx-auto px-4">
            <h2
              id="rights-heading"
              className="md:text-4xl text-2xl font-light text-[#2a4741] mb-6 font-heading text-center"
            >
              YOUR DATA PROTECTION RIGHTS
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#b5cfcd] rounded-md p-6 border border-[#2a4741]">
                <h3 className="text-lg font-semibold text-[#2a4741] mb-3">
                  Access & Rectification
                </h3>
                <p className="text-[#2a4741]">
                  You have the right to request copies of your personal data and
                  to correct any inaccurate information we have about you.
                </p>
              </div>

              <div className="bg-[#b5cfcd] rounded-md p-6 border border-[#2a4741]">
                <h3 className="text-lg font-semibold text-[#2a4741] mb-3">
                  Erasure & Restriction
                </h3>
                <p className="text-[#2a4741]">
                  You can request that we erase your personal data or restrict
                  how we process it, under certain conditions.
                </p>
              </div>

              <div className="bg-[#b5cfcd] rounded-md p-6 border border-[#2a4741]">
                <h3 className="text-lg font-semibold text-[#2a4741] mb-3">
                  Objection & Portability
                </h3>
                <p className="text-[#2a4741]">
                  You have the right to object to our processing of your data
                  and to request that we transfer your data to another
                  organization.
                </p>
              </div>
            </div>

            <div className="bg-[#f5f5f5] p-6 rounded-md">
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">
                Your Access to and Control Over Information
              </h3>
              <p className="text-[#2a4741] mb-4">
                You may opt-out of any future contacts from us at any time. You
                can contact us via the email address or phone number listed on
                our Website to:
              </p>
              <ul className="list-disc pl-5 text-[#2a4741] mb-4">
                <li>See what data we have about you, if any.</li>
                <li>Change/correct any information we have about you.</li>
                <li>Have us delete any data we have about you.</li>
                <li>
                  Express any concern you have about our use of your data.
                </li>
              </ul>
              <p className="text-[#2a4741]">
                If you make a request, we have one month to respond to you.
              </p>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section
          id="security"
          className="py-16 bg-[#2f5653] text-white"
          aria-labelledby="security-heading"
        >
          <div className="max-w-5xl mx-auto px-4">
            <h2
              id="security-heading"
              className="md:text-4xl text-2xl font-light mb-8 font-heading text-center"
            >
              SECURITY OF YOUR PERSONAL DATA
            </h2>

            <div className="grid md:grid-cols-1 gap-8 items-center">
              <div>
                <p className="mb-4">
                  We take all appropriate precautions to protect your
                  information. The security of your personal data is important
                  to us. Please note, however, that no method of transmission
                  over the Internet or method of electronic storage is 100%
                  secure.
                </p>
                <p className="mb-4">
                  When you submit sensitive information via our website, your
                  information is protected online and offline. Any time we
                  collect sensitive information (like credit card data), that
                  information is encrypted and transmitted to us securely.
                </p>
                <p>
                  We also protect your information offline. Only employees who
                  need the information to perform a specific job are given
                  access to your personal information. The computers/servers in
                  which we store personal data are also kept in a secure
                  environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookies Section */}
        <section
          id="cookies"
          className="py-16 bg-white"
          aria-labelledby="cookies-heading"
        >
          <div className="max-w-5xl mx-auto px-4">
            <h2
              id="cookies-heading"
              className="md:text-4xl text-2xl font-light text-[#2a4741] mb-6 font-heading"
            >
              COOKIES
            </h2>

            <div className="grid md:grid-cols-[1.5fr_1fr] gap-8">
              <div>
                <p className="text-[#2a4741] mb-4">
                  Please note that we use "cookies" on this Website. A cookie is
                  a piece of data stored on a website visitor's hard drive to
                  help us improve your access to our Website and identify repeat
                  visitors to our Website.
                </p>
                <p className="text-[#2a4741] mb-4">
                  For instance, when we use a cookie to identify you, you would
                  not have to log in a password more than once, saving time on
                  our Website. Cookies can also enable us to track and target
                  the interests of our users to enhance the experience on our
                  Website.
                </p>
                <p className="text-[#2a4741] mb-6">
                  Usage of a cookie is not linked to any personal information on
                  our Website. For further information, visit
                  allaboutcookies.org.
                </p>

                <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">
                  How do we use cookies?
                </h3>
                <p className="text-[#2a4741] mb-4">
                  We use cookies in a range of ways to improve your experience
                  on our Website, including:
                </p>
                <ul className="list-disc pl-5 text-[#2a4741] mb-6">
                  <li>Keeping you signed in</li>
                  <li>Understanding how you use our Website</li>
                </ul>

                <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">
                  What types of cookies do we use?
                </h3>
                <p className="text-[#2a4741] mb-4">
                  There are several different types of cookies. The specific
                  types our Website uses are for the following purposes:
                </p>
                <ul className="list-disc pl-5 text-[#2a4741] mb-6">
                  <li>
                    <strong>Functionality:</strong> We use these cookies to
                    recognize you on our Website and remember your previously
                    selected preferences. These could include what language you
                    prefer and your location. A mix of first-party and
                    third-party cookies is used.
                  </li>
                  <li>
                    <strong>Advertising:</strong> We use these cookies to
                    collect information about your visit to our Website, the
                    content you viewed, the links you followed, and information
                    about your browser, device, and your I.P. address.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-[#c5d8d5] p-6 rounded-md border border-[#2a4741]">
                  <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">
                    How to manage cookies
                  </h3>
                  <p className="text-[#2a4741] mb-4">
                    You can set your browser not to accept cookies. The Website
                    allaboutcookies.org tells you how to remove cookies from
                    your browser. However, in a few cases, some of our Website
                    features may not function.
                  </p>

                  <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">
                    Do Not Track Policy
                  </h3>
                  <p className="text-[#2a4741]">
                    Our Website does not respond to Do Not Track ("DNT")
                    signals. However, some third-party websites do keep track of
                    your browsing activities. If you visit such websites, you
                    can set your preferences in your web browser to inform
                    websites that you do not want to be tracked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Changes to Policy Section */}
        <section
          id="policy-changes"
          className="py-16 bg-[#c5d8d5]"
          aria-labelledby="changes-heading"
        >
          <div className="max-w-5xl mx-auto px-4">
            <h2
              id="changes-heading"
              className="md:text-4xl text-2xl font-light text-[#2a4741] mb-6 font-heading text-center"
            >
              CHANGES TO THIS PRIVACY POLICY
            </h2>

            <div className="bg-white p-6 rounded-md max-w-3xl mx-auto">
              <p className="text-[#2a4741] mb-4">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page.
              </p>
              <p className="text-[#2a4741] mb-4">
                We will let you know via email and/or a prominent notice on our
                Website before the change becomes effective and update the "Last
                Updated" date at the top of this Privacy Policy.
              </p>
              <p className="text-[#2a4741]">
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact-us"
          className="bg-[#2f5653] mt-1 py-16"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2
              id="contact-heading"
              className="md:text-5xl text-2xl font-light font-heading text-white mb-8"
            >
              CONTACT US
            </h2>

            <p className="text-white max-w-2xl mx-auto mb-8">
              If you have any questions about this Privacy Policy, you can
              contact us by email at info@ledgerdatasolutions.com.
            </p>

            <a
              href="mailto:info@ledgerdatasolutions.com"
              className="bg-white text-[#2a4741] py-3 px-8 rounded-full hover:bg-gray-100 transition inline-block tracking-[3px] text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              EMAIL US
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
