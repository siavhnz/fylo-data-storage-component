import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as Folder } from "../assets/images/icon-folder.svg";
import { ReactComponent as Upload } from "../assets/images/icon-upload.svg";
import { ReactComponent as Document } from "../assets/images/icon-document.svg";
import FyloSlider from "./ui/FyloSlider";

const Fylo = () => {
  const [min, max, current] = [0, 1000, 815];
  return (
    <div className="px-6 lg:flex lg:gap-x-10 lg:-mt-4">
      <div className="bg-dark-blue p-10 pr-28 rounded-lg rounded-tr-[6rem] flex flex-col gap-y-8 justify-start lg:pr-32">
        <Logo />
        <div className="flex gap-x-4">
          <div className="w-12 h-12 flex justify-center items-center rounded-lg bg-very-dark-blue">
            <Document aria-hidden={true} focusable={false} />
          </div>
          <div className="w-12 h-12 flex justify-center items-center rounded-lg bg-very-dark-blue">
            <Folder aria-hidden={true} focusable={false} />
          </div>
          <div className="w-12 h-12 flex justify-center items-center rounded-lg bg-very-dark-blue">
            <Upload aria-hidden={true} focusable={false} />
          </div>
        </div>
      </div>
      <div className="bg-dark-blue mt-4 pb-14 lg:pb-10 self-end rounded-lg relative lg:min-w-[33.5rem]">
        <div>
          <p className="text-center lg:text-left lg:pl-10 pt-7 lg:pt-9 text-pale-blue font-Raleway text-sm">
            You’ve used <span className="font-bold">815 GB</span> of your
            storage
          </p>
          <div className="px-8 pt-4 lg:px-10">
            <FyloSlider current={current} max={max} />
          </div>
          <div className="px-8 pt-2 lg:px-10 flex justify-between uppercase text-pale-blue font-Raleway text-xs">
            <span>0 gb</span>
            <span>1000 gb</span>
          </div>
        </div>
        <div className="lg:right-10 lg:translate-x-0 lg:-top-11 lg:bottom-auto absolute w-[55%] lg:w-[34%] translate-x-1/2 right-1/2 pt-4 pb-4 -bottom-8 rounded-lg flex gap-x-3 bg-white items-center justify-center lg:after:border-t-[1.5rem] lg:after:border-t-white lg:after:border-l-[1.5rem] lg:after:border-l-transparent lg:after:content-[''] lg:after:absolute lg:after:-bottom-[1.45rem] lg:after:right-0 lg:rounded-br-none">
          <span className="font-Raleway text-very-dark-blue font-bold text-4xl">
            {max - current}
          </span>
          <span className="uppercase text-grayish-blue text-sm -mr-2">
            gb left
          </span>
        </div>
      </div>
    </div>
  );
};

export default Fylo;
