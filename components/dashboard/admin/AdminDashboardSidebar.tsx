import {
  DashboardIcon,
  GearIcon,
  ExitIcon,
  PersonIcon,
  EnvelopeOpenIcon,
  EnvelopeClosedIcon,
  HomeIcon,
  PlusIcon
} from "@radix-ui/react-icons";
import Link from "next/link";
import { auth } from "../../../firebase";
import Router, { useRouter } from "next/router";

export default function AdminDashboardSidebar() {
  const router = useRouter();
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        router.push("/dashboard");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex flex-col p-4 bg-white rounded shadow">
      <Link href="/">
        <div className="flex items-center justify-center p-4">
        <text className="text-2xl font-black tracking-tight text-blue-900">
          HOMECLICK
        </text>
      </div>
      </Link>
      <div className="flex flex-col gap-4 p-4">
        <Link href="/dashboard/admin/">
          <div className="flex items-center gap-4">
            <DashboardIcon />
            <text className="text-base">Dashboard</text>
          </div>
        </Link>
        <Link href="/dashboard/admin/all-listings">
          <div className="flex items-center gap-4">
            <HomeIcon />
            <text className="text-base">All Listings</text>
          </div>
        </Link>
        <Link href="/dashboard/admin/add-listing">
          <div className="flex items-center gap-4">
            <PlusIcon />
            <text className="text-base">Add Listings</text>
          </div>
        </Link>
        <Link href="/dashboard/admin/pending-listings">
          <div className="flex items-center gap-4">
            <EnvelopeOpenIcon />
            <text className="text-base">Pending</text>
          </div>
        </Link>
        <Link href="/dashboard/admin/applications">
          <div className="flex items-center gap-4">
            <EnvelopeClosedIcon />
            <text className="text-base">Applications</text>
          </div>
        </Link>
        <Link href="/dashboard/admin/landlords">
          <div className="flex items-center gap-4">
            <PersonIcon />
            <text className="text-base">Landlords / Agents</text>
          </div>
        </Link>
        <Link href="#">
          <div className="flex items-center gap-4">
            <GearIcon />
            <text className="text-base">Settings</text>
          </div>
        </Link>
        <a onClick={signOut}>
          <div className="flex items-center gap-4">
            <ExitIcon />
            <a href="#" onClick={signOut}>
              <text className="text-base">Logout</text>
            </a>
          </div>
        </a>
      </div>
    </div>
  );
}
