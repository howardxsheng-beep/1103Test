import { useEffect, useState } from "react";

function Content() {

  
    return (
    <>
      <section>
        <div className="relative w-full sm:h-[634px] sm:bg-black sm:overflow-hidden">
          <img
            className=" block w-full sm:hidden"
            src="images/Frame11.png"
          ></img>
          <img
            className=" hidden sm:block max-w-[856px] sm:absolute sm:left-[16%] py-[60px]   "
            src="images/Rectangle1.png"
          ></img>
          <div className="p-4 flex flex-col max-w-[351px] absolute bottom-12  text-white  sm:max-w-[636px]  sm:-translate-y-1/2 sm:top-1/2 sm:left-[65%] sm:bottom-auto">
            <h1 className="font-medium text-[40px]">INEAR PRO MAX</h1>
            <p className="font-normal">
              9/16 - 10/30 官網搶先販售
              <br />
              新色上市，搭載最新降噪技術，提供給您最高音質享受，採用適應性演算法，快速處理音效，讓您享受更高傳真的效果。
            </p>
          </div>
        </div>
      </section>

      <section className=" flex flex-col w-full bg-linear-[#000000,#404040,#191919] bg-cover bg-center  bg-no-repeat sm:bg-none sm:bg-[#2B2B2B] ">
        <div className="text-center h-[156px] text-white place-content-center text-[32px] font-medium">
          最新商品
        </div>

        <div className="grid grid-cols-1 sm:max-w-[1300px] mb-[60px] sm:mx-auto items-center w-full mt-[30px] gap-6  overflow-x-auto px-3 [scrollbar-width:none] md:grid-cols-3 md:px-0 sm:mt-0 ">
          <div className="w-full sm:max-w-[750px]">
            <img
              className="aspect-square sm:aspect-416/457"
              src="images/new01.jpg"
            ></img>
            <span className="text-white font-medium sm:block sm:mt-8">
              INEAR PRO II
            </span>
          </div>
          <div className="w-full sm:max-w-[750px]">
            <img
              className="aspect-square sm:aspect-416/457"
              src="images/new02.jpg"
            ></img>
            <span className="text-white font-medium sm:block sm:mt-8">
              INEAR PRO MAX
            </span>
          </div>
          <div className="w-full sm:max-w-[750px]">
            <img
              className="aspect-square sm:aspect-416/457"
              src="images/new03.jpg"
            ></img>
            <span className="text-white font-medium sm:block sm:mt-8">
              INEAR PRO I
            </span>
          </div>
        </div>
      </section>

      <section className="p-5 flex flex-col w-full bg-[url('/images/Frame46.png')] bg-cover bg-center   bg-no-repeat sm:bg-none sm:bg-black ">
        <div className="  text-white place-content-center text-[32px] tracking-wide font-medium mb-12 sm:mx-auto">
          <p>多色選擇，專屬你的與眾不同</p>
          <p className="text-base font-normal">
            我的風格我主張，獨創品牌限定色，除了耀眼更要獨一無二
          </p>
        </div>

        <div className="sm:flex sm:justify-center sm:max-h-[706px] sm:gap-6">
          <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-4 sm:max-h-[706px] max-w-[636px] sm:gap-0">
            <div className="aspect-351/202 sm:aspect-square overflow-hidden sm:col-span-2 sm:row-span-2">
              <img
                className=" w-full h-full object-cover "
                src="images/p01.jpg"
              ></img>
            </div>
            <div className="aspect-336/250 overflow-hidden sm:aspect-2/1 sm:col-span-2  sm:grid-rows-2  ">
              <img
                className=" w-full h-full object-cover "
                src="images/p02.jpg"
              ></img>
            </div>
            <div className="aspect-336/250 overflow-hidden sm:aspect-2/1 sm:col-span-2 sm:grid-rows-2 ">
              <img
                className=" w-full h-full object-cover "
                src="images/p03.jpg"
              ></img>
            </div>
            <div className="aspect-351/202 overflow-hidden sm:col-span-4 ">
              <img
                className=" w-full h-full object-cover "
                src="images/p04.jpg"
              ></img>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:max-w-[416px] sm:max-h-[706px]">
            <div className="aspect-351/218 sm:aspect-2/1 overflow-hidden">
              <img
                className=" w-full h-full object-cover "
                src="images/p05.jpg"
              ></img>
            </div>
            <div className="aspect-351/218 sm:aspect-2/1 overflow-hidden">
              <img
                className=" w-full h-full object-cover "
                src="images/p06.jpg"
              ></img>
            </div>
            <div className="aspect-351/218 sm:aspect-2/1 overflow-hidden">
              <img
                className=" w-full h-full object-cover "
                src="images/p07.jpg"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#404040] px-3  ">

        <div className="max-w-[1296px] sm:flex sm:gap-6 sm:mx-auto sm:flex-row ">

        <div className="flex flex-col text-white pt-[60px] sm:order-2 sm:justify-center ">
          <p className="text-center text-[32px] font-medium">
            訂製專屬於您的完美耳機
          </p>
          <p className="font-normal mb-12">
            請於下方留下您的詳細資料與訂製需求，將有專人於 3
            日內聯繫，此表單僅做為客服調查，不等同於完成訂製商品。
          </p>

        <label className=" flex flex-col gap-6 sm:gap-0">
        <span className="hidden sm:block">姓氏</span>
          <input
            className=" w-full border rounded-md border-white px-3 h-14  text-white placeholder-white sm:mb-6 sm:hidden"
            placeholder="姓氏"
          />
          <input
            className="hidden w-full border rounded-md border-white px-3 h-14  text-white placeholder-[background: #ACACAC] sm:mb-6 sm:block"
            placeholder="請輸入姓氏"
          />
        <span className="hidden sm:block">名字</span>          
          <input
            className="sm:hidden w-full border rounded-md border-white px-3 h-14  text-white placeholder-white sm:mb-6 "
            placeholder="名字"
          />
          <input
            className="hidden w-full border rounded-md border-white px-3 h-14  text-white placeholder-[background: #ACACAC] sm:mb-6 sm:block"
            placeholder="請輸入名字"
          />
          <span className="hidden sm:block">信箱</span>          
          <input
            className="sm:hidden w-full border rounded-md border-white px-3 h-14  text-white placeholder-white sm:mb-6 "
            placeholder="信箱"
          />
          <input
            className="hidden w-full border rounded-md border-white px-3 h-14  text-white placeholder-[background: #ACACAC] sm:mb-6 sm:block"
            placeholder="請輸入信箱"
          />          
          <span className="hidden sm:block">聯絡電話</span>          
          <input
            className="sm:hidden w-full border rounded-md border-white px-3 h-14  text-white placeholder-white sm:mb-6 "
            placeholder="聯絡電話"
          />
                    <input
            className="hidden w-full border rounded-md border-white px-3 h-14  text-white placeholder-[background: #ACACAC] sm:mb-6 sm:block"
            placeholder="請輸入聯絡電話"
          />
          <button className="text-center w-full border rounded-md bg-white px-5 h-14    text-black sm:w-[88px] sm:px-0 sm:self-end">
            送出表單
          </button>
        </label>
        </div>

        <div className="grid grid-cols-2 w-full gap-6 mt-6 pb-[60px] sm:max-w-[636px] sm:mb-[65px] sm:items-center sm:order-1  ">
          <div className=" mt-12 sm:mt-12">
            <div className=" flex-col-1  overflow-hidden  mb-4">
              <img
                className="aspect-square object-cover"
                src="images/label1.jpg"
              ></img>
            </div>
            <div className=" flex-col-1 overflow-hidden  ">
              <img
                className="aspect-square object-cover"
                src="images/label2.jpg"
              ></img>
            </div>
          </div>
          <div className="max-h-100 mb-12 sm:mt-12">
            <div className=" flex-col-1  overflow-hidden  mb-4">
              <img
                className="aspect-square object-cover"
                src="images/label3.jpg"
              ></img>
            </div>
            <div className=" flex-col-1 overflow-hidden  ">
              <img
                className="aspect-square object-cover"
                src="images/label4.jpg"
              ></img>
            </div>
          </div>
        </div>
        </div>

      </section>
    </>
  );
}
export default Content;
