"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeRoster, SafeUser } from "@/app/types";
import Sidebar from "@/app/components/Sidebar";
import Button from "@/app/components/Button";
import { fieldType, fields } from "@/app/components/modals/CreateModal";
import CubeInput from "@/app/components/inputs/CubeInput";
import { useRouter, usePathname } from "next/navigation";

interface RosterClientProps {
  roster: SafeRoster & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

interface requirementsObj {
  [key: string]: boolean;
}

const RosterClient: React.FC<RosterClientProps> = ({ roster, currentUser }) => {
  const loginModal = useLoginModal();
  const router = useRouter();
  const pathname = usePathname()

  const getTrueRequirements = (requirementsObj: requirementsObj) => {
    const trueRequirements: string[] = [];

    for (const prop in requirementsObj) {
      if (requirementsObj[prop] === true) {
        trueRequirements.push(prop);
      }
    }

    return trueRequirements;
  };

  const trueRequirements = getTrueRequirements(
    roster.requirements as requirementsObj
  );
  const getAttribute = (requirement: string, attr: string) => {
    const field = fields.find((field: fieldType) => field.id === requirement);
    return field ? field[attr] : "";
  };

  return (
    <Sidebar>
      <main className="h-full flex-1 px-auto overflow-y-auto bg-primary-light">
        <div className="min-h-screen w-full max-w-7xl p-5 sm:p-10 mx-auto">
          <div className="flex flex-col gap-10 mt-5">
            <div className="flex flex-col text-4xl font-bold text-secondary-dark text-center max-w-full whitespace-normal break-normal">
              {roster.title}
            </div>
            <div className="flex md:flex-row flex-col justify-evenly md:space-y-0 space-y-2 text-secondary-dark ">
              <div className="flex flex-col justify-center items-center md:text-3xl text-xl whitespace-nowrap">
                <div>{roster.memberNumber}</div>
                <div className="text-base">Members</div>
              </div>
              <div className="flex flex-col justify-center items-center md:text-3xl text-xl whitespace-nowrap">
                <div>{roster.updateNumber}</div>
                <div className="text-base">New Updates</div>
              </div>
              <div className="hidden md:flex text-white border-r-2 border-secondary-dark ">
                |
              </div>
              {roster.newMemberAllowed ? (
                <div className="text-md text-primary-shade flex flex-col items-center justify-center py-2 px-4 ">
                  <div>New Member Allowed</div>
                </div>
              ) : (
                <div className="text-md text-red-400 flex flex-col items-center justify-center py-2 px-4 ">
                  <div>New Member Not Allowed</div>
                </div>
              )}
              {roster.memberEditable ? (
                <div className="text-md text-primary-shade flex flex-col items-center justify-center py-2 px-4 ">
                  <div>Member Edit Allowed</div>
                </div>
              ) : (
                <div className="text-md text-red-400 flex flex-col items-center justify-center py-2 px-4 ">
                  <div>Member Edit Not Allowed</div>
                </div>
              )}

              <Button label="Copy Link" outline medium onClick={() => {}} />

              <Button label="Edit Roster" outline medium onClick={() => {}} />
            </div>
            <div className="relative flex justify-start items-start sm:p-4 sm:border md:p-6 md:border-2 lg:p-12 lg:border-4 border-white rounded-md bg-white min-h-[500px]">
              <div className="text-sm font-semibold text-secondary-dark whitespace-pre-wrap">
                {roster.description}
              </div>
              {roster.passCode && (
                <div className="absolute right-3 bottom-3 ">
                  Passcode: {roster.passCode}
                </div>
              )}
            </div>
            <div
              className="
                mt-10
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-6
                gap-8
              "
            >
              {trueRequirements.map((requirement) => (
                <div key={requirement} className="col-span-1">
                  <CubeInput
                    onClick={() => {}}
                    disabled={true}
                    label={getAttribute(requirement, "label")}
                    icon={getAttribute(requirement, "icon")}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <Button label="Check All Entries For Current Roster" onClick={() => router.push(`/dashboard/rosters/${roster.id}/infoTable`)} />
            </div>
          </div>
        </div>
      </main>
    </Sidebar>
  );
};

export default RosterClient;
