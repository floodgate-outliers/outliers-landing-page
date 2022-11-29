import { TheMentors } from 'pageElements/people/TheMentors';
import { TheStudents } from 'pageElements/people/TheStudents';

export default function PeoplePage() {
  return (
    <div className="page-container">
      <h2 className="title-header">The Community</h2>
      <p className="text-4xl italic tablet:text-2xl">
        Outliers is a community of exceptional students lead by world-class
        mentors. Here is a snapshot of the people that make it happen
      </p>
      <hr className="header-divider" />
      <div>
        <TheMentors />
      </div>
      <hr className="header-divider" />
      <div>
        <TheStudents />
      </div>
    </div>
  );
}
