import { HackProjects } from 'data/projects/HackProjects';
import { StartupProjects } from 'data/projects/StartupProjects';
import { SummerProjects } from 'data/projects/SummerProjects';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
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
      <Head>
        <title>Outliers | {projectInfo.projectName}</title>
        <meta name="title" content={`Outliers | ${projectInfo.projectName}`} />
        <meta name="description" content={projectInfo.oneLiner} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={
            process.env.NEXT_PUBLIC_ORIGIN! + '/projects/' + projectInfo.id
          }
        />
        <meta
          property="og:title"
          content={`Outliers | ${projectInfo.projectName}`}
        />
        <meta property="og:description" content={projectInfo.oneLiner} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_ORIGIN!}/OutliersCover.png`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={
            process.env.NEXT_PUBLIC_ORIGIN! + '/projects/' + projectInfo.id
          }
        />
        <meta
          property="twitter:title"
          content={`Outliers | ${projectInfo.projectName}`}
        />
        <meta property="twitter:description" content={projectInfo.oneLiner} />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_ORIGIN!}/OutliersCover.png`}
        />
      </Head>
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
