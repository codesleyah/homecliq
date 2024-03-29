import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col w-screen bg-blue-900">
      <div className="flex flex-col md:grid md:grid-cols-4 p-32">
        <div className="col-span-2">
          <text className="text-2xl md:text-6xl font-black text-white">HOMECLICQ</text>
        </div>
        <div className="flex flex-col gap-4">
          <text className="text-lg font-black text-white">Quick links</text>
          <text className="text-sm text-white">Terms and Conditions</text>
          <text className="text-sm text-white">Privacy Policy</text>
          <text className="text-sm text-white">FAQ</text>
        </div>
        <div className="flex flex-col gap-8">
          <text className="text-lg font-black text-white">Contact Us</text>
          <Link href="tel:+263778896938">
           <text className="text-sm text-white" >+263 778 896 938</text>
          </Link>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between m-8">
        <text className="text-white">
          Copyright © 2023. All rights reserved to Homecliq
        </text>
        <text className="text-gray-400">Terms & Conditions</text>
      </div>
    </div>
  );
}
