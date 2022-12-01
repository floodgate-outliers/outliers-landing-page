import { HackProjects } from 'data/projects/HackProjects';
import { StartupProjects } from 'data/projects/StartupProjects';
import { SummerProjects } from 'data/projects/SummerProjects';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { FC, useEffect } from 'react';
import { ProjectInfo } from 'types/Project.type';
import { ProjectDetails } from '../../pageElements/projects/ProjectDetails';

type ProjectDetailsPageStaticProps = {
  projectInfo?: ProjectInfo;
};

const ProjectDetailsPage: FC<ProjectDetailsPageStaticProps> = ({
  projectInfo,
}) => {
  const router = useRouter();

  useEffect(() => {
    if (!projectInfo) {
      router.replace('/404');
    }
  }, [projectInfo]);

  if (!projectInfo) return null;

  return (
    <div className="page-container">
      <ProjectDetails {...projectInfo} />
    </div>
  );
};

interface Params extends ParsedUrlQuery {
  projectId: string;
}

export const getStaticProps: GetStaticProps<
  ProjectDetailsPageStaticProps,
  Params
> = (context) => {
  const projectId = context.params?.projectId;

  if (!projectId) {
    return {
      props: {},
      redirect: {
        destination: '/404',
      },
    };
  }

  const summerProject = SummerProjects.find((p) => p.id === projectId);
  if (summerProject) {
    return {
      props: {
        projectInfo: summerProject,
      },
    };
  }

  const hackProject = HackProjects.find((p) => p.id === projectId);
  if (hackProject) {
    return {
      props: {
        projectInfo: hackProject,
      },
    };
  }

  const startupProject = StartupProjects.find((p) => p.id === projectId);
  if (startupProject) {
    return {
      props: {
        projectInfo: startupProject,
      },
    };
  }

  // Project not found
  return {
    props: {},
    redirect: {
      destination: '/404',
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const allProjectIds = [
    ...SummerProjects.map((project) => project.id),
    ...HackProjects.map((project) => project.id),
    ...StartupProjects.map((project) => project.id),
  ];

  return {
    paths: allProjectIds.map((projectId) => ({
      params: {
        projectId,
      },
    })),
    fallback: false,
  };
};

export default ProjectDetailsPage;
