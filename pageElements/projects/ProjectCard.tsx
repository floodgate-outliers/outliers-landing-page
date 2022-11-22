import { CardWithShadow } from 'components/cards/CardWithShadow';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ProjectInfo } from 'types/Project.type';

export const ProjectCard: FC<ProjectInfo> = ({
  id,
  projectType,
  projectName,
  builders,
  oneLiner,
  coverImage,
}) => {
  // Format the names ["Alice", "Bob", "Carol"] => Alice, Bob, and Carol
  const buildersString =
    builders.length === 1
      ? builders
      : builders.map((name, index) =>
          index === builders.length - 1 ? `and ${name}` : `${name}, `
        );

  return (
    <Link href={`/projects/${id}`}>
      <CardWithShadow animateWhile="hover">
        <div className="w-80">
          <div className="relative h-80">
            <Image
              priority
              fill
              src={coverImage}
              alt=""
              className="object-cover"
            />
          </div>
          <p className="mt-5 text-2xl underline">{projectName}</p>
          <p className="mt-1 text-base italic">{oneLiner}</p>
          <p className="mt-5 text-end text-base">-{buildersString}</p>
        </div>
      </CardWithShadow>
    </Link>
  );
};
