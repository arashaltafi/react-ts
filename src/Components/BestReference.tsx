const BestReference = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 py-8 w-full">
      <h1 className="title">best reference</h1>

      <div className="flex flex-col items-center justify-center gap-8 w-full">
        <a className="py-3 px-4 text-2xl no-underline text-white rounded-xl bg-red-500" href="https://neumorphism.io/" target="_blank" rel="noreferrer">Neumorphism</a>
        <a className="py-3 px-4 text-2xl no-underline text-white rounded-xl bg-sky-500" href="https://uiverse.io/" target="_blank" rel="noreferrer">Best Component</a>
        <a className="py-3 px-4 text-2xl no-underline text-white rounded-xl bg-green-500" href="https://animatedbackgrounds.me/" target="_blank" rel="noreferrer">Animated Backgrounds</a>
      </div>
    </div>
  )
}

export default BestReference