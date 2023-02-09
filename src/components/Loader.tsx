const Loader = ({ text }: any) => {
  return (
    <div className="lds-ring">
      <p className="loaderText">{text}</p>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
