import{t as e}from"./plus-DCrdXXDc.js";import{Ad as t,Al as n,Cd as r,Du as i,Eu as a,Gi as o,Iu as s,Ju as ee,Nu as te,Pl as c,Qu as ne,Sd as l,_ as re,ad as u,bd as ie,bp as d,bu as f,ci as ae,dd as p,ei as m,eu as oe,fd as h,id as g,ip as _,nd as v,ni as y,np as se,o as ce,ou as le,pp as ue,qd as de,qp as b,s as x,td as S,ti as C,vd as w,xd as T,xp as E,xu as fe,yp as pe,zl as D,zp as O,zr as me}from"./index-hvLbsAjx.js";import{t as he}from"./settingsSelectors-BdPnPOZr.js";import{t as ge}from"./DropdownModelSelector-D62zD9hR.js";var k=b(O(),1),A=b(E(),1),j={MAX_ROUNDS:5,MAX_TOKENS_PER_ROUND:1e3,TIMEOUT_MINUTES:10,MODERATOR_ENABLED:!0,SUMMARY_ENABLED:!0},M=()=>{let b=ue(),E=pe(),{t:O}=ae(),M=d(he),_e=d(e=>e.settings.showAIDebateButton??!0),N=M.flatMap(e=>e.models.filter(e=>e.enabled).map(t=>({...t,providerName:e.name,providerId:e.id,identityKey:m({id:t.id,provider:e.id})}))),ve=(0,k.useCallback)(e=>{if(!e)return``;let t=y(e);return t&&N.find(e=>C(e,t,e.provider||e.providerId))?.name||``},[N]),[P,F]=(0,k.useState)({enabled:!1,maxRounds:j.MAX_ROUNDS,autoEndConditions:{consensusReached:!0,maxTokensPerRound:j.MAX_TOKENS_PER_ROUND,timeoutMinutes:j.TIMEOUT_MINUTES},roles:[],moderatorEnabled:j.MODERATOR_ENABLED,summaryEnabled:j.SUMMARY_ENABLED}),[I,L]=(0,k.useState)([]),[ye,R]=(0,k.useState)(!1),[z,B]=(0,k.useState)(null),[V,H]=(0,k.useState)(``),[U,W]=(0,k.useState)(``),[be,G]=(0,k.useState)(!1),[K,q]=(0,k.useState)(null),[J,Y]=(0,k.useState)({name:``,description:``,systemPrompt:``,modelId:``,color:`#2196f3`,stance:`pro`}),X=[{name:O(`aiDebate.templates.pro.name`),description:O(`aiDebate.templates.pro.description`),systemPrompt:`你是一位专业的正方辩论者，具有以下特点：

🎯 **核心职责**
- 坚定支持和论证正方观点
- 提供有力的证据和逻辑论证
- 反驳对方的质疑和攻击

💡 **辩论风格**
- 逻辑清晰，论证有力
- 引用具体事实、数据和案例
- 保持理性和专业的态度
- 语言简洁明了，重点突出

📋 **回应要求**
- 每次发言控制在150-200字
- 先明确表达立场，再提供论证
- 适当反驳对方观点
- 结尾要有力且令人信服

请始终站在正方立场，为你的观点据理力争！`,stance:`pro`,color:`#4caf50`},{name:O(`aiDebate.templates.con.name`),description:O(`aiDebate.templates.con.description`),systemPrompt:`你是一位犀利的反方辩论者，具有以下特点：

🎯 **核心职责**
- 坚决反对正方观点
- 揭示对方论证的漏洞和问题
- 提出有力的反驳和质疑

💡 **辩论风格**
- 思维敏锐，善于发现问题
- 用事实和逻辑拆解对方论证
- 提出替代方案或反面证据
- 保持批判性思维

📋 **回应要求**
- 每次发言控制在150-200字
- 直接指出对方观点的问题
- 提供反面证据或案例
- 语气坚定但保持礼貌

请始终站在反方立场，用理性和事实挑战对方观点！`,stance:`con`,color:`#f44336`},{name:O(`aiDebate.templates.neutral.name`),description:O(`aiDebate.templates.neutral.description`),systemPrompt:`你是一位客观中立的分析师，具有以下特点：

🎯 **核心职责**
- 客观分析双方观点的优缺点
- 指出论证中的逻辑问题或亮点
- 提供平衡的视角和见解

💡 **分析风格**
- 保持绝对中立，不偏向任何一方
- 用理性和逻辑评估论证质量
- 指出可能被忽视的角度
- 寻找双方的共同点

📋 **回应要求**
- 每次发言控制在150-200字
- 平衡评价双方观点
- 指出论证的强弱之处
- 提出新的思考角度

请保持中立立场，为辩论提供客观理性的分析！`,stance:`neutral`,color:`#ff9800`},{name:O(`aiDebate.templates.moderator.name`),description:O(`aiDebate.templates.moderator.description`),systemPrompt:`你是一位专业的辩论主持人，具有以下职责：

🎯 **核心职责**
- 引导辩论方向和节奏
- 总结各方要点和分歧
- 判断讨论是否充分
- 决定何时结束辩论

💡 **主持风格**
- 公正中立，不偏向任何一方
- 善于总结和归纳要点
- 能够发现讨论的关键问题
- 控制辩论节奏和质量

📋 **回应要求**
- 每次发言控制在150-200字
- 总结前面的主要观点
- 指出需要进一步讨论的问题
- 推动辩论深入进行

⚠️ **重要：结束辩论的条件**
只有在以下情况下才明确说"建议结束辩论"：
1. 已经进行了至少3轮完整辩论
2. 各方观点出现明显重复
3. 讨论已经非常充分，没有新的观点
4. 达成了某种程度的共识

在前几轮中，请专注于推动讨论深入，而不是急于结束！`,stance:`moderator`,color:`#9c27b0`},{name:O(`aiDebate.templates.legal.name`),description:O(`aiDebate.templates.legal.description`),systemPrompt:`你是一位资深法律专家，从法律角度参与辩论：

🎯 **专业视角**
- 从法律法规角度分析问题
- 引用相关法条和判例
- 分析法律风险和合规性
- 考虑法律实施的可行性

💡 **专业特长**
- 熟悉各类法律法规
- 了解司法实践和判例
- 能够识别法律漏洞和风险
- 具备严谨的法律思维

📋 **发言要求**
- 每次发言150-200字
- 引用具体法条或判例
- 分析法律层面的利弊
- 保持专业和严谨

请从法律专业角度为辩论提供有价值的见解！`,stance:`neutral`,color:`#795548`},{name:O(`aiDebate.templates.economist.name`),description:O(`aiDebate.templates.economist.description`),systemPrompt:`你是一位经济学专家，从经济角度参与辩论：

🎯 **专业视角**
- 分析经济成本和收益
- 评估市场影响和效率
- 考虑宏观和微观经济效应
- 预测长期经济后果

💡 **专业特长**
- 掌握经济学理论和模型
- 了解市场运行机制
- 能够量化分析影响
- 具备数据分析能力

📋 **发言要求**
- 每次发言150-200字
- 提供经济数据或理论支撑
- 分析成本效益
- 考虑经济可持续性

请从经济学角度为辩论提供专业的分析和建议！`,stance:`neutral`,color:`#607d8b`},{name:O(`aiDebate.templates.tech.name`),description:O(`aiDebate.templates.tech.description`),systemPrompt:`你是一位技术专家，从技术角度参与辩论：

🎯 **专业视角**
- 分析技术可行性和难度
- 评估技术风险和挑战
- 考虑技术发展趋势
- 预测技术实现的时间和成本

💡 **专业特长**
- 掌握前沿技术发展
- 了解技术实现的复杂性
- 能够评估技术方案
- 具备工程思维

📋 **发言要求**
- 每次发言150-200字
- 提供技术事实和数据
- 分析实现的技术路径
- 指出技术限制和可能性

请从技术专业角度为辩论提供切实可行的分析！`,stance:`neutral`,color:`#3f51b5`},{name:O(`aiDebate.templates.sociologist.name`),description:O(`aiDebate.templates.sociologist.description`),systemPrompt:`你是一位社会学专家，从社会角度参与辩论：

🎯 **专业视角**
- 分析社会影响和后果
- 考虑不同群体的利益
- 评估社会公平性
- 关注文化和价值观影响

💡 **专业特长**
- 了解社会结构和动态
- 关注弱势群体权益
- 具备人文关怀
- 能够预测社会反应

📋 **发言要求**
- 每次发言150-200字
- 关注社会公平和正义
- 考虑不同群体的感受
- 分析社会接受度

请从社会学角度为辩论提供人文关怀的视角！`,stance:`neutral`,color:`#e91e63`},{name:O(`aiDebate.templates.summary.name`),description:O(`aiDebate.templates.summary.description`),systemPrompt:`你是一位专业的辞论总结分析师，具有以下特点：

🎯 **核心职责**
- 客观分析整个辩论过程
- 总结各方的核心观点和论据
- 识别争议焦点和共识点
- 提供平衡的结论和建议

💡 **分析风格**
- 保持绝对客观和中立
- 深度分析论证逻辑和质量
- 识别辩论中的亮点和不足
- 提供建设性的思考和启发

📋 **总结要求**
- 结构化呈现分析结果
- 平衡评价各方表现
- 指出论证的强弱之处
- 提供深度思考和建议
- 避免偏向任何一方

请为辩论提供专业、深入、平衡的总结分析！`,stance:`summary`,color:`#607d8b`},{name:O(`aiDebate.templates.devil.name`),description:O(`aiDebate.templates.devil.description`),systemPrompt:`你是"魔鬼代言人"，专门提出反对和质疑：

🎯 **核心职责**
- 对任何观点都提出质疑
- 寻找论证中的薄弱环节
- 提出极端或边缘情况
- 挑战常规思维

💡 **思维特点**
- 批判性思维极强
- 善于发现问题和漏洞
- 不怕提出不受欢迎的观点
- 推动深度思考

📋 **发言要求**
- 每次发言150-200字
- 必须提出质疑或反对
- 指出可能的风险和问题
- 挑战主流观点

请扮演好魔鬼代言人的角色，为辩论带来更深层的思考！`,stance:`con`,color:`#424242`},{name:O(`aiDebate.templates.pragmatist.name`),description:O(`aiDebate.templates.pragmatist.description`),systemPrompt:`你是一位实用主义者，关注实际可操作性：

🎯 **核心关注**
- 实际操作的可行性
- 实施成本和效果
- 现实条件和限制
- 短期和长期的实用性

💡 **思维特点**
- 务实理性，不空谈理论
- 关注具体实施细节
- 重视成本效益分析
- 追求实际效果

📋 **发言要求**
- 每次发言150-200字
- 关注实际操作层面
- 分析实施的难点和方法
- 提供具体可行的建议

请从实用主义角度为辩论提供务实的见解！`,stance:`neutral`,color:`#8bc34a`}];(0,k.useEffect)(()=>{(async()=>{try{let e=await se(`aiDebateConfig`);e&&F(e);let t=await se(`aiDebateConfigGroups`);t&&L(t)}catch(e){console.error(O(`errors.aiDebate.loadConfigFailed`),e)}})()},[O]);let Z=async e=>{try{await _(`aiDebateConfig`,e),F(e)}catch(e){console.error(O(`errors.aiDebate.saveConfigFailed`),e)}},Q=async e=>{try{await _(`aiDebateConfigGroups`,e),L(e)}catch(e){console.error(O(`errors.aiDebate.saveGroupsFailed`),e)}},xe=()=>{B(null),H(``),W(``),R(!0)},Se=e=>{B(e),H(e.name),W(e.description),R(!0)},Ce=()=>{if(!V.trim())return;let e=Date.now(),t;if(z)t=I.map(t=>t.id===z.id?{...t,name:V.trim(),description:U.trim(),updatedAt:e}:t);else{let n={id:`group_${e}`,name:V.trim(),description:U.trim(),config:JSON.parse(JSON.stringify(P)),createdAt:e,updatedAt:e};t=[...I,n]}Q(t),R(!1)},we=e=>{window.confirm(O(`aiDebate.groups.confirmDelete`))&&Q(I.filter(t=>t.id!==e))},Te=e=>{F(JSON.parse(JSON.stringify(e.config))),Z(e.config)},Ee=e=>{Q(I.map(t=>t.id===e?{...t,config:JSON.parse(JSON.stringify(P)),updatedAt:Date.now()}:t)),ce.success(O(`aiDebate.groups.updateSuccess`),O(`aiDebate.groups.updateSuccessTitle`))},De=()=>{b(`/settings`)},Oe=()=>{q(null),Y({name:``,description:``,systemPrompt:``,modelId:``,color:`#2196f3`,stance:`pro`}),G(!0)},ke=e=>{q(e),Y(e),G(!0)},Ae=e=>{Z({...P,roles:P.roles.filter(t=>t.id!==e)})},je=()=>{if(!J.name||!J.systemPrompt)return;let e={id:K?.id||`role_${Date.now()}`,name:J.name,description:J.description||``,systemPrompt:J.systemPrompt,modelId:J.modelId,color:J.color||`#2196f3`,stance:J.stance||`pro`},t;t=K?P.roles.map(t=>t.id===K.id?e:t):[...P.roles,e],Z({...P,roles:t}),G(!1)},Me=e=>{Y({...J,...e})},$=e=>{let t=[],n=N.length>0?m({id:N[0].id,provider:N[0].provider||N[0].providerId}):``;switch(e){case`basic`:t=[X.find(e=>e.name===`正方辩手`),X.find(e=>e.name===`反方辩手`),X.find(e=>e.name===`辩论主持人`)];break;case`professional`:t=[X.find(e=>e.name===`正方辩手`),X.find(e=>e.name===`反方辩手`),X.find(e=>e.name===`中立分析师`),X.find(e=>e.name===`辩论主持人`)];break;case`expert`:t=[X.find(e=>e.name===`法律专家`),X.find(e=>e.name===`经济学家`),X.find(e=>e.name===`技术专家`),X.find(e=>e.name===`辩论主持人`)];break;case`comprehensive`:t=[X.find(e=>e.name===`正方辩手`),X.find(e=>e.name===`反方辩手`),X.find(e=>e.name===`中立分析师`),X.find(e=>e.name===`法律专家`),X.find(e=>e.name===`经济学家`),X.find(e=>e.name===`辩论主持人`)];break}let r=t.map((e,t)=>({id:`role_${Date.now()}_${t}`,name:e.name,description:e.description,systemPrompt:e.systemPrompt,modelId:n,color:e.color,stance:e.stance}));Z({...P,enabled:!0,roles:r});let i=O(`aiDebate.quickSetup.${e}.name`),a=N.length>0?N[0].name:O(`aiDebate.roles.unknownModel`);ce.success(O(`aiDebate.quickSetup.successMessage`,{sceneName:i,roleCount:r.length,modelName:a}),O(`aiDebate.quickSetup.successTitle`),{duration:8e3})};return(0,A.jsxs)(re,{sx:{bgcolor:e=>e.palette.mode===`light`?de(e.palette.primary.main,.02):de(e.palette.background.default,.9)},children:[(0,A.jsx)(ie,{position:`static`,elevation:0,sx:{bgcolor:`background.paper`,color:`text.primary`,borderBottom:1,borderColor:`divider`,backdropFilter:`blur(8px)`},children:(0,A.jsxs)(i,{children:[(0,A.jsx)(r,{edge:`start`,color:`inherit`,onClick:De,"aria-label":`back`,sx:{color:e=>e.palette.primary.main},children:(0,A.jsx)(fe,{size:20})}),(0,A.jsx)(T,{variant:`h6`,component:`div`,sx:{flexGrow:1,fontWeight:600},children:O(`aiDebate.title`)})]})}),(0,A.jsxs)(h,{sx:{flexGrow:1,overflowY:`auto`,p:{xs:1,sm:2},pb:`var(--content-bottom-padding)`,"&::-webkit-scrollbar":{width:{xs:`4px`,sm:`6px`}},"&::-webkit-scrollbar-thumb":{backgroundColor:`rgba(0,0,0,0.1)`,borderRadius:`3px`}},children:[(0,A.jsxs)(t,{elevation:0,sx:{mb:2,borderRadius:2,border:`1px solid`,borderColor:`divider`,overflow:`hidden`,bgcolor:`background.paper`,boxShadow:`0 4px 12px rgba(0,0,0,0.05)`},children:[(0,A.jsxs)(h,{sx:{p:{xs:1.5,sm:2},bgcolor:`rgba(0,0,0,0.01)`},children:[(0,A.jsxs)(T,{variant:`subtitle1`,sx:{fontWeight:600,fontSize:{xs:`1rem`,sm:`1.1rem`},display:`flex`,alignItems:`center`},children:[(0,A.jsx)(f,{size:20,color:`#06b6d4`}),O(`aiDebate.basicSettings.title`)]}),(0,A.jsx)(T,{variant:`body2`,color:`text.secondary`,sx:{fontSize:{xs:`0.8rem`,sm:`0.875rem`}},children:O(`aiDebate.basicSettings.description`)})]}),(0,A.jsx)(S,{}),(0,A.jsxs)(h,{sx:{p:{xs:1.5,sm:2}},children:[(0,A.jsxs)(h,{sx:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,mb:2},children:[(0,A.jsx)(T,{variant:`body1`,children:O(`aiDebate.basicSettings.enable`)}),(0,A.jsx)(x,{checked:P.enabled,onChange:e=>Z({...P,enabled:e.target.checked})})]}),(0,A.jsxs)(h,{sx:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,mb:2},children:[(0,A.jsx)(T,{variant:`body1`,children:O(`aiDebate.basicSettings.showButton`)}),(0,A.jsx)(x,{checked:_e,onChange:e=>E(me(e.target.checked))})]}),(0,A.jsxs)(h,{sx:{display:`grid`,gridTemplateColumns:{xs:`1fr`,md:`1fr 1fr`},gap:2},children:[(0,A.jsx)(a,{label:O(`aiDebate.basicSettings.maxRounds`),value:P.maxRounds,onChange:e=>{let t=e.target.value;if(t===``)Z({...P,maxRounds:0});else{let e=parseInt(t);isNaN(e)||Z({...P,maxRounds:e})}},helperText:O(`aiDebate.basicSettings.maxRoundsHelper`)}),(0,A.jsx)(a,{label:O(`aiDebate.basicSettings.maxTokensPerRound`),value:P.autoEndConditions.maxTokensPerRound,onChange:e=>{let t=e.target.value;if(t===``)Z({...P,autoEndConditions:{...P.autoEndConditions,maxTokensPerRound:0}});else{let e=parseInt(t);isNaN(e)||Z({...P,autoEndConditions:{...P.autoEndConditions,maxTokensPerRound:e}})}},helperText:O(`aiDebate.basicSettings.maxTokensPerRoundHelper`)})]}),(0,A.jsxs)(h,{sx:{mt:2},children:[(0,A.jsxs)(h,{sx:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,mb:1.5},children:[(0,A.jsx)(T,{variant:`body1`,children:O(`aiDebate.basicSettings.enableModerator`)}),(0,A.jsx)(x,{checked:P.moderatorEnabled,onChange:e=>Z({...P,moderatorEnabled:e.target.checked})})]}),(0,A.jsxs)(h,{sx:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,A.jsx)(T,{variant:`body1`,children:O(`aiDebate.basicSettings.enableSummary`)}),(0,A.jsx)(x,{checked:P.summaryEnabled,onChange:e=>Z({...P,summaryEnabled:e.target.checked})})]})]})]})]}),(0,A.jsxs)(t,{elevation:0,sx:{mb:2,borderRadius:2,border:`1px solid`,borderColor:`divider`,overflow:`hidden`,bgcolor:`background.paper`,boxShadow:`0 4px 12px rgba(0,0,0,0.05)`},children:[(0,A.jsxs)(h,{sx:{p:{xs:1.5,sm:2},bgcolor:`rgba(0,0,0,0.01)`},children:[(0,A.jsxs)(T,{variant:`subtitle1`,sx:{fontWeight:600,fontSize:{xs:`1rem`,sm:`1.1rem`},display:`flex`,alignItems:`center`},children:[(0,A.jsx)(f,{size:20,color:`#8b5cf6`}),O(`aiDebate.quickSetup.title`)]}),(0,A.jsx)(T,{variant:`body2`,color:`text.secondary`,sx:{fontSize:{xs:`0.8rem`,sm:`0.875rem`}},children:O(`aiDebate.quickSetup.description`)})]}),(0,A.jsx)(S,{}),(0,A.jsx)(h,{sx:{p:{xs:1.5,sm:2}},children:(0,A.jsxs)(h,{sx:{display:`grid`,gridTemplateColumns:{xs:`1fr`,md:`repeat(2, 1fr)`},gap:2},children:[(0,A.jsxs)(p,{variant:`outlined`,onClick:()=>$(`basic`),sx:{p:2,textAlign:`left`,flexDirection:`column`,alignItems:`flex-start`},children:[(0,A.jsxs)(T,{variant:`subtitle1`,sx:{fontWeight:600,mb:.5},children:[`🎯 `,O(`aiDebate.quickSetup.basic.name`)]}),(0,A.jsx)(T,{variant:`caption`,color:`text.secondary`,children:O(`aiDebate.quickSetup.basic.description`)})]}),(0,A.jsxs)(p,{variant:`outlined`,onClick:()=>$(`professional`),sx:{p:2,textAlign:`left`,flexDirection:`column`,alignItems:`flex-start`},children:[(0,A.jsxs)(T,{variant:`subtitle1`,sx:{fontWeight:600,mb:.5},children:[`🏛️ `,O(`aiDebate.quickSetup.professional.name`)]}),(0,A.jsx)(T,{variant:`caption`,color:`text.secondary`,children:O(`aiDebate.quickSetup.professional.description`)})]}),(0,A.jsxs)(p,{variant:`outlined`,onClick:()=>$(`expert`),sx:{p:2,textAlign:`left`,flexDirection:`column`,alignItems:`flex-start`},children:[(0,A.jsxs)(T,{variant:`subtitle1`,sx:{fontWeight:600,mb:.5},children:[`🎓 `,O(`aiDebate.quickSetup.expert.name`)]}),(0,A.jsx)(T,{variant:`caption`,color:`text.secondary`,children:O(`aiDebate.quickSetup.expert.description`)})]}),(0,A.jsxs)(p,{variant:`outlined`,onClick:()=>$(`comprehensive`),sx:{p:2,textAlign:`left`,flexDirection:`column`,alignItems:`flex-start`},children:[(0,A.jsxs)(T,{variant:`subtitle1`,sx:{fontWeight:600,mb:.5},children:[`🌟 `,O(`aiDebate.quickSetup.comprehensive.name`)]}),(0,A.jsx)(T,{variant:`caption`,color:`text.secondary`,children:O(`aiDebate.quickSetup.comprehensive.description`)})]})]})})]}),(0,A.jsxs)(t,{elevation:0,sx:{mb:2,borderRadius:2,border:`1px solid`,borderColor:`divider`,overflow:`hidden`,bgcolor:`background.paper`,boxShadow:`0 4px 12px rgba(0,0,0,0.05)`},children:[(0,A.jsx)(h,{sx:{p:{xs:1.5,sm:2},bgcolor:`rgba(0,0,0,0.01)`},children:(0,A.jsxs)(h,{sx:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,A.jsxs)(h,{children:[(0,A.jsx)(T,{variant:`subtitle1`,sx:{fontWeight:600,fontSize:{xs:`1rem`,sm:`1.1rem`}},children:O(`aiDebate.roles.title`)}),(0,A.jsx)(T,{variant:`body2`,color:`text.secondary`,sx:{fontSize:{xs:`0.8rem`,sm:`0.875rem`}},children:O(`aiDebate.roles.description`)})]}),(0,A.jsx)(p,{variant:`contained`,startIcon:(0,A.jsx)(e,{size:16}),onClick:Oe,sx:{background:`linear-gradient(90deg, #9333EA, #754AB4)`,fontWeight:600,"&:hover":{background:`linear-gradient(90deg, #8324DB, #6D3CAF)`}},children:O(`aiDebate.roles.addRole`)})]})}),(0,A.jsx)(S,{}),(0,A.jsx)(h,{sx:{p:{xs:1.5,sm:2}},children:P.roles.length===0?(0,A.jsx)(l,{severity:`info`,sx:{mb:2},children:O(`aiDebate.roles.noRoles`)}):(0,A.jsx)(h,{sx:{display:`flex`,flexDirection:`column`,gap:1},children:P.roles.map(e=>(0,A.jsxs)(h,{sx:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,p:1.5,border:1,borderColor:`divider`,borderLeft:`4px solid ${e.color||`#2196f3`}`,borderRadius:1,bgcolor:`background.paper`,transition:`all 0.2s ease`,"&:hover":{bgcolor:`action.hover`,borderColor:`primary.main`}},children:[(0,A.jsxs)(h,{sx:{display:`flex`,alignItems:`center`,flexGrow:1,minWidth:0},children:[(0,A.jsx)(f,{size:16,color:e.color||`#2196f3`}),(0,A.jsxs)(h,{sx:{minWidth:0,flexGrow:1},children:[(0,A.jsxs)(h,{sx:{display:`flex`,alignItems:`center`,gap:1,mb:.5},children:[(0,A.jsx)(T,{variant:`body2`,sx:{fontWeight:600},children:e.name}),(0,A.jsx)(w,{label:O(`aiDebate.roles.stance.${e.stance}`),size:`small`,sx:{bgcolor:e.color||`#2196f3`,color:`white`,fontWeight:600,height:`20px`,fontSize:`0.7rem`}})]}),(0,A.jsxs)(T,{variant:`caption`,color:`text.secondary`,sx:{display:`block`},children:[e.description,` • `,e.modelId?ve(e.modelId)||O(`aiDebate.roles.unknownModel`):O(`aiDebate.roles.defaultModel`)]})]})]}),(0,A.jsxs)(h,{sx:{display:`flex`,alignItems:`center`,gap:.5,ml:2},children:[(0,A.jsx)(r,{size:`small`,onClick:()=>ke(e),title:O(`aiDebate.roles.editRole`),children:(0,A.jsx)(c,{size:16})}),(0,A.jsx)(r,{size:`small`,onClick:()=>Ae(e.id),color:`error`,title:O(`aiDebate.roles.deleteRole`),children:(0,A.jsx)(n,{size:16})})]})]},e.id))})})]}),(0,A.jsxs)(t,{elevation:0,sx:{mb:2,borderRadius:2,border:`1px solid`,borderColor:`divider`,overflow:`hidden`,bgcolor:`background.paper`,boxShadow:`0 4px 12px rgba(0,0,0,0.05)`},children:[(0,A.jsx)(h,{sx:{p:{xs:1.5,sm:2},bgcolor:`rgba(0,0,0,0.01)`},children:(0,A.jsxs)(h,{sx:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,A.jsxs)(h,{children:[(0,A.jsx)(T,{variant:`subtitle1`,sx:{fontWeight:600,fontSize:{xs:`1rem`,sm:`1.1rem`}},children:O(`aiDebate.groups.title`)}),(0,A.jsx)(T,{variant:`body2`,color:`text.secondary`,sx:{fontSize:{xs:`0.8rem`,sm:`0.875rem`}},children:O(`aiDebate.groups.description`)})]}),(0,A.jsx)(p,{variant:`contained`,startIcon:(0,A.jsx)(e,{size:16}),onClick:xe,sx:{background:`linear-gradient(90deg, #f59e0b, #d97706)`,fontWeight:600,"&:hover":{background:`linear-gradient(90deg, #d97706, #b45309)`}},children:O(`aiDebate.groups.createGroup`)})]})}),(0,A.jsx)(S,{}),(0,A.jsx)(h,{sx:{p:{xs:1.5,sm:2}},children:I.length===0?(0,A.jsx)(l,{severity:`info`,children:O(`aiDebate.groups.noGroups`)}):(0,A.jsx)(h,{sx:{display:`flex`,flexDirection:`column`,gap:1},children:I.map(e=>(0,A.jsxs)(h,{sx:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,p:1.5,border:1,borderColor:`divider`,borderRadius:1,bgcolor:`background.paper`,transition:`all 0.2s ease`,"&:hover":{bgcolor:`action.hover`,borderColor:`primary.main`}},children:[(0,A.jsxs)(h,{sx:{display:`flex`,alignItems:`center`,flexGrow:1,minWidth:0},children:[(0,A.jsx)(oe,{size:16,color:`text.secondary`}),(0,A.jsxs)(h,{sx:{minWidth:0,flexGrow:1},children:[(0,A.jsx)(T,{variant:`body2`,sx:{fontWeight:600,mb:.5},children:e.name}),(0,A.jsxs)(T,{variant:`caption`,color:`text.secondary`,sx:{display:`block`},children:[O(`aiDebate.roles.roleCount`,{count:e.config.roles.length}),` • `,new Date(e.updatedAt).toLocaleDateString()]})]})]}),(0,A.jsxs)(h,{sx:{display:`flex`,alignItems:`center`,gap:.5,ml:2},children:[(0,A.jsx)(p,{size:`small`,onClick:()=>Te(e),variant:`outlined`,sx:{minWidth:`auto`,px:1},children:O(`aiDebate.groups.loadGroup`)}),(0,A.jsx)(r,{size:`small`,onClick:()=>Se(e),title:O(`common.edit`),children:(0,A.jsx)(c,{size:16})}),(0,A.jsx)(r,{size:`small`,onClick:()=>Ee(e.id),title:O(`aiDebate.groups.saveGroup`),color:`primary`,children:(0,A.jsx)(D,{size:16})}),(0,A.jsx)(r,{size:`small`,onClick:()=>{B(null),H(`${e.name}${O(`aiDebate.groupDialog.copySuffix`)}`),W(O(`aiDebate.groupDialog.copyDescription`,{name:e.name})),R(!0)},title:O(`aiDebate.groups.copyGroup`),children:(0,A.jsx)(le,{size:16})}),(0,A.jsx)(r,{size:`small`,onClick:()=>we(e.id),color:`error`,title:O(`aiDebate.groups.deleteGroup`),children:(0,A.jsx)(n,{size:16})})]})]},e.id))})})]})]}),(0,A.jsxs)(o,{open:be,onClose:()=>G(!1),maxWidth:`md`,fullWidth:!0,children:[(0,A.jsx)(v,{children:O(K?`aiDebate.roleDialog.editTitle`:`aiDebate.roleDialog.title`)}),(0,A.jsxs)(g,{children:[!K&&(0,A.jsxs)(h,{sx:{mb:3},children:[(0,A.jsx)(T,{variant:`subtitle2`,sx:{mb:1},children:O(`aiDebate.roleDialog.templates`)}),(0,A.jsx)(h,{sx:{display:`flex`,gap:1,flexWrap:`wrap`},children:X.map((e,t)=>(0,A.jsx)(w,{label:e.name,onClick:()=>Me(e),sx:{bgcolor:e.color,color:`white`}},t))}),(0,A.jsx)(S,{sx:{my:2}})]}),(0,A.jsxs)(h,{sx:{display:`grid`,gap:2},children:[(0,A.jsx)(a,{label:O(`aiDebate.roleDialog.name`),value:J.name||``,onChange:e=>Y({...J,name:e.target.value}),required:!0}),(0,A.jsx)(a,{label:O(`aiDebate.roleDialog.description`),value:J.description||``,onChange:e=>Y({...J,description:e.target.value}),multiline:!0,rows:2}),(0,A.jsxs)(ne,{sx:{mb:2},children:[(0,A.jsx)(ee,{children:O(`aiDebate.roleDialog.stance`)}),(0,A.jsxs)(te,{value:J.stance||`pro`,onChange:e=>Y({...J,stance:e.target.value}),children:[(0,A.jsx)(s,{value:`pro`,children:O(`aiDebate.roles.stance.pro`)}),(0,A.jsx)(s,{value:`con`,children:O(`aiDebate.roles.stance.con`)}),(0,A.jsx)(s,{value:`neutral`,children:O(`aiDebate.roles.stance.neutral`)}),(0,A.jsx)(s,{value:`moderator`,children:O(`aiDebate.roles.stance.moderator`)}),(0,A.jsx)(s,{value:`summary`,children:O(`aiDebate.roles.stance.summary`)})]})]}),(0,A.jsxs)(h,{sx:{mb:2},children:[(0,A.jsx)(T,{variant:`subtitle2`,sx:{mb:1},children:O(`aiDebate.roleDialog.model`)}),(0,A.jsx)(ge,{selectedModel:J.modelId&&N.find(e=>C(e,y(J.modelId),e.provider||e.providerId))||null,availableModels:N,handleModelSelect:e=>Y({...J,modelId:e?m({id:e.id,provider:e.provider||e.providerId}):``})}),(0,A.jsx)(T,{variant:`caption`,color:`text.secondary`,sx:{mt:.5,display:`block`},children:O(`aiDebate.roleDialog.modelHelper`)})]}),(0,A.jsx)(a,{label:O(`aiDebate.roleDialog.systemPrompt`),value:J.systemPrompt||``,onChange:e=>Y({...J,systemPrompt:e.target.value}),multiline:!0,rows:6,required:!0,helperText:O(`aiDebate.roleDialog.systemPromptHelper`)}),(0,A.jsxs)(h,{children:[(0,A.jsx)(T,{variant:`subtitle2`,sx:{mb:1},children:O(`aiDebate.roleDialog.color`)}),(0,A.jsx)(`input`,{type:`color`,value:J.color||`#2196f3`,onChange:e=>Y({...J,color:e.target.value}),style:{width:`100%`,height:`40px`,border:`none`,borderRadius:`4px`}})]})]})]}),(0,A.jsxs)(u,{children:[(0,A.jsx)(p,{onClick:()=>G(!1),children:O(`common.cancel`)}),(0,A.jsx)(p,{onClick:je,variant:`contained`,disabled:!J.name||!J.systemPrompt,children:O(`common.save`)})]})]}),(0,A.jsxs)(o,{open:ye,onClose:()=>R(!1),maxWidth:`sm`,fullWidth:!0,children:[(0,A.jsx)(v,{children:O(z?`aiDebate.groupDialog.editTitle`:`aiDebate.groupDialog.title`)}),(0,A.jsx)(g,{children:(0,A.jsxs)(h,{sx:{display:`grid`,gap:2,mt:1},children:[(0,A.jsx)(a,{label:O(`aiDebate.groupDialog.name`),value:V,onChange:e=>H(e.target.value),required:!0,placeholder:O(`aiDebate.groupDialog.namePlaceholder`)}),(0,A.jsx)(a,{label:O(`aiDebate.groupDialog.description`),value:U,onChange:e=>W(e.target.value),multiline:!0,rows:3,placeholder:O(`aiDebate.groupDialog.descriptionPlaceholder`)}),!z&&(0,A.jsx)(l,{severity:`info`,children:O(`aiDebate.groupDialog.saveNote`)})]})}),(0,A.jsxs)(u,{children:[(0,A.jsx)(p,{onClick:()=>R(!1),children:O(`common.cancel`)}),(0,A.jsx)(p,{onClick:Ce,variant:`contained`,disabled:!V.trim(),startIcon:(0,A.jsx)(D,{size:20}),children:O(z?`aiDebate.groupDialog.save`:`aiDebate.groupDialog.create`)})]})]})]})};export{M as default};