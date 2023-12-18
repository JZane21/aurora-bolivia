"use client";
import { useRouter } from "next/navigation";
import workflow from "../assets/workflow.svg";
import Image from "next/image";
const SvgPage = () => {
  const router = useRouter();

  return (
    <div>
      <Image priority src={workflow} alt="Follow us on Twitter" className="my-10"/>
    </div>
  );
};

export default SvgPage;
