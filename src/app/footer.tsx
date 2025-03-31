import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-[#2f5653] text-white py-4 text-center text-sm mt-1"
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center md:gap-10 gap-2 text-[10px] flex-col md:flex-row">
          <Link
            href="/privacy-policy"
            className="uppercase tracking-[8px] hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2f5653] rounded px-2"
          >
            PRIVACY POLICY
          </Link>
          <span className="md:block hidden" aria-hidden="true">
            |
          </span>
          <Link
            href="/terms"
            className="uppercase tracking-[8px] hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2f5653] rounded px-2"
          >
            TERMS & CONDITIONS
          </Link>
        </div>
      </div>
    </footer>
  );
}
