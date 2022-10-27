import "./App.css";
function App() {
  return (
    <main
      className={`w-full h-screen flex flex-col gap-3 justify-center items-center bg-gray-900`}
    >
      <h1 className="p-5 pb-10 text-5xl font-bold tracking-tighter hover:tracking-widest cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-blue-300 to-blue-700 transition-all duration-500">
        Working on Something Cool
      </h1>
      <h3 className="text-white text-2xl tracking-widest hover:tracking-normal cursor-pointer transition-all duration-500">
        - Jaydeep Sharma
      </h3>
      <div className="flex justify-evenly gap-8 mt-5">
        <i
          href="https://www.instagram.com/jaydeep.189/"
          class="fa-brands fa-2x text-white cursor-pointer fa-instagram"
        ></i>
        <i
          href="https://www.github.com/Jaydeep189/"
          class="fa-brands fa-2x text-white cursor-pointer fa-github"
        ></i>
        <i
          href="/#"
          class="fa-brands fa-2x text-white cursor-pointer fa-linkedin"
        ></i>
      </div>
    </main>
  );
}

export default App;
