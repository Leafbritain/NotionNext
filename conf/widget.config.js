/**
 * 悬浮在网页上的挂件
 */
module.exports = {
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  // Chatbase 是否显示chatbase机器人 https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // WebwhizAI 机器人 @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 是否显示
  WEB_WHIZ_BASE_URL:
    process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 可以自建服务器
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 在后台获取ID
  DIFY_CHATBOT_ENABLED: process.env.NEXT_PUBLIC_DIFY_CHATBOT_ENABLED || false,
  DIFY_CHATBOT_BASE_URL: process.env.NEXT_PUBLIC_DIFY_CHATBOT_BASE_URL || '',
  DIFY_CHATBOT_TOKEN: process.env.NEXT_PUBLIC_DIFY_CHATBOT_TOKEN || '',

  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
  WIDGET_PET_LINK:
    process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
    'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME:
    process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || true, // 点击宠物挂件切换博客主题

  SPOILER_TEXT_TAG: process.env.NEXT_PUBLIC_SPOILER_TEXT_TAG || '', // Spoiler文本隐藏功能，如Notion中 [sp]希望被spoiler的文字[sp]，填入[sp] 即可

  // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || true, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
    'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST: [
    // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
      name: 'Nostalgia',
      artist: '佐藤天平',
      url: 'http://music.163.com/song/media/outer/url?id=1416570762.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: '灰色の水曜日',
      artist: 'トリプルH',
      url: 'http://music.163.com/song/media/outer/url?id=22813882.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: 'Freak',
      artist: 'ichika Nito',
      url: 'http://music.163.com/song/media/outer/url?id=2606425151.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: 'Be What You Wanna Be',
      artist: 'Darin',
      url: 'https://ri-sycdn.kuwo.cn/a155bfa6fa8dc7238145f11273e9131a/6749b033/resource/n2/80/89/2000571795.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: '華の乱',
      artist: '石田勝範',
      url: 'http://music.163.com/song/media/outer/url?id=4881802.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: 'Valse di Fantastica',
      artist: '下村 陽子',
      url: 'http://music.163.com/song/media/outer/url?id=461544436.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: 'he des Alizes (原曲:衛星カフェテラス)',
      artist: 'Foxtail-Grass Studio',
      url: 'http://music.163.com/song/media/outer/url?id=41416746.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: '明日有明天',
      artist: '陈慧娴',
      url: 'http://music.163.com/song/media/outer/url?id=110865.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: 'The First Layer',
      artist: 'Kevin Penkin',
      url: 'http://music.163.com/song/media/outer/url?id=509106635.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: 'I Miss You (Extended)',
      artist: 'ichika Nito',
      url: 'http://music.163.com/song/media/outer/url?id=1808027556.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: 'Morena',
      artist: ' ',
      url: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VWQ1F6NTFlT081Q3Q3SF96TmtubkowQm9oSjVyLXk1RE9FYTRCZldRUG5qSlE.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: '穢土',
      artist: 'Iwamizu',
      url: 'http://music.163.com/song/media/outer/url?id=1828198418.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: '余韻叙情(E-6)',
      artist: '鷺巣詩郎',
      url: 'http://music.163.com/song/media/outer/url?id=27552522.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: 'Forest Mixtape',
      artist: 'Christina Kuong',
      url: 'http://music.163.com/song/media/outer/url?id=1908182683.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: '再见',
      artist: 'ヤマモトガク',
      url: 'http://music.163.com/song/media/outer/url?id=2098082874.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: '文豪とアルケミスト ～Piano ver.～',
      artist: '坂本英城',
      url: 'http://music.163.com/song/media/outer/url?id=490637049.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    },
    {
      name: 'PIMP',
      artist: 'Bacao Rhythm & Steel Band',
      url: 'http://music.163.com/song/media/outer/url?id=1409490569.mp3',
      cover: 'https://i.postimg.cc/dVgHS3j0/IMG-9772-20230406-022739.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '1992204362', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 已废弃！！！可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '' // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/
}
