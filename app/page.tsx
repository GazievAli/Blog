import Image from "next/image";
import HomeSection from "@/app/Components/HomeSection/HomeSection";

export default function Home() {
  return (
      <main>
          <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
              <div>
                  <Image src="/logo.jpg" width={400} height={800} alt="Logo" />
              </div>
              <HomeSection />
          </div>
      </main>
);
}
