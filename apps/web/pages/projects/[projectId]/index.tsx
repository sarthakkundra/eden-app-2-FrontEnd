import { useQuery } from "@apollo/client";
import { UserContext } from "@context/eden";
import { FIND_PROJECT } from "@graphql/eden";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import {
  Card,
  GridItemNine,
  GridItemThree,
  GridLayout,
  UserProfileMenu,
} from "ui";

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const { currentUser } = useContext(UserContext);

  if (currentUser) console.log("currentUser", currentUser);

  const { data: dataProject } = useQuery(FIND_PROJECT, {
    variables: {
      fields: {
        _id: projectId,
      },
    },
    context: { serviceName: "soilservice" },
  });

  if (dataProject) console.log("dataProject", dataProject.findProject);
  return (
    <GridLayout>
      <GridItemThree>
        <UserProfileMenu currentUser={currentUser} title={`Good Morning,`} />
      </GridItemThree>
      <GridItemNine>
        <Card shadow className="h-8/10 bg-white">
          content here
        </Card>
      </GridItemNine>
    </GridLayout>
  );
};

export default ProjectPage;
