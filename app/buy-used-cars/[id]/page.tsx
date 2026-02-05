export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import CardCarousel from "@/app/components/CardCarousel";
import SlidingCarousel from "@/app/components/Carousel";
import { getSessionUser } from "@/lib/session";
import FavoriteIcon from "./components/FavoriteIcon";
import { carIdParamsSchema } from "@/lib/validators/params";
// import Image from "next/image";
export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const rawParams = await params;
  const parsed = carIdParamsSchema.safeParse(rawParams);
  if (!parsed.success) {
    notFound();
  }
  const { id } = parsed.data;
  const user = await getSessionUser();
  console.log(user?.username);
  const car = await prisma.car.findUnique({
    where: { id: id },
    include: {
      favoritedBy: user ? { where: { userId: user.id } } : false,
      seller: {
        select: { username: true },
      },
    },
  });
  if (!car) return notFound();

  const isFavorited = Boolean(user && car.favoritedBy.length > 0);
  // console.log("isFavorited "+isFavorited);
  return (
    <div className="flex flex-col gap-10 bg-gray-100">
      <div className="flex gap-10 bg-gray-100">
        <div className="w-200 h-200 m-10 p-6 rounded-2xl">
          <img
            src={car.imageURL}
            alt=""
            className="w-full object-contain rounded-2xl"
          />
          {/* <Image src={car.imageURL} alt="" className="w-full object-contain rounded-2xl"/> */}
        </div>
        <div className=" flex flex-col max-w-3xl m-10 p-6 space-y-4">
          <h1 className="text-4xl font-bold text-black">{car?.title}</h1>
          <p className="text-black text-xl font-semibold">
            {car?.brand}. {car?.year}
          </p>
          <h3 className="text-3xl font-semibold text-black">${car?.price}</h3>
          <h3 className="text-black font-semibold text-xl">
            Mileage: {car?.mileage} km
          </h3>
          <h3 className="text-black font-semibold text-xl">
            Color: {car?.color ?? "N/A"}
          </h3>
          <h3 className="text-black font-semibold text-xl">
            {car?.description ?? "N/A"}
          </h3>

          <p className="text-xl text-black">Seller: {car.seller.username}</p>
          <div className="flex gap-10">
            <button className="bg-blue-600 rounded-lg p-4 font-bold text-xl hover:shadow-2xl hover:bg-orange-400">
              Contact Seller
            </button>

            <FavoriteIcon
              carId={car.id}
              initialFavorited={isFavorited}
              disabled={!user}
            />
          </div>
        </div>
      </div>
      <div className="p-8">
        <CardCarousel />
      </div>
      <div className="p-8">
        <SlidingCarousel />
      </div>
    </div>
  );
}
