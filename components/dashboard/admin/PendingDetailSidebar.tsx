import DeleteButton from "../../buttons/DeleteButton";
import SqaureButton from "../../buttons/SquareButton";
import Link from "next/link";
import { doc, updateDoc ,deleteDoc} from "firebase/firestore";
import { fireStore } from "../../../firebase";
import AlertDialog from "../../alertDialogs/Alertdialog";
import { useState } from "react";
import { useRouter } from "next/router";



interface SidebarProps {
  title: string;
  rent: number;
  location: string;
  towncity: string;
  id: string;
  agent: string;
  agentphone: string;
  agentemail: string;
}
export default function PendingDetailSideBar({
  title,
  rent,
  location,
  towncity,
  id,
  agent,
  agentemail,
  agentphone,
}: SidebarProps) {


  const router = useRouter()

  const deleteListing = async (id: string) => {
    console.log("working");
    if (confirm("Delete this listing?") === true) {
      await deleteDoc(doc(fireStore, "properties", id))
        .then(() => {
          alert("Listing Deleted");
          router.push("/dashboard/admin/pending-listings");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const approveProperty = async () => {
    const propertyRef = doc(fireStore, "properties", id);
    await updateDoc(propertyRef, {
      isApproved: true,
    }).then(() => {
      router.push("/dashboard/admin/property-approved")
    });
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Link href="/dashboard/admin/pending-listings">
          <SqaureButton text="Back to Listings" onClick={() => {}} />
        </Link>
      </div>
      <div className="flex flex-col gap-4 p-4 bg-gray-300 rounded">
        <text className="text-xl font-bold">Details</text>
        <text>
          <span className="font-bold">Property:</span> {title}
        </text>
        <text>
          <span className="font-bold">Location:</span> {location}, {towncity}
        </text>
        <text>
          <span className="font-bold">Rent:</span> ${rent}/month
        </text>
        <text>
          <span className="font-bold">Date Listed:</span> 3 Jan 2022
        </text>
        <text>
          <span className="font-bold">Owner / Agent:</span> {agent}
        </text>
        <text>
          <span className="font-bold">Phone Number:</span> {agentphone}
        </text>
        <text>
          <span className="font-bold">Email:</span> {agentemail}
        </text>
        <div className="flex items-center justify-between">
          <SqaureButton text="Approve" onClick={approveProperty} />
          <DeleteButton text="Delete" onClick={() => deleteListing(id)}/>
        </div>
      </div>
    </div>
  );
}
