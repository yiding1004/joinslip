import prisma from "@/app/libs/prismadb";

import getCurrentUser from "./getCurrentUser";

export default async function getRosters() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const rosters = await prisma.roster.findMany({
      where: {
        userId: currentUser.id 
      }
    });

    const safeRosters = rosters.map((roster) => ({
      ...roster,
      createdAt: roster.createdAt.toString(),
    }));

    return safeRosters;
  } catch (error: any) {
    throw new Error(error);
  }
}
