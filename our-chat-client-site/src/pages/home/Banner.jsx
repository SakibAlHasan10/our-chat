const Banner = () => {
  return (
    <div className="w-full pt-24">
      <div className="bg-home-banner rounded-3xl m-auto min-h-screen w-11/12 bg-cover bg-center bg-no-repeat mb-96">
        <div className="flex h-screen justify-center items-center lg:px-10">
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
      </div>
    </div>
  );
};

export default Banner;
