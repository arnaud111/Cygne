import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MetaMaskProvider } from '@metamask/sdk-react';
import {  ThirdwebProvider } from "@thirdweb-dev/react";

import { Sepolia } from "@thirdweb-dev/chains";
import ResponsiveAppBar from "./navbar.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThirdwebProvider activeChain={Sepolia}>
      <MetaMaskProvider debug={false} sdkOptions={{
          checkInstallationImmediately: false,
          dappMetadata: {
              name: "Demo React App",
              url: window.location.host,
          }
      }}>
      <ResponsiveAppBar sx={{minWidth:1800}}></ResponsiveAppBar>
    <App />
      </MetaMaskProvider>
      </ThirdwebProvider>
  </React.StrictMode>,
)
