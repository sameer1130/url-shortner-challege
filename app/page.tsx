import Image from "next/image";
import {Appbar} from "@/components/index"
import MainHeader from "@/components/MainHeader";
import InputLink from "@/components/InputLink";
import AdvancedStatistic from "@/components/AdvancedStatistic";
import Boost from "@/components/Boost";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div >
      <div className="px-16">

        <Appbar />
      </div>
      <div className="px-16">
        <MainHeader />
      </div>
      <div className="">
        <InputLink />
      </div>
      <div>
        <AdvancedStatistic />
      </div>
      <div>
        <Boost />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
