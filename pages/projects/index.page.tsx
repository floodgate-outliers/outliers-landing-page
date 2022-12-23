import { BasicMetaTags } from 'components/metaTags/BasicMetaTags';
import { AllProjects } from 'pageElements/projects/AllProjects';

export default function ProjectsPage() {
  return (
    <div className="page-container px-0">
      <BasicMetaTags title="Outliers | Projects" route="/projects" />
      <h2 className="title-header px-width-clamp">Projects</h2>
      <p className="px-width-clamp text-3xl italic tablet:text-2xl">
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
