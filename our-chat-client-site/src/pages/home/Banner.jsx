const Banner = () => {
  return (
    <div className="w-full pt-24">
      <div className="w-11/12">

        <div className="flex bg-home-banner h-screen justify-center w-full items-center lg:px-10">
          <div className="flex-1 text-white ">
            <h2 className="lg:text-[80px] tracking-tighter leading-none lg:w-[322px]">
              Message privately
            </h2>
            <p className="lg:w-[322px] mt-7 font-medium text-lg">
              Simple, reliable, private messaging and calling for free*,
              available all over the world.
            </p>
          </div>
          <div className="flex-1"></div>
        </div>
      
      <p className="text-black text-sm text-right">
        *Data charges may apply. Contact your provider for details.
      </p>
      
    </div>
    </div>
  );
};

export default Banner;
