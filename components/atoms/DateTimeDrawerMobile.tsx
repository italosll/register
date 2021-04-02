import { FunctionComponent } from "react";

type Props = {
  label?: String;
  value: String;
};

const DateTimeDrawerMobile: FunctionComponent<Props> = ({ label, value }) => {
  return (
    <>
      <div
        className="
      flex flex-col w-full
      "
      >
        {label !== undefined && (
          <p className="text-gray-600 text-sm mb-1">{label}</p>
        )}
        <p
          className={`
            h-12 
            w-full
            bg-white text-gray-600 text-sm pl-5 
            flex flex-col justify-center shadow-md rounded-xl 
          `}
        >
          {value}
        </p>
      </div>
    </>
  );
};

export default DateTimeDrawerMobile;
