import prisma from "@/app/libs/prismadb";

interface IParams {
  rosterId?: string;
}

export default async function getInfosByRosterId(
  params: IParams
) {
  try {
    const { rosterId } = params;

    const infos = await prisma.info.findMany({
      where: {
        rosterId: rosterId,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    if (!infos) {
      return null;
    }

    const safeEntries = infos.map((info) => ({
      ...info,
      dateOfBirth: info.createdAt.toISOString(),
      createdAt: info.createdAt.toISOString()
    }));

    return safeEntries;
  } catch (error: any) {
    throw new Error(error);
  }
}
