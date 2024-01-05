import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Home = () => {
  return (
    <main className="bg-container min-h-screen pb-64">
      <div className="container mx-auto py-28">
        <h2 style={{ fontSize: "70px" }} className="font-bold text-center">
          Hi I'm Mante!
        </h2>
        <p className="font-bold text-xl leading-10 text-center">
          The first manta ray on the Manta Network! <br /> The Official Manta
          Meme Coin
        </p>

        <div className="flex justify-center mt-4">
          <div className="flex justify-between w-48">
            <div className="rounded-full bg-slate-800 p-4 hover:bg-slate-950 cursor-pointer">
              <TelegramIcon style={{ fontSize: 45 }} className="text-white" />
            </div>
            <div className="rounded-full bg-slate-800 p-4 hover:bg-slate-950 cursor-pointer">
              <TwitterIcon style={{ fontSize: 45 }} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center w-3/5 mx-auto">
          <img
            className="w-1/2"
            src="https://www.mantecoin.com/_astro/mante_main.cy5Z8jDU_Z1dedMX.webp"
          />
        </div>
        <p className="text-lg font-bold text-center mt-5">
          With my big, sparkling eyes and ever-present grin, I’m not just any{" "}
          <br />
          ocean explorer—I’m on a mission to swim to the moon with friends{" "}
          <br />
          like you.
        </p>
      </div>

      <div className="container mx-auto mt-64">
        <h2
          style={{ fontSize: "70px" }}
          className="font-bold text-center mb-12"
        >
          How To Buy?
        </h2>
        <p className="text-lg font-bold text-center mb-4">
          Step 1: Bridge your ETH to the Manta Network at https://rhino.fi/
        </p>
        <p className="text-lg font-bold text-center mb-4">
          Step 2: Head over to izumi.finance and connect your wallet.
        </p>
        <p className="text-lg font-bold text-center mb-4">
          Step 3: Put in the following CA:
          0xaA902C15676C076Ec0e7cb7Cc57201d2162E2eB6
        </p>
      </div>

      <div className="container mx-auto mt-64">
        <h2 style={{ fontSize: "70px" }} className="font-bold text-center">
          Tokenomics
        </h2>
        <div className="font-bold mt-12">
          <h2 className="text-3xl text-center mb-5">Token Supply: </h2>
          <h1 className="text-4xl text-center mb-5">1,000,000,000 </h1>
          <h3 className="text-xl text-center">No taxes, keep it simple</h3>
        </div>
      </div>
    </main>
  );
};

export default Home;
