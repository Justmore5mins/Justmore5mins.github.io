import TypeEffect from "./Typing";

export default function Home() {
    return (
      <main className="space-y-8">

      {/* hero section */}
      <section className="realtive h-screen w-screen">

        {/* background image */}
        <div className="absolute bg-[url('images/Landing.webp')] w-screen h-screen bg-cover bg-no-repeat bg-position-[80%_center] brightness-45 z-[-1]"></div>

        <div className="absolute w-full text-4xl md:text-6xl z-2 pl-[5vw] top-1/2 -translate-y-1/2 leading-[1.2]">
          <h1>你好</h1>
          <h1 className="whiespace-pre">我是<TypeEffect strings={[' Justmore5mins',"程式貓成員","機器人校隊隊長"]}/></h1>
          <button>
            <span className="absolute inset-0 bg-[#3b82ca] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-9"></span>
            {/* <span className="relative z-10 text-2xl">
            往下看更多
            </span> */}
          </button>
        </div>
      </section>
      {/* About me */}
      <section className="relative md:flex w-[80%] md:w-[70%] mx-auto md:items-center text-lg break-all gap-8 " id='AboutMe'>
        <img src="/images/Introducing.webp" alt="" className="md:w-[40%] mt-4 border-2 border-[#5a626b] rounded-4xl"/>
        <div className="block mt-5 md:mt-0 space-y-3">
          <h1 className="text-4xl">關於我</h1>
          <hr className="w-27 h-1 mt-1 bg-[#5a626b] border-[#5a626b] mb-5"/>
          <p>我是 Justmore5mins，一個喜歡動手做的開發者</p>
          <p>在國中參加科展時，發現想法可以藉由程式轉為現實，我開始喜歡將想法一步步變為能與現實互動的東西。到了高中，參加了機器人校隊，投入到機器人程式開發、電腦視覺與自動化，我也在一次次實作中找到自己的方向。</p>
          <p>在生成式 AI 近乎氾濫的現代，取得快速的結果變得比過去容易許多，但我始終覺得，真正有價值的不只是知道答案，而是理解它為什麼能運作，以及當它出錯時，自己能不能找到原因。</p>
          <p>因此，比起快速接觸大量不同的技術，我更喜歡挑一個真正感興趣的領域深入研究。從電腦視覺到機器人自動化，我常常在完成一個專案後，又開始思考下一個問題：能不能做得更好？能不能讓它解決更多事情？</p>
          <p>對我而言，寫程式不只是將想法實現的工具，也是探索問題的一種方式。我希望持續透過實作累積經驗，理解技術背後的原理，也把每一次遇到的問題，變成下一次做得更好的理由。</p>
        </div>
      </section>
      {/* Tech stack */}
      <section id='TechStack' className="w-[90%] mx-auto md:w-[70%]">
        <div >
          <h1 className="text-4xl">技能樹</h1>
          <hr className="w-27 h-1 mt-1 bg-[#5a626b] border-[#5a626b]"/>
          <table className="mt-5 w-full border-separate border-spacing-y-3">
            <tbody className="
              [&_tr]:h-12
              [&_td:first-child]:w-32
              [&_td]:align-middle
              [&_h1]:text-2xl
              [&_h1]:font-medium
              [&_progress]:ml-auto
            ">
              <tr>
                <td><h1>程式能力</h1></td>
                <td>
                  <div className="relative h-1 w-full bg-gray-300">
                    <div className="ml-auto h-full w-[20%] bg-[#5a626b]" />

                    <span className="absolute bottom-2 right-[20%] text-lg text-[#5a626b]">
                      Python / 視覺辨識 / 機器人程式
                    </span>
                  </div>
                </td>
              </tr>

              <tr>
                <td><h1>創客能力</h1></td>
                <td>
                  <div className="relative h-1 w-full bg-gray-300">
                    <div className="ml-auto h-full w-[30%] bg-[#5a626b]" />

                    <span className="absolute bottom-2 right-[30%] text-lg text-[#5a626b]">
                      Arduino 專案 / 工業機器人設計 / 基礎加工
                    </span>
                  </div>
                </td>
              </tr>

              <tr>
                <td><h1>影音剪輯</h1></td>
                <td>
                  <div className="relative h-1 w-full bg-gray-300">
                    <div className="ml-auto h-full w-[40%] bg-[#5a626b]" />

                    <span className="absolute bottom-2 right-[40%] text-lg text-[#5a626b]">
                      Premiere Pro / Adobe Audition 影音剪輯
                    </span>
                  </div>
                </td>
              </tr>

              <tr>
                <td><h1>團隊協作</h1></td>
                <td>
                  <div className="relative h-1 w-full bg-gray-300">
                    <div className="ml-auto h-full w-[30%] bg-[#5a626b]" />

                    <span className="absolute bottom-2 right-[30%] text-lg text-[#5a626b]">
                      FRC 機器人校隊 / 程式貓科技教育成員
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* 專案庫 */}
      <section className="w-[90%] md:w-[70%] mx-auto" id='Projects'>
        <h1 className="text-4xl">專案遊樂場</h1>
        <hr className="w-45 h-1 mt-1 bg-[#5a626b] border-[#5a626b]"/>
        <div className="
            mt-5

            [&>div]:flex
            [&>div]:w-full
            [&>div]:flex-col
            [&>div]:overflow-hidden
            [&>div]:rounded-4xl
            [&>div]:border
            [&>div]:border-[#5a626b]/40
            [&>div]:bg-transparent
            [&>div]:text-gray-100
            [&>div]:md:flex-row
            [&>div]:mt-5
          ">
            {/* Project 1 */}
            <div>
              <div className="aspect-video w-[40%] shrink-0  md:aspect-auto md:w-2/5 justify-center">
                <img
                  src="images/xereo.webp"
                  alt="Project preview"
                  className="w-3/5 object-contain bg-transparent mx-auto"
                />
              </div>

              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <h2 className="text-3xl font-semibold tracking-tight">
                  希羅噴泉
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  國中時，受到自然老師的邀請，製作了「希羅噴泉-水撲滿屋頂灑水系統之應用」的科展，利用水的重力位能差帶動水從低處往高處流。透過這種方式，我們可以在不用額外動力的前提下將低處的水幫浦到高處。在實驗室中，我們在測試自製的寶特瓶與壓克力罐成功後，使用了桶裝水的塑膠桶作為儲水裝置，並且將高度差放大到最高瓶與最低瓶相差 4 層樓。噴泉的功能雖然能正常運作，不過運作時產生的氣壓差與密封條件都要嚴峻的多。如果要實際應用在建築中，會需要水塔等大量水的支持與金屬焊接的密封性才有可能達成。
                </p>

                <a
                  href="https://files.justmore5mins.com/portfolio/xereo"
                  className="
                    mt-6 w-fit
                    border border-[#5a626b]
                    px-5 py-2.5
                    text-sm font-medium text-gray-100
                    transition
                    hover:bg-[#5a626b]
                    hover:text-white
                  "
                >
                  報告 PDF
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div>
              <div className="aspect-video w-full shrink-0 bg-[#1a1d21] md:aspect-auto md:w-2/5">
                <img
                  src="images/environ.webp"
                  alt="Project preview"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <h2 className="text-3xl font-semibold tracking-tight">
                  智慧環境監控系統
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  國三準備會考之餘。同樣被自然老師邀請，製作「智慧環境監控系統」的科展。透過整合各類感測器、 NodeMCU 、 Arduino 製作而成，實時監測環境的狀態。當數值如溫濕度、一氧化碳濃度、瓦斯濃度等任一數值出現異常，除了會大聲放出提示音外。也會用 LINE 傳送通知給使用者。這也是我第一次利用程式與簡單電路讓科技走進生活。
                </p>

                <a
                  href="https://files.justmore5mins.com/portfolio/smarthome"
                  className="
                    mt-6 w-fit
                    border border-[#5a626b]
                    px-5 py-2.5
                    text-sm font-medium text-gray-100
                    transition
                    hover:bg-[#5a626b]
                    hover:text-white
                  "
                >
                  報告 PDF
                </a>
              </div>
            </div>
          </div>
      </section>
      <section className="w-[90%] md:w-[70%] mx-auto" id="FindMe">
          <h1 className="text-4xl">找到我</h1>
          <hr className="w-26 h-1 mt-1 bg-[#5a626b] border-[#5a626b]"/>
            
          <div className="
              flex w-full flex-col
              border border-[#5a626b]/40
              bg-transparent
              text-gray-100
              p-6
              md:p-8
              mt-5
              rounded-4xl
            ">
              <h2 className="text-3xl font-semibold">
                找到我
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                我在這邊喔喔喔
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:me@justmore5mins.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-white"
                >
                  <span className="w-20 text-gray-500">電子郵件</span>
                  <span>me@justmore5mins.com</span>
                </a>

                <a
                  href="https://github.com/Justmore5mins"
                  className="flex items-center gap-4 text-gray-300 hover:text-white"
                >
                  <span className="w-20 text-gray-500">GitHub</span>
                  <span>@Justmore5mins</span>
                </a>
                <a
                  href="https://www.instagram.com/justmore5mins/"
                  className="flex items-center gap-4 text-gray-300 hover:text-white"
                >
                  <span className="w-20 text-gray-500">Instagram</span>
                  <span>@justmore5mins</span>
                </a>
              </div>
            </div>
      </section>
      </main>
  );
}
