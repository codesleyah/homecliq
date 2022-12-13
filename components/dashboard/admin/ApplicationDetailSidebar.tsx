import DeleteButton from "../../buttons/DeleteButton";
import SqaureButton from "../../buttons/SquareButton";
import Link from "next/link";

export default function ApplicationDetailSideBar() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Link href="/dashboard/admin/applications">
          <SqaureButton text="Back to Applications" />
        </Link>
      </div>
      <div className="flex flex-col gap-4 p-4 bg-gray-300 rounded">
        <text className="text-xl font-bold">Details</text>
        <text>
          <span className="font-bold">Property:</span> 3 roomed cottage
        </text>
        <text>
          <span className="font-bold">Location:</span> Harare, Mabvuku
        </text>
        <text>
          <span className="font-bold">Rent:</span> $150/month
        </text>
        <text>
          <span className="font-bold">Date Listed:</span> 3 Jan 2022
        </text>
        <text>
          <span className="font-bold">Owner / Agent:</span> Elvin Kakomo
        </text>
        <text>
          <span className="font-bold">Phone Number:</span> +263775953491
        </text>
        <text>
          <span className="font-bold">Email:</span> ellvin@gmail.com
        </text>
        <div className="flex items-center justify-between">
          <SqaureButton text="Activate" />
          <DeleteButton text="Delete" />
        </div>
      </div>
    </div>
  );
}
