import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenuDemo } from "./Component/Nav";


export default function Home() {
  return (
    <>
      <MaxWidthWrapper className=" mt-14 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-500 px-7 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"></div>
        <h1 className="max-w-5xl text-3xl  md:test-6xl lg:text-7xl font-bold">
          All your newsletters ,in <br />a message
          {/* <span className="text-blue-600"> Experience </span> Ever Made */}
        </h1>
        <div className="mt-12 lg:text-xl space-x-5 inline-block tracking-wider max-w-3xl text-sm font-semibold">
          Fast cross-platforms email designed to filter out the noise-so you can
          focus on what &#39;s important
        </div>
        <Link
          className={buttonVariants({
            size: "lg",
            className:
              "mt-8 p-7 bg-gradient-to-r from-purple-800 to-purple-400 text-white hover:bg-purple-600  text-xl border border-white rounded-lg",
          })}
          href="/dashboard"
          target="_blank"
        >
          Get started
          {/* <ArrowRight className="ml-2 h-5" /> */}
        </Link>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[110/67] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#b54574] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div>
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              {/* <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            /> */}
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="mt-12 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5  ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl ">
                  <Image
                    src="/mask.svg"
                    alt="product preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md  p-2 sm:p-8 md:p-10  "
                  />
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              {/* <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            /> */}
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl "
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[100/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c64279] to-[#5d0885] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="bg-cover h-60 setimage flex justify-center items-center mt-12">
          {/* <!-- Content goes here --> */}
          <div className="text-2xl lg:text-4xl space-x-5 tracking-wider text-center sm:text-2xl; md:text-4xl font-bold max-w-2xl ">
            Your email gets flooded with
            <span className="text-yellow-300">10+ newsletters</span> every
            single day.{" "}
          </div>
        </div>

        <div className="h-60 setimage flex justify-center items-center mt-6">
          {/* <!-- Content goes here --> */}
          <div className="text-2xl lg:text-4xl space-x-5 tracking-wider text-center sm:text-2xl; md:text-4xl font-bold">
            Substract Saves You
            <br />
            <span className="text-blue-500 "> 6+ hours</span> every week
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6  -z-10 transform-gpu overflow-hidden blur-3xl "
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#669AFf] to-[#9E6EE5] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
        <h1 className="max-w-3xl text-2xl  md:test-4xl lg:text-5xl font-semibold">
          Organize your newsletters the way you want
          {/* <span className="text-blue-600"> Experience </span> Ever Made */}
        </h1>
      </MaxWidthWrapper>

      <div className="flex  flex-wrap justify-items-end mt-6 lg:mt-24 justify-center ">
        <div className="max-w-2xl d justify-center items-center p-10">
          <h3 className="text-xl  md:test-2xl lg:text-3xl  font-semibold text-left  lg:mt-20">
            Group your emails into bundles
          </h3>
          <p className="text-l font-thin max-w-xl sm:text-sm lg:text-xl text-left">
            Control promotions, newsletters, updates, and more, to reach inbox
            zero in half the time
          </p>
        </div>
        <div>
          <div className="-m-2 rounded-xl bg-gray-900/5  ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl ">
            <Image
              src="/organize.png"
              alt="product preview"
              width={600}
              height={100}
              quality={100}
              className="rounded-md  p-2 sm:p-8 md:p-10 hidden md:inline-block "
            />
          </div>
        </div>
      </div>

      <div className="flex  flex-wrap justify-items-end mt-6 lg:mt-24 justify-center ">
        <div className="-m-2 rounded-xl bg-gray-900/5  ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl ">
          <Image
            src="/shedule.png"
            alt="product preview"
            width={600}
            height={100}
            quality={100}
            className="rounded-md  p-2 sm:p-8 md:p-10  "
          />
        </div>

        <div className="max-w-2xl d justify-center items-center p-10 lg:mt-20">
          <h3 className="text-xl  md:test-2xl lg:text-3xl  font-semibold text-left ">
            Make messages arrive on your schedule
          </h3>
          <p className="text-l font-thin  sm:text-sm lg:text-xl text-left">
            Avoid interruptions by using delivery schedules to receive emails
            exactly when you want them
          </p>
        </div>
      </div>
      <div className="flex  flex-wrap justify-items-end  justify-center ">
        <div className="max-w-2xl d justify-center items-center p-10">
          <h3 className="text-xl  md:test-2xl lg:text-3xl  font-semibold text-left  lg:mt-20">
            Set up reminders as per your schedule
          </h3>
          <p className="text-l font-thin max-w-xl sm:text-sm lg:text-xl text-left">
            Control promotions, newsletters, updates, and more, to reach inbox
            zero in half the time
          </p>
        </div>
        <div>
          <div className="-m-2 rounded-xl bg-gray-900/5  ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl ">
            <Image
              src="/im.svg"
              alt="product preview"
              width={550}
              height={100}
              quality={100}
              className="rounded-md  p-2 sm:p-8 md:p-10 hidden md:inline-block "
            />
          </div>
        </div>
      </div>

      <div className="flex  flex-wrap justify-items-end  justify-center ">
        <div className="max-w-2xl d justify-center items-center p-12  lg:mt-20">
          <h3 className="text-xl  md:test-3xl lg:text-5xl   text-left ">
            Integrates seamlessly with
            <span className="text-yellow-300"> Gmail</span> or{" "}
            <span className="text-purple-500">Outlook</span>
          </h3>
        </div>
        <div>
          <div className="-m-2 rounded-xl bg-gray-900/5  ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl ">
            <Image
              src="/p.png"
              alt="product preview"
              width={800}
              height={100}
              quality={100}
              className="rounded-md  p-2 sm:p-8 md:p-10  "
            />
          </div>
        </div>
      </div>
      <MaxWidthWrapper>
        <div className="mx-auto mb-4 flex flex-col items-center justify-center space-x-2 px-7">
          <h1 className="text-3xl lg:text-5xl font-bold text-center">
            Turning you into a
            <span className="text-purple-600"> productive superhuman </span>
          </h1>
          <p className="text-xl sm:text-sm lg:text-xl text-center mt-6 tracking-wider">
            Help you move faster, be more responsive, and feel less stressed.
            Get back valuable time for what matters most.
          </p>
          <div className="mt-8">
            <Link
              className={buttonVariants({
                size: "lg",
                className: "p-7  text-xl bg-transparent  ",
              })}
              href="/dashboard"
              target="_blank"
            >
              Get started <ArrowRight className="ml-2 h-5" />
            </Link>
          </div>
        </div>

        <div className="flex">
          <div className="-m-2 rounded-xl bg-gray-900/5  ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl ">
            <Image
              src="/banner1.png"
              alt="product preview"
              width={900}
              height={200}
              quality={100}
              className="rounded-md  p-2 sm:p-8 md:p-10  "
            />
          </div>{" "}
          <div className="-m-2 rounded-xl bg-gray-900/5  ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl ">
            <Image
              src="/banner2.png"
              alt="product preview"
              width={350}
              height={100}
              quality={100}
              className="rounded-md  p-2 sm:p-8 md:p-10  "
            />
          </div>
        </div>

        <div className="flex justify-end">
          <div className=" rounded-xl bg-gray-900/5  ring-1 ring-inset ring-gray-900/10  ">
            <Image
              src="/banner3.png"
              alt="product preview"
              width={300}
              height={100}
              quality={100}
            />
          </div>{" "}
          <div className=" rounded-xl bg-gray-900/5  ring-1 ring-inset ring-gray-900/10   ">
            <Image
              src="/image.png"
              alt="product preview"
              width={300}
              height={100}
              quality={100}
            />
          </div>
        </div>
       
      </MaxWidthWrapper>
      <div className="mx-auto mb-4 flex flex-col items-center justify-center space-x-2 px-7 mt-24 ">
          {/* <h1 className="text-3xl lg:text-5xl text-thin text-center ">
            Built for people for want to declutter inboxes, from any profession.
          </h1> */}

          <div className=" rounded-xl bg-gray-900/5  ring-1 ring-inset ring-gray-900/10  p-0 m-0 ">
            <Image
              src="/for.svg"
              alt="product preview"
              width={2500}
              height={100}
              quality={100}
            />
          </div>
       


        </div>
      <div className="mx-auto mb-4 flex flex-col items-center justify-center space-x-2 px-7 mt-24">
        <h1 className="text-3xl lg:text-5xl text-thin text-center">
          But wait, there&apos;s more...
        </h1>

        <div className="flex-wrap md:flex lg:flex  justify-around mt-10">
          <div className="max-w-sm p-10 bg-blue-50/10 rounded-xl mb-2">
            <Image
              src="/svg.svg"
              alt="product preview"
              width={30}
              height={30}
              quality={100}
            />
            <h1 className="font-bold text-xl">Powerful search</h1>
            <p>Write complex queries to find what you need, every time</p>
          </div>
          <div className="max-w-sm p-10 bg-blue-50/10 rounded-xl mb-2">
            <Image
              src="/svg (1).svg"
              alt="product preview"
              width={30}
              height={30}
              quality={100}
            />
            <h1 className="font-bold text-xl">Undo send</h1>
            <p>Send with confidence knowing mistakes are not permanent</p>
          </div>
          <div className="max-w-sm p-10 bg-blue-50/10 rounded-xl mb-2">
            <Image
              src="/svg (2).svg"
              alt="product preview"
              width={30}
              height={30}
              quality={100}
            />
            <h1 className="font-bold text-xl">Scheduled send</h1>
            <p>
              Email on your own terms while respecting everyone &apos;s time
            </p>
          </div>

          <div className="max-w-sm p-10 bg-blue-50/10 rounded-xl mb-2">
            <Image
              src="/svg.svg"
              alt="product preview"
              width={30}
              height={30}
              quality={100}
            />
            <h1 className="font-bold text-xl">Powerful search</h1>
            <p>Write complex queries to find what you need, every time</p>
          </div>
          <div className="max-w-sm p-10 bg-blue-50/10 rounded-xl mb-2">
            <Image
              src="/svg (1).svg"
              alt="product preview"
              width={30}
              height={30}
              quality={100}
            />
            <h1 className="font-bold text-xl">Undo send</h1>
            <p>Send with confidence knowing mistakes are not permanent</p>
          </div>
          <div className="max-w-sm p-10 bg-blue-50/10 rounded-xl mb-2">
            <Image
              src="/svg (2).svg"
              alt="product preview"
              width={30}
              height={30}
              quality={100}
            />
            <h1 className="font-bold text-xl">Scheduled send</h1>
            <p>
              Email on your own terms while respecting everyone &apos;s time
            </p>
          </div>

          <div className="max-w-sm p-10 bg-blue-50/10 rounded-xl mb-2">
            <Image
              src="/svg.svg"
              alt="product preview"
              width={30}
              height={30}
              quality={100}
            />
            <h1 className="font-bold text-xl">Powerful search</h1>
            <p>Write complex queries to find what you need, every time</p>
          </div>
          <div className="max-w-sm p-10 bg-blue-50/10 rounded-xl mb-2">
            <Image
              src="/svg (1).svg"
              alt="product preview"
              width={30}
              height={30}
              quality={100}
            />
            <h1 className="font-bold text-xl">Undo send</h1>
            <p>Send with confidence knowing mistakes are not permanent</p>
          </div>
          <div className="max-w-sm p-10 bg-blue-50/10 rounded-xl mb-2">
            <Image
              src="/svg (2).svg"
              alt="product preview"
              width={30}
              height={30}
              quality={100}
            />
            <h1 className="font-bold text-xl">Scheduled send</h1>
            <p>
              Email on your own terms while respecting everyone &apos;s time
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-4 flex flex-col  justify-center space-x-2 px-20 mt-10">
        <h1 className="text-xl lg:text-3xl font-thin text-left">
          What customers are saying…
        </h1>
        <p className="text-xl sm:text-xl lg:text-5xl md:text-3xl mt-6 text-justify ">
          It&apos;s one thing for me to be better with my email, but if my whole
          team is better ,then we tend to make decisions faster, respond faster,
          and give higher quality responses to everyone
        </p>
        
      <div className=" flex flex-col items-center justify-center">
        <Link
          className={buttonVariants({
            size: "lg",
            className:
              "mt-14 p-8 bg-gradient-to-r from-purple-800 to-purple-400 text-white hover:bg-purple-600  text-xl border border-white rounded-lg lg:w-2/5 sm:w-2/3",
          })}
          href="/dashboard"
          target="_blank"
        >
          Ready to substract
          <ArrowRight className="ml-2 h-5" />
        </Link>
      </div>
      </div>
    </>
  );
}
