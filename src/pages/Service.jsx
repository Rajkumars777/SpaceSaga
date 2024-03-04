import { StarIcon, SparklesIcon, InformationCircleIcon, PhotoIcon } from '@heroicons/react/24/outline'
import earth from '../images/juup.jpg';
import Navbar from '../components/navbar';
const features = [
  {
    name: 'Space Information Retrieval',
    description:
      'Instant answers to your space queries, from planetary facts to celestial phenomena.',
    icon: SparklesIcon,
  },
  {
    name: 'Image Gallery Access',
    description:
      'Explore captivating visuals of the cosmos, from stunning nebulae to distant galaxies.',
    icon: PhotoIcon,
  },
  {
    name: 'Customized Information Packages',
    description:
      'Tailored space data and imagery packages for presentations, research, or educational projects.',
    icon: StarIcon,
  },
  {
    name: 'Educational Resources',
    description:
      'Engaging lesson plans, activities, and multimedia content for teachers and students',
    icon: InformationCircleIcon,
  },
]

export default function Example() {
  return (
    <div className="relative isolate h-screen overflow-hidden bg-gray-900 ">
      <img
        src={earth}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
       <div>
         <Navbar/>
         </div>
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Services          </p>
          <p className="mt-6 text-lg leading-8 text-white">
          Welcome to SpaceSAGA's Services page, where we bring the wonders of the cosmos to your fingertips.
           Our platform is dedicated to providing comprehensive space information and stunning images, curated to satisfy your curiosity about the universe.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
  )
}