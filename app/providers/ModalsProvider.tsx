'use client';

import CreateModal from "../components/modals/CreateModal";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";

const ModalsProvider = () => {
  return ( 
    <>
      <LoginModal />
      <RegisterModal />
      <CreateModal />
    </>
   );
}
 
export default ModalsProvider;