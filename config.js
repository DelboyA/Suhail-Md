justconst fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_02_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxODksXG4gICAgICAgIDk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc5LFxuICAgICAgICA1OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxLFxuICAgICAgICAxMixcbiAgICAgICAgMTk4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDgyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzLFxuICAgICAgICA1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxODksXG4gICAgICAgIDczLFxuICAgICAgICAxODgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0LFxuICAgICAgICA4NixcbiAgICAgICAgMjM0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODksXG4gICAgICAgIDk0LFxuICAgICAgICA5NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMixcbiAgICAgICAgODgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYyLFxuICAgICAgICA1NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDcxLFxuICAgICAgICAzMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDczLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA1LFxuICAgICAgICA1LFxuICAgICAgICA1OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc5LFxuICAgICAgICA4NixcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlo5VGFGb2Z6aVNySDZJZ0ZoZlBFTWIvM0RsNE5udHp3SGVlOTJ5aDI0Tm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzczNDQwNzU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFQTg4QkQwMTczNjkwN0IxOEY3QkY0MzkyRUYwMjhDN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY0NDA1NTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidXloa25fdVVSS2lUQ0hGNklNbHU0Z1wiLFxuICBcInBob25lSWRcIjogXCI2YzIyYzZhYS1hNjdhLTRkYjQtYjFiYy0xMzkyMjJmMWZkMDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAyMDMsXG4gICAgICAyNTQsXG4gICAgICAxMTgsXG4gICAgICAyNDIsXG4gICAgICA2NyxcbiAgICAgIDExNixcbiAgICAgIDk1LFxuICAgICAgMTksXG4gICAgICAxMTgsXG4gICAgICAyNDMsXG4gICAgICAyMzEsXG4gICAgICAxMTYsXG4gICAgICAyOCxcbiAgICAgIDI1MyxcbiAgICAgIDE1NCxcbiAgICAgIDE4NSxcbiAgICAgIDE5OCxcbiAgICAgIDUwLFxuICAgICAgMTQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgNzMsXG4gICAgICAxODIsXG4gICAgICA2OSxcbiAgICAgIDIxNSxcbiAgICAgIDE2OCxcbiAgICAgIDE3MCxcbiAgICAgIDM5LFxuICAgICAgMjQwLFxuICAgICAgMTU2LFxuICAgICAgNDQsXG4gICAgICAyMTIsXG4gICAgICAyMDQsXG4gICAgICAxNjIsXG4gICAgICAxNzIsXG4gICAgICA0MSxcbiAgICAgIDE0MSxcbiAgICAgIDE3MCxcbiAgICAgIDY1LFxuICAgICAgMTU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5RNEZSWDQ4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NzM0NDA3NTg6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTg5ODc0NjI5NDQwNjo0NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZi/8J2ZgPCdmYfwnZi98J2ZivCdmZQg8J2YvPCdmYnwnZmE8J2ZgPCdmZTwn5iOXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWUrazlNQ0VPU2J1N0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCeUFlcGwwRmx6TGE1VzVSSlBxeXFSN2J5NXBTd1RFSGxaZVlNTzVYYWdZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVxMWoxdjF6WGlHdEZaN0J4M0NRaHRsUzV3R1M5Q0c1QVRhSW0xQnB2YkZFdnhhT3I5ayt1RFpVVkt5OW9EV3NrYVA0NitoeWJOV296YmJ1L1haZ0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5zSEhoN0x4TUtES3BnMmVHL2w4c05GekxJdWhaRlpSR2JEZ1VlS2xTcUZPQkp2QVExTWRTdllTWEM0QzlONjUvd0J2d2l5WnlyY2FkRGlHU3VBdGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc3MzQ0MDc1ODo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NDQwNTUyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmkwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKaTAuanNvbiI6IHt9Cn0="  //  https://github.com/SuhailTechInfo/Suhail-Md


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
