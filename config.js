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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[+263 78 271 7816]/g, '') : "923184474176";




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
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,+263";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "263713647585,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_27_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDk5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU0LFxuICAgICAgICA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMixcbiAgICAgICAgMTExLFxuICAgICAgICAxODAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDczLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI3LFxuICAgICAgICA1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDUyLFxuICAgICAgICA0MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDUwLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk2LFxuICAgICAgICA1MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDYxLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NixcbiAgICAgICAgOTksXG4gICAgICAgIDExMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUHRJZ3RFRDVKdjBXY1pXZG5NcU80eVFJNHhKSmpUeWtWeFhqK2xVLzBUWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NzM0NDA3NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkyNjFGOUQ2ODQ3OTIwQkQ5OUVEQTY1ODI5NTQ3QjAwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTk0ODg0OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc3MzQ0MDc1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEQ3RUJGQTYzQTk2QkQ3QkQzRUM4NDBCREM1NUE2MDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1OTQ4ODQ4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZXeDFnZk9aUWJ1c3FpcXhnemVNRUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGYzY2FjMjYtYzlmZi00NWRhLWFmMGYtMGVlNmMwYzM5YjNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICA3NCxcbiAgICAgIDExMixcbiAgICAgIDE1NyxcbiAgICAgIDE2MSxcbiAgICAgIDMsXG4gICAgICAyMTksXG4gICAgICAxMTgsXG4gICAgICAyLFxuICAgICAgMjI5LFxuICAgICAgMTI0LFxuICAgICAgMTUwLFxuICAgICAgMTkxLFxuICAgICAgMjUyLFxuICAgICAgNzksXG4gICAgICAxNDMsXG4gICAgICAzOCxcbiAgICAgIDM0LFxuICAgICAgMTU4LFxuICAgICAgN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICAxNDAsXG4gICAgICA5NCxcbiAgICAgIDkyLFxuICAgICAgMTczLFxuICAgICAgMTQxLFxuICAgICAgMSxcbiAgICAgIDIyNSxcbiAgICAgIDIxNSxcbiAgICAgIDg5LFxuICAgICAgMTIxLFxuICAgICAgMTI5LFxuICAgICAgMTIzLFxuICAgICAgMTA3LFxuICAgICAgNjcsXG4gICAgICA2MixcbiAgICAgIDEyNCxcbiAgICAgIDE2NSxcbiAgICAgIDg5LFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3S0ZQUFZZV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzczNDQwNzU4OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDk4OTg3NDYyOTQ0MDY6MTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Yv/CdmYDwnZmH8J2YvfCdmYrwnZmUIPCdmLzwnZmJ8J2ZhPCdmYDwnZmU8J+YjlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xlK2s5TUNFS2lhbmJJR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQnlBZXBsMEZsekxhNVc1UkpQcXlxUjdieTVwU3dURUhsWmVZTU81WGFnWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvMjh5a25Za0NjOFJlN2lweFhBNXNzLzRJKzliUGZiQmlSSElKKzBVV2IrY0dHSFJyN2twSEFUemlvN1FuZE83YUx1a1N3ZHhleVlLdkNzY0lZVzhDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLS1h5RWN2SHdKWm1EV3ZHZnVCdWZ3emxUV3QxdWJ2dm9sZXhaTkV3YmI4cUQ1SUdXbFVvNncxNnJvYXc1aitmL09CMGlSOU1Ta0QzWlFHS0EzTWVEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NzM0NDA3NTg6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTk0ODg0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJ6clwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnpyLmpzb24iOiAie1wia2V5RGF0YVwiOlwidDdQT0pUUEkwRVc2R1VhSjY1dWZaRWZrWWdMTFBEOGpCNDFVNWt4cUx0MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTEyNTM4MTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTg1NzQzOTU2MFwifSIKfQ=="  //  https://github.com/SuhailTechInfo/Suhail-Md


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
