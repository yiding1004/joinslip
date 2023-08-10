import { SafeRoster } from "@/app/types";
import Sidebar from "@/app/components/Sidebar";
import Listing from "@/app/components/Listing";

interface RostersClientProps {
  rosters: SafeRoster[];
}

const RostersClient: React.FC<RostersClientProps> = ({ rosters }) => {
  return (
    <Sidebar>
      <main className="h-full flex-1 px-auto overflow-y-auto">
        <div className="min-h-screen h-[calc(100%-300px)] max-w-7xl mx-auto">
          {rosters.map((roster) => (
            <Listing key={roster.id} {...roster} />
          ))}
        </div>
      </main>
    </Sidebar>
  );
};

export default RostersClient;
