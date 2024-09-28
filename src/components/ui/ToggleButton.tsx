import "./ToggleButton.css";

const ToggleButton = ({ isChecked, setIsChecked }: any) => {
  return (
    <div className="flex items-center justify-center ">
      <label className=" switch-label ">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className=""
        />
        <span className="slide-it " />
      </label>
    </div>
  );
};

export default ToggleButton;
