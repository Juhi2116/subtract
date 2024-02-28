import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

import Image from "next/image";

const SocialIcons = () => {
  return (
    <MaxWidthWrapper>
      <nav className=" w-full border-t border-gray-200 voilet/75 backdrop-blur-lg transition-all">
        <div className="flex items-center">
          <Link href="/" className="flex  font-semibold text-white-600 p-6">
            <Image
              src="/logo.png"
              alt="product preview"
              width={180}
              height={10}
              quality={100}
            />{" "}
          </Link>
          {/* "Get started" button wrapped in ml-auto div */}
          <div className="ml-auto flex p-5">
            <Link href="/">
              <Image
                src="/twitter (1).png"
                alt="product preview"
                width={20}
                height={10}
                quality={100}
                className="m-2"
              />
            </Link>

            <Link href="/">
              <Image
                src="/twitter (2).png"
                alt="product preview"
                width={20}
                height={10}
                quality={100}
                className="m-2"

              />
            </Link>

            <Link href="/">
              <Image
                src="/twitter (3).png"
                alt="product preview"
                width={20}
                height={10}
                quality={100}
                className="m-2"

              />
            </Link>

            <Link href="/">
              <Image
                src="/twitter (4).png"
                alt="product preview"
                width={15}
                height={10}
                quality={100}
                className="m-2"

              />
            </Link>

        
          </div>
        </div>
      </nav>
    </MaxWidthWrapper>
  );
};

export default SocialIcons;
