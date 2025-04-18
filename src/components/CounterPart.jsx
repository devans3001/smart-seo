import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CounterItem = ({ end, label }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
    rootMargin: '-100px 0px',
  });

  // console.log(inView);
  return (
    <div className="px-5 py-1 relative" ref={ref}>
      <div className="text-[6.5em] font-bold text-white mb-3 md:text-[10em]">
        {inView ? <CountUp end={end} duration={1.5} /> : 0}
      </div>
      <div className="md:font-bold font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg uppercase tracking-wider text-[#080337]">
        {label}
      </div>
    </div>
  );
};

const CounterSection = () => {
  return (
    <div className="relative px-4 md:px-0 flex flex-wrap justify-between gap-5 md:flex-row items-center md:w-[85dvw] md:mx-auto">
      <CounterItem end={98} label="Projects" />
      <hr className="h-[65px] w-px border-1 text-gray-200 rotate-180"/>
      <CounterItem end={65} label="People" />
      <hr className="h-[65px] w-px border-1 text-gray-200 rotate-180"/>
      <CounterItem end={10} label="Years" />
      <hr className="h-[65px] w-px border-1 text-gray-200 rotate-180"/>
      <CounterItem end={15} label="Offices" />
    </div>
  );
};

export default CounterSection;