import prisma from "@/app/libs/prismadb";

interface IParams {
  rosterId?: string;
}

export default async function getRosterById(
  params: IParams
) {
  try {
    const { rosterId } = params;

    const roster = await prisma.roster.findUnique({
      where: {
        id: rosterId,
      },
      include: {
        user: true
      }
    });

    if (!roster) {
      return null;
    }

    return {
      ...roster,
      createdAt: roster.createdAt.toISOString(),
      user: {
        ...roster.user,
        createdAt: roster.user.createdAt.toISOString(),
        updatedAt: roster.user.updatedAt.toISOString(),
        emailVerified: 
        roster.user.emailVerified?.toISOString() || null,
      }
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
