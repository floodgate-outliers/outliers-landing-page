import { JoinCTA } from "pageElements/community/JoinCTA";
import { TheMentors } from "pageElements/community/TheMentors";
import { TheBuilders } from "pageElements/community/TheBuilders";
import { BasicMetaTags } from "components/metaTags/BasicMetaTags";

export default function CommunityPage() {
  return (
    <div className="page-container pb-20">
      <BasicMetaTags title="Outliers | Community" route="/community" />

      <h2 className="title-header">The Community</h2>
      <p className="text-2xl italic tablet:text-2xl">
        Outliers is a community of exceptional builders lead by world-class
        mentors. Here is a snapshot of the people that make it happen
      </p>
      <hr className="header-divider" />
      <div>
        <TheMentors />
      </div>
      <hr className="header-divider" />
      <div>
        <TheBuilders />
      </div>
      {/* TODO'24: Uncomment to allow for applying */}
      {/* <hr className="header-divider" /> */}
      {/* <div>
        <JoinCTA />
      </div> */}
    </div>
  );
}
