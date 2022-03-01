import {ReactComponent as NotFound} from '../assets/svg/404.svg';

export default function NotFoundPage() {
  return(
    <div className="bg-white h-screen w-screen flex flex-col justify-center items-center">
       <NotFound className="w-4/12" />
       <h2 className="text-primary text-3xl font-sans font-semibold">Content not available.</h2>
    </div>
  );
};