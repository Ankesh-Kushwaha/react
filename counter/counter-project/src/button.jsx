/* eslint-disable react/prop-types */
function Button({ btn: { counter, increase, decrease } }) {
  return (
    <>
      <p>
        <h1 className="h-7 bg-red text-lg">Incrementer and decrementer</h1>
      </p>
      <p>{counter}</p>
      <button onClick={increase}>Increment+</button>
      <button onClick={decrease}>Decrement-</button>
    </>
  );
}
export default Button;