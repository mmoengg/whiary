export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
        {children}
        <div></div>
    </div>
  )
}
