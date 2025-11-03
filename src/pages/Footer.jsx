function Footer() {
  return (
    <>
      <div className=" w-full flex flex-col justify-start items-start  bg-black  ">
        <button className="mb-6">
          <img className="w-40 h-[66px]" src="images/Logo.png"></img>
        </button>

        <div className="flex gap-10 mb-6">
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

        <div className="text-white mb-[60px]">
          <div className="flex gap-6 mb-10">
            <a>最新商品</a>
            <a>多色選擇</a>
            <a>定製耳機</a>
          </div>
          <div>© WEBNAME 2024 All right Reserved</div>
        </div>
      </div>
    </>
  );
}
export default Footer;
