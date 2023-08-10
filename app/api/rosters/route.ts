import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { Prisma } from "@prisma/client";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const {
    title,
    newMemberAllowed,
    memberEditable,
    description,
    passCode,
    requirements
  } = body;

  const requirementsJson = requirements as Prisma.JsonObject

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const roster = await prisma.roster.create({
    data: {
      title,
      newMemberAllowed,
      memberEditable,
      description,
      passCode,
      requirements: requirementsJson,
      memberNumber: 0,
      updateNumber: 0,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(roster);
}
