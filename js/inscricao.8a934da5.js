(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["inscricao"],{"380c":function(e,t,a){"use strict";a("3913")},3913:function(e,t,a){},6862:function(e){e.exports=JSON.parse('[{"model":"transportes.transporte","pk":1,"fields":{"hora_partida":"2020-02-20T06:00:00.000Z","hora_chegada":"2020-02-20T09:00:00.000Z","escola":"Escola Secundária Henriques Nogueira","localidade":"Torres Vedras","campus":"Gambelas","numero_autocarros":1,"numero_participantes":50,"estado":"Por publicar"}},{"model":"transportes.transporte","pk":2,"fields":{"hora_partida":"2020-02-20T08:00:00.000Z","hora_chegada":"2020-02-20T09:00:00.000Z","escola":"Escola Secundária José Bernardino","localidade":"Vilar","campus":"Gambelas","numero_autocarros":2,"numero_participantes":120,"estado":"Por publicar"}},{"model":"transportes.transporte","pk":3,"fields":{"hora_partida":"2020-02-20T08:30:00.000Z","hora_chegada":"2020-02-20T09:30:00.000Z","escola":"Escola Secundária Filipe de Souza","localidade":"Tavira","campus":"Penha","numero_autocarros":2,"numero_participantes":100,"estado":"Publicado"}},{"model":"transportes.transporte","pk":4,"fields":{"hora_partida":"2020-02-20T10:10:00.000Z","hora_chegada":"2020-02-20T11:00:00.000Z","escola":"Escola Secundária de Loulé","localidade":"Loulé","campus":"Gambelas","numero_autocarros":1,"numero_participantes":60,"estado":"Publicado"}}]')},"813b":function(e,t,a){},b3df:function(e,t,a){},b48a:function(e,t,a){"use strict";a("813b")},bd1b:function(e,t,a){"use strict";a("b3df")},cdcc:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"top"}},[a("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[e._v("Início")])],1),e._v(" "),a("li",{staticClass:"is-active"},[a("router-link",{attrs:{to:"/inscricao"}},[e._v("Minha Inscrição")])],1)])]),e._v(" "),a("div",{staticStyle:{padding:"3rem 2vw 1rem"}},[a("b-steps",{attrs:{type:"is-success"},scopedSlots:e._u([{key:"navigation",fn:function(t){var s=t.previous,i=t.next;return[a("div",{staticClass:"column is-8 is-offset-2"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[s.disabled?a("b-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#top",expression:"'#top'"}],attrs:{tag:"router-link",to:{name:"inicio"},outlined:""}},[e._v("\n                Cancelar\n              ")]):a("b-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#top",expression:"'#top'"}],attrs:{outlined:"","icon-left":"chevron-left"},on:{click:function(e){return e.preventDefault(),s.action(e)}}},[e._v("\n                Anterior\n              ")])],1),e._v(" "),a("div",{staticClass:"level-right"},[i.disabled?a("b-button",{attrs:{outlined:"",size:"is-large",type:"is-success"},on:{click:function(t){return t.preventDefault(),e.submeter(t)}}},[e._v("\n                Submeter Inscrição\n              ")]):a("b-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#top",expression:"'#top'"}],attrs:{outlined:"",size:"is-large",type:"is-success","icon-right":"forward"},on:{click:function(e){return e.preventDefault(),i.action(e)}}},[e._v("\n                Próximo\n              ")])],1)])])]}}])},[a("b-step-item",{attrs:{label:"Responsáveis",icon:"account"}},[a("Responsaveis")],1),e._v(" "),a("b-step-item",{attrs:{label:"Escola",icon:"school"}},[a("Escola")],1),e._v(" "),a("b-step-item",{attrs:{label:"Transporte",icon:"train-car"}},[a("Transporte")],1),e._v(" "),a("b-step-item",{attrs:{label:"Almoço",icon:"food-apple"}},[a("Almoco")],1),e._v(" "),a("b-step-item",{attrs:{label:"Sessões",icon:"calendar-check"}},[a("Sessoes")],1),e._v(" "),a("b-step-item",{attrs:{label:"Submissão",icon:"check"}},[a("SubmissaoInscricao")],1)],1)],1)])},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"1rem 2vw 0"}},[a("hr"),e._v(" "),a("h2",{staticClass:"title has-text-grey is-uppercase",staticStyle:{"font-size":"0.9rem"}},[e._v("\n    Docente responsável 1\n  ")]),e._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Nome"}},[a("b-input",{attrs:{type:"text",required:""},model:{value:e.nome,callback:function(t){e.nome=t},expression:"nome"}})],1)],1),e._v(" "),a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"E-mail"}},[a("b-input",{attrs:{type:"email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),e._v(" "),a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Telemóvel/Telefone"}},[a("b-input",{attrs:{type:"tel",required:""},model:{value:e.telemovel,callback:function(t){e.telemovel=t},expression:"telemovel"}})],1)],1)]),e._v(" "),a("b-button",{attrs:{"icon-left":"plus"}},[e._v("Outro docente")]),e._v(" "),a("hr")],1)},n=[],r={name:"Responsaveis"},l=r,c=a("2877"),d=Object(c["a"])(l,o,n,!1,null,null,null),u=d.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"1rem 2vw 0"}},[a("hr"),e._v(" "),a("h2",{staticClass:"title has-text-grey is-uppercase",staticStyle:{"font-size":"0.9rem"}},[e._v("\n    Informação da Escola\n  ")]),e._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Nome da escola"}},[a("b-input",{attrs:{type:"text",required:""},model:{value:e.nomeEscola,callback:function(t){e.nomeEscola=t},expression:"nomeEscola"}})],1)],1),e._v(" "),a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Localidade"}},[a("b-input",{attrs:{type:"text",required:""},model:{value:e.localidadeEscola,callback:function(t){e.localidadeEscola=t},expression:"localidadeEscola"}})],1)],1)]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title has-text-grey is-uppercase",staticStyle:{"font-size":"0.9rem"}},[e._v("\n    Informação da Turma\n  ")]),e._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Ano"}},[a("b-input",{attrs:{type:"number",required:""},model:{value:e.anoEscola,callback:function(t){e.anoEscola=t},expression:"anoEscola"}})],1)],1),e._v(" "),a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Turma"}},[a("b-input",{attrs:{type:"text",required:""},model:{value:e.turmaEscola,callback:function(t){e.turmaEscola=t},expression:"turmaEscola"}})],1)],1),e._v(" "),a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Número de alunos"}},[a("b-numberinput",{attrs:{"controls-position":"compact"}})],1)],1)]),e._v(" "),a("b-field",{attrs:{label:"Área científica"}},[a("b-input",{attrs:{type:"text",required:""},model:{value:e.areaCientifica,callback:function(t){e.areaCientifica=t},expression:"areaCientifica"}})],1),e._v(" "),a("hr")],1)},p=[],v={name:"Escola"},b=v,_=Object(c["a"])(b,m,p,!1,null,null,null),f=_.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"1rem 2vw 0"}},[a("hr"),e._v(" "),a("h2",{staticClass:"title has-text-grey is-uppercase",staticStyle:{"font-size":"0.9rem"}},[e._v("\n    Transportes fornecidos pela universidade\n  ")]),e._v(" "),a("b-table",{attrs:{data:e.transportes,striped:"",hoverable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-table-column",{attrs:{field:"escola",label:"Escola",sortable:""}},[e._v("\n        "+e._s(t.row.escola)+"\n      ")]),e._v(" "),a("b-table-column",{attrs:{field:"hora_partida",label:"Horário",width:"120"}},[e._v("\n        "+e._s(e.moment(t.row.hora_partida).format("hh:mm"))+" -\n        "+e._s(e.moment(t.row.hora_chegada).format("hh:mm"))+"\n      ")]),e._v(" "),a("b-table-column",{attrs:{field:"campus",label:"Campus",sortable:""}},[e._v("\n        "+e._s(t.row.campus)+"\n      ")]),e._v(" "),a("b-table-column",{attrs:{field:"numero_autocarros",label:"Nº Autocarros",sortable:""}},[e._v("\n        "+e._s(t.row.numero_autocarros)+"\n      ")]),e._v(" "),a("b-table-column",{attrs:{field:"numero_participantes",label:"Nº Lugares Disponíveis",sortable:""}},[e._v("\n        "+e._s(t.row.numero_participantes)+"\n      ")])]}}])}),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title has-text-grey is-uppercase",staticStyle:{"font-size":"0.9rem"}},[e._v("\n    Informação de transporte\n  ")]),e._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Meio de transporte"}},[a("b-select",{attrs:{expanded:""}},[a("option",{attrs:{value:"universidade"}},[e._v("Pedir transporte à universidade")]),e._v(" "),a("option",{attrs:{value:"comboio"}},[e._v("Comboio")]),e._v(" "),a("option",{attrs:{value:"autocarroProprio"}},[e._v("Autocarro Próprio")]),e._v(" "),a("option",{attrs:{value:"outrosMeios"}},[e._v("Outros Meios")])])],1)],1),e._v(" "),a("div",{staticClass:"column"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Hora de chegada"}},[a("b-timepicker",{attrs:{icon:"clock","increment-minutes":5,editable:""}})],1)],1),e._v(" "),a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Hora de partida"}},[a("b-timepicker",{attrs:{icon:"clock","increment-minutes":5,editable:""}})],1)],1)])])]),e._v(" "),a("p",{staticStyle:{display:"inline-block","padding-right":"2rem"}},[e._v("\n    Precisam de transporte para efectuar as visitas entre os 3 Campi?\n  ")]),e._v(" "),a("b-radio",{attrs:{name:"name","native-value":"Não"},model:{value:e.precisamTransporteEntreCampi,callback:function(t){e.precisamTransporteEntreCampi=t},expression:"precisamTransporteEntreCampi"}},[e._v("\n    Não\n  ")]),e._v(" "),a("b-radio",{attrs:{name:"name","native-value":"Sim"},model:{value:e.precisamTransporteEntreCampi,callback:function(t){e.precisamTransporteEntreCampi=t},expression:"precisamTransporteEntreCampi"}},[e._v("\n    Sim\n  ")]),e._v(" "),a("hr")],1)},g=[],S=(a("d81d"),{name:"Transporte",data:function(){return{precisamTransporteEntreCampi:"Não",transportes:[a("6862").map((function(e){return e.fields}))[3]],moment:a("c1df")}}}),C=S,y=Object(c["a"])(C,h,g,!1,null,null,null),x=y.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"1rem 2vw 0"}},[a("hr"),e._v(" "),a("h2",{staticClass:"title has-text-grey is-uppercase",staticStyle:{"font-size":"0.9rem"}},[e._v("\n    Informação de almoço\n  ")]),e._v(" "),a("b-field",{attrs:{label:"Cantina da Penha (Preço Aluno: €2.80, Preço Docente: €4.25)"}},[a("b-numberinput",{attrs:{"controls-position":"compact"}})],1),e._v(" "),a("b-field",{attrs:{label:"Cantina de Gambelas (Preço Aluno: €2.80, Preço Docente: €4.25)"}},[a("b-numberinput",{attrs:{"controls-position":"compact"}})],1),e._v(" "),a("hr")],1)},k=[],E={name:"Almoco"},T=E,A=Object(c["a"])(T,w,k,!1,null,"f5fe8f88",null),D=A.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"1rem 2vw 0"}},[a("hr"),e._v(" "),a("h2",{staticClass:"title has-text-grey is-uppercase",staticStyle:{"font-size":"0.9rem"}},[e._v("\n    Sessões Disponíveis\n  ")]),e._v(" "),a("SessoesDisponiveis"),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title has-text-grey is-uppercase",staticStyle:{"font-size":"0.9rem"}},[e._v("\n    Sessões Escolhidas\n  ")]),e._v(" "),a("SesoesEscolhidasTabela"),e._v(" "),a("hr")],1)},O=[],$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-3"},[a("SessoesDisponiveisMenuLateral")],1),e._v(" "),a("div",{staticClass:"column"},[a("SessoesDisponiveisTabela")],1)])])},I=[],q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-menu",{staticStyle:{"margin-bottom":"1rem"}},[a("b-menu-list",{attrs:{label:"Filtros Atividade"}},[a("b-field",[a("b-autocomplete",{attrs:{placeholder:"Nome da Atividade","keep-first":"",icon:"magnify",data:e.atividadesComFiltro,field:"name"},model:{value:e.nomeAtividade,callback:function(t){e.nomeAtividade=t},expression:"nomeAtividade"}},[a("template",{slot:"empty"},[e._v("Atividade não encontrada")])],2)],1),e._v(" "),a("b-field",[a("b-select",{attrs:{placeholder:"Tipo de Atividade",expanded:""}},e._l(e.tiposAtividade,(function(t,s){return a("option",{key:s,domProps:{value:t}},[e._v(e._s(t)+"\n          ")])})),0)],1),e._v(" "),a("b-field",[a("b-select",{attrs:{placeholder:"Campus",expanded:""}},e._l(e.campus,(function(t,s){return a("option",{key:s,domProps:{value:t}},[e._v(e._s(t)+"\n          ")])})),0)],1),e._v(" "),a("b-menu-item",{staticClass:"is-not-menu",attrs:{expanded:e.maisFiltrosAtividade},on:{click:function(t){e.maisFiltrosAtividade=!e.maisFiltrosAtividade}},scopedSlots:e._u([{key:"label",fn:function(t){return[a("b-icon",{staticClass:"is-pulled-right",attrs:{icon:t.expanded?"minus":"plus"}}),e._v(" "),a("small",[e._v("Mais Filtros de Atividade")])]}}])},[a("b-field",[a("b-datepicker",{attrs:{placeholder:"Submetido depois de...",icon:"calendar-today"}})],1),e._v(" "),a("b-field",[a("b-datepicker",{attrs:{placeholder:"Submetido antes de...",icon:"calendar-today"}})],1)],1)],1)],1),e._v(" "),a("b-menu",[a("b-menu-list",{attrs:{label:"Filtros Sessão"}},[a("div",{staticClass:"columns",staticStyle:{"margin-bottom":"0"}},[a("b-field",{staticClass:"column",staticStyle:{"margin-bottom":"0"}},[a("b-timepicker",{attrs:{placeholder:"De",icon:"clock",editable:"","increment-minutes":30}})],1),e._v(" "),a("b-field",{staticClass:"column"},[a("b-timepicker",{attrs:{placeholder:"Até",icon:"clock",editable:"","increment-minutes":30}})],1)],1),e._v(" "),a("b-field",{attrs:{label:"Mínimo de vagas"}},[a("b-numberinput",{attrs:{"controls-position":"compact",min:"0"},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}})],1),e._v(" "),a("b-menu-item",{staticClass:"is-not-menu",attrs:{expanded:e.maisFiltrosSessao},on:{click:function(t){e.maisFiltrosSessao=!e.maisFiltrosSessao}},scopedSlots:e._u([{key:"label",fn:function(t){return[a("b-icon",{staticClass:"is-pulled-right",attrs:{icon:t.expanded?"minus":"plus"}}),e._v(" "),a("small",[e._v("Mais Filtros de Sessão")])]}}])})],1)],1)],1)},F=[],N=a("2909"),Z=(a("4de4"),a("d3b7"),a("25f0"),a("b0c0"),a("6062"),a("3ca3"),a("ddb0"),{name:"SessoesDisponiveisMenuLateral",data:function(){return{maisFiltrosAtividade:!1,maisFiltrosSessao:!1,nomeAtividade:"",atividades:a("d1dd").map((function(e){return e.fields}))}},computed:{atividadesComFiltro:function(){var e=this;return this.atividades.filter((function(t){return t.name.toString().toLowerCase().indexOf(e.nomeAtividade.toLowerCase())>=0}))},tiposAtividade:function(){return Object(N["a"])(new Set(this.atividades.map((function(e){return e.activity_type})))).sort()},campus:function(){return Object(N["a"])(new Set(this.atividades.map((function(e){return e.campus})))).sort()},estadosSubmissao:function(){return Object(N["a"])(new Set(this.atividades.map((function(e){return e.submission_state})))).sort()}}}),z=Z,j=(a("bd1b"),Object(c["a"])(z,q,F,!1,null,null,null)),H=j.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-table",{ref:"table",attrs:{data:e.proposals,hoverable:"",detailed:"","default-sort":"submission_date","sort-icon":"menu-up",paginated:"",striped:"","per-page":"10","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{click:e.toggleDetails,"details-open":e.closeOtherDetails},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-table-column",{attrs:{field:"name",label:"Nome",sortable:"",width:"50%"}},[e._v("\n        "+e._s(t.row.name)+"\n      ")]),e._v(" "),a("b-table-column",{attrs:{field:"activity_type",label:"Tipo",sortable:""}},[e._v("\n        "+e._s(t.row.activity_type)+"\n      ")]),e._v(" "),a("b-table-column",{attrs:{field:"campus",label:"Campus",sortable:""}},[e._v("\n        "+e._s(t.row.campus)+"\n      ")]),e._v(" "),a("b-table-column",{attrs:{field:"organizational_entity",label:"E.O.",sortable:""}},[e._v("\n        "+e._s(t.row.organizational_entity)+"\n      ")]),e._v(" "),a("b-table-column",{attrs:{field:"department",label:"Dep.",sortable:""}},[e._v("\n        "+e._s(t.row.department)+"\n      ")])]}},{key:"detail",fn:function(t){return[a("div",{staticClass:"content"},[a("div",{staticStyle:{"font-size":"15px"}},[a("p",[e._v(e._s(t.row.description))]),e._v(" "),a("p",[a("strong",[e._v("Responsável:")]),e._v(" "+e._s(t.row.creator))]),e._v(" "),a("b-table",{attrs:{data:t.row.sessions},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-table-column",{attrs:{field:"datetime",label:"Hora"}},[e._v("\n                "+e._s(e.moment(t.row.datetime).format("HH:mm"))+"\n              ")]),e._v(" "),a("b-table-column",{attrs:{field:"duration",label:"Duração"}},[e._v("\n                "+e._s(t.row.duration)+" min\n              ")]),e._v(" "),a("b-table-column",{attrs:{field:"vagas",label:"Vagas"}},[e._v("\n                "+e._s(t.row.vagas)+"\n              ")]),e._v(" "),a("b-table-column",{attrs:{field:"place",label:"Espaço"}},[e._v("\n                "+e._s(t.row.place?t.row.place:"Por alocar")+"\n              ")]),e._v(" "),a("b-table-column",{attrs:{label:"Inscrever"}},[a("b-field",[a("b-numberinput",{staticClass:"no-margin-bottom",staticStyle:{width:"7rem","margin-bottom":"0"},attrs:{"controls-position":"compact",min:"0"},on:{change:function(a){e.mudarInscritos(t.row.id,e.inscritos[t.row.id])}},model:{value:e.inscritos[t.row.id],callback:function(a){e.$set(e.inscritos,t.row.id,a)},expression:"inscritos[session_props.row.id]"}})],1)],1)]}}])})],1)])]}}])})],1)},L=[],M=(a("159b"),{name:"SessoesDisponiveisTabela",data:function(){var e=a("d1dd").map((function(e){return e.fields}));return{proposals:e,moment:a("c1df"),state:{A:{description:"Aceite",color:"is-success"},P:{description:"Pendente",color:"is-warning"},R:{description:"Rejeitada",color:"is-danger"}},inscritos:this.$store.state.inscritos}},methods:{toggleDetails:function(e){this.$refs.table.toggleDetails(e)},closeOtherDetails:function(e){var t=this;this.proposals.forEach((function(a){e!==a&&t.$refs.table.closeDetailRow(a)})),this.$refs.table.openDetailRow(e)},mudarInscritos:function(e,t){this.$store.commit("mudarInscritos",e,t)}}}),R=M,J=(a("b48a"),Object(c["a"])(R,G,L,!1,null,null,null)),V=J.exports,B={name:"SessoesDisponiveis",components:{SessoesDisponiveisTabela:V,SessoesDisponiveisMenuLateral:H}},U=B,W=Object(c["a"])(U,$,I,!1,null,"1b91368a",null),K=W.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-table",{attrs:{data:e.sessoes.filter((function(t){return e.$store.state.inscritos[t.id]>0}))},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-table-column",{attrs:{field:"datetime",label:"Horário"}},[e._v(e._s(e.moment(t.row.datetime).format("HH:mm"))+" -\n      "+e._s(e.moment(t.row.datetime).add(t.row.duration,"minutes").format("HH:mm")))]),e._v(" "),a("b-table-column",{attrs:{field:"datetime",label:"Inscritos"}},[a("b-field",[a("b-numberinput",{staticStyle:{width:"7rem"},attrs:{min:"0","controls-position":"compact"},on:{change:function(a){e.mudarInscritos(t.row.id,e.inscritos[t.row.id])}},model:{value:e.inscritos[t.row.id],callback:function(a){e.$set(e.inscritos,t.row.id,a)},expression:"inscritos[props.row.id]"}})],1)],1),e._v(" "),a("b-table-column",{attrs:{field:"atividade",label:"Atividade"}},[e._v("\n      "+e._s(t.row.atividade)+"\n    ")]),e._v(" "),a("b-table-column",{attrs:{field:"place",label:"Espaço"}},[e._v("\n      "+e._s(t.row.place?t.row.place:"Por alocar")+"\n    ")]),e._v(" "),a("b-table-column",{attrs:{field:"campus",label:"Campus"}},[e._v("\n      "+e._s(t.row.campus)+"\n    ")]),e._v(" "),a("b-table-column",{attrs:{label:"Ações",centered:""}},[a("a",[a("b-icon",{attrs:{icon:"close-box",type:"is-danger"}})],1)])]}}])},[a("template",{slot:"empty"},[a("p",{staticClass:"has-text-grey"},[e._v("Ainda não há sessões escolhidas")])])],2)},X=[],Y={name:"SesoesEscolhidasTabela",data:function(){return{inscritos1:15,inscritos2:20,moment:a("c1df"),sessoes:a("ddcc").map((function(e){return e.fields})),inscritos:this.$store.state.inscritos}},methods:{mudarInscritos:function(e,t){this.$store.commit("mudarInscritos",e,t)}}},ee=Y,te=Object(c["a"])(ee,Q,X,!1,null,null,null),ae=te.exports,se={name:"Sessoes",components:{SesoesEscolhidasTabela:ae,SessoesDisponiveis:K}},ie=se,oe=Object(c["a"])(ie,P,O,!1,null,"dac68d9e",null),ne=oe.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("hr"),e._v(" "),a("h2",{staticClass:"title has-text-grey is-uppercase",staticStyle:{"font-size":"0.9rem"}},[e._v("\n    Resumo da inscrição\n  ")]),e._v(" "),a("p",[e._v("Dados Pessoais, Dados da escola, Sessões escolhidas, etc...")]),e._v(" "),a("br"),e._v(" "),a("p",[e._v("Um e-mail de confirmação será enviado para [e-mails].")]),e._v(" "),a("br"),e._v(" "),a("b-button",{attrs:{type:"is-danger","icon-left":"download"}},[e._v("\n    Obter PDF\n  ")]),e._v(" "),a("hr")],1)},le=[],ce={name:"SubmissaoInscricao"},de=ce,ue=Object(c["a"])(de,re,le,!1,null,null,null),me=ue.exports,pe={name:"Inscricao",components:{SubmissaoInscricao:me,Sessoes:ne,Almoco:D,Transporte:x,Escola:f,Responsaveis:u},data:function(){return{campos:[]}},methods:{submeter:function(){var e=this;this.$buefy.dialog.confirm({message:"Tem a certeza que submeter a inscrição no Dia Aberto?",cancelText:"Cancelar",confirmText:"Confirmar",type:"is-success",onConfirm:function(){return e.confirmado()}})},confirmado:function(){this.$buefy.toast.open("Inscrição concluída!"),this.$store.commit("adicionarNotificacao","A sua inscrição foi concluída com sucesso!"),this.$router.push({name:"inicio"})}}},ve=pe,be=(a("380c"),Object(c["a"])(ve,s,i,!1,null,null,null));t["default"]=be.exports},ddcc:function(e){e.exports=JSON.parse('[{"model":"activities.sessao","pk":1,"fields":{"id":1,"campus":"Gambelas","atividade":"Introdução a Python","datetime":"2020-02-20T09:30:00.000Z","duration":60,"max_students":25,"vagas":25,"collaborators_required":1,"collaborators_assigned":0,"place_specifications":["inside","computers"],"place":null}},{"model":"activities.sessao","pk":2,"fields":{"id":2,"campus":"Penha","atividade":"O primeiro Hello World","datetime":"2020-02-20T09:30:00.000Z","duration":60,"max_students":25,"vagas":25,"collaborators_required":1,"collaborators_assigned":0,"place_specifications":["inside","computers"],"place":null}},{"model":"activities.sessao","pk":3,"fields":{"id":3,"campus":"Penha","atividade":"Deixa-me rir","datetime":"2020-02-20T09:30:00.000Z","duration":60,"max_students":25,"vagas":25,"collaborators_required":1,"collaborators_assigned":0,"place_specifications":["inside","computers"],"place":null}},{"model":"activities.sessao","pk":4,"fields":{"id":4,"campus":"Penha","atividade":"Observação microscópica","datetime":"2020-02-20T09:30:00.000Z","duration":60,"max_students":25,"vagas":25,"collaborators_required":1,"collaborators_assigned":0,"place_specifications":["inside","computers"],"place":null}},{"model":"activities.sessao","pk":5,"fields":{"id":5,"campus":"Gambelas","atividade":"Fomos longe demais?","datetime":"2020-02-20T09:30:00.000Z","duration":60,"max_students":25,"vagas":25,"collaborators_required":1,"collaborators_assigned":0,"place_specifications":["Sala","Computadores"],"place":null}},{"model":"activities.sessao","pk":6,"fields":{"id":6,"campus":"Gambelas","datetime":"2020-02-20T11:30:00.000Z","atividade":"Fomos longe demais?","duration":30,"max_students":15,"vagas":15,"collaborators_required":0,"collaborators_assigned":0,"place_specifications":["Sala"],"place":null}},{"model":"activities.sessao","pk":7,"fields":{"id":7,"campus":"Gambelas","atividade":"Ciência no mundo","datetime":"2020-02-20T10:00:00.000Z","duration":60,"max_students":30,"vagas":30,"collaborators_required":1,"collaborators_assigned":0,"place_specifications":["Sala","Computadores"],"place":"CP Anf. C"}},{"model":"activities.sessao","pk":8,"fields":{"id":8,"campus":"Gambelas","atividade":"Ciência no mundo","datetime":"2020-02-20T14:00:00.000Z","duration":90,"max_students":50,"vagas":40,"collaborators_required":0,"collaborators_assigned":0,"place_specifications":["Sala"],"place":null}},{"model":"activities.sessao","pk":9,"fields":{"id":9,"campus":"Gambelas","atividade":"Física no Dia a Dia","datetime":"2020-02-20T14:00:00.000Z","duration":60,"max_students":40,"vagas":35,"collaborators_required":1,"collaborators_assigned":0,"place_specifications":["Sala","Laboratório"],"place":"Ed.2 Sala 2.12"}}]')}}]);
//# sourceMappingURL=inscricao.8a934da5.js.map