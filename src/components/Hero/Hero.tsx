import clsx from "clsx";
import Title from "./Title";
import Avatar from "./Avatar";
import Typed from "react-typed";
import { useTranslation } from "react-i18next";

export interface Props {
  className?: string;
}



const Hero = ({ className }: Props) => {
  const {t} = useTranslation()
  return (
    <div className={clsx(className, "container mx-auto px-4")}>
      <Avatar />
      <Title />
      <Typed
        strings={[
          t('Hero.subtitle.reactDev'), 
          "React developer", t('Hero.subtitle.cricketPlayer')]}
        typeSpeed={40}
        className="flex justify-center text-xl md:text-3xl  md:text-5xl"
        loop
      />
    </div>
  );
};

export default Hero;
