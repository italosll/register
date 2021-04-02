export default function Loading() {
  return (
    <>
      <div
        className="
        w-screen h-screen z-30 fixed bg-black opacity-40  blur
        "
      />

      <div
        className="
        w-screen h-screen z-30 fixed  blur
        flex flex-col  justify-center  
        "
      >
        <img
          className="w-24  z-40 mx-auto animate-spin-slow opacity-100 "
          src="/loading.svg"
        />
      </div>
    </>
  );
}
