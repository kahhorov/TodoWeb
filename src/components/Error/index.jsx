function Error({ error }) {
  return (
    <div className="w-full h-screen flex justify-center items-center text-2xl text-red-500/80 font-black absolute top-0 left-0 bg-[#222]">
      {error}
    </div>
  );
}

export default Error;
