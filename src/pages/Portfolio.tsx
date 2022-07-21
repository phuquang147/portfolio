import Project from '~/components/Project';
import Heading from '~/ui-components/Heading';
import projects from '~/datas/projects';

export default function Portfolio() {
  return (
    <div className="">
      <Heading content="Portfolio" />
      <div className="grid grid-cols-2 container mx-auto gap-10 py-20 px-6 md:px-10 lg:px-0">
        {projects.map((project) => (
          <Project key={project.id} project={project} className="col-span-2 lg:col-span-1" />
        ))}
      </div>
    </div>
  );
}
