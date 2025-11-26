async function connectOBS() {
  const websocketIP = document.getElementById("IP").value;
  const websocketPort = document.getElementById("Port").value;
  const websocketPassword = document.getElementById("PW").value;
  //connect to OBS web socket server
  try {
    const { obsWebSocketVersion, negotiatedRpcVersion } = await obs.connect(
      `ws://${websocketIP}:${websocketPort}`,
      websocketPassword,
      {
        rpcVersion: 1,
      }
    );
    console.log(
      `Connected to server ${obsWebSocketVersion} (using RPC ${negotiatedRpcVersion})`
    );
  } catch (error) {
    console.error("Failed to connect", error.code, error.message);
    document.getElementById("WSconnectButton").style.background = "#ff0000";
  }
  obs.on("error", (err) => {
    console.error("Socket error:", err);
  });
  console.log(`ws://${websocketIP}:${websocketPort}`);

  return obs;
}
