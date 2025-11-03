function Footer() {
  return (
    <>
      <div className=" w-full  bg-black  ">
        <div className="max-w-[1296px] flex flex-col justify-start items-start mx-auto bg-black">
        <button className="ml-3 mb-6 mt-[60px] flex sm:ml-0 sm:self-center">
          <img className="w-40 h-[66px]" src="images/Logo.png"></img>
        </button>

        <div className="ml-3 flex gap-10 mb-6 sm:mb-12 sm:ml-0 sm:self-center">
          <button>
            <img className=" aspect-square w-6" src="images/twitter.png"></img>
          </button>
          <button>
            <img className=" aspect-square w-6" src="images/ig.png"></img>
          </button>
          <button>
            <img className=" aspect-square w-6" src="images/facebook.png"></img>
          </button>

        </div>

                    <div className="hidden sm:flex flex-col w-[100px] h-px bg-white mx-auto mb-12"></div>


        <div className="text-white mb-[60px] ml-3 w-full sm:flex sm:justify-between sm:mb-[60px]">
          <div className="flex gap-6 mb-10 ">
            <a>最新商品</a>
            <a>多色選擇</a>
            <a>定製耳機</a>
          </div>
          <div className="flex">© WEBNAME 2024 All right Reserved</div>
        </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
