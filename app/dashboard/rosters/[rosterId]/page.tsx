import getCurrentUser from "@/app/actions/getCurrentUser";
import getRosterById from "@/app/actions/getRosterById";
import ClientOnly from "@/app/components/ClientOnly";
import RosterClient from "./RosterClient";

interface IParams {
  rosterId?: string;
}

const RosterPage = async ({ params }: { params: IParams }) => {
  const roster = await getRosterById(params); 
  const currentUser = await getCurrentUser();

  if (!roster) {
    return (
      <ClientOnly>
        <div>no content</div>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <RosterClient
        roster={roster}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default RosterPage;