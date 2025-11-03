
function Header(){

    return(
        <>
        <section className=" flex w-full h-[84px] justify-between items-center" >

            <div>
                <img className="brightness-0 h-[33px] w-20 ml-3 sm:ml-20" src="images/Logo.png"></img>
            </div>
            
            <div className="hidden sm:flex sm:justify-self-center sm:gap-8 md:gap-12 ">
                <button>首頁</button>
                <button>最新消息</button>
                <button>商品列表</button>
                <button>關於我們    </button>
            </div>
            
            <div className="flex gap-3 mr-3">
                <a className="flex aspect-square h-14 justify-center items-center sm:mr-20"><img className="aspect-square h-6 flex" src="images/search.png"></img></a>
                <a className="flex aspect-square h-14 justify-center items-center sm:hidden"><img className="aspect-square h-6 flex" src="images/burger.svg"></img></a>
            </div>
        </section>
        </>
    )
}
export default Header;