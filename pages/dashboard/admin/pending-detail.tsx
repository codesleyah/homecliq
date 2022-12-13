import PropetyGallery from "../../../components/gallery/PropertyGallerry";
import DashboardNavbar from "../../../components/navigation/DashboardNavbar";
import ListingsDetailSideBar from "../../../components/dashboard/admin/ListingDetailsSidebar";
import PendingDetailSideBar from "../../../components/dashboard/admin/PendingDetailSidebar";

export default function PendingDetails() {
  return (
    <>
      <DashboardNavbar />
      <div className="grid grid-cols-4 py-32 px-96">
        <div className="flex flex-col col-span-3">
          <PropetyGallery />
        </div>
        <div>
          <PendingDetailSideBar />
        </div>
        <div className="flex flex-col col-span-4 gap-4 p-4">
          <text className="text-xl font-bold">Description</text>
          <text className="text-base">the Description</text>
        </div>
      </div>
    </>
  );
}
