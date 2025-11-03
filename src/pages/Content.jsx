function Content(){
    return(
        <>
        <main>
            <div className="relative w-full sm:h-[634px] sm:bg-black sm:overflow-hidden">
                <img className=" block w-full sm:hidden" src="images/Frame11.png"></img>
                <img className=" hidden sm:block max-w-[856px] sm:absolute sm:left-[16%] py-[60px] sm:overflow-hidden " src="images/Rectangle1.png"></img>
                <div className="flex flex-col max-w-[351px] absolute bottom-12  text-white  sm:max-w-[636px] sm:-translate-y-1/2 sm:top-1/2 sm:left-[65%] sm:bottom-auto">
                    <p className="font-medium text-[40px]">INEAR PRO MAX</p>
                    <p className="font-normal" >9/16 - 10/30 官網搶先販售<br/>新色上市，搭載最新降噪技術，提供給您最高音質享受，採用適應性演算法，快速處理音效，讓您享受更高傳真的效果。</p>
                </div>
            </div>

        </main>
        </>
    )
}
export default Content;