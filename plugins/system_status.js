/**
* @project_name Faheem King Bot
* @author Faheem King
* @version 4.0.7
* @file  system_status.js - QueenAmdi system status

© 2023 Faheem King, Bot. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, amdiDB, customizeButtons, _default, Language, Package, system_stats } = require('queen_amdi_core/dist/scripts')
const { aliveTXT0, alivePicURL0 } = _default
const { getSettings } = amdiDB.settingsDB
const { customAlive } = customizeButtons
const Lang = Language.getString('system_status');

AMDI({ cmd: ["alive", "hi", "online"], desc: Lang.AliveDesc, type: "primary", react: "💃🏻" }, (async (amdiWA) => {
    let { prefix, sendButtonsMsg } = amdiWA.msgLayout;

    var ALIVE_MSG = await getSettings("ALIVE_MSG");
    if (ALIVE_MSG.input === 'default' || ALIVE_MSG.input == undefined) {
        const buttons = [
            {type: "url", displayText: "💃🏻 Official Website", url: '*➳ᴹᴿ✿࿐Fᴀʜᴇᴇᴍ Kɪɴɢ♔︎*'},
            {type: "url", displayText: "🎞️ AN Tech YouTube Channel", url: '*➳ᴹᴿ✿࿐Fᴀʜᴇᴇᴍ Kɪɴɢ♔︎*'},
            {type: "click", displayText: Lang.sysStats, buttonCMD: `${prefix}system`},
            {type: "click", displayText: Lang.vercheck, buttonCMD: `${prefix}qaversion`}
        ]
        return await sendButtonsMsg(buttons, {text: aliveTXT0, image: {url: alivePicURL0}, tagMsg: true});
    } else {
        const customMap = ALIVE_MSG.input
        await customAlive(amdiWA.web, customMap, amdiWA.msgLayout, getSettings);
    }
}));


AMDI({ cmd: "ping", desc: Lang.PingDesc, type: "primary", react: "📍" }, (async (amdiWA) => {
    let { reply, sendText } = amdiWA.msgLayout
    var start = new Date()
    var checkSTS = await sendText('_Pinging to amdiModule_', {});
    var end = new Date()
    await reply(`📍 *Ping: ` + (end - start) + 'ms*');
    return await amdiWA.web.sendMessage(amdiWA.clientJID, { delete: checkSTS.key })
}));


AMDI({ cmd: "system", desc: "Bot Status", cmdHideInMenu: true }, (async (amdiWA) => {
    let { reply } = amdiWA.msgLayout;
    
    return await reply(system_stats(), "💻");
}));


AMDI({ cmd: ["qaversion", "version"], desc: "Version check", cmdHideInMenu: true }, (async (amdiWA) => {
    let { reply } = amdiWA.msgLayout;
    const version = Package.version
    return await reply(`*🧬 Faheem King Bot 🧬*\n\n` + '```Installed version``` : ' + version +'\n' + '\n```Check github``` : ');
}));
