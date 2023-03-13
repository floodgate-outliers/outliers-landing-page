import { FC, useEffect, useState } from "react";
import { ContactExternalLink } from "components/links/ContactExternalLink";
import { BasicPopup } from "components/popups/BasicPopup";

const SHOW_POPUP_TIME = (5 / 60) * 60 * 1000; // 5 sec

export const InfoSessionPopup: FC = () => {
  const [showInfoSessionPopup, setShowInfoSessionPopup] = useState(false);

  useEffect(() => {
    const showInfoSessionPopupTimeout = setTimeout(() => {
      setShowInfoSessionPopup(true);
    }, SHOW_POPUP_TIME);

    return () => clearTimeout(showInfoSessionPopupTimeout);
  }, []);

  return (
    <BasicPopup
      id="info-session-popup"
      overWriteShowPopup={showInfoSessionPopup}
    >
      <p className="mb-0 text-3xl font-bold">Want to learn more?</p>
      <p className="text-2xl">Attend our info session!</p>
      <div className="mt-8 flex flex-col gap-y-2">
        {/* TODO'24: Replace with correct info session link + times */}
        <ContactExternalLink
          emoji="1️⃣"
          text="Session 1"
          href="https://lu.ma/skoirhac"
          extraText="(1/19 @ 5:00pm PT)"
        />
        <ContactExternalLink
          emoji="2️⃣"
          text="Session 2"
          href="https://lu.ma/syp9eipm"
          extraText="(1/25 @ 4:00pm PT)"
        />
      </div>
    </BasicPopup>
  );
};
