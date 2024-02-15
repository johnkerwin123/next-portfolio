import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Frontend Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Backend Developer',
        1500,
        'Full Stack Developer',
        1500,
        'Web Designer',
        1500
      ]}
      speed={50}
      className='text-[1.5rem] md:text-[2.5rem] text-[#55e6a5] font-semibold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;