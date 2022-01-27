
const navigation = [
  { name: 'About', href: '#' },
  { name: 'Architecture', href: '#' },
  { name: 'Social media creation', href: '#' },
  { name: 'Graphic design', href: '#' },
]

export default function Nav() {
  return (
    <header className="bg-almost-green">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-b-slate-900 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only">Barbara Pacheco</span>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </a>
            <div className="hidden ml-96 xl:ml-[36rem] space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
