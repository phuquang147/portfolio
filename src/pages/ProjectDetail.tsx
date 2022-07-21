import { useState, useCallback, useEffect } from 'react';
import Heading from '~/ui-components/Heading';
import ImageViewer from 'react-simple-image-viewer';
import projects from '~/datas/projects';
import { useParams } from 'react-router-dom';
import { ProjectProps } from '~/datas/projects';

export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState<ProjectProps | undefined>();

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    setProject(projects.find((project) => project.id === params.projectId));
  });

  return (
    <div>
      <Heading content={project?.name || ''} />
      <div className="container grid grid-cols-3 gap-4 lg:gap-20 mx-auto py-10 lg:py-20">
        <div className="col-span-3 lg:col-span-2 px-6 md:px-10 lg:px-0">
          {project?.images.map((src, index) => (
            <img
              src={src}
              onClick={() => openImageViewer(index)}
              key={index}
              alt=""
              className="mb-10 w-full rounded outline outline-primary outline-1"
            />
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={project?.images || []}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </div>
        <div className="col-span-3 lg:col-span-1 px-6 md:px-10 lg:px-0">
          <p className="text-2xl font-bold">Project Details</p>
          <p className="text-base leading-8 font-public-sans font-normal text-gray-500 mt-8">{project?.details}</p>
          <p className="text-lg font-bold text-light-orange mt-8">DATE</p>
          <p className="text-xl font-public-sans font-normal text-gray-800 mt-1">
            {project && project.date.toDateString()}
          </p>
          <p className="text-lg font-bold text-light-orange mt-6">CLIENT</p>
          <p className="text-xl font-public-sans font-normal text-gray-800 mt-1">{project?.client}</p>
          <p className="text-lg font-bold text-light-orange mt-6">CATEGORIES</p>
          <p className="text-xl font-public-sans font-normal text-gray-800 mt-1">{project?.category}</p>
          <p className="text-lg font-bold text-light-orange mt-6">TECHNOLOGIES</p>
          <ul className="flex flex-wrap gap-2 mt-2">
            {project?.technologies.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 border border-light-orange rounded text-base text-gray-500 font-public-sans font-semibold"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold text-light-orange mt-6">GITHUB</p>
          <a className="text-xl font-public-sans font-normal text-primary mt-1" href={project?.github}>
            {project?.github}
          </a>
          <p className="text-lg font-bold text-light-orange mt-6">DEMO</p>
          <a className="text-xl font-public-sans font-normal text-primary mt-1" href={project?.demo}>
            {project?.demo}
          </a>
        </div>
      </div>
    </div>
  );
}
