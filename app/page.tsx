import CardCarousel from "./components/CardCarousel";
import SlidingCarousel from "./components/Carousel";
import FlowbiteCarousel from "./components/FlowbiteCarousel";
export default function Home() {
  return (
    <div className="bg-gray-100 p-6">
      <div className="p-8 flex justify-center">
        <h1 className="text-4xl font-bold text-black">
          Find Car of Your Dreams Today
        </h1>
      </div>
      <div className="p-8">
        <img
          className="h-full w-full rounded-xl"
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <div className="p-8">
        <div className="overflow-hidden w-full h-auto">
          <div className="flex transition-transform duration-500 gap-4">
            <img
              src="https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
              className="w-full h-100 object-contain rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
              className="w-full h-100 object-contain rounded-xl"
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
      <div className="p-8">
        <FlowbiteCarousel />
      </div>
    </div>
  );
}
