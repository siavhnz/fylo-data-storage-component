const FyloSlider = ({ current, max }) => {
  const width = `${(current / max) * 100}%`;

  return (
    <div className="h-5 rounded-xl bg-very-dark-blue flex items-center">
      <div
        className="h-[0.85rem] ml-1 rounded-xl bg-gradient-to-r from-g-from to-g-to flex justify-end items-center"
        style={{ width: width }}
      >
        <div className="bg-white w-[0.65rem] h-[0.65rem] rounded-full mr-1"></div>
      </div>
    </div>
  );
};

export default FyloSlider;
