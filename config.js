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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Zimbabwe";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[+263 78 539 6010]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_51_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNixcbiAgICAgICAgMTg2LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY5LFxuICAgICAgICA5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMsXG4gICAgICAgIDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDY5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4LFxuICAgICAgICA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDkxLFxuICAgICAgICA4MCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDU0LFxuICAgICAgICA5NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2LFxuICAgICAgICA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk3LFxuICAgICAgICA0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcxLFxuICAgICAgICA2NyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWEU3QS9VOVJzMlJLQzlMVk5ZMWpENGRyVUFiWk1obElKRXRiVGlrUk9ZTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMnBacWFKdXVRTmVRaFl1VjdieEVhUVwiLFxuICBcInBob25lSWRcIjogXCIxNGZjZWJiMy0wOTg3LTRmNzQtOGJhZS1mOTFjNGYxNjhkZWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgNjMsXG4gICAgICAyNDYsXG4gICAgICAyMDUsXG4gICAgICAyMTMsXG4gICAgICAxMSxcbiAgICAgIDExNSxcbiAgICAgIDYsXG4gICAgICAyMDYsXG4gICAgICAxNTcsXG4gICAgICAxMjIsXG4gICAgICAxMCxcbiAgICAgIDI0LFxuICAgICAgMTA5LFxuICAgICAgMTY4LFxuICAgICAgMjIxLFxuICAgICAgMTkxLFxuICAgICAgMTE4LFxuICAgICAgMzQsXG4gICAgICAyNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgMjM1LFxuICAgICAgMTk1LFxuICAgICAgMTYxLFxuICAgICAgMjE4LFxuICAgICAgMTExLFxuICAgICAgMTQwLFxuICAgICAgMTgzLFxuICAgICAgMjQ5LFxuICAgICAgNzIsXG4gICAgICAxNTEsXG4gICAgICAyMjMsXG4gICAgICAxNTUsXG4gICAgICAxODcsXG4gICAgICAyOCxcbiAgICAgIDE5MCxcbiAgICAgIDQxLFxuICAgICAgNzUsXG4gICAgICAxNTYsXG4gICAgICAyMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjFCNU1TWkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4NTM5NjAxMDo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRKIERFTEJPWSBBTklFWSBNSVhUQVBFU1wiLFxuICAgIFwibGlkXCI6IFwiMTk0NDg1MTc4OTA4ODEzOjQ3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xXVWxzd0VFSm5mdDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY0pPVTVIdVhVRXk4RTg0VUswa01xa0VLMXZyMmduQzV3U1ZaTVJoRkxtQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJScEx3L3plWXlhOVRDN2N0OWlYR2tKZ0d5L21NS0RGYXkxaHpUSnJwTE5RTytyczNaSTJlNnNJd1daR3JzcUF0YktLM1crcGJROUpwNHlkak9tUm9Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQK0tUa3hYdWNtQkNualc3R1AvSDNKZmdRQmpyYmlHV3Y4OWU4WmRMQ2YrM0lHcng2SC9lVVlPMkhtd01XaHZSMUtjdW5OR2xUbjVlMmtlZ2h6eFlDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODUzOTYwMTA6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjY3NTEwMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFFWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUVaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSDJPdERrTjFEblFxOG5wR2d3Mm9lMHBGRFBZelZBMkdzOUtYVXU5M1JEVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjMzNDg4NDM0LFwiY3VycmVudEluZGV4XCI6MTUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTAsMTVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  //  https://github.com/SuhailTechInfo/Suhail-Md


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
