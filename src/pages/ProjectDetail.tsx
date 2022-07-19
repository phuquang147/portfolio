import { useState, useCallback } from 'react';
import Heading from '~/ui-components/Heading';
import ImageViewer from 'react-simple-image-viewer';

export default function ProjectDetail() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    'http://placeimg.com/1820/1080/nature',
    'http://placeimg.com/1820/1080/nature',
    'http://placeimg.com/1820/1080/nature',
  ];

  const technologies = ['ReactJs', 'Tailwind', 'Typescript', 'Tailwind', 'Tailwind', 'Typescript'];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      <Heading content="Personal Portfolio" />
      <div className="container grid grid-cols-3 gap-4 lg:gap-20 mx-auto py-10 lg:py-20">
        <div className="col-span-3 lg:col-span-2 px-6 md:px-10 lg:px-0">
          {images.map((src, index) => (
            <img src={src} onClick={() => openImageViewer(index)} key={index} alt="" className="mb-10 w-full" />
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </div>
        <div className="col-span-3 lg:col-span-1 px-6 md:px-10 lg:px-0">
          <p className="text-2xl font-bold">Project Details</p>
          <p className="text-base leading-8 font-public-sans font-normal text-gray-500 mt-8">
            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the
            sable cloud beneath was dished out, and the car seemed to float.
          </p>
          <p className="text-lg font-bold text-light-orange mt-8">DATE</p>
          <p className="text-xl font-public-sans font-normal text-gray-800 mt-1">16, Jan 2020</p>
          <p className="text-lg font-bold text-light-orange mt-6">CLIENT</p>
          <p className="text-xl font-public-sans font-normal text-gray-800 mt-1">16, Jan 2020</p>
          <p className="text-lg font-bold text-light-orange mt-6">CATEGORIES</p>
          <p className="text-xl font-public-sans font-normal text-gray-800 mt-1">Website</p>
          <p className="text-lg font-bold text-light-orange mt-6">TECHNOLOGIES</p>
          <ul className="flex flex-wrap gap-2 mt-2">
            {technologies.map((item, index) => (
              <li className="px-4 py-2 border border-light-orange rounded text-base text-gray-500 font-public-sans font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
