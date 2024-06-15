 

<h1 align="center">Frieren<br></h1>

-------

## ```Connect With Me```
<p align="center">
<a href="https://youtube.com/@DGXeon"><img src="https://img.shields.io/badge/YouTube-ff0000?style=for-the-badge&logo=youtube&logoColor=ff000000&link=https://youtube.com/@DGXeon" /><br>
<a href="https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"><img src="https://img.shields.io/badge/WhatsApp Channel-25D366?style=for-the-badge&logo=whatsapp&logoColor=white&link=https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20" /><br>
<a href="https://t.me/xeonbotinc"><img src="https://img.shields.io/badge/Telegram-00FFFF?style=for-the-badge&logo=telegram&logoColor=white" />
<a href="https://chat.whatsapp.com/BW0o3ZyiAF5Azb1bIqG9Ue"><img src="https://img.shields.io/badge/WhatsApp Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
<a href="https://www.instagram.com/unicorn_xeon13?igsh=MzNlNGNkZWQ4Mg=="><img src="https://img.shields.io/badge/Instagram-A020F0?style=for-the-badge&logo=instagram&logoColor=white" />
</p>




## ` BUILDPACKS`

```
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/DGXeon/CheemsBot-MD11/)

# Install Manually 👇
## `Requirements`
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip)
* [Libwebp](https://developers.google.com/speed/webp/download)
* Any text editor
## `Clone Repo & Installation dependencies`
```bash
git clone https://github.com/DGXeon/CheemsBot-MD11.git
cd CheemsBot-MD11

npm start
```
## `For Termux/Ssh/Ubuntu`
```bash
apt update
apt upgrade
pkg update && pkg upgrade
pkg install bash
pkg install libwebp
pkg install git -y
pkg install nodejs -y 
pkg install ffmpeg -y 
pkg install wget
pkg install imagemagick -y
git clone https://github.com/DGXeon/CheemsBot-MD11
cd CheemsBot-MD11
yarn install
npm start
```
## `For VPS`
```bash
apt install nodejs 
apt install git 
apt apt install ffmpeg 
apt apt install libwebp 
apt apt install imagrmagick
apt install bash
git clone https://github.com/DGXeon/CheemsBot-MD11
cd CheemsBot-MD11
npm start
```
## `For 24/7 Activation (Termux)`
```bash
npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
```
