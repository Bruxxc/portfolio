import { useInView } from "react-intersection-observer";
import  BallCanvas  from "./resources/ball"; // importa BallCanvas si no lo tenías

type SkillItemProps = {
  skill: {
    name: string;
    icon: string;
  };
};

const SkillItem = ({ skill }: SkillItemProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="w-28 h-28" ref={ref}>
      {inView && <BallCanvas icon={skill.icon} />}
    </div>
  );
};

export default SkillItem;