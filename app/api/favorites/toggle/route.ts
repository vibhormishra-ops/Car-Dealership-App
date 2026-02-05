import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/session";
import { toggleFavoriteSchema } from "@/lib/validators/favorite";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const parsed = toggleFavoriteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid CarId" }, { status: 400 });
  }
  const { carId } = parsed.data;
  if (!carId) {
    return NextResponse.json({ error: "Missing CarId" }, { status: 400 });
  }
  const existing = await prisma.favorite.findUnique({
    where: {
      userId_carId: {
        userId: user.id,
        carId,
      },
    },
  });
  if (existing) {
    await prisma.favorite.delete({ where: { id: existing.id } });
    return NextResponse.json({ favorited: false });
  }
  await prisma.favorite.create({
    data: { userId: user.id, carId },
  });
  return NextResponse.json({ favorited: true });
}
