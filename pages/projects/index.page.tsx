import { AllProjects } from 'pageElements/projects/AllProjects';

export default function ProjectsPage() {
  return (
    <div className="page-container overflow-hidden">
      <h2 className="title-header">Projects</h2>
      <p className="text-4xl italic tablet:text-2xl">
        Outliers is a community of builders. Here is a snapshot of some of the
        projects that have been created within and beyond the 10-weeks
      </p>
      <div>
        <AllProjects />
      </div>
    </div>
  );
}
