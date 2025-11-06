
function Header(){

    return(
        <>
        <header className=" flex w-full h-[84px] justify-between items-center" >

            <div>
                <a href="#"><img className="brightness-0 h-[33px] w-20 ml-3 sm:ml-20" alt="Inear 品牌logo" src="images/Logo.png"></img></a>
            </div>
            
            <nav className="hidden sm:flex sm:justify-self-center sm:gap-8 md:gap-12 ">
                <a href="#" className="cursor-pointer">首頁</a>
                <a href="#" className="cursor-pointer">最新消息</a>
                <a href="#" className="cursor-pointer">商品列表</a>
                <a href="#" className="cursor-pointer">關於我們</a>
            </nav>
            
            <div className="flex gap-3 mr-3">
                <a className="flex aspect-square h-14 justify-center items-center sm:mr-20"><img className="aspect-square h-6 flex" src="images/search.png"></img></a>
                <button type="button" className="flex aspect-square h-14 justify-center items-center sm:hidden"><img className="aspect-square h-6 flex" src="images/burger.svg"></img></button>
            </div>
        </header>
        </>
    )
}
export default Header;