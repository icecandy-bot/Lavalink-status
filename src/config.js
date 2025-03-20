module.exports = {
  token: process.env.token || "", // Ensure this env variable is set
  channelId: process.env.channelId || "",

  webMonitor: true, // Set to false if you don't want a website
  expressPort: process.env.expressPort || 3000,

  nodes: [
    {
      host: "lava-all.ajieblogs.eu.org", // Your lavalink host address 
      password: "https://dsc.gg/ajidevserver", // Your lavalink password
      port: 80, // Your lavalink port
      identifier: "Node", // Name for your lavalink
      secure: false, // set to true if your lavalink has SSL
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
  ],
};
