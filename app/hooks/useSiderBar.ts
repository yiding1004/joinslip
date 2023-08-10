import { create } from 'zustand';

interface SideBarStore {
  isActived: string;
  onRosters: () => void;
  onEntries: () => void;
  onSettings: () => void;
}

const useSideBar = create<SideBarStore>((set) => ({
  isActived: "default",
  onRosters: () => set({ isActived: "rosters" }),
  onEntries: () => set({ isActived: "entries" }),
  onSettings: () => set({ isActived: "entries" })
}));

export default useSideBar;