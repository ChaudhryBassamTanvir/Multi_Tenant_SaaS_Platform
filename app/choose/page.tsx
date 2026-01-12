import {
  FiGlobe,
  FiSettings,
  FiTrendingUp,
  FiHeadphones,
  FiStar,
  FiUsers,
} from "react-icons/fi";

const features = [
  {
    icon: <FiGlobe size={24} />,
    title: "Globally Recognized",
    desc: "Nimbus is trusted worldwide for building fast, modern, and scalable applications.",
  },
  {
    icon: <FiSettings size={24} />,
    title: "Easily Customizable",
    desc: "Built with clean architecture so you can adapt Nimbus to your needs effortlessly.",
  },
  {
    icon: <FiTrendingUp size={24} />,
    title: "Built for Impact",
    desc: "Optimized performance and accessibility to help your product grow confidently.",
  },
  {
    icon: <FiHeadphones size={24} />,
    title: "Worldwide Support",
    desc: "Our community and documentation are available anytime, anywhere.",
  },
  {
    icon: <FiStar size={24} />,
    title: "Awesome Design",
    desc: "Carefully crafted UI using modern design principles and best practices.",
  },
  {
    icon: <FiUsers size={24} />,
    title: "Handled by Experts",
    desc: "Designed by experienced engineers who know what production apps need.",
  },
];

export default function Choose() {
  return (
  <>
  <section className="grid grid-cols-2  gap-10 mt-10 text-center mx-auto w-[80%]">
        {features.map((item:any,index:any)=>(
<div key={index} className="bg-white border rounded-2xl p-8 text-center hover:shadow-lg transition ">
<div className="flex justify-center items-center bg-violet-100 text-violet-600 mx-auto pb-4 w-12 h-12 rounded-full text-center">
<div className="pt-4">
    {item.icon}
</div>

</div>
<div className="pt-2 font-semibold text-violet-600">
    {item.title}
</div>
<div>{item.desc}</div>

</div>

        ))}
        
    
   
  </section>
  
  </>
  );
}
