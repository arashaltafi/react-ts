import FetchApiWithHook from "../Components/FetchApiWithHook"
import GoBack from "../Components/GoBack"

const CustomHook = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-32">
      <FetchApiWithHook />
      <GoBack />
    </div>
  )
}

export default CustomHook