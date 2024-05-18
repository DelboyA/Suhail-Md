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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254 773 440758,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_36_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMixcbiAgICAgICAgMTE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA3NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA3LFxuICAgICAgICA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAyLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwLFxuICAgICAgICAxODksXG4gICAgICAgIDcwLFxuICAgICAgICA5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm4rMk5LUUJteUF4YjhBOWpTejAxT08wZlBCRlNjd0pxNzE5dkFlVEN1OXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzczNDQwNzU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUFEMkQzQzU3OUUxMzY4RDdCMTAyMjFGMkEyMDk4OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTYwMTQxNTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZjRDZGZxb0hSX0dLQjNmNVZ5T3RsUVwiLFxuICBcInBob25lSWRcIjogXCJlMzdmNjYxYS1hZjBhLTRmZTktODdmMS03MmZhNjU2MDFiNjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAyMjAsXG4gICAgICAxMSxcbiAgICAgIDg2LFxuICAgICAgMTgsXG4gICAgICAxODUsXG4gICAgICAxMDEsXG4gICAgICAyMTYsXG4gICAgICAxNjksXG4gICAgICAzMyxcbiAgICAgIDE2MSxcbiAgICAgIDE4OCxcbiAgICAgIDIwLFxuICAgICAgMTY0LFxuICAgICAgNjksXG4gICAgICA5NCxcbiAgICAgIDQ2LFxuICAgICAgNCxcbiAgICAgIDMsXG4gICAgICA2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDE3NCxcbiAgICAgIDI5LFxuICAgICAgMTc3LFxuICAgICAgNjgsXG4gICAgICAyMjcsXG4gICAgICAxMzUsXG4gICAgICAxNzIsXG4gICAgICAyLFxuICAgICAgMjU0LFxuICAgICAgNTksXG4gICAgICA3NCxcbiAgICAgIDEwNixcbiAgICAgIDE5MCxcbiAgICAgIDE4OCxcbiAgICAgIDIxMixcbiAgICAgIDEzOCxcbiAgICAgIDIyMSxcbiAgICAgIDIzMSxcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjc1RFdTQkMyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NzM0NDA3NTg6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTg5ODc0NjI5NDQwNjoxM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZi/8J2ZgPCdmYfwnZi98J2ZivCdmZQg8J2YvPCdmYnwnZmE8J2ZgPCdmZTwn5iOXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG0razlNQ0VNV1lvYklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCeUFlcGwwRmx6TGE1VzVSSlBxeXFSN2J5NXBTd1RFSGxaZVlNTzVYYWdZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdiY3F1WG9QMTNPZHJPK3NzYjhCczR3dWVlYUtqWXhCQ3k2bDFrejIxb3ZXRzRRaDZOTnpUdkFKZUpHa1JyRzZGWThNQ2JzSnQ4aVcwU0lXLzNxN0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVLY3huZFBMZzBhaktwR0ZrQUZFNkpXRFl6OXA0Y3hzdWpyS0FjbmoxT3pBeW1UYU9WeWd0ekt4SzVVbzAvWUVxcEoxcjRmNkIzRlpwRWNwQnRSOWdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc3MzQ0MDc1ODoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2MDE0MTUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFBrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEUGsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtQ3JwQ3hLRTVSMVFxVFo1VVpRL1oycWhHOHMyWWFPeWdGUjJ0OXhrWWc4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxMTI1MzgxNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2MDE0MTU1OTUxXCJ9Igp9"  //  https://github.com/SuhailTechInfo/Suhail-Md


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
