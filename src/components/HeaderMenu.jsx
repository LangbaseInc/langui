import IconMenu from '@component/IconMenu'
import MenuLinks from '@component/HeaderMenuLinks'

export default function HeaderMenu({ showMenu, handleSetShowMenu, menuLinks }) {
  return (
    <div className="flex items-center sm:hidden">
      <button
        onClick={() => handleSetShowMenu(!showMenu)}
        className="text-slate-200 transition-colors duration-300 focus:text-blue-600"
      >
        <IconMenu />

        <span className="sr-only">Toggle menu</span>
      </button>

      {showMenu && (
        <div className="absolute inset-x-0 top-14 px-2">
          <MenuLinks
            menuLinks={menuLinks}
            navClass="bg-slate-900 text-slate-200 mt-2 border p-4 border-slate-200/20 shadow-lg rounded-lg"
            ulClass="space-y-8"
          />
        </div>
      )}
    </div>
  )
}
