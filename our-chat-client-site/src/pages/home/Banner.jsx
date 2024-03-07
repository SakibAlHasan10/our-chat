const Banner = () => {
  return (
    <div className="w-full pt-24">
      <div className="w-11/12 m-auto">
        <div className="bg-home-banner min-h-screen w-full bg-cover bg-center bg-no-repeat">
          <div className="flex h-screen justify-center w-full items-center lg:px-10">
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
          <p className="text-black mt-4 text-sm text-right">
            *Data charges may apply. Contact your provider for details.
          </p>
      </div>
    </div>
  );
};

export default Banner;
