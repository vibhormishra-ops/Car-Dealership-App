import React from "react";
import SellCarPage from "./components/SellCarPage";
import CardCarousel from "../components/CardCarousel";
import SlidingCarousel from "../components/Carousel";
import FlowbiteCarousel from "../components/FlowbiteCarousel";
const page = () => {
  return (
    <div className="bg-gray-100">
      <SellCarPage />
      <div className="p-8">
        <CardCarousel />
      </div>
      <div className="p-8">
        <SlidingCarousel />
      </div>
      <div className="p-8">
        <FlowbiteCarousel />
      </div>
      <div className="flex flex-col p-8 text-black gap-4">
        <h1 className="text-3xl wrap-break-word font-extrabold">
          Why sell car to CARS24?
        </h1>
        <p>
          Ready to sell your car but don’t want the usual hassle? With CARS24,
          you can skip endless calls, complicated paperwork, undervalued offers,
          and unreliable buyers. If you wish to upgrade, relocate, or simply
          free up garage space, we make it simple to sell your old car from the
          comfort of your home. Our process is fast, secure, and fully
          digital—from instant car valuation to doorstep inspection and instant
          payment. No need for multiple listings, test drives, or back-and-forth
          negotiations. At CARS24, we handle everything, including RC transfer,
          documentation and other legal processes, so you can focus on what’s
          next. CARS24 makes selling your old car easy and hassle-free. Be it a
          hatchback or a premium SUV, get a fair valuation of your car.
        </p>
        <h2 className="text-xl wrap-break-word font-extrabold">
          Why sell used vehicles online to CARS24?
        </h2>
        <p>
          We’ve simplified the entire process so you can easily sell your 2nd
          hand car, right from the location of your choice.<br></br>
          Our AI-powered pricing tool ensures you get a competitive market rate
          for your car, and our vast network of verified dealers increases the
          chances of securing a great deal. We help you get a fair market price
          and ensure a secure RC transfer, so that you can focus on your next
          purchase with peace of mind.<br></br>
          Here’s what makes CARS24 a better option than other options to sell
          your second hand car:
        </p>
        <h3 className="text-xl font-extrabold">
          Sell from the comfort of your home
        </h3>
        With CARS24, you can sell your vehicle online right from your living
        room. From the initial inspection to the final payment, everything
        happens at your doorstep, convenient, quick, and totally hassle-free.
        <h3 className="text-xl font-extrabold">Fair and transparent pricing</h3>
        Our AI-powered pricing engine uses real-time market data from across
        India to give you a quote that is accurate, competitive and fair, based
        on your car’s actual value in today’s market.
        <h3 className="text-xl font-extrabold">All in a Day’s Work</h3>
        The entire process of selling your car at CARS24, including inspection,
        paperwork, and payment, can be completed in a single day. However, if
        certain requirements are not fulfilled, it can take longer to complete
        the process.
        <h3 className="text-xl font-extrabold">No paperwork stress</h3>
        Worried about handling paperwork or transferring ownership? Don’t be. We
        take care of everything for you—completely free. From the RC transfer to
        the nitty-gritty legal documents, our team handles it all so you can
        sell your car without lifting a finger.
        <h3 className="text-xl font-extrabold">Instant, secure payment</h3>
        Should you choose to accept our offer, the funds are transferred
        straight to your bank account. In most cases, you will receive the
        payment even before your car is picked up.
        <h3 className="text-xl font-extrabold">
          How to sell your used car online
        </h3>
        Selling your car online has never been this easy, the entire process is
        smooth, transparent, and fast. Here’s how it works:
        <h3 className="text-xl font-extrabold">
          {" "}
          Step1: Get an online car valuation instantly
        </h3>
        Start by entering your car’s details on our website or app. You’ll
        instantly receive an estimated value based on real-time market trends
        using our online car valuation tool.
        <h3 className="text-xl font-extrabold">
          Step 2: Schedule a free car inspection
        </h3>
        Choose a date and time that works for you, and we’ll send a CARS24
        expert to your preferred location. After a physical inspection, we’ll
        present you with the final price for your used car.
        <h3 className="text-xl font-extrabold">
          Step 3: Accept the offer and get paid instantly
        </h3>
        Once you accept our offer, we process the payment immediately, even
        before taking the car off your hands.
        <h3 className="text-xl font-extrabold">
          Step 4: We take care of documentation and RC transfer
        </h3>
        We manage the RC transfer and all other required documentation, ensuring
        the car is no longer under your name. Our Seller Protection Policy also
        keeps you covered until the RC transfer is complete, safeguarding you
        from any liabilities.
        <h2 className="text-2xl font-extrabold">
          How does Cars24 offer the best price for your car?
        </h2>
        At Cars24, we combine intensive data analytics, robust technology, and
        competition analysis to provide the best possible market price for your
        car. Our unique auction powered model ensures more bids and better value
        every time. 20,000+ Verified Dealers: India’s largest dealer network
        across 1500+ cities competes to bid for your car, driving up offers.
        Pan-India Auction Model: Dealers from across the country can
        participate, not just your local market, maximising competition and
        price. AI-Powered Valuation: Backed by 10 lakh+ transactions since 2015,
        our intelligent pricing engine uses real-time market data for precise
        valuation. Flexible Selling Options: Choose instant sale through live
        auction or list directly for end buyers - both with the safety of Cars24
        Kavach. India only platform that offers both options together with the
        safety net of Kavach Benefits of choosing CARS24 to sell your used car
        online Here’s what makes CARS24 the smarter way to sell your vehicle
        online: Ease and convenience: Skip the hassle of listing, negotiating,
        and dealing with strangers Car Inspection & Valuation: Get a free 300
        point car inspection and fair market valuation Doorstep service: From
        inspection to pickup, we come to you Secure and quick payment: No
        waiting. Funds are transferred directly and securely to your account RC
        transfer and documentation: We take care of the administrative tasks so
        you don’t have to Safe & Trustworthy: Lakhs of customer trust CARS24 for
        selling their car online without hassle
      </div>
    </div>
  );
};

export default page;
