import undergraduate_project from './../images/undergraduate_cover.jpg';
import coffee from './../images/coffee.jpg';
import mockup from './../images/mockup.jpg';
import arqmodel from './../images/arq_model.jpg';

const posts = [
  {
    title: 'Undergraduate project',
    href: '#',
    category: { name: 'Architecture', href: '#' },
    description:
      'For the final project of my undergraduate degree in Architecture and Urbanism I proposed an intervention to a beer factory keeping the preservation of historic spaces, cultural equipment and park.',
    imageUrl: undergraduate_project,
  },
  {
    title: 'Albufeira Cafe Photography & Video',
    href: '#',
    category: { name: 'Social media creation', href: '#' },
    description:
      'I took care of all social media accounts, menu and food photography and content creation for Albufeira Cafe in Newcastle.',
    imageUrl: coffee,
  },
  {
    title: 'Book Mockup',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'I designed and produced a book containing my entire undergraduate final project. I created all the graphic design, image treatment, and content of the book.',
    imageUrl: mockup,
  },
  {
    title: 'Architectural model',
    href: '#',
    category: { name: 'Architecture', href: '#' },
    description:
      'Here you will find scaled models of my architectural projects.',
    imageUrl: arqmodel,
  },
]

export default function Cards() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-gray-50 h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <p className="mt-3 max-w-2xl mx-auto text-xl font-poppins text-almost-black sm:mt-4">
            Take a look at some featured projects
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-almost-green">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}