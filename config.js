const fs = require('fs-extra')
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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Harare";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_34_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzcsXG4gICAgICAgIDYwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMixcbiAgICAgICAgNjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDY1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDkwLFxuICAgICAgICA3MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxLFxuICAgICAgICA3MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI5LFxuICAgICAgICA1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMyLFxuICAgICAgICA5NixcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRPREd6T1VvRUxaNEtsSHZxeTE0dGFqa1FRTGZYM0UyNWdVbkVqb0krRW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzg1Mzk2MDEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RDE0Qjk5Mzk1QUNFQTg1QTUxMDVGOTAzNEVDRDE2NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTYwMzkyNjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODUzOTYwMTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjUyNDhBMUMyNTUyQTI2NjAzRDBGNUI1Mzg1QTZGREMyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjAzOTI2N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVeWUwUXB4RVFtcWdBVWxBTFFpdGt3XCIsXG4gIFwicGhvbmVJZFwiOiBcImU2MmJmYjA5LWU4MDYtNDJjMS05MDBmLTgyYzkwNWRjMjRmZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MixcbiAgICAgIDIyOCxcbiAgICAgIDIyNCxcbiAgICAgIDIxMyxcbiAgICAgIDI0NCxcbiAgICAgIDg2LFxuICAgICAgMixcbiAgICAgIDEyNixcbiAgICAgIDIyOCxcbiAgICAgIDI0NixcbiAgICAgIDQ2LFxuICAgICAgMTY0LFxuICAgICAgNTEsXG4gICAgICA0MyxcbiAgICAgIDQsXG4gICAgICAxMjIsXG4gICAgICAxNTUsXG4gICAgICAxODQsXG4gICAgICA1MixcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMTEwLFxuICAgICAgNjIsXG4gICAgICAyNDYsXG4gICAgICAxOTAsXG4gICAgICAxODIsXG4gICAgICAxNjQsXG4gICAgICAxNjEsXG4gICAgICAyMTcsXG4gICAgICAyMyxcbiAgICAgIDIwOCxcbiAgICAgIDQ0LFxuICAgICAgMjE1LFxuICAgICAgMTIzLFxuICAgICAgMjM3LFxuICAgICAgMTU3LFxuICAgICAgNDMsXG4gICAgICAxNTYsXG4gICAgICAxMTksXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVpRVlZWNlhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4NTM5NjAxMDoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk0NDg1MTc4OTA4ODEzOjI2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkRKIERFTEJPWSBBTklFWSDwn5K78J+OifCfk4Dwn4yf4pml77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1RKM3FZR0VOM2NvcklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkaE9rUmNwNUhBQzN4T3hkZUJCaFRITzNjVzNSOEh3MitTMVJkZUExZkVFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFsSjFlUmt2OXJJQU5tUk4wenU0RUpxU0R3VThJT1haVVBValcyL1R1N0htMmN1SDZkK2dyTXVBNmFiaDJWdzZuSDZKU2VmaUUzNllJU3J5Q1IyaURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZLelh0bzc2ZWp1WllTaG5JdWhDOVVhTjhTY3lCVVZ6bzYvVTE2YWZRVWlTa3A2ZGlPanM2aFZRY2lOL2lPTTV5RVZwRy9JQ3pFeFEveEtIaG1DWWhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4NTM5NjAxMDoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYwMzkyNjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFY25cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVjbi5qc29uIjogIntcImtleURhdGFcIjpcIk1KUUk2eXRGTmxsK3NnZmh5cXg2bjZJTStQbkp2enQxY2dDSk5MM3FHbk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY5MTg1Mzk4OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2MDM5MjY1MjM0XCJ9Igp9"  //  https://github.com/SuhailTechInfo/Suhail-Md


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
