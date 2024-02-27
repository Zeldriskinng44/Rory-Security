require("dotenv-json")(); 
{ 
	token: "process.env.BOT_TOKEN", // Your Bot Token.
	clientID: "process.env.CLIENTID", // Your Bot ID.
	prefix: "process.env.PREFIXO",
	voiceCN: "process.env.VOICE", // For connection bot.
	Smath: "process.env.OWNER1",  // Owner id 1.
	Parzival: "process.env.OWNER2", // Owner id 2.
	GuildLogs: "process.env.LOGS", // Channle for GuildCreate Logs.
	messages: {
		COOLDOWN_MESSAGE: "You are on `<duration>` cooldown!"
	}
}
