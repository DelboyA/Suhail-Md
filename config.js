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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+263 78 539 6010]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_05_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY5LFxuICAgICAgICA5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgwLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNixcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNixcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDY0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMixcbiAgICAgICAgMjAwLFxuICAgICAgICA3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDMyLFxuICAgICAgICA2NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MCxcbiAgICAgICAgOSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDkwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc4LFxuICAgICAgICA1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgwLFxuICAgICAgICA0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUzLFxuICAgICAgICAzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkV0MHJ6b3RKZStIYVUyTVByRWVYMlh6czJORTlyVysxa0pmc3dWOG9qTk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzg1Mzk2MDEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5RDdEN0I1MEVFOTFFNzZBRkY5NTA1MzNFMzc3Q0Q0M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU1MzM1MTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia3BJcXFsWVBRcHFsWF9sNldxN0p2Z1wiLFxuICBcInBob25lSWRcIjogXCJhMDVhMDJlYy04MzdmLTRjNmUtODY5OS04ZDkyY2VmNGFiOTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgMTcwLFxuICAgICAgMTM1LFxuICAgICAgMTA2LFxuICAgICAgOCxcbiAgICAgIDcxLFxuICAgICAgMjI3LFxuICAgICAgOTUsXG4gICAgICAxNjksXG4gICAgICA3NCxcbiAgICAgIDk2LFxuICAgICAgMTUxLFxuICAgICAgMTE4LFxuICAgICAgMjI3LFxuICAgICAgMjM2LFxuICAgICAgNzksXG4gICAgICAyMzUsXG4gICAgICAxNjQsXG4gICAgICAxODIsXG4gICAgICAyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyLFxuICAgICAgMTk2LFxuICAgICAgMTczLFxuICAgICAgNzIsXG4gICAgICAxMzksXG4gICAgICA4MSxcbiAgICAgIDIxMCxcbiAgICAgIDIzMixcbiAgICAgIDY0LFxuICAgICAgMjAzLFxuICAgICAgMTY1LFxuICAgICAgMTUsXG4gICAgICA1OSxcbiAgICAgIDI0NSxcbiAgICAgIDE1NCxcbiAgICAgIDE2OSxcbiAgICAgIDEyOCxcbiAgICAgIDE2NCxcbiAgICAgIDE2MyxcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRWUNXRVRaMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzg1Mzk2MDEwOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTQ0ODUxNzg5MDg4MTM6MTdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiREogREVMQk9ZIEFOSUVZIPCfkr3wn5al77iP8J+Su/Cfk7JcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPclcrczhERU1YdGc3SUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtDTzR6Wk5Pdm43RGhtcXh3M2MxUVphc3NHdWQrY3h6QS9RZVl4VFVMQUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMkVwSDdHTk1VcHRGSmZ2b0hRNnFYYURHcHNtT2dPWTNaL3VEb0hSdkpvYXI5K29rOEZvZUg2MXlKQzBnV2V0cGg5WnZ2MytoNW8vdzhGenlUOWo0Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR1VjOWpSYlVpZ0l0TmlCU1dMbnphaU5xUmxDTHNDLy9wM3BhRkJQT3VwdzhvWFlXVENYMFdvY3JkOUlaanp4YWhZRWNPdEZXL1NuTkRzRGt0cGFUZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzg1Mzk2MDEwOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1NTMzNTEyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ0p3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDSncuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1YlZuMTRyc3phc0d1SnZ3Zzl0YVpzaExEU3J6cDJQZVJvajNWQlB6Y2pFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk3Mjk5MTMzNyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTUyNDE3NDExNTNcIn0iCn0="  //  https://github.com/SuhailTechInfo/Suhail-Md


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
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
