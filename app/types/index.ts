import { User, Roster, Entry, Info } from "@prisma/client";

export type SafeUser = Omit< 
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};


export type SafeRoster = Omit<Roster, "createdAt"> & {
  createdAt: string;
};

export type SafeEntry = Omit<Entry, "createdAt" | "updatedAt" | "infos"> & {
  createdAt: string;
  updatedAt: string;
  infos: SafeInfo;
};

export type SafeInfo = Omit<
  Info, 
  "firstName" | "lastName" | "email" | "phone" | "street" | "city" | "state" | "country"  | "zip" | "dateOfBirth" | "createdAt"
> & {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  street: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zip: string | null;
  dateOfBirth: string | null;
  createdAt: string;
};
