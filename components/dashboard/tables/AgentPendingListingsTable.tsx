import { Table } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Row } from "@nextui-org/react";
import { IconButton } from "../../buttons/IconButton";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Router, useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../../firebase";
import { useState, useEffect } from "react";


interface PropertyObject {
  description: string;
  images: [string];
  isApproved: boolean;
  location: string;
  owneremail: string;
  ownername: string;
  ownerphone: string;
  ownersurname: string;
  rent: number;
  title: string;
  towncity: string;
}

export default function AgentPendingListngsTable() {

  const [listings, setListings] = useState<PropertyObject[]>([]);
  const [propertyIds, setPropertyIds] = useState<string[]>([]);
  const agent  = localStorage.getItem("email");

  const querySnapshot = getDocs(collection(fireStore, "properties"));
  const getListings = async () => {
    const data: PropertyObject[] = [];
    const ids: string[] = [];
    await querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().isApproved === false && doc.data().owneremail === agent) {
          data.push(doc.data() as PropertyObject);
          ids.push(doc.id);
        }
      });
    });
    setListings(data);
    setPropertyIds(ids);
  };

  useEffect(() => {
    getListings();
  }, []);

  const router = useRouter();
  return (
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>Property</Table.Column>
        <Table.Column>Location</Table.Column>
        <Table.Column>Rent</Table.Column>
        <Table.Column>{""}</Table.Column>
      </Table.Header>
      <Table.Body>
      { listings? listings.map((listing, index) => (
           <Table.Row key={index}>
           <Table.Cell>
             <Row align="center">
             <Avatar squared src={listing.images[0]} />
                  {listing.title}
             </Row>
           </Table.Cell>
           <Table.Cell>{listing.location}</Table.Cell>
           <Table.Cell>${listing.rent} month</Table.Cell>
           <Table.Cell>
             <IconButton
               onClick={() => router.push("/dashboard/admin/listing-details")}
             >
               <EyeOpenIcon />
             </IconButton>
           </Table.Cell>
         </Table.Row>
         )):(
          <div>
            <p>No Listings Found</p>
          </div>
         )}        
      </Table.Body>
    </Table>
  );
}
