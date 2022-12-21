import { AllProjects } from 'pageElements/projects/AllProjects';

export default function ProjectsPage() {
  return (
    <div className="page-container overflow-hidden">
      <h2 className="title-header">Projects</h2>
      <p className="text-3xl italic tablet:text-2xl">
        Building together is a core tenant of Outliers. Here is a sample of
        projects created during our 10-week summer educational program and
        beyond
      </p>
      <div>
        <AllProjects />
      </div>
    </div>
  );
}
