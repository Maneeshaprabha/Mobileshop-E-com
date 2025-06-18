import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex-col items-center lg:items-start">
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28'">
                {/* <img src="/assets/snake-1.png"alt=""className="w-full " /> */}
              </div>
              <h1 className=" relative  w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900  text-5xl md:text-6xl lg:text-7xl">
                {" "}
                your Image on a
                <span className="bg-green-600 px-2 text-white">
                  Custom
                </span>{" "}
                phone case
              </h1>
              <p className="mt-8 text-lg lg:pr-10  max-w-prose text-center lg:text-left text-balance md:text-wrap">
                {" "}
                Capture Your favorite memories with your own,
                <span className="font-bold "> one-of-one</span> phone case.
                caseCobra allows you to protect your memories,not just your
                case.
              </p>
              <ul className="mt-8 space-y-2 text-left">
                <div className="">
                  <li className="flex gap-1.5 items-center text-left ">
                    <Check className=" h-5 w-5 shrink-0 text-green-600" />
                    High-quality , durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left ">
                    <Check className=" h-5 w-5 shrink-0 text-green-600" />
                    High-quality , durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left ">
                    <Check className=" h-5 w-5 shrink-0 text-green-600" />
                    High-quality , durable material
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src=" /users/user-2.png"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.png"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover"
                    src="/users/user-5.png"
                    alt=""
                  />
                </div>

                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-5 w-5 text-green-600 fill-green-600" />
                    <Star className="h-5 w-5 text-green-600 fill-green-600" />
                    <Star className="h-5 w-5 text-green-600 fill-green-600" />
                    <Star className="h-5 w-5 text-green-600 fill-green-600" />
                    <Star className="h-5 w-5 text-green-600 fill-green-600" />
                  </div>

                  <p> <span className=" font-semibold"> 1.250</span> happy customer</p>
                </div>
              </div>
            </div>
          </div>


          <div className=" col-span-full lg:col-span-1 w-full flex justify-center  px-8 sm:px-16  md:px-0 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative w-full max-w-2xl lg:max-w-3xl">
              <img src="/assets/your-image.png" alt="your image" className=" absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block  " />
              <img src="/assets/line.png" alt="" className="absolute w-20 -left-6 -bottom-6 select-none" />

              <Phone className="w-64 " imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value ptoposition section */}
      <section className=" bg-slate-100 py-24">
        <MaxWidthWrapper className=" flex flex-col items-center  gap-16 sm:gap-6">
          <div className=" flex flex-col items-center gap-4 sm:gap-6 lg:flex-col">
            <h2 className=" order-1 mt-2 tracking-tight font-bold text-center text-balance  !leading-tight text-5xl md:text-6xl text-gray-900">
              what our <span className="relative px-2 " >customers <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-600" /></span> say
            </h2>

            <img src="/assets/snake-2.png" alt="" className=" w-24 order-0 " />
          </div>
          <div className=" mx-auto grid max-w-2xl  grid-cols-1 px-4 lg:mx-0 lgmax-w-none lg:grid-cols-2 gay-y-16">
            <div className=" flex flex-col  flex-auto gap-4 lg:pr-8 xl:pr-20 ">
              <div className="flex gap-0.5 mb-2">

                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className=" text-lg leading-8">
                <p>
                  "The case feels durable and I evem got a compliment on the design . Hand the case for two and a half months now and
                  <span className="  p-0.5 bg-slate-800 text-white"> the image is supre clear</span>, on the case I had becore, the image started fading into yello-ish color after a couple weeks . Love it . "
                </p>
              </div>

              <div className=" flex gap-4 mt-2">
                <img src="/users/user-1.png" alt="user1" className=" rounded-full h-12 w-12 object-cover" />
                <div className="flex flex-col">
                  <p className="semi-bold"> Jonathn </p>
                  <div className=" flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified User</p>
                  </div>
                </div>
              </div>
            </div>
            {/* 
  second  */}
            <div className=" flex flex-col  flex-auto gap-4 lg:pr-8 xl:pr-20 ">
              <div className="flex gap-0.5 mb-2">

                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className=" text-lg leading-8">
                <p>
                  "The case feels durable and I evem got a compliment on the design . Hand the case for two and a half months now and
                  <span className="  p-0.5 bg-slate-800 text-white"> the image is supre clear</span>, on the case I had becore, the image started fading into yello-ish color after a couple weeks . Love it . "
                </p>
              </div>

              <div className=" flex gap-4 mt-2">
                <img src="/users/user-1.png" alt="user1" className=" rounded-full h-12 w-12 object-cover" />
                <div className="flex flex-col">
                  <p className="semi-bold"> Jonathn </p>
                  <div className=" flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

    </div>
  );
}
