import Sidebar from "@/app/components/Sidebar";
import Listing from "@/app/components/Listing";
import ClientOnly from "@/app/components/ClientOnly";
import getRosters from "@/app/actions/getRosters";
import RostersClient from "./RostersClient";

const RostersPage = async () => {
  const rosters = await getRosters();

  if (rosters.length === 0) {
    return (
      <ClientOnly>
        <span>No rosters found</span>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <RostersClient rosters={rosters}></RostersClient>
    </ClientOnly>
  );
};

export default RostersPage;
