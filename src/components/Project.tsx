import React from 'react';
import projectImage from '~/assets/images/project/project1.png';
import Button from '~/ui-components/Button';
import { ProjectProps } from '~/datas/projects';

type Props = {
  project: ProjectProps;
  className?: string;
};

export default function Project({ project, className }: Props) {
  return (
    <div className={`group relative rounded overflow-hidden ${className}`}>
      <img className="w-full h-[300px] lg:h-[380px] object-cover rounded mb-20 lg:mb-28" src={projectImage} alt="" />
      <div className="absolute bg-project-bg2 bg-cover top-0 left-0 w-full h-full flex flex-col justify-end p-8">
        <p className="text-4xl lg:text-5xl font-bold text-white">{project.name}</p>
        <p className="text-base font-normal font-public-sans text-gray-200">{project.category}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-project-bg opacity-0 group-hover:h-full group-hover:opacity-95 duration-500">
        <p className="text-3xl lg:text-4xl font-bold text-white text-center">{project.name}</p>
        <Button type="transparent" children="View Details" to={`/portfolio/${project.id}`} className="mt-4" />
      </div>
    </div>
  );
}
