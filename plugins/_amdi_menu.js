/**
*❖ ─── ✦ ──『✙』── ✦ ─── ❖*
╭─── ◈☆◈ ───
╰ *➣* *ᴘᴏsᴛ ʙy⭛⭛*
*.                 ₀₃₃₃₀₂₉₂₃₃₉*
*➳ᴹᴿ✿࿐Fᴀʜᴇᴇᴍ Kɪɴɢ♔︎*
*🅰️Lɪ 🅱️ᴀʙᴀ Eᴋ 🅰️ɴᴅᴀᴀᴢ 🅰️ɴᴅᴇᴋʜᴀ*
* @project_name Faheem King [WA Multi-device]
* @author Faheem King
* @version 4.0.7
* @file  _amdi_menu.js - QueenAmdi bot main menu

© 2023 Faheem King, Bot. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, amdiDB, _default, _default_list_sections, Language } = require('queen_amdi_core/dist/scripts');
const { getSettings } = amdiDB.settingsDB
const { amdiVoice } = _default
const { panelList } = _default_list_sections
const Lang = Language.getString('amdiMenu');

/**
 * @cmdInfos { cmd, desc, example, type, react, cmdHideInMenu }
 * @cmdTypes primary, download, logo, profile, admin
*/

AMDI({ cmd: ["panel", "list", "menu"], desc: "Faheem King Bot Main Menu", type: "primary", react: "📂" }, (async (amdiWA) => {
    let { input, prefix, sendAudioMsg, sendListMsg, msgDevice, sendername } = amdiWA.msgLayout;
   
    if (input) return;

    const audioURL = amdiVoice
    const pttStatus = true
    let mimeType = msgDevice == 'ios' ? 'audio/mp4' : 'audio/ogg; codecs=opus'
    await sendAudioMsg({ url: audioURL }, {mimetype: mimeType, ptt: pttStatus});
    const PANEL_HEADER = await getSettings('PANEL_HEADER');
    let text = !PANEL_HEADER.input || PANEL_HEADER.input == 'default' ? `\n*Hello!* ${sendername}` + Lang.panelText : PANEL_HEADER.input.keywords();

    var listInfo = {}
    listInfo.title = Lang.panelTitle
    listInfo.text = text
    listInfo.buttonTXT = 'Select category'

    const sections = panelList(prefix);
    return await sendListMsg(listInfo, sections);
}));
