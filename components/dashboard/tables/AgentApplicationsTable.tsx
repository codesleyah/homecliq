import { Table } from "@nextui-org/react";
import { IconButton } from "../../buttons/IconButton";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { StyledBadge } from "../../badges/StyledBadges";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { fireStore } from "../../../firebase";
import { BsWhatsapp } from 'react-icons/bs';

interface ApplicationObject {
  applicantemail: string;
  applicantname: string;
  applicantphone: string;
  applicantsurname: string;
  applicationstatus: string;
  propertyid: string;
}

export default function AgentApplicationsTable() {
  const router = useRouter();
  const [applications, setApplications] = useState<ApplicationObject[]>([]);
  const querySnapshot = getDocs(collection(fireStore, "applications"));

  const getListings = async () => {
    const data: ApplicationObject[] = [];
    await querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data() as ApplicationObject);
      });
    });
    setApplications(data);
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
        zIndex:0
      }}
    >
      <Table.Header>
        <Table.Column>Applicant Name</Table.Column>
        <Table.Column>Phone Number</Table.Column>
        <Table.Column>Status</Table.Column>
        <Table.Column>View</Table.Column>
      </Table.Header>
      <Table.Body>
        {applications.length > 0 ? (
          applications.map((application, i) => (
            <Table.Row key={i}>
              <Table.Cell>
                {application.applicantname} {application.applicantsurname}
              </Table.Cell>
              <Table.Cell>
                {application.applicationstatus === "active" && <BsWhatsapp />}
                {application.applicantphone}
              </Table.Cell>
              <Table.Cell>
                <StyledBadge type={application.applicationstatus === "pending"? "pending" : application.applicationstatus === "open"? "open" : "closed" }>{application.applicationstatus}</StyledBadge>
              </Table.Cell>
              <Table.Cell>
                <IconButton
                  onClick={() =>
                    router.push({
                      pathname: "/dashboard/admin/application-detail",
                      query: { id: application.propertyid },
                    })
                  }
                >
                  <EyeOpenIcon />
                </IconButton>
              </Table.Cell>
            </Table.Row>
          ))
        ) : (
          <Table.Row>
            <Table.Cell>No Applications found</Table.Cell>
            <Table.Cell>{""}</Table.Cell>
            <Table.Cell>{""}</Table.Cell>
            <Table.Cell>{""}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
