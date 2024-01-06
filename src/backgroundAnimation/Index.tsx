import { Link } from "react-router-dom"

const Index = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center py-8">
      <Link to="/backgroundAnimation/sample1" className="text-white px-5 py-4 rounded-xl font-bold no-underline shadow-xl text-2xl bg-red-500">Sample 1</Link>
      <Link to="/backgroundAnimation/sample2" className="text-white px-5 py-4 rounded-xl font-bold no-underline shadow-xl text-2xl bg-green-500">Sample 2</Link>
      <Link to="/backgroundAnimation/sample3" className="text-white px-5 py-4 rounded-xl font-bold no-underline shadow-xl text-2xl bg-purple-500">Sample 3</Link>
      <Link to="/backgroundAnimation/sample4" className="text-white px-5 py-4 rounded-xl font-bold no-underline shadow-xl text-2xl bg-yellow-500">Sample 4</Link>
      <Link to="/backgroundAnimation/sample5" className="text-white px-5 py-4 rounded-xl font-bold no-underline shadow-xl text-2xl bg-blue-500">Sample 5</Link>
    </div>
  )
}

export default Index