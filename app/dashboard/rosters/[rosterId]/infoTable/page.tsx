import getCurrentUser from "@/app/actions/getCurrentUser";
import getInfosByRosterId from "@/app/actions/getInfosByRosterId";
import ClientOnly from "@/app/components/ClientOnly";
import InfoTableClient from "./InfoTableClient";

interface IParams {
  rosterId?: string;
}

const InfoTablePage = async ({ params }: { params: IParams }) => {
  const infos = await getInfosByRosterId(params); 

  const currentUser = await getCurrentUser();

  if (!infos) {
    return (
      <ClientOnly>
        <div>no content</div>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <InfoTableClient
        infos={infos}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default InfoTablePage;