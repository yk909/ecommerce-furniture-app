import Image from "next/image";
import React from "react";
import { LinkButtonImageRightLineDown } from "../LinkButton";

const NotificationBar = () => {

  const onShowNotificacionBar = () => {

  }
  return (
    <header className="flex gap-x-5 justify-center content-center text-xs xl:text-sm relative">
      <p className="flex content-center gap-x-2 items-center	">
        <Image
          alt="Icon ticket percent"
          src="/icons/ticket-percent.svg"
          width={16}
          height={16}
          className="inline-block	"
        />
        30% off storewide — Limited time!
      </p>
      <div className="hidden xl:block">
        <LinkButtonImageRightLineDown
          title="Shop Now"
          href="#"
          style={{
            backgroundColor: "none",
            textColor: "blue",
            borderColor: "blue"
          }}
        >
          <Image
            alt="Icon arrow right"
            src="/icons/arrow/arrow-right-blue.svg"
            width={18}
            height={18}
          />
        </LinkButtonImageRightLineDown>
      </div>
      <button className="xl:absolute right-0" onClick={onShowNotificacionBar}>
        <Image
          alt="Icon close"
          src="/icons/close.svg"
          width={16}
          height={16}
          className="xl:w-[20px] xl:h-[20px]"
        />
      </button>
    </header>
  );
};

export default NotificationBar;
