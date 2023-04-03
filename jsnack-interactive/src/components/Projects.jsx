function Projects({ title, description, program }) {
  return (
    <div className=" text-purpleText bg-purpleBgAlt w-1/5 rounded-lg px-6 py-4 flex flex-col items-start justify-between">
      <div>
        <h1 className="text-white text-2xl font-semibold mb-4">{title}</h1>
        <p className="text-white">{description}</p>
      </div>
      <button
        className="mt-10 p-2 border border-1 rounded-md hover:bg-purpleText hover:text-purpleBg"
        type="button"
        onClick={program}
      >
        Cliccami!
      </button>
    </div>
  );
}

export default Projects;
