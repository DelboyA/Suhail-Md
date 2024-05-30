look justconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[+254 773 440758]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,+263";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "263 78 539 6010,263xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_20_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwLFxuICAgICAgICAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDYyLFxuICAgICAgICA1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAzLFxuICAgICAgICAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDkwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc5LFxuICAgICAgICA2NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDksXG4gICAgICAgIDczLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDk5LFxuICAgICAgICA5MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJseGpodC9naGJ3YnUxRHVXWkxweDRzQVpSdlREeUdXMzVmcFdYQ1ZzVDBvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIaFVhTzZReVEzaXZWTllheTgyTkhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU2YTg2NWRhLWMyMmMtNDI4OS04ZmI4LThmODBmZWY5MzJiNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICA4OCxcbiAgICAgIDExMyxcbiAgICAgIDE0OCxcbiAgICAgIDYsXG4gICAgICAxMDAsXG4gICAgICAyNTUsXG4gICAgICAxODQsXG4gICAgICAxOTYsXG4gICAgICA4OSxcbiAgICAgIDg5LFxuICAgICAgMTI1LFxuICAgICAgNjMsXG4gICAgICAyMTEsXG4gICAgICAxODUsXG4gICAgICAyNixcbiAgICAgIDYwLFxuICAgICAgMTU5LFxuICAgICAgMjEzLFxuICAgICAgNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNixcbiAgICAgIDE5NCxcbiAgICAgIDIzNSxcbiAgICAgIDE4NCxcbiAgICAgIDE1OSxcbiAgICAgIDIwMyxcbiAgICAgIDE1OCxcbiAgICAgIDEwNixcbiAgICAgIDEsXG4gICAgICAyMDMsXG4gICAgICAyMDAsXG4gICAgICAyOCxcbiAgICAgIDE3MCxcbiAgICAgIDE5NyxcbiAgICAgIDIzMixcbiAgICAgIDEzMyxcbiAgICAgIDExOSxcbiAgICAgIDE2NSxcbiAgICAgIDE5MCxcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5IQkIyTlM4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NzM0NDA3NTg6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTg5ODc0NjI5NDQwNjo0OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNaStrOU1DRUs2MTRMSUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJ5QWVwbDBGbHpMYTVXNVJKUHF5cVI3Ynk1cFN3VEVIbFplWU1PNVhhZ1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZy9CTVdobFZudlFJQzAxYkczRk5vYU5LcmNXNFdUb01oTHZoY1RhRHRUeWNSVEwrdW9ad0c5K1kxQldsL2xKU05aOWVVY05jQkxtZzM0dFJqb3U3Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaFlqWlJJMnZLd0RGZkV1cTZ6SERjdVMzV0VqTDFKRWE0T0ovL2hhSEJ1dGJvcFplVCtzUUdLajBJYS9ybzI2UVJvUGgrY1p2TDl4ZVl4UXBsdHpIaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzczNDQwNzU4OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcwNTAwMzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKaTBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUppMC5qc29uIjogIntcImtleURhdGFcIjpcImJadVF6Tk9VelpCZ0ZsVlNKbExXVlZwdnFoZFdTbUZlc2RVT1R2RmlSZGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzExMjUzODI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYxODIzODkxNDlcIn0iCn0="  //  https://github.com/SuhailTechInfo/Suhail-Md


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
