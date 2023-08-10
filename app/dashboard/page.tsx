'use client';

import { usePathname } from 'next/navigation';
import Sidebar from "../components/Sidebar";
import Rosters from "./rosters/page";

const DashBoardPage = () => {
  
  return (  
    <div>
      <Sidebar>
      <div>This is main section</div>
      </Sidebar>
    </div>
  );
}
 
export default DashBoardPage;