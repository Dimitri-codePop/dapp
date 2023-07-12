import "./App.css";
import { WagmiConfig, configureChains, createConfig, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { arbitrum, hardhat, optimism, polygon, zora } from "wagmi/chains";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Header } from "./components/Header/Header";
import { ConnectWallet } from "./components/ConnectWallet/ConnectWallet";

const { chains, publicClient } = configureChains([hardhat], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "Test Dim",
  projectId: "9bf7aaa1075ffc9585d97ca79ea8e13d",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className="min-h-screen">
          <Header />
          <ConnectWallet />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
