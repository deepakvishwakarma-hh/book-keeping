import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Ledger Data Solutions",
  description:
    "Read the terms and conditions governing the use of Ledger Data Solutions services and website. Learn about your rights and responsibilities as a user.",
  keywords:
    "terms and conditions, legal agreement, user agreement, service terms, website terms, financial services terms, accounting terms",
};

export default function TermsAndConditions() {
  return (
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
                ACCEPTANCE OF TERMS
              </h2>
              <p className="text-[#2a4741] mb-4">
                These Terms and Conditions ("Terms") govern your access to and
                use of the Ledger Data Solutions website and services. By
                accessing or using our website at www.ledgerdatasolutions.com
                ("Website"), you agree to be bound by these Terms.
              </p>

              <h3 className="text-xl font-bold text-[#4a4a4a] mt-6 mb-2">
                Last Updated
              </h3>
              <p className="text-[#2a4741] mb-4">
                These Terms and Conditions were last updated on March 26, 2025.
              </p>

              <h3 className="text-xl font-bold text-[#4a4a4a] mt-6 mb-2">
                Agreement to Terms
              </h3>
              <p className="text-[#2a4741] mb-4">
                By accessing our Website, you agree to be bound by these Terms
                and all applicable laws and regulations. If you do not agree
                with any of these Terms, you are prohibited from using or
                accessing this Website.
              </p>

              <p className="text-[#2a4741]">
                The materials contained in this Website are protected by
                applicable copyright and trademark law. These Terms constitute
                the entire agreement between you and Ledger Data Solutions
                regarding your use of our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Accounts Section */}
      <section
        id="user-accounts"
        className="bg-[#2f5653] text-white py-12"
        aria-labelledby="accounts-heading"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="accounts-heading"
            className="text-2xl font-semibold mb-6 text-center"
          >
            User Accounts and Registration
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Account Creation</h3>
              <p className="mb-4">
                To access certain features of our Website, you may be required
                to register for an account. You agree to provide accurate,
                current, and complete information during the registration
                process and to update such information to keep it accurate,
                current, and complete.
              </p>
              <p>
                You are responsible for safeguarding your password and for all
                activities that occur under your account. You agree to notify us
                immediately of any unauthorized use of your account or any other
                breach of security.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Account Termination</h3>
              <p className="mb-4">
                We reserve the right to terminate or suspend your account and
                access to our services at our sole discretion, without notice,
                for conduct that we believe violates these Terms or is harmful
                to other users, us, or third parties, or for any other reason.
              </p>
              <p>
                You may terminate your account at any time by contacting us at
                info@ledgerdatasolutions.com. Upon termination, your right to
                use our services will immediately cease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property Section */}
      <section
        id="intellectual-property"
        className="py-16 bg-white"
        aria-labelledby="ip-heading"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="ip-heading"
            className="md:text-4xl text-2xl font-light text-[#2a4741] mb-6 font-heading"
          >
            INTELLECTUAL PROPERTY RIGHTS
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">
                Our Content
              </h3>
              <p className="text-[#2a4741] mb-4">
                The Website and its original content, features, and
                functionality are owned by Ledger Data Solutions and are
                protected by international copyright, trademark, patent, trade
                secret, and other intellectual property or proprietary rights
                laws.
              </p>
              <p className="text-[#2a4741]">
                You may not reproduce, distribute, modify, create derivative
                works of, publicly display, publicly perform, republish,
                download, store, or transmit any of the material on our Website,
                except as follows:
              </p>
              <ul className="list-disc pl-5 text-[#2a4741] my-4 space-y-2">
                <li>
                  Your computer may temporarily store copies of such materials
                  in RAM incidental to your accessing and viewing those
                  materials.
                </li>
                <li>
                  You may store files that are automatically cached by your Web
                  browser for display enhancement purposes.
                </li>
                <li>
                  You may print or download one copy of a reasonable number of
                  pages of the Website for your own personal, non-commercial use
                  and not for further reproduction, publication, or
                  distribution.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">
                Trademarks
              </h3>
              <p className="text-[#2a4741] mb-4">
                The Ledger Data Solutions name, logo, and all related names,
                logos, product and service names, designs, and slogans are
                trademarks of Ledger Data Solutions or its affiliates or
                licensors. You must not use such marks without our prior written
                permission.
              </p>

              <h3 className="text-xl font-bold text-[#4a4a4a] mt-6 mb-4">
                User Content
              </h3>
              <p className="text-[#2a4741]">
                By posting, uploading, or otherwise making available any content
                on our Website, you grant us a non-exclusive, transferable,
                sub-licensable, royalty-free, worldwide license to use, copy,
                modify, create derivative works based on, distribute, publicly
                display, publicly perform, and otherwise exploit that content in
                connection with the services we provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Activities Section */}
      <section
        id="prohibited-activities"
        className="py-16 bg-[#c5d8d5]"
        aria-labelledby="prohibited-heading"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="prohibited-heading"
            className="md:text-4xl text-2xl font-light text-[#2a4741] mb-6 font-heading"
          >
            PROHIBITED ACTIVITIES
          </h2>

          <div className="bg-white p-6 rounded-md mb-8">
            <p className="text-[#2a4741] mb-4">
              You agree not to use our Website or services for any purpose that
              is unlawful or prohibited by these Terms. Prohibited activities
              include, but are not limited to:
            </p>

            <ul className="list-disc pl-5 text-[#2a4741] mb-6 space-y-2">
              <li>
                Using the Website in any manner that could disable, overburden,
                damage, or impair the site
              </li>
              <li>
                Using any robot, spider, or other automatic device, process, or
                means to access the Website for any purpose
              </li>
              <li>
                Introducing any viruses, Trojan horses, worms, logic bombs, or
                other harmful material
              </li>
              <li>
                Attempting to gain unauthorized access to, interfere with,
                damage, or disrupt any parts of the Website
              </li>
              <li>
                Attacking the Website via a denial-of-service attack or a
                distributed denial-of-service attack
              </li>
              <li>
                Using the Website to collect or harvest any personally
                identifiable information
              </li>
              <li>
                Impersonating or attempting to impersonate Ledger Data
                Solutions, a company employee, another user, or any other person
                or entity
              </li>
              <li>
                Engaging in any other conduct that restricts or inhibits
                anyone's use or enjoyment of the Website
              </li>
            </ul>

            <p className="text-[#2a4741]">
              Violation of these prohibitions may result in termination of your
              access to our Website and services, and you may be reported to law
              enforcement authorities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-md p-6 border border-[#2a4741]">
              <h3 className="text-lg font-semibold text-[#2a4741] mb-3">
                Content Standards
              </h3>
              <p className="text-[#2a4741]">
                Any content you contribute must comply with all applicable laws
                and regulations and must not contain any material that is
                defamatory, obscene, offensive, or harmful.
              </p>
            </div>

            <div className="bg-white rounded-md p-6 border border-[#2a4741]">
              <h3 className="text-lg font-semibold text-[#2a4741] mb-3">
                Monitoring and Enforcement
              </h3>
              <p className="text-[#2a4741]">
                We have the right to monitor all activity on the Website and to
                remove any user content that violates these Terms or is
                otherwise objectionable.
              </p>
            </div>

            <div className="bg-white rounded-md p-6 border border-[#2a4741]">
              <h3 className="text-lg font-semibold text-[#2a4741] mb-3">
                Cooperation with Authorities
              </h3>
              <p className="text-[#2a4741]">
                We will cooperate fully with any law enforcement authorities or
                court order requesting or directing us to disclose the identity
                of anyone posting materials on our Website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liability Section */}
      <section
        id="liability"
        className="py-16 bg-white"
        aria-labelledby="liability-heading"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="liability-heading"
            className="md:text-4xl text-2xl font-light text-[#2a4741] mb-6 font-heading"
          >
            LIMITATION OF LIABILITY
          </h2>

          <div className="grid md:grid-cols-[1.5fr_1fr] gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">
                Disclaimer of Warranties
              </h3>
              <p className="text-[#2a4741] mb-4">
                Your use of the Website and services is at your sole risk. The
                Website and services are provided on an "AS IS" and "AS
                AVAILABLE" basis. We expressly disclaim all warranties of any
                kind, whether express or implied, including but not limited to
                the implied warranties of merchantability, fitness for a
                particular purpose, and non-infringement.
              </p>
              <p className="text-[#2a4741] mb-6">
                We make no warranty that the Website will meet your
                requirements, be available on an uninterrupted, secure, or
                error-free basis, or that the results that may be obtained from
                the use of the Website will be accurate or reliable.
              </p>

              <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">
                Limitation of Liability
              </h3>
              <p className="text-[#2a4741]">
                In no event shall Ledger Data Solutions, its directors,
                employees, partners, agents, suppliers, or affiliates be liable
                for any indirect, incidental, special, consequential, or
                punitive damages, including without limitation, loss of profits,
                data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-5 text-[#2a4741] my-4 space-y-2">
                <li>
                  Your access to or use of or inability to access or use the
                  Website or services
                </li>
                <li>
                  Any conduct or content of any third party on the Website
                </li>
                <li>Any content obtained from the Website</li>
                <li>
                  Unauthorized access, use, or alteration of your transmissions
                  or content
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-[#c5d8d5] p-6 rounded-md border border-[#2a4741]">
                <h3 className="text-xl font-bold text-[#4a4a4a] mb-4">
                  Indemnification
                </h3>
                <p className="text-[#2a4741] mb-4">
                  You agree to defend, indemnify, and hold harmless Ledger Data
                  Solutions, its affiliates, licensors, and service providers,
                  and its and their respective officers, directors, employees,
                  contractors, agents, licensors, suppliers, successors, and
                  assigns from and against any claims, liabilities, damages,
                  judgments, awards, losses, costs, expenses, or fees (including
                  reasonable attorneys' fees) arising out of or relating to your
                  violation of these Terms or your use of the Website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Law Section */}
      <section
        id="governing-law"
        className="py-16 bg-[#2f5653] text-white"
        aria-labelledby="law-heading"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="law-heading"
            className="md:text-4xl text-2xl font-light mb-8 font-heading text-center"
          >
            GOVERNING LAW AND JURISDICTION
          </h2>

          <div className="grid md:grid-cols-1 gap-8 items-center">
            <div>
              <p className="mb-4">
                These Terms and your use of the Website shall be governed by and
                construed in accordance with the laws of the State of Florida,
                without regard to its conflict of law provisions.
              </p>
              <p className="mb-4">
                Any legal action or proceeding relating to your access to or use
                of the Website or these Terms shall be instituted in the federal
                courts of the United States or the courts of the State of
                Florida, in each case located in Davenport, Florida. You agree
                to submit to the jurisdiction of such courts and waive any
                objection to the exercise of jurisdiction over you by such
                courts.
              </p>
              <p>
                Any cause of action you may have with respect to your use of the
                Website must be commenced within one (1) year after the claim or
                cause of action arises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Terms Section */}
      <section
        id="changes-to-terms"
        className="py-16 bg-[#c5d8d5]"
        aria-labelledby="changes-heading"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2
            id="changes-heading"
            className="md:text-4xl text-2xl font-light text-[#2a4741] mb-6 font-heading text-center"
          >
            CHANGES TO THESE TERMS
          </h2>

          <div className="bg-white p-6 rounded-md max-w-3xl mx-auto">
            <p className="text-[#2a4741] mb-4">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will
              provide at least 30 days' notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>
            <p className="text-[#2a4741] mb-4">
              By continuing to access or use our Website after any revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, you are no longer authorized to
              use the Website.
            </p>
            <p className="text-[#2a4741]">
              It is your responsibility to review these Terms periodically for
              changes. Your continued use of the Website following the posting
              of revised Terms means that you accept and agree to the changes.
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
            If you have any questions about these Terms and Conditions, please
            contact us at info@ledgerdatasolutions.com.
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
  );
}
