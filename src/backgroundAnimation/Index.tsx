import { Link } from "react-router-dom"

const Index = () => {
  return (
    <div className="flex flex-col gap-16 items-center justify-center py-8">
      <a className="text-white px-5 py-4 rounded-xl font-bold no-underline shadow-xl text-2xl bg-zinc-950" href="https://animatedbackgrounds.me/" target="_blank" rel="noreferrer">More Samples</a>

      <div className="flex flex-col gap-8 items-center justify-center">
        <Link to="/backgroundAnimation/sample1" className="text-white px-5 py-4 rounded-xl font-bold no-underline shadow-xl text-2xl bg-red-500">Sample 1</Link>
      </div>
    </div>
  )
}

export default Index