function Buttons({setColor}) {
  return (
    <>
      <button
        className="outline-none px-6 py-3 bg-red-800 rounded-lg text-white"
        onClick={() => {
          setColor("red");
        }}
      >
        red
      </button>

      <button
        className="outline-none px-6 py-3 bg-blue-800 rounded-lg text-white"
        onClick={() => {
          setColor("blue");
        }}
      >
        blue
      </button>

      <button
        className="outline-none px-6 py-3 bg-green-800 rounded-lg text-white"
        onClick={() => {
          setColor("green");
        }}
      >
        green
      </button>

      <button
        className="outline-none px-6 py-3 bg-violet-800 rounded-lg text-white"
        onClick={() => {
          setColor("violet");
        }}
      >
        violet
      </button>

      <button
        className="outline-none px-6 py-3 bg-black rounded-lg text-white"
        onClick={() => {
          setColor("black");
        }}
      >
        black
      </button>

      <button
        className="outline-none px-6 py-3 bg-gray-800 rounded-lg text-white"
        onClick={() => {
          setColor("gray");
        }}
      >
        gray
      </button>

      <button
        className="outline-none px-6 py-3 bg-orange-900 rounded-lg text-white"
        onClick={() => {
          setColor("orange");
        }}
      >
        orange
      </button>

      <button
        className="outline-none px-6 py-3 bg-yellow-600 rounded-lg text-white"
        onClick={() => {
          setColor("yellow");
        }}
      >
        yellow
      </button>
    </>
  );
}

export default Buttons;