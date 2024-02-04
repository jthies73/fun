import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "app.rewe",
	appName: "EWER",
	webDir: "build",
	server: {
		androidScheme: "https",
	},
};

export default config;
