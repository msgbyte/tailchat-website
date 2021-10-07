"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[913],{331:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var t=a(7462),r=a(3366),l=(a(7294),a(3905)),p=["components"],o={sidebar_position:1},i="@capital/common",s={unversionedId:"plugins/api/common",id:"plugins/api/common",isDocsHomePage:!1,title:"@capital/common",description:"\u6ce8\u518c",source:"@site/docs/plugins/api/common.md",sourceDirName:"plugins/api",slug:"/plugins/api/common",permalink:"/docs/plugins/api/common",editUrl:"https://github.com/msgbyte/tailchat/edit/master/website/docs/plugins/api/common.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u59cb\u5f00\u53d1\u63d2\u4ef6",permalink:"/docs/plugins/start"},next:{title:"@capital/component",permalink:"/docs/plugins/api/component"}},u=[{value:"\u6ce8\u518c",id:"\u6ce8\u518c",children:[{value:"regGroupPanel",id:"reggrouppanel",children:[]},{value:"regMessageInterpreter",id:"regmessageinterpreter",children:[]},{value:"regMessageRender",id:"regmessagerender",children:[]},{value:"regChatInputAction",id:"regchatinputaction",children:[]},{value:"regPluginColorScheme",id:"regplugincolorscheme",children:[]}]},{value:"\u5de5\u5177\u51fd\u6570",id:"\u5de5\u5177\u51fd\u6570",children:[{value:"useGroupPanelParams",id:"usegrouppanelparams",children:[]},{value:"useCurrentGroupPanelInfo",id:"usecurrentgrouppanelinfo",children:[]},{value:"openModal",id:"openmodal",children:[]},{value:"ModalWrapper",id:"modalwrapper",children:[]},{value:"useModalContext",id:"usemodalcontext",children:[]},{value:"getGlobalState",id:"getglobalstate",children:[]},{value:"getCachedUserInfo",id:"getcacheduserinfo",children:[]},{value:"getCachedConverseInfo",id:"getcachedconverseinfo",children:[]}]},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[{value:"PluginGroupPanel",id:"plugingrouppanel",children:[]},{value:"PluginMessageInterpreter",id:"pluginmessageinterpreter",children:[]},{value:"ChatInputAction",id:"chatinputaction",children:[]},{value:"GroupPanel",id:"grouppanel",children:[]},{value:"ModalProps",id:"modalprops",children:[]}]}],c={toc:u};function d(e){var n=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"capitalcommon"},"@capital/common"),(0,l.kt)("h2",{id:"\u6ce8\u518c"},"\u6ce8\u518c"),(0,l.kt)("h3",{id:"reggrouppanel"},"regGroupPanel"),(0,l.kt)("p",null,"\u6ce8\u518c\u7fa4\u7ec4\u9762\u677f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"regGroupPanel({\n  name: `com.msgbyte.webview/grouppanel`,\n  label: '\u7f51\u9875\u9762\u677f',\n  provider: PLUGIN_NAME,\n  extraFormMeta: [{ type: 'text', name: 'url', label: '\u7f51\u5740' }],\n  render: GroupWebPanelRender,\n});\n")),(0,l.kt)("p",null,"\u53c2\u6570\u7c7b\u578b: ",(0,l.kt)("a",{parentName:"p",href:"#plugingrouppanel"},"PluginGroupPanel")),(0,l.kt)("h3",{id:"regmessageinterpreter"},"regMessageInterpreter"),(0,l.kt)("p",null,"\u6ce8\u518c\u6d88\u606f\u89e3\u91ca\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"regMessageInterpreter({\n  name: '\u55b5\u8bed\u7ffb\u8bd1',\n  explainMessage(message: string) {\n    // \u55b5\u8bed -> \u4eba\u8bdd\n    if (!isMiao(message)) {\n      return null;\n    }\n\n    return decode(message);\n  },\n});\n")),(0,l.kt)("p",null,"\u53c2\u6570\u7c7b\u578b: ",(0,l.kt)("a",{parentName:"p",href:"#pluginmessageinterpreter"},"PluginMessageInterpreter")),(0,l.kt)("h3",{id:"regmessagerender"},"regMessageRender"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u6ce8\u518c\u591a\u4e2a\u4ec5\u751f\u6548\u6700\u540e\u4e00\u4e2a")),(0,l.kt)("p",null,"\u6ce8\u518c\u6d88\u606f\u6e32\u67d3\u5668, \u8f93\u5165\u6d88\u606f\u6587\u672c\u8fd4\u56de\u6e32\u67d3\u5185\u5bb9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"regMessageRender((message) => {\n  return <BBCode plainText={message} />;\n});\n")),(0,l.kt)("h3",{id:"regchatinputaction"},"regChatInputAction"),(0,l.kt)("p",null,"\u6ce8\u518c\u804a\u5929\u8f93\u5165\u6846\u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"regChatInputAction({\n  label: '\u55b5\u8a00\u55b5\u8bed',\n  onClick: (actions) => {\n    openModal(createElement(SendMiaoModal, { actions }));\n  },\n});\n")),(0,l.kt)("p",null,"\u53c2\u6570\u7c7b\u578b: ",(0,l.kt)("a",{parentName:"p",href:"#chatinputaction"},"ChatInputAction")),(0,l.kt)("h3",{id:"regplugincolorscheme"},"regPluginColorScheme"),(0,l.kt)("p",null,"\u6ce8\u518c\u63d2\u4ef6\u914d\u8272\u65b9\u6848/\u4e3b\u9898"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"regPluginColorScheme({\n  label: 'Miku \u8471',\n  name: 'light+miku',\n});\n")),(0,l.kt)("h2",{id:"\u5de5\u5177\u51fd\u6570"},"\u5de5\u5177\u51fd\u6570"),(0,l.kt)("h3",{id:"usegrouppanelparams"},"useGroupPanelParams"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"hooks"),"\u4e2d\u83b7\u53d6\u7528\u6237\u9762\u677f\u76f8\u5173\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useGroupPanelParams } from '@capital/common';\n\nconst { groupId, panelId } = useGroupPanelParams();\n")),(0,l.kt)("h3",{id:"usecurrentgrouppanelinfo"},"useCurrentGroupPanelInfo"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"hooks"),"\u4e2d\u83b7\u53d6\u5f53\u524d\u9762\u677f\u7684\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useCurrentGroupPanelInfo } from '@capital/common';\n\nconst groupPanelInfo = useCurrentGroupPanelInfo();\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b: ",(0,l.kt)("a",{parentName:"p",href:"#grouppanel"},"GroupPanel")," | null"),(0,l.kt)("h3",{id:"openmodal"},"openModal"),(0,l.kt)("p",null,"\u6253\u5f00\u4e00\u4e2a\u6a21\u6001\u6846"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"openModal(\n  content: React.ReactNode,\n  props?: Pick<ModalProps, 'closable' | 'maskClosable'>\n)\n")),(0,l.kt)("p",null,"\u7c7b\u578b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#modalprops"},"ModalProps"))),(0,l.kt)("h3",{id:"modalwrapper"},"ModalWrapper"),(0,l.kt)("p",null,"\u6a21\u6001\u6846\u5305\u88c5\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<ModalWrapper>\n  <div></div>\n</ModalWrapper>\n")),(0,l.kt)("h3",{id:"usemodalcontext"},"useModalContext"),(0,l.kt)("p",null,"\u83b7\u53d6\u6a21\u6001\u6846\u4e0a\u4e0b\u6587"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const { closeModal } = useModalContext();\n")),(0,l.kt)("h3",{id:"getglobalstate"},"getGlobalState"),(0,l.kt)("p",null,"\u83b7\u53d6\u5168\u5c40 ",(0,l.kt)("inlineCode",{parentName:"p"},"Redux")," \u72b6\u6001\u4e0a\u4e0b\u6587"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const state = getGlobalState();\n")),(0,l.kt)("h3",{id:"getcacheduserinfo"},"getCachedUserInfo"),(0,l.kt)("p",null,"\u83b7\u53d6\u7528\u6237\u4fe1\u606f, \u7f13\u5b58\u7248\u672c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const info = getCachedUserInfo(userId);\n")),(0,l.kt)("h3",{id:"getcachedconverseinfo"},"getCachedConverseInfo"),(0,l.kt)("p",null,"\u83b7\u53d6\u4f1a\u8bdd\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const info = getCachedConverseInfo(converseId);\n")),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("h3",{id:"plugingrouppanel"},"PluginGroupPanel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface PluginGroupPanel {\n  /**\n   * \u9762\u677f\u552f\u4e00\u6807\u8bc6\n   * @example com.msgbyte.webview/grouppanel\n   */\n  name: string;\n\n  /**\n   * \u9762\u677f\u663e\u793a\u540d\n   */\n  label: string;\n\n  /**\n   * \u63d2\u4ef6\u63d0\u4f9b\u8005, \u7528\u4e8e\u5f15\u5bfc\u6ca1\u6709\u5b89\u88c5\u63d2\u4ef6\u7684\u7528\u6237\u5b89\u88c5\u63d2\u4ef6\n   */\n  provider: string;\n\n  /**\n   * \u989d\u5916\u7684\u8868\u5355\u6570\u636e, \u7528\u4e8e\u521b\u5efa\u9762\u677f\u65f6\u4f7f\u7528\n   */\n  extraFormMeta: FastFormFieldMeta[];\n\n  /**\n   * \u8be5\u9762\u677f\u5982\u4f55\u6e32\u67d3\n   */\n  render: React.ComponentType;\n}\n")),(0,l.kt)("h3",{id:"pluginmessageinterpreter"},"PluginMessageInterpreter"),(0,l.kt)("p",null,"\u63d2\u4ef6\u6d88\u606f\u89e3\u91ca\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface PluginMessageInterpreter {\n  name?: string;\n  explainMessage: (message: string) => React.ReactNode;\n}\n")),(0,l.kt)("h3",{id:"chatinputaction"},"ChatInputAction"),(0,l.kt)("p",null,"\u6d88\u606f\u8f93\u5165\u6846\u64cd\u4f5c\u5bf9\u8c61"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ChatInputAction {\n  label: string;\n  onClick: (actions: ChatInputActionContextProps) => void;\n}\n")),(0,l.kt)("h3",{id:"grouppanel"},"GroupPanel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface GroupPanel {\n  id: string; // \u5728\u7fa4\u7ec4\u4e2d\u552f\u4e00\n  name: string;\n  parentId?: string;\n  type: GroupPanelType;\n  provider?: string; // \u9762\u677f\u63d0\u4f9b\u8005\n  pluginPanelName?: string; // \u63d2\u4ef6\u9762\u677f\u540d\n  meta?: Record<string, unknown>;\n}\n")),(0,l.kt)("h3",{id:"modalprops"},"ModalProps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ModalProps {\n  visible?: boolean;\n  onChangeVisible?: (visible: boolean) => void;\n\n  /**\n   * \u662f\u5426\u663e\u793a\u53f3\u4e0a\u89d2\u7684\u5173\u95ed\u6309\u94ae\n   * @default false\n   */\n  closable?: boolean;\n\n  /**\n   * \u906e\u7f69\u5c42\u662f\u5426\u53ef\u5173\u95ed\n   */\n  maskClosable?: boolean;\n}\n")))}d.isMDXComponent=!0}}]);