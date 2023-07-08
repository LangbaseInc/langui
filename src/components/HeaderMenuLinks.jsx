import Link from 'next/link'

export default function HeaderMenuLinks({ menuLinks, navClass, ulClass }) {
  return (
    <nav aria-label="Page Nav" className={navClass && navClass}>
      <ul className={ulClass && ulClass}>
        {menuLinks.map((menuLink, index, { length }) => {
          const isLast = index === length - 1

          return (
            <li key={menuLink.href} className={isLast ? 'lg:ms-auto' : ''}>
              <Link
                href={menuLink.href}
                {...(menuLink.external && {
                  target: '_blank',
                  rel: 'noreferrer',
                })}
              >
                <div className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800">
                  {menuLink.title}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
