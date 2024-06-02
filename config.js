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
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_49_06_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI4LFxuICAgICAgICA5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICA3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2LFxuICAgICAgICAzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDMwLFxuICAgICAgICA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjksXG4gICAgICAgIDU3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMixcbiAgICAgICAgMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMzksXG4gICAgICAgIDcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNixcbiAgICAgICAgMTM5LFxuICAgICAgICA4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA1NyxcbiAgICAgICAgODgsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY1LFxuICAgICAgICA3MixcbiAgICAgICAgMTE2LFxuICAgICAgICA3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDg1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDksXG4gICAgICAgIDc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJlb1FFT2IwRzBsaitsUlhkTXNBRmh0VmZTZHZScjR4ZlV2Q3JZa3RESGhRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyZXhaVkFCV1JabUM4NnhJdWlZMDBRXCIsXG4gIFwicGhvbmVJZFwiOiBcImVhMmZlNzA0LTlmOTktNDI4OS04ZWI1LTExZTA5OGQyZTE3ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICAxNDIsXG4gICAgICAxMjEsXG4gICAgICAyMjksXG4gICAgICAyMDIsXG4gICAgICA0MyxcbiAgICAgIDgxLFxuICAgICAgMjAsXG4gICAgICAxNzUsXG4gICAgICAxMTgsXG4gICAgICAyMDYsXG4gICAgICA5MyxcbiAgICAgIDIxMyxcbiAgICAgIDE3NyxcbiAgICAgIDI0NixcbiAgICAgIDE0MyxcbiAgICAgIDE5MyxcbiAgICAgIDMxLFxuICAgICAgMjM4LFxuICAgICAgMTM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0LFxuICAgICAgMTE4LFxuICAgICAgMjI0LFxuICAgICAgMTMxLFxuICAgICAgMTgyLFxuICAgICAgMTMxLFxuICAgICAgMTI5LFxuICAgICAgNixcbiAgICAgIDIwMixcbiAgICAgIDEwMyxcbiAgICAgIDE1NSxcbiAgICAgIDEwOSxcbiAgICAgIDE3NSxcbiAgICAgIDEzMCxcbiAgICAgIDEwOCxcbiAgICAgIDE3MSxcbiAgICAgIDc2LFxuICAgICAgMjA4LFxuICAgICAgNDMsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0dKRjExTVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc3MzQ0MDc1ODo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ5ODk4NzQ2Mjk0NDA2OjYwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ002K2s5TUNFSmFwOHJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQnlBZXBsMEZsekxhNVc1UkpQcXlxUjdieTVwU3dURUhsWmVZTU81WGFnWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4Q0Z0QVJTZzVnRkl1cHVkOUIzbmVubzhmYkZJNitmQ1pGaDl4ZXZYSWREd0RUcnk3cDB6Rmp0eG1VUVBGTE94UGNPWFduQ21uWVRsQlJXbmJDWmdBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRcGhuUjVQTUhpaHlya3pmNEV2NWhFbzhDcThmendtWm4yMUZ1azVUU2NRdFdHNFl2MDFJN2tkK0Y0RGNNa1hUY3Zpa3NPdmhNaW9WL0hLcU1CR09nQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NzM0NDA3NTg6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzM0MzM4NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUppMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmkwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYlp1UXpOT1V6WkJnRmxWU0psTFdWVnB2cWhkV1NtRmVzZFVPVHZGaVJkZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTEyNTM4MjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjE4MjM4OTE0OVwifSIKfQ=="  //  https://github.com/SuhailTechInfo/Suhail-Md


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
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
