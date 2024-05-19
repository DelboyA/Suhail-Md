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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_00_05_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkyLFxuICAgICAgICA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDgyLFxuICAgICAgICA0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc4LFxuICAgICAgICA4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NixcbiAgICAgICAgODQsXG4gICAgICAgIDcxLFxuICAgICAgICA5OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDgsXG4gICAgICAgIDk1LFxuICAgICAgICA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQzLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMTY0LFxuICAgICAgICA4MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NixcbiAgICAgICAgMTI4LFxuICAgICAgICA4MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNixcbiAgICAgICAgMTE4LFxuICAgICAgICA3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkk3NjNrbzIzOXVER2NBeTVqSzNyZGpqeEc4R0wwMm5MWWpUdzVHM3RDR2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhtbDdId2RyUXg2VmJ5V1M1VTFVelFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzEzODRhNmEtODgxYi00M2I4LWExMGUtNjkzOGQ3MjQ5NDJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDE0NyxcbiAgICAgIDQwLFxuICAgICAgMjI5LFxuICAgICAgMTE1LFxuICAgICAgNTUsXG4gICAgICAxMzcsXG4gICAgICAzLFxuICAgICAgOTgsXG4gICAgICA3NSxcbiAgICAgIDg0LFxuICAgICAgMTc0LFxuICAgICAgMTI0LFxuICAgICAgMTYzLFxuICAgICAgMTgzLFxuICAgICAgMTI1LFxuICAgICAgMTIwLFxuICAgICAgMTAwLFxuICAgICAgMTE4LFxuICAgICAgMjQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgMTMxLFxuICAgICAgMTkwLFxuICAgICAgMjA1LFxuICAgICAgMTQyLFxuICAgICAgNDYsXG4gICAgICAyMCxcbiAgICAgIDE5OCxcbiAgICAgIDI3LFxuICAgICAgMjUxLFxuICAgICAgMTAzLFxuICAgICAgMTA3LFxuICAgICAgNjUsXG4gICAgICAxNCxcbiAgICAgIDUxLFxuICAgICAgMTcxLFxuICAgICAgMjE3LFxuICAgICAgMTI0LFxuICAgICAgMTc5LFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVpTQjIzWDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc3MzQ0MDc1ODoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ5ODk4NzQ2Mjk0NDA2OjIzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmL/wnZmA8J2Zh/CdmL3wnZmK8J2ZlCDwnZi88J2ZifCdmYTwnZmA8J2ZlPCfmI5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMKytrOU1DRUovL3BySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJ5QWVwbDBGbHpMYTVXNVJKUHF5cVI3Ynk1cFN3VEVIbFplWU1PNVhhZ1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZjBKUnhXanpaRkV5VE9Sd28zWGFsb1pBQkEvVERxOVhyazJNeW9xSWQxMW1rbUZpemVzc054NVh0YVdZYm5VczloVmdUYkh3YlJwTTVpUUdsRFJBQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNG9CQ0hVU0Qrb2JGTkQ4d1dyWDNUUDlnU2tVTVdqamJTcG1BR29WNVBoUFJWdmliMkdHWURTcGNpdlFIYlNVYXhlc1MvMXl1dG5sQm84N1FaLzJsZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzczNDQwNzU4OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYxMDkyMTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEUHJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURQci5qc29uIjogIntcImtleURhdGFcIjpcInl6dnFidkVPdGUyWUY4ZVJnQUdvbEJxMW1za1c0YzBWOTkxYWJSajZ6Slk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzExMjUzODIyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  //  https://github.com/SuhailTechInfo/Suhail-Md


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
