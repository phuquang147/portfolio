import Button from '~/ui-components/Button';
import img from '~/assets/images/image1.svg';

export default function Section1() {
  return (
    <div className="pt-header-height bg-main-bg bg-cover flex flex-wrap justify-center">
      <div className="w-full container grid grid-cols-2 gap-10">
        <div className="col-span-2 lg:col-span-1 flex items-center px-6 md:px-10 lg:px-0">
          <div className="text-white flex flex-wrap items-center justify-center">
            <span className="w-full text-2xl font-bold mt-8 lg:mt-0">Personal Portfolio</span>
            <span className="w-full text-[56px] leading-[62px] lg:text-7xl font-bold mt-6 lg:mt-10 ">
              Web Development
            </span>
            <span className="w-full font-public-sans text-xl font-light mt-6 lg:mt-10">
              The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime.
            </span>
            <div className="w-full flex items-start mt-10 lg:mt-16">
              <Button type="primary" children="About" to="/about" />
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 pr-6 md:pr-10 lg:pr-0">
          <img src={img} alt="" className="py-10 lg:py-28" />
        </div>
      </div>
    </div>
  );
}
