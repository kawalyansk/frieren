//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`═•✧ೋ✧๑💜๑✧ೋ•═

╎✰ۣۜۜ͜͡💎 ${prefix}allmenu
╎✰ۣۜۜ͜͡🔎 ${prefix}searchmenu
╎✰ۣۜۜ͜͡🔻 ${prefix}downloadmenu
╎✰ۣۜۜ͜͡🍧 ${prefix}funmenu
╎✰ۣۜۜ͜͡👾 ${prefix}aimenu
╎✰ۣۜۜ͜͡🍥 ${prefix}groupmenu
╎✰ۣۜۜ͜͡☁️ ${prefix}ownermenu
╎✰ۣۜۜ͜͡✨️ ${prefix}convertmenunu
╎✰ۣۜۜ͜͡🍉 ${prefix}photooxymenu
╎✰ۣۜۜ͜͡🦊 ${prefix}animemenu
╎✰ۣۜۜ͜͡🔞 ${prefix}nsfwmenu
╎✰ۣۜۜ͜͡💜 ${prefix}stickermenu
╎✰ۣۜۜ͜͡🎭 ${prefix}bugmenu

═•✧ೋ✧๑💜๑✧ೋ•═`}

global.animemenu = (prefix) => {
return `═•✧ೋ✧๑🌸๑✧ೋ•═
        𝐌𝐄𝐍𝐔 𝐀𝐍𝐈𝐌𝐄𝐒       
═•✧ೋ✧๑🌸๑✧ೋ•═

╎✰ۣۜۜ͜͡🦊 ${prefix}stickhandhold
╎✰ۣۜۜ͜͡🦊 ${prefix}stickshinobu
╎✰ۣۜۜ͜͡🦊 ${prefix}stickcuddle
╎✰ۣۜۜ͜͡🦊 ${prefix}stickhighfive
╎✰ۣۜۜ͜͡🦊 ${prefix}stickdance
╎✰ۣۜۜ͜͡🦊 ${prefix}stickcringe
╎✰ۣۜۜ͜͡🦊 ${prefix}stickhappy
╎✰ۣۜۜ͜͡🦊 ${prefix}stickglomp
╎✰ۣۜۜ͜͡🦊 ${prefix}sticksmug
╎✰ۣۜۜ͜͡🦊 ${prefix}stickblush
╎✰ۣۜۜ͜͡🦊 ${prefix}stickawoo
╎✰ۣۜۜ͜͡🦊 ${prefix}stickwave
╎✰ۣۜۜ͜͡🦊 ${prefix}sticksmile
╎✰ۣۜۜ͜͡🦊 ${prefix}stickslap
╎✰ۣۜۜ͜͡🦊 ${prefix}stickpoke
╎✰ۣۜۜ͜͡🦊 ${prefix}stickwink
╎✰ۣۜۜ͜͡🦊 ${prefix}stickbonk
╎✰ۣۜۜ͜͡🦊 ${prefix}stickbully
╎✰ۣۜۜ͜͡🦊 ${prefix}stickyeet
╎✰ۣۜۜ͜͡🦊 ${prefix}stickbike
╎✰ۣۜۜ͜͡🦊 ${prefix}stickkiss
╎✰ۣۜۜ͜͡🦊 ${prefix}sticklick
╎✰ۣۜۜ͜͡🦊 ${prefix}stickpat
╎✰ۣۜۜ͜͡🦊 ${prefix}stickhug
╎✰ۣۜۜ͜͡🦊 ${prefix}stickkill
╎✰ۣۜۜ͜͡🦊 ${prefix}stickcry
╎✰ۣۜۜ͜͡🦊 ${prefix}stickspank
╎✰ۣۜۜ͜͡🦊 ${prefix}sticktickle
╎✰ۣۜۜ͜͡🦊 ${prefix}traceanime
╎✰ۣۜۜ͜͡🦊 ${prefix}akira
╎✰ۣۜۜ͜͡🦊 ${prefix}akiyama
╎✰ۣۜۜ͜͡🦊 ${prefix}ana
╎✰ۣۜۜ͜͡🦊 ${prefix}asuna
╎✰ۣۜۜ͜͡🦊 ${prefix}ayuzawa
╎✰ۣۜۜ͜͡🦊 ${prefix}boruto
╎✰ۣۜۜ͜͡🦊 ${prefix}chiho
╎✰ۣۜۜ͜͡🦊 ${prefix}chitoge
╎✰ۣۜۜ͜͡🦊 ${prefix}cosplayloli
╎✰ۣۜۜ͜͡🦊 ${prefix}cosplaysagiri
╎✰ۣۜۜ͜͡🦊 ${prefix}deidara
╎✰ۣۜۜ͜͡🦊 ${prefix}doraemon
╎✰ۣۜۜ͜͡🦊 ${prefix}elaina
╎✰ۣۜۜ͜͡🦊 ${prefix}emilia
╎✰ۣۜۜ͜͡🦊 ${prefix}erza
╎✰ۣۜۜ͜͡🦊 ${prefix}gremory
╎✰ۣۜۜ͜͡🦊 ${prefix}hestia
╎✰ۣۜۜ͜͡🦊 ${prefix}husbu
╎✰ۣۜۜ͜͡🦊 ${prefix}inori
╎✰ۣۜۜ͜͡🦊 ${prefix}isuzu
╎✰ۣۜۜ͜͡🦊 ${prefix}itachi
╎✰ۣۜۜ͜͡🦊 ${prefix}itori
╎✰ۣۜۜ͜͡🦊 ${prefix}kaga
╎✰ۣۜۜ͜͡🦊 ${prefix}kagura
╎✰ۣۜۜ͜͡🦊 ${prefix}kakasih
╎✰ۣۜۜ͜͡🦊 ${prefix}kaori
╎✰ۣۜۜ͜͡🦊 ${prefix}keneki
╎✰ۣۜۜ͜͡🦊 ${prefix}kotori
╎✰ۣۜۜ͜͡🦊 ${prefix}kurumi
╎✰ۣۜۜ͜͡🦊 ${prefix}loli
╎✰ۣۜۜ͜͡🦊 ${prefix}loli2
╎✰ۣۜۜ͜͡🦊 ${prefix}madara
╎✰ۣۜۜ͜͡🦊 ${prefix}megumin
╎✰ۣۜۜ͜͡🦊 ${prefix}mikasa
╎✰ۣۜۜ͜͡🦊 ${prefix}mikey
╎✰ۣۜۜ͜͡🦊 ${prefix}miku
╎✰ۣۜۜ͜͡🦊 ${prefix}minato
╎✰ۣۜۜ͜͡🦊 ${prefix}naruto
╎✰ۣۜۜ͜͡🦊 ${prefix}neko
╎✰ۣۜۜ͜͡🦊 ${prefix}nekonime
╎✰ۣۜۜ͜͡🦊 ${prefix}nezuko
╎✰ۣۜۜ͜͡🦊 ${prefix}onepiece
╎✰ۣۜۜ͜͡🦊 ${prefix}pokemon
╎✰ۣۜۜ͜͡🦊 ${prefix}randomnime
╎✰ۣۜۜ͜͡🦊 ${prefix}randomnime2
╎✰ۣۜۜ͜͡🦊 ${prefix}rize
╎✰ۣۜۜ͜͡🦊 ${prefix}sagiri
╎✰ۣۜۜ͜͡🦊 ${prefix}sakura
╎✰ۣۜۜ͜͡🦊 ${prefix}sasuke
╎✰ۣۜۜ͜͡🦊 ${prefix}shina
╎✰ۣۜۜ͜͡🦊 ${prefix}shinka
╎✰ۣۜۜ͜͡🦊 ${prefix}shinomiya
╎✰ۣۜۜ͜͡🦊 ${prefix}shizuka
╎✰ۣۜۜ͜͡🦊 ${prefix}shota
╎✰ۣۜۜ͜͡🦊 ${prefix}tejina
╎✰ۣۜۜ͜͡🦊 ${prefix}toukachan
╎✰ۣۜۜ͜͡🦊 ${prefix}tsunade
╎✰ۣۜۜ͜͡🦊 ${prefix}waifu
╎✰ۣۜۜ͜͡🦊 ${prefix}waifu2
╎✰ۣۜۜ͜͡🦊 ${prefix}animewall
╎✰ۣۜۜ͜͡🦊 ${prefix}yotsuba
╎✰ۣۜۜ͜͡🦊 ${prefix}yuki
╎✰ۣۜۜ͜͡🦊 ${prefix}yulibocil
╎✰ۣۜۜ͜͡🦊 ${prefix}yumeko
╎✰ۣۜۜ͜͡🦊 ${prefix}8ball
╎✰ۣۜۜ͜͡🦊 ${prefix}feed
╎✰ۣۜۜ͜͡🦊 ${prefix}animeawoo
╎✰ۣۜۜ͜͡🦊 ${prefix}animemegumin
╎✰ۣۜۜ͜͡🦊 ${prefix}animeshinobu
╎✰ۣۜۜ͜͡🦊 ${prefix}animehandhold
╎✰ۣۜۜ͜͡🦊 ${prefix}animehighfive
╎✰ۣۜۜ͜͡🦊 ${prefix}animecringe
╎✰ۣۜۜ͜͡🦊 ${prefix}animedance
╎✰ۣۜۜ͜͡🦊 ${prefix}animehappy
╎✰ۣۜۜ͜͡🦊 ${prefix}animeglomp
╎✰ۣۜۜ͜͡🦊 ${prefix}animeblush
╎✰ۣۜۜ͜͡🦊 ${prefix}animesmug
╎✰ۣۜۜ͜͡🦊 ${prefix}animewave
╎✰ۣۜۜ͜͡🦊 ${prefix}animesmille
╎✰ۣۜۜ͜͡🦊 ${prefix}animepoke
╎✰ۣۜۜ͜͡🦊 ${prefix}animewink
╎✰ۣۜۜ͜͡🦊 ${prefix}animebonk
╎✰ۣۜۜ͜͡🦊 ${prefix}animebully
╎✰ۣۜۜ͜͡🦊 ${prefix}animeyeet
╎✰ۣۜۜ͜͡🦊 ${prefix}animebite
╎✰ۣۜۜ͜͡🦊 ${prefix}animelick
╎✰ۣۜۜ͜͡🦊 ${prefix}animekill
╎✰ۣۜۜ͜͡🦊 ${prefix}animecry
╎✰ۣۜۜ͜͡🦊 ${prefix}animewlp
╎✰ۣۜۜ͜͡🦊 ${prefix}animekiss
╎✰ۣۜۜ͜͡🦊 ${prefix}animehug
╎✰ۣۜۜ͜͡🦊 ${prefix}animeneko
╎✰ۣۜۜ͜͡🦊 ${prefix}animepat
╎✰ۣۜۜ͜͡🦊 ${prefix}animeslap
╎✰ۣۜۜ͜͡🦊 ${prefix}animecuddle
╎✰ۣۜۜ͜͡🦊 ${prefix}animewaifu
╎✰ۣۜۜ͜͡🦊 ${prefix}animenom
╎✰ۣۜۜ͜͡🦊 ${prefix}animefoxgirl
╎✰ۣۜۜ͜͡🦊 ${prefix}animegecg
╎✰ۣۜۜ͜͡🦊 ${prefix}animetickle
╎✰ۣۜۜ͜͡🦊 ${prefix}animefeed
╎✰ۣۜۜ͜͡🦊 ${prefix}animeavatar
╎✰ۣۜۜ͜͡🦊 ${prefix}anime
╎✰ۣۜۜ͜͡🦊 ${prefix}animequote
╎✰ۣۜۜ͜͡🦊 ${prefix}avatar
╎✰ۣۜۜ͜͡🦊 ${prefix}shinobu
╎✰ۣۜۜ͜͡🦊 ${prefix}fox_girl
╎✰ۣۜۜ͜͡🦊 ${prefix}gecg

═•✧ೋ✧๑🌸๑✧ೋ•═
`}

global.ownermenu = (prefix) => {
return `═•✧ೋ✧๑☕️๑✧ೋ•═
           𝐌𝐄𝐍𝐔 𝐃𝐎𝐍𝐎      
═•✧ೋ✧๑☕️๑✧ೋ•═

╎✰ۣۜۜ͜͡☁️ ${prefix}autoread
╎✰ۣۜۜ͜͡☁️ ${prefix}autobio
╎✰ۣۜۜ͜͡☁️ ${prefix}autotype
╎✰ۣۜۜ͜͡☁️ ${prefix}unavailable
╎✰ۣۜۜ͜͡☁️ ${prefix}autorecord
╎✰ۣۜۜ͜͡☁️ ${prefix}autorecordtype
╎✰ۣۜۜ͜͡☁️ ${prefix}autoswview
╎✰ۣۜۜ͜͡☁️ ${prefix}setautoblock
╎✰ۣۜۜ͜͡☁️ ${prefix}setantiforeign
╎✰ۣۜۜ͜͡☁️ ${prefix}autoblock
╎✰ۣۜۜ͜͡☁️ ${prefix}onlygc
╎✰ۣۜۜ͜͡☁️ ${prefix}onlypc
╎✰ۣۜۜ͜͡☁️ ${prefix}onlyindia
╎✰ۣۜۜ͜͡☁️ ${prefix}onlyindo
╎✰ۣۜۜ͜͡☁️ ${prefix}anticall
╎✰ۣۜۜ͜͡☁️ ${prefix}self
╎✰ۣۜۜ͜͡☁️ ${prefix}public
╎✰ۣۜۜ͜͡☁️ ${prefix}join
╎✰ۣۜۜ͜͡☁️ ${prefix}poll
╎✰ۣۜۜ͜͡☁️ ${prefix}spam
╎✰ۣۜۜ͜͡☁️ ${prefix}bc
╎✰ۣۜۜ͜͡☁️ ${prefix}bcgroup
╎✰ۣۜۜ͜͡☁️ ${prefix}setmenu
╎✰ۣۜۜ͜͡☁️ ${prefix}setimgmenu
╎✰ۣۜۜ͜͡☁️ ${prefix}setvidmenu
╎✰ۣۜۜ͜͡☁️ ${prefix}setgifmenu
╎✰ۣۜۜ͜͡☁️ ${prefix}setreply
╎✰ۣۜۜ͜͡☁️ ${prefix}setprefix
╎✰ۣۜۜ͜͡☁️ ${prefix}addlimit
╎✰ۣۜۜ͜͡☁️ ${prefix}dellimit
╎✰ۣۜۜ͜͡☁️ ${prefix}resethit
╎✰ۣۜۜ͜͡☁️ ${prefix}resetuser
╎✰ۣۜۜ͜͡☁️ ${prefix}creategc
╎✰ۣۜۜ͜͡☁️ ${prefix}setexif
╎✰ۣۜۜ͜͡☁️ ${prefix}userjid
╎✰ۣۜۜ͜͡☁️ ${prefix}setbotbio
╎✰ۣۜۜ͜͡☁️ ${prefix}delppbot
╎✰ۣۜۜ͜͡☁️ ${prefix}shutdown
╎✰ۣۜۜ͜͡☁️ ${prefix}setppbot
╎✰ۣۜۜ͜͡☁️ ${prefix}addprem
╎✰ۣۜۜ͜͡☁️ ${prefix}delprem
╎✰ۣۜۜ͜͡☁️ ${prefix}addowner
╎✰ۣۜۜ͜͡☁️ ${prefix}delowner
╎✰ۣۜۜ͜͡☁️ ${prefix}addvn
╎✰ۣۜۜ͜͡☁️ ${prefix}addapk
╎✰ۣۜۜ͜͡☁️ ${prefix}addzip
╎✰ۣۜۜ͜͡☁️ ${prefix}addpdf
╎✰ۣۜۜ͜͡☁️ ${prefix}delapk
╎✰ۣۜۜ͜͡☁️ ${prefix}delzip
╎✰ۣۜۜ͜͡☁️ ${prefix}delpdf
╎✰ۣۜۜ͜͡☁️ ${prefix}delvn
╎✰ۣۜۜ͜͡☁️ ${prefix}addsticker
╎✰ۣۜۜ͜͡☁️ ${prefix}delsticker
╎✰ۣۜۜ͜͡☁️ ${prefix}addimage
╎✰ۣۜۜ͜͡☁️ ${prefix}delimage
╎✰ۣۜۜ͜͡☁️ ${prefix}addvideo
╎✰ۣۜۜ͜͡☁️ ${prefix}delvideo
╎✰ۣۜۜ͜͡☁️ ${prefix}addtitle
╎✰ۣۜۜ͜͡☁️ ${prefix}deltitle
╎✰ۣۜۜ͜͡☁️ ${prefix}upswtext
╎✰ۣۜۜ͜͡☁️ ${prefix}upswvideo
╎✰ۣۜۜ͜͡☁️ ${prefix}upswimage
╎✰ۣۜۜ͜͡☁️ ${prefix}upswaudio
╎✰ۣۜۜ͜͡☁️ ${prefix}autofigu
╎✰ۣۜۜ͜͡☁️ ${prefix}block
╎✰ۣۜۜ͜͡☁️ ${prefix}unblock
╎✰ۣۜۜ͜͡☁️ ${prefix}leavegc
╎✰ۣۜۜ͜͡☁️ ${prefix}pushcontact
╎✰ۣۜۜ͜͡☁️ ${prefix}pushcontactv2
╎✰ۣۜۜ͜͡☁️ ${prefix}pushcontactv3
╎✰ۣۜۜ͜͡☁️ ${prefix}jpm
╎✰ۣۜۜ͜͡☁️ ${prefix}post
╎✰ۣۜۜ͜͡☁️ ${prefix}clearall
╎✰ۣۜۜ͜͡☁️ ${prefix}pinchat
╎✰ۣۜۜ͜͡☁️ ${prefix}unpinchat
╎✰ۣۜۜ͜͡☁️ ${prefix}setcmd
╎✰ۣۜۜ͜͡☁️ ${prefix}delcmd
╎✰ۣۜۜ͜͡☁️ ${prefix}listcmd
╎✰ۣۜۜ͜͡☁️ ${prefix}lockcmd
╎✰ۣۜۜ͜͡☁️ ${prefix}addmsg
╎✰ۣۜۜ͜͡☁️ ${prefix}delmsg
╎✰ۣۜۜ͜͡☁️ ${prefix}getmsg
╎✰ۣۜۜ͜͡☁️ ${prefix}listmsg

═•✧ೋ✧๑☕️๑✧ೋ•═`}

global.othermenu = (prefix) => {
return `menu desativado <3`}

global.downloadmenu = (prefix) => {
return `═•✧ೋ✧๑🐼๑✧ೋ•═
    𝐌𝐄𝐍𝐔 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒       
═•✧ೋ✧๑🐼๑✧ೋ•═

╎✰ۣۜۜ͜͡🔻 ${prefix}xnxxdl
╎✰ۣۜۜ͜͡🔻 ${prefix}xvideodl
╎✰ۣۜۜ͜͡🔻 ${prefix}itunes
╎✰ۣۜۜ͜͡🔻 ${prefix}play
╎✰ۣۜۜ͜͡🔻 ${prefix}playvideo
╎✰ۣۜۜ͜͡🔻 ${prefix}tiktok
╎✰ۣۜۜ͜͡🔻 ${prefix}tiktokaudio
╎✰ۣۜۜ͜͡🔻 ${prefix}tiktokslide
╎✰ۣۜۜ͜͡🔻 ${prefix}instagram
╎✰ۣۜۜ͜͡🔻 ${prefix}facebook
╎✰ۣۜۜ͜͡🔻 ${prefix}twitter
╎✰ۣۜۜ͜͡🔻 ${prefix}capcut
╎✰ۣۜۜ͜͡🔻 ${prefix}apk
╎✰ۣۜۜ͜͡🔻 ${prefix}mega
╎✰ۣۜۜ͜͡🔻 ${prefix}mediafire
╎✰ۣۜۜ͜͡🔻 ${prefix}google
╎✰ۣۜۜ͜͡🔻 ${prefix}gimage
╎✰ۣۜۜ͜͡🔻 ${prefix}clima
╎✰ۣۜۜ͜͡🔻 ${prefix}gitclone
╎✰ۣۜۜ͜͡🔻 ${prefix}happymod
╎✰ۣۜۜ͜͡🔻 ${prefix}gdrive
╎✰ۣۜۜ͜͡🔻 ${prefix}pinterest
╎✰ۣۜۜ͜͡🔻 ${prefix}ringtone

═•✧ೋ✧๑🐼๑✧ೋ•═
`}

global.groupmenu = (prefix) => {
return `═•✧ೋ✧๑🦋๑✧ೋ•═
        𝐌𝐄𝐍𝐔 𝐆𝐑𝐔𝐏𝐎𝐒       
═•✧ೋ✧๑🦋๑✧ೋ•═

╎✰ۣۜۜ͜͡🍥 ${prefix}antibot
╎✰ۣۜۜ͜͡🍥 ${prefix}readviewonce
╎✰ۣۜۜ͜͡🍥 ${prefix}antiviewonce
╎✰ۣۜۜ͜͡🍥 ${prefix}welcome
╎✰ۣۜۜ͜͡🍥 ${prefix}adminevent
╎✰ۣۜۜ͜͡🍥 ${prefix}groupevent
╎✰ۣۜۜ͜͡🍥 ${prefix}antiforeign
╎✰ۣۜۜ͜͡🍥 ${prefix}antimedia
╎✰ۣۜۜ͜͡🍥 ${prefix}antiaudio
╎✰ۣۜۜ͜͡🍥 ${prefix}antivideo
╎✰ۣۜۜ͜͡🍥 ${prefix}antiimage
╎✰ۣۜۜ͜͡🍥 ${prefix}antidocument
╎✰ۣۜۜ͜͡🍥 ${prefix}antilocation
╎✰ۣۜۜ͜͡🍥 ${prefix}anticontact
╎✰ۣۜۜ͜͡🍥 ${prefix}antisticker
╎✰ۣۜۜ͜͡🍥 ${prefix}antipoll
╎✰ۣۜۜ͜͡🍥 ${prefix}antilink
╎✰ۣۜۜ͜͡🍥 ${prefix}antilinkgc
╎✰ۣۜۜ͜͡🍥 ${prefix}antipromotion
╎✰ۣۜۜ͜͡🍥 ${prefix}antivirtex
╎✰ۣۜۜ͜͡🍥 ${prefix}grouplink
╎✰ۣۜۜ͜͡🍥 ${prefix}listadmin
╎✰ۣۜۜ͜͡🍥 ${prefix}invite
╎✰ۣۜۜ͜͡🍥 ${prefix}ephemeral
╎✰ۣۜۜ͜͡🍥 ${prefix}delete
╎✰ۣۜۜ͜͡🍥 ${prefix}setppgroup
╎✰ۣۜۜ͜͡🍥 ${prefix}delppgroup
╎✰ۣۜۜ͜͡🍥 ${prefix}setnamegc
╎✰ۣۜۜ͜͡🍥 ${prefix}setdesc
╎✰ۣۜۜ͜͡🍥 ${prefix}add
╎✰ۣۜۜ͜͡🍥 ${prefix}ban
╎✰ۣۜۜ͜͡🍥 ${prefix}promover
╎✰ۣۜۜ͜͡🍥 ${prefix}rebaixar
╎✰ۣۜۜ͜͡🍥 ${prefix}kickall
╎✰ۣۜۜ͜͡🍥 ${prefix}promoteall
╎✰ۣۜۜ͜͡🍥 ${prefix}demoteall
╎✰ۣۜۜ͜͡🍥 ${prefix}getcontact
╎✰ۣۜۜ͜͡🍥 ${prefix}savecontact
╎✰ۣۜۜ͜͡🍥 ${prefix}sendcontact
╎✰ۣۜۜ͜͡🍥 ${prefix}contactag
╎✰ۣۜۜ͜͡🍥 ${prefix}hidetag
╎✰ۣۜۜ͜͡🍥 ${prefix}totag
╎✰ۣۜۜ͜͡🍥 ${prefix}tagall
╎✰ۣۜۜ͜͡🍥 ${prefix}editinfo
╎✰ۣۜۜ͜͡🍥 ${prefix}opentime
╎✰ۣۜۜ͜͡🍥 ${prefix}closetime
╎✰ۣۜۜ͜͡🍥 ${prefix}resetlink
╎✰ۣۜۜ͜͡🍥 ${prefix}getbio
╎✰ۣۜۜ͜͡🍥 ${prefix}vote
╎✰ۣۜۜ͜͡🍥 ${prefix}upvote
╎✰ۣۜۜ͜͡🍥 ${prefix}downvote
╎✰ۣۜۜ͜͡🍥 ${prefix}checkvote
╎✰ۣۜۜ͜͡🍥 ${prefix}delvote
╎✰ۣۜۜ͜͡🍥 ${prefix}antivirus
╎✰ۣۜۜ͜͡🍥 ${prefix}antitoxic
╎✰ۣۜۜ͜͡🍥 ${prefix}nsfw
╎✰ۣۜۜ͜͡🍥 ${prefix}react
╎✰ۣۜۜ͜͡🍥 ${prefix}getjoinrequest

═•✧ೋ✧๑🦋๑✧ೋ•═
`}

global.funmenu = (prefix) => {
return `═•✧ೋ✧๑🍰๑✧ೋ•═
      𝐌𝐄𝐍𝐔 𝐃𝐈𝐕𝐄𝐑𝐒𝐀𝐎
═•✧ೋ✧๑🍰๑✧ೋ•═

╎✰ۣۜۜ͜͡🍧 ${prefix}define
╎✰ۣۜۜ͜͡🍧 ${prefix}readmore
╎✰ۣۜۜ͜͡🍧 ${prefix}fact
╎✰ۣۜۜ͜͡🍧 ${prefix}casal
╎✰ۣۜۜ͜͡🍧 ${prefix}soulmate
╎✰ۣۜۜ͜͡🍧 ${prefix}stupidcheck
╎✰ۣۜۜ͜͡🍧 ${prefix}handsomecheck
╎✰ۣۜۜ͜͡🍧 ${prefix}uncleancheck
╎✰ۣۜۜ͜͡🍧 ${prefix}hotcheck
╎✰ۣۜۜ͜͡🍧 ${prefix}smartcheck
╎✰ۣۜۜ͜͡🍧 ${prefix}greatcheck
╎✰ۣۜۜ͜͡🍧 ${prefix}evilcheck
╎✰ۣۜۜ͜͡🍧 ${prefix}dogcheck
╎✰ۣۜۜ͜͡🍧 ${prefix}coolcheck
╎✰ۣۜۜ͜͡🍧 ${prefix}waifucheck
╎✰ۣۜۜ͜͡🍧 ${prefix}awesomecheck
╎✰ۣۜۜ͜͡🍧 ${prefix}gaycheck
╎✰ۣۜۜ͜͡🍧 ${prefix}cutecheck
╎✰ۣۜۜ͜͡🍧 ${prefix}lesbiancheck
╎✰ۣۜۜ͜͡🍧 ${prefix}hornycheck
╎✰ۣۜۜ͜͡🍧 ${prefix}prettycheck
╎✰ۣۜۜ͜͡🍧 ${prefix}lovelycheck
╎✰ۣۜۜ͜͡🍧 ${prefix}uglycheck
╎✰ۣۜۜ͜͡🍧 ${prefix}pick
╎✰ۣۜۜ͜͡🍧 ${prefix}pickupline
╎✰ۣۜۜ͜͡🍧 ${prefix}quotes
╎✰ۣۜۜ͜͡🍧 ${prefix}can
╎✰ۣۜۜ͜͡🍧 ${prefix}is
╎✰ۣۜۜ͜͡🍧 ${prefix}when
╎✰ۣۜۜ͜͡🍧 ${prefix}where
╎✰ۣۜۜ͜͡🍧 ${prefix}what
╎✰ۣۜۜ͜͡🍧 ${prefix}how
╎✰ۣۜۜ͜͡🍧 ${prefix}rate
╎✰ۣۜۜ͜͡🍧 ${prefix}cry
╎✰ۣۜۜ͜͡🍧 ${prefix}kill
╎✰ۣۜۜ͜͡🍧 ${prefix}hug
╎✰ۣۜۜ͜͡🍧 ${prefix}pat
╎✰ۣۜۜ͜͡🍧 ${prefix}lick
╎✰ۣۜۜ͜͡🍧 ${prefix}beijar
╎✰ۣۜۜ͜͡🍧 ${prefix}bite
╎✰ۣۜۜ͜͡🍧 ${prefix}yeet
╎✰ۣۜۜ͜͡🍧 ${prefix}bully
╎✰ۣۜۜ͜͡🍧 ${prefix}bonk
╎✰ۣۜۜ͜͡🍧 ${prefix}wink
╎✰ۣۜۜ͜͡🍧 ${prefix}poke
╎✰ۣۜۜ͜͡🍧 ${prefix}nom
╎✰ۣۜۜ͜͡🍧 ${prefix}slap
╎✰ۣۜۜ͜͡🍧 ${prefix}smile
╎✰ۣۜۜ͜͡🍧 ${prefix}wave
╎✰ۣۜۜ͜͡🍧 ${prefix}awoo
╎✰ۣۜۜ͜͡🍧 ${prefix}blush
╎✰ۣۜۜ͜͡🍧 ${prefix}smug
╎✰ۣۜۜ͜͡🍧 ${prefix}glomp
╎✰ۣۜۜ͜͡🍧 ${prefix}happy
╎✰ۣۜۜ͜͡🍧 ${prefix}dance
╎✰ۣۜۜ͜͡🍧 ${prefix}cringe
╎✰ۣۜۜ͜͡🍧 ${prefix}cuddle
╎✰ۣۜۜ͜͡🍧 ${prefix}highfive
╎✰ۣۜۜ͜͡🍧 ${prefix}handhold
╎✰ۣۜۜ͜͡🍧 ${prefix}espancar
╎✰ۣۜۜ͜͡🍧 ${prefix}tickle
╎✰ۣۜۜ͜͡🍧 ${prefix}feed
╎✰ۣۜۜ͜͡🍧 ${prefix}checkme
╎✰ۣۜۜ͜͡🍧 ${prefix}sound1 - sound161

═•✧ೋ✧๑🍰๑✧ೋ•═
`}

global.stalkermenu = (prefix) => {
return `menu desativado <3
`}

global.stickermenu = (prefix) => {
return `═•✧ೋ✧๑♦️๑✧ೋ•═
    𝐌𝐄𝐍𝐔 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒       
═•✧ೋ✧๑♦️๑✧ೋ•═

╎✰ۣۜۜ͜͡💜 ${prefix}goose
╎✰ۣۜۜ͜͡💜 ${prefix}woof
╎✰ۣۜۜ͜͡💜 ${prefix}8ball
╎✰ۣۜۜ͜͡💜 ${prefix}lizard
╎✰ۣۜۜ͜͡💜 ${prefix}meow
╎✰ۣۜۜ͜͡💜 ${prefix}gura
╎✰ۣۜۜ͜͡💜 ${prefix}telestick
╎✰ۣۜۜ͜͡💜 ${prefix}ttp

═•✧ೋ✧๑♦️๑✧ೋ•═
`}

global.storemenu = (prefix) => {
return `menu desativado <3
`}

global.aimenu = (prefix) => {
return `═•✧ೋ✧๑🍾๑✧ೋ•═
              𝐌𝐄𝐍𝐔 𝐈𝐀      
═•✧ೋ✧๑🍾๑✧ೋ•═

╎✰ۣۜۜ͜͡👾 ${prefix}openai-indo
╎✰ۣۜۜ͜͡👾 ${prefix}indo-ai
╎✰ۣۜۜ͜͡👾 ${prefix}diffusion
╎✰ۣۜۜ͜͡👾 ${prefix}photoleap
╎✰ۣۜۜ͜͡👾 ${prefix}openai
╎✰ۣۜۜ͜͡👾 ${prefix}dalle
╎✰ۣۜۜ͜͡👾 ${prefix}ai
╎✰ۣۜۜ͜͡👾 ${prefix}remini
╎✰ۣۜۜ͜͡👾 ${prefix}simi
╎✰ۣۜۜ͜͡👾 ${prefix}removebg
╎✰ۣۜۜ͜͡👾 ${prefix}tozombie

═•✧ೋ✧๑🍾๑✧ೋ•═
`}

global.bugmenu = (prefix) => {
return `═•✧ೋ✧๑🛡๑✧ೋ•═
         𝐌𝐄𝐍𝐔 𝐓𝐑𝐀𝐕𝐀𝐒    
═•✧ೋ✧๑🛡๑✧ೋ•═

╎✰ۣۜۜ͜͡🎭 ${prefix}xreact
╎✰ۣۜۜ͜͡🎭 ${prefix}x
╎✰ۣۜۜ͜͡🎭 ${prefix}x2
╎✰ۣۜۜ͜͡🎭 ${prefix}iosbug
╎✰ۣۜۜ͜͡🎭 ${prefix}iosbug2
╎✰ۣۜۜ͜͡🎭 ${prefix}xaudio
╎✰ۣۜۜ͜͡🎭 ${prefix}xaudio2
╎✰ۣۜۜ͜͡🎭 ${prefix}xsticker
╎✰ۣۜۜ͜͡🎭 ${prefix}xsticker2
╎✰ۣۜۜ͜͡🎭 ${prefix}xloc
╎✰ۣۜۜ͜͡🎭 ${prefix}xloc2
╎✰ۣۜۜ͜͡🎭 ${prefix}xlist
╎✰ۣۜۜ͜͡🎭 ${prefix}xlist2
╎✰ۣۜۜ͜͡🎭 ${prefix}xkill
╎✰ۣۜۜ͜͡🎭 ${prefix}xkill2
╎✰ۣۜۜ͜͡🎭 ${prefix}xkillgc
╎✰ۣۜۜ͜͡🎭 ${prefix}tempban
╎✰ۣۜۜ͜͡🎭 ${prefix}xcrash
╎✰ۣۜۜ͜͡🎭 ${prefix}xcrash2
╎✰ۣۜۜ͜͡🎭 ${prefix}xioscrash
╎✰ۣۜۜ͜͡🎭 ${prefix}xioscrash2
╎✰ۣۜۜ͜͡🎭 ${prefix}iosgoogle
╎✰ۣۜۜ͜͡🎭 ${prefix}iosgoogle2
╎✰ۣۜۜ͜͡🎭 ${prefix}iosq
╎✰ۣۜۜ͜͡🎭 ${prefix}amountbug
╎✰ۣۜۜ͜͡🎭 ${prefix}pmbug
╎✰ۣۜۜ͜͡🎭 ${prefix}delaybug
╎✰ۣۜۜ͜͡🎭 ${prefix}docubug
╎✰ۣۜۜ͜͡🎭 ${prefix}unlimitedbug
╎✰ۣۜۜ͜͡🎭 ${prefix}bombug
╎✰ۣۜۜ͜͡🎭 ${prefix}lagbug
╎✰ۣۜۜ͜͡🎭 ${prefix}trollybug
╎✰ۣۜۜ͜͡🎭 ${prefix}gcbug
╎✰ۣۜۜ͜͡🎭 ${prefix}delaygcbug
╎✰ۣۜۜ͜͡🎭 ${prefix}laggcbug
╎✰ۣۜۜ͜͡🎭 ${prefix}bomgcbug
╎✰ۣۜۜ͜͡🎭 ${prefix}unlimitedgcbug
╎✰ۣۜۜ͜͡🎭 ${prefix}trollygcbug
╎✰ۣۜۜ͜͡🎭 ${prefix}docugcbug
╎✰ۣۜۜ͜͡🎭 ${prefix}verif
╎✰ۣۜۜ͜͡🎭 ${prefix}banv1
╎✰ۣۜۜ͜͡🎭 ${prefix}banv2
╎✰ۣۜۜ͜͡🎭 ${prefix}xioscrash
╎✰ۣۜۜ͜͡🎭 ${prefix}xioscrash2
╎✰ۣۜۜ͜͡🎭 ${prefix}iosgoogle
╎✰ۣۜۜ͜͡🎭 ${prefix}iosgoogle2
╎✰ۣۜۜ͜͡🎭 ${prefix}iosq
╎✰ۣۜۜ͜͡🎭 ${prefix}amountbug
╎✰ۣۜۜ͜͡🎭 ${prefix}pmbug
╎✰ۣۜۜ͜͡🎭 ${prefix}delaybug
╎✰ۣۜۜ͜͡🎭 ${prefix}docubug
╎✰ۣۜۜ͜͡🎭 ${prefix}unlimitedbug
╎✰ۣۜۜ͜͡🎭 ${prefix}bombug
╎✰ۣۜۜ͜͡🎭 ${prefix}lagbug
╎✰ۣۜۜ͜͡🎭 ${prefix}trollybug
╎✰ۣۜۜ͜͡🎭 ${prefix}gcbug
╎✰ۣۜۜ͜͡🎭 ${prefix}delaygcbug
╎✰ۣۜۜ͜͡🎭 ${prefix}laggcbug
╎✰ۣۜۜ͜͡🎭 ${prefix}bomgcbug
╎✰ۣۜۜ͜͡🎭 ${prefix}unlimitedgcbug
╎✰ۣۜۜ͜͡🎭 ${prefix}trollygcbug
╎✰ۣۜۜ͜͡🎭 ${prefix}docugcbug
╎✰ۣۜۜ͜͡🎭 ${prefix}verif
╎✰ۣۜۜ͜͡🎭 ${prefix}banv1
╎✰ۣۜۜ͜͡🎭 ${prefix}banv2
╎✰ۣۜۜ͜͡🎭 ${prefix}banv3
╎✰ۣۜۜ͜͡🎭 ${prefix}banv4
╎✰ۣۜۜ͜͡🎭 ${prefix}banv5
╎✰ۣۜۜ͜͡🎭 ${prefix}banv6
╎✰ۣۜۜ͜͡🎭 ${prefix}unbanv1
╎✰ۣۜۜ͜͡🎭 ${prefix}unbanv2
╎✰ۣۜۜ͜͡🎭 ${prefix}unbanv3
╎✰ۣۜۜ͜͡🎭 ${prefix}unbanv4
╎✰ۣۜۜ͜͡🎭 ${prefix}unbanv5

═•✧ೋ✧๑🛡๑✧ೋ•═
`}

global.randphotomenu = (prefix) => {
return `menu desativado <3
`}

global.randvideomenu = (prefix) => {
return `menu desativado <3
`}

global.photooxymenu = (prefix) => {
return `═•✧ೋ✧๑🍭๑✧ೋ•═
        𝐌𝐄𝐍𝐔 𝐄𝐅𝐄𝐈𝐓𝐎𝐒
═•✧ೋ✧๑🍭๑✧ೋ•═

╎✰ۣۜۜ͜͡🍉 ${prefix}shadow
╎✰ۣۜۜ͜͡🍉 ${prefix}write
╎✰ۣۜۜ͜͡🍉 ${prefix}romantic
╎✰ۣۜۜ͜͡🍉 ${prefix}burnpaper
╎✰ۣۜۜ͜͡🍉 ${prefix}smoke
╎✰ۣۜۜ͜͡🍉 ${prefix}narutobanner
╎✰ۣۜۜ͜͡🍉 ${prefix}love
╎✰ۣۜۜ͜͡🍉 ${prefix}undergrass
╎✰ۣۜۜ͜͡🍉 ${prefix}doublelove
╎✰ۣۜۜ͜͡🍉 ${prefix}coffecup
╎✰ۣۜۜ͜͡🍉 ${prefix}underwaterocean
╎✰ۣۜۜ͜͡🍉 ${prefix}smokyneon
╎✰ۣۜۜ͜͡🍉 ${prefix}starstext
╎✰ۣۜۜ͜͡🍉 ${prefix}rainboweffect
╎✰ۣۜۜ͜͡🍉 ${prefix}balloontext
╎✰ۣۜۜ͜͡🍉 ${prefix}metalliceffect
╎✰ۣۜۜ͜͡🍉 ${prefix}embroiderytext
╎✰ۣۜۜ͜͡🍉 ${prefix}flamingtext
╎✰ۣۜۜ͜͡🍉 ${prefix}stonetext
╎✰ۣۜۜ͜͡🍉 ${prefix}writeart
╎✰ۣۜۜ͜͡🍉 ${prefix}summertext
╎✰ۣۜۜ͜͡🍉 ${prefix}wolfmetaltext
╎✰ۣۜۜ͜͡🍉 ${prefix}nature3dtext
╎✰ۣۜۜ͜͡🍉 ${prefix}rosestext
╎✰ۣۜۜ͜͡🍉 ${prefix}naturetypography
╎✰ۣۜۜ͜͡🍉 ${prefix}quotesunder
╎✰ۣۜۜ͜͡🍉 ${prefix}shinetext

═•✧ೋ✧๑🍭๑✧ೋ•═
`}

global.nsfwmenu = (prefix) => {
return `═•✧ೋ✧๑💘๑✧ೋ•═
           𝐌𝐄𝐍𝐔 𝐍𝐅𝐒𝐖
═•✧ೋ✧๑💘๑✧ೋ•═

╎✰ۣۜۜ͜͡🔞 ${prefix}hentai 
╎✰ۣۜۜ͜͡🔞 ${prefix}gifblowjob 
╎✰ۣۜۜ͜͡🔞 ${prefix}hentaivid 
╎✰ۣۜۜ͜͡🔞 ${prefix}hneko 
╎✰ۣۜۜ͜͡🔞 ${prefix}nwaifu 
╎✰ۣۜۜ͜͡🔞 ${prefix}animespank 
╎✰ۣۜۜ͜͡🔞 ${prefix}trap 
╎✰ۣۜۜ͜͡🔞 ${prefix}blowjob 
╎✰ۣۜۜ͜͡🔞 ${prefix}cuckold 
╎✰ۣۜۜ͜͡🔞 ${prefix}milf 
╎✰ۣۜۜ͜͡🔞 ${prefix}eba 
╎✰ۣۜۜ͜͡🔞 ${prefix}pussy 
╎✰ۣۜۜ͜͡🔞 ${prefix}yuri 
╎✰ۣۜۜ͜͡🔞 ${prefix}zettai 

═•✧ೋ✧๑💘๑✧ೋ•═
`}

global.gamemenu = (prefix) => {
return `menu desativado <3
`}

global.religionmenu = (prefix) => {
return `menu desativado <3
`}

global.searchmenu = (prefix) => {
return `═•✧ೋ✧๑🥂๑✧ೋ•═
         𝐌𝐄𝐍𝐔 𝐁𝐔𝐒𝐂𝐀𝐒
═•✧ೋ✧๑🥂๑✧ೋ•═

╎✰ۣۜۜ͜͡🔍 ${prefix}google 
╎✰ۣۜۜ͜͡🔍 ${prefix}wikipedia 
╎✰ۣۜۜ͜͡🔍 ${prefix}ytsearch 
╎✰ۣۜۜ͜͡🔍 ${prefix}xnxxsearch 
╎✰ۣۜۜ͜͡🔍 ${prefix}xvideosearch 
╎✰ۣۜۜ͜͡🔍 ${prefix}apksearch 
╎✰ۣۜۜ͜͡🔍 ${prefix}stickersearch 
╎✰ۣۜۜ͜͡🔍 ${prefix}imdb 
╎✰ۣۜۜ͜͡🔍 ${prefix}wanumber 
╎✰ۣۜۜ͜͡🔍 ${prefix}friend 
╎✰ۣۜۜ͜͡🔍 ${prefix}letras 

═•✧ೋ✧๑🥂๑✧ೋ•═
`}

global.convertmenu = (prefix) => {
return `═•✧ೋ✧๑🍨๑✧ೋ•═
    𝐌𝐄𝐍𝐔 𝐂𝐎𝐍𝐕𝐄𝐑𝐒𝐀𝐎
═•✧ೋ✧๑🍨๑✧ೋ•═

╎✰ۣۜۜ͜͡✨️ ${prefix}obfuscate 
╎✰ۣۜۜ͜͡✨️ ${prefix}styletext 
╎✰ۣۜۜ͜͡✨️ ${prefix}fliptext 
╎✰ۣۜۜ͜͡✨️ ${prefix}tts 
╎✰ۣۜۜ͜͡✨️ ${prefix}say 
╎✰ۣۜۜ͜͡✨️ ${prefix}togif 
╎✰ۣۜۜ͜͡✨️ ${prefix}toqr 
╎✰ۣۜۜ͜͡✨️ ${prefix}bass 
╎✰ۣۜۜ͜͡✨️ ${prefix}blown 
╎✰ۣۜۜ͜͡✨️ ${prefix}deep 
╎✰ۣۜۜ͜͡✨️ ${prefix}earrape 
╎✰ۣۜۜ͜͡✨️ ${prefix}fast 
╎✰ۣۜۜ͜͡✨️ ${prefix}fat 
╎✰ۣۜۜ͜͡✨️ ${prefix}nightcore 
╎✰ۣۜۜ͜͡✨️ ${prefix}reverse 
╎✰ۣۜۜ͜͡✨️ ${prefix}robot 
╎✰ۣۜۜ͜͡✨️ ${prefix}slow 
╎✰ۣۜۜ͜͡✨️ ${prefix}smooth 
╎✰ۣۜۜ͜͡✨️ ${prefix}squirrel 
╎✰ۣۜۜ͜͡✨️ ${prefix}tinyurl 
╎✰ۣۜۜ͜͡✨️ ${prefix}tovn 
╎✰ۣۜۜ͜͡✨️ ${prefix}toaudio 
╎✰ۣۜۜ͜͡✨️ ${prefix}tomp3 
╎✰ۣۜۜ͜͡✨️ ${prefix}tomp4 
╎✰ۣۜۜ͜͡✨️ ${prefix}toimg 
╎✰ۣۜۜ͜͡✨️ ${prefix}toonce 
╎✰ۣۜۜ͜͡✨️ ${prefix}sticker 
╎✰ۣۜۜ͜͡✨️ ${prefix}smeme 
╎✰ۣۜۜ͜͡✨️ ${prefix}smeta 
╎✰ۣۜۜ͜͡✨️ ${prefix}take 
╎✰ۣۜۜ͜͡✨️ ${prefix}emoji 
╎✰ۣۜۜ͜͡✨️ ${prefix}volaudio 
╎✰ۣۜۜ͜͡✨️ ${prefix}volvideo 
╎✰ۣۜۜ͜͡✨️ ${prefix}ebinary 
╎✰ۣۜۜ͜͡✨️ ${prefix}dbinary 
╎✰ۣۜۜ͜͡✨️ ${prefix}ssweb 
╎✰ۣۜۜ͜͡✨️ ${prefix}quoted 
╎✰ۣۜۜ͜͡✨️ ${prefix}translate 

═•✧ೋ✧๑🍨๑✧ೋ•═
`}

global.listmenu = (prefix) => {
return `═•✧ೋ✧๑🔶️๑✧ೋ•═
           𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓𝐀
═•✧ೋ✧๑🔶️๑✧ೋ•═

╎✰ۣۜۜ͜͡🗒 ${prefix}listprem
╎✰ۣۜۜ͜͡🗒 ${prefix}listowner
╎✰ۣۜۜ͜͡🗒 ${prefix}liststicker
╎✰ۣۜۜ͜͡🗒 ${prefix}listimage
╎✰ۣۜۜ͜͡🗒 ${prefix}listvideo
╎✰ۣۜۜ͜͡🗒 ${prefix}listvn
╎✰ۣۜۜ͜͡🗒 ${prefix}listapk
╎✰ۣۜۜ͜͡🗒 ${prefix}listzip
╎✰ۣۜۜ͜͡🗒 ${prefix}listpdf
╎✰ۣۜۜ͜͡🗒 ${prefix}listbadword
╎✰ۣۜۜ͜͡🗒 ${prefix}listpc
╎✰ۣۜۜ͜͡🗒 ${prefix}listgc

═•✧ೋ✧๑🔶️๑✧ೋ•═
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})