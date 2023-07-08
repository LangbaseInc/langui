export default function Container({ children, classNames }) {
  return <div className={`mx-auto ${classNames}`}>{children}</div>
}
