import { FC, ReactElement } from "react";
import { motion, Variants } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useMediaQueryContext } from "contexts/MediaQueryContext";
import { ContactExternalLink } from "components/links/ContactExternalLink";

export const BasicContactInfo: FC = () => {
  return (
    <div>
      <h1 className="title-header mb-0">Got Questions?</h1>
      <h2 className="text-2xl">
        Feel free to reach out to us via email or twitter
      </h2>
      <div className="mt-8 flex flex-col gap-y-2">
        <ContactExternalLink
          emoji="✉️"
          text="outliers@floodate.com"
          href="mailto: outliers@floodgate.com"
        />
        <ContactExternalLink
          emoji="🐤"
          text="@outlierdao"
          href="https://mobile.twitter.com/outlierdao"
        />
      </div>
      {/* TODO'24: Uncomment and replace with correct info session link + times */}
      {/* <div className="my-20 flex flex-row items-center">
        <div className="h-1 flex-grow bg-off-black" />
        <p className="title-header mx-10 mb-0">OR</p>
        <div className="h-1 flex-grow bg-off-black" />
      </div>
      <h2 className="title-header mb-0">Attend our info session!</h2>
      <h2 className="text-2xl">
        Click on one of the links for a calendar invite
      </h2>
      <div className="mt-8 flex flex-col gap-y-2">
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
      </div> */}
    </div>
  );
};
