export default function GreenArea() {
  return (
    <>
      <img
        className="
        w-11/12 max-h-96
        sm:w-8/12
        md:w-6/12
        lg:hidden
        "
        src="/greenAreaMobile.svg"
      />

      <div
        className=" 
        relative w-full h-full
        hidden
        
        lg:block "
      >
        <div className=" overflow-hidden  w-full h-full   flex flex-row-reverse ">
          <img
            className="
                  
 
 
            w-full h-full
            lg:-right-28 lg:max-w-lg
            xl:max-w-xl   xl:-right-32
            2xl:max-w-4xl  2xl:-right-52
            absolute
            "
            src="/greenArea.svg"
          />
        </div>
      </div>
    </>
  );
}

// w-full h-full
// lg:-right-28 lg:max-w-lg
// xl:max-w-xl   xl:-right-32
// 2xl:max-w-2xl  2xl:-right-52
// absolute
