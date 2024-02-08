const Banner = () => {
  return (
    <div className="bg-home-banner min-h-screen w-[100vw] bg-cover bg-center bg-no-repeat">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-1 text-white ">
          <h2 className="lg:text-[80px] tracking-tighter leading-none">Message <br /> privately</h2>
          <p>
            Simple, reliable, private messaging and calling for free*, available
            all over the world.
          </p>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Banner;
