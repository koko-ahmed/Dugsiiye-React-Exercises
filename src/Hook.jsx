let Count = 0;

const Increment = () => {

  const Test = () => {
    Count = Count + 1;
    console.log(Count);
  };

  return (
    <>
      <p>You clicked {Count} times</p>
      <button onClick={Test}>Click M`e</button>
    </>
  );
};

export default Increment;