"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", String(newLimit));
    router.push(newPathName, { scroll: false });
  };

  return (
    <div className="w-full flex-center mt-10 gap-5">
      {!isNext && (
        <CustomButton
          title="Show more"
          btnType="button"
          containerStyles="rounded-full bg-primary-blue text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
