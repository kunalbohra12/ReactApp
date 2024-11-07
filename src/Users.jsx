function MyComponent() {
  let counter = 1;

  const updateCounter = () => {
    counter += 1;
    console.log("Counter updated:", counter); // Logs updated value, but won't re-render
  };

  return (
    <div>
      <p>Counter (won't update visually): {counter}</p>
      <button onClick={updateCounter}>Update Counter</button>
    </div>
  );
}
export default MyComponent;