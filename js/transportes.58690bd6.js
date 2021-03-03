(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["transportes"],{"0933":function(t,a,e){},"311f":function(t,a,e){"use strict";e("d4c8")},"38bc":function(t,a,e){},"5f4f":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-3"},[e("TransportesMenuLateral",{attrs:{transportes:t.transportes}})],1),t._v(" "),e("div",{staticClass:"column"},[e("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[e("ul",[e("li",[e("router-link",{attrs:{to:"/"}},[t._v("Início")])],1),t._v(" "),e("li",{staticClass:"is-active"},[e("router-link",{attrs:{to:{name:"transportes"}}},[t._v("Transportes")])],1)])]),t._v(" "),e("b-button",{staticStyle:{"margin-bottom":"0.9rem","margin-right":"1rem"},attrs:{"icon-left":"plus",tag:"router-link",to:{name:"adicionar transporte"},type:"is-success",outlined:""}},[t._v("\n      Adicionar transporte\n    ")]),t._v(" "),e("b-button",{staticStyle:{"margin-bottom":"0.9rem"},attrs:{"icon-left":"application-import"},on:{click:t.submeter}},[t._v("\n      Publicar transportes\n    ")]),t._v(" "),e("TransportesTabela",{attrs:{transportes:t.transportes}})],1)])},r=[],s=(e("d81d"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-menu",[e("b-menu-list",{attrs:{label:"Filtros Transporte"}},[e("b-field",[e("b-autocomplete",{attrs:{placeholder:"Nome da escola","keep-first":"",icon:"magnify",data:t.transportesComFiltro,field:"escola"},model:{value:t.transporte,callback:function(a){t.transporte=a},expression:"transporte"}},[e("template",{slot:"empty"},[t._v("Escola não encontrada")])],2)],1),t._v(" "),e("b-field",[e("b-autocomplete",{attrs:{placeholder:"Nome da localidade","keep-first":"",icon:"magnify",data:t.localidadesComFiltro,field:"localidade"},model:{value:t.localidade,callback:function(a){t.localidade=a},expression:"localidade"}},[e("template",{slot:"empty"},[t._v("Escola não encontrada")])],2)],1),t._v(" "),e("b-field",[e("b-select",{attrs:{placeholder:"Campus",expanded:""}},t._l(t.campus,(function(a,o){return e("option",{key:o,domProps:{value:a}},[t._v(t._s(a)+"\n          ")])})),0)],1),t._v(" "),e("div",{staticClass:"columns",staticStyle:{"margin-bottom":"0"}},[e("b-field",{staticClass:"column",staticStyle:{"margin-bottom":"0"}},[e("b-timepicker",{attrs:{placeholder:"De",icon:"clock",editable:"","increment-minutes":30}})],1),t._v(" "),e("b-field",{staticClass:"column"},[e("b-timepicker",{attrs:{placeholder:"Até",icon:"clock",editable:"","increment-minutes":30}})],1)],1),t._v(" "),e("b-field",[e("b-select",{attrs:{placeholder:"Estado",expanded:""}},t._l(t.estado,(function(a,o){return e("option",{key:o,domProps:{value:a}},[t._v(t._s(a)+"\n          ")])})),0)],1),t._v(" "),e("b-menu-item",[e("template",{slot:"label"},[e("b-icon",{staticClass:"is-pulled-right",attrs:{icon:"plus"}}),t._v(" "),e("small",[t._v("Mais Filtros de Transporte")])],1)],2)],1)],1)],1)}),n=[],i=e("2909"),l=(e("4de4"),e("d3b7"),e("25f0"),e("6062"),e("3ca3"),e("ddb0"),{name:"TransportesMenuLateral",props:{transportes:[]},data:function(){return{transporte:"",localidade:""}},computed:{transportesComFiltro:function(){var t=this;return this.transportes.filter((function(a){return a.escola.toString().toLowerCase().indexOf(t.transporte.toLowerCase())>=0}))},localidadesComFiltro:function(){var t=this;return this.transportes.filter((function(a){return a.localidade.toString().toLowerCase().indexOf(t.localidade.toLowerCase())>=0}))},campus:function(){return Object(i["a"])(new Set(this.transportes.map((function(t){return t.campus})))).sort()},estado:function(){return Object(i["a"])(new Set(this.transportes.map((function(t){return t.estado})))).sort()}}}),c=l,d=(e("f387"),e("2877")),u=Object(d["a"])(c,s,n,!1,null,null,null),p=u.exports,m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-table",{ref:"table",attrs:{data:t.transportes,hoverable:"",striped:"",detailed:"","default-sort":"submission_date","sort-icon":"menu-up",paginated:"","per-page":"10","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{click:t.toggleDetails,"details-open":t.closeOtherDetails},scopedSlots:t._u([{key:"default",fn:function(a){return[e("b-table-column",{attrs:{field:"escola",label:"Escola",sortable:""}},[t._v("\n        "+t._s(a.row.escola)+"\n      ")]),t._v(" "),e("b-table-column",{attrs:{field:"localidade",label:"Localidade",sortable:""}},[t._v("\n        "+t._s(a.row.localidade)+"\n      ")]),t._v(" "),e("b-table-column",{attrs:{field:"campus",label:"Campus",sortable:""}},[t._v("\n        "+t._s(a.row.campus)+"\n      ")]),t._v(" "),e("b-table-column",{attrs:{field:"hora_partida",label:"Horário",width:"120"}},[t._v("\n        "+t._s(t.moment(a.row.hora_partida).format("hh:mm"))+" -\n        "+t._s(t.moment(a.row.hora_chegada).format("hh:mm"))+"\n      ")]),t._v(" "),e("b-table-column",{attrs:{label:"Estado"}},["Publicado"===a.row.estado?e("span",{staticClass:"tag is-success",staticStyle:{width:"7rem","font-size":"small"}},[t._v("\n          "+t._s(a.row.estado)+"\n        ")]):t._e(),t._v(" "),"Por publicar"===a.row.estado?e("span",{staticClass:"tag is-warning",staticStyle:{width:"7rem","font-size":"small"}},[t._v("\n          "+t._s(a.row.estado)+"\n        ")]):t._e()])]}}])})],1)},f=[],b=(e("159b"),{name:"TransportesTabela",props:{transportes:[]},data:function(){return{moment:e("c1df")}},methods:{toggleDetails:function(t){this.$refs.table.toggleDetails(t)},closeOtherDetails:function(t){var a=this;this.transportes.forEach((function(e){t!==e&&a.$refs.table.closeDetailRow(e)})),this.$refs.table.openDetailRow(t)}}}),v=b,_=(e("311f"),Object(d["a"])(v,m,f,!1,null,null,null)),h=_.exports,C={name:"Transportes",components:{TransportesTabela:h,TransportesMenuLateral:p},data:function(){return{transportes:e("6862").map((function(t){return t.fields}))}},methods:{submeter:function(){var t=this;this.$buefy.dialog.confirm({message:"Tem a certeza que quer publicar os transporte?",cancelText:"Cancelar",confirmText:"Confirmar",type:"is-success",onConfirm:function(){return t.confirmado()}})},confirmado:function(){this.$buefy.toast.open("Transportes publicados!"),this.$store.commit("adicionarNotificacao","Os transportes foram publicados com sucesso!")}}},g=C,w=Object(d["a"])(g,o,r,!1,null,null,null);a["default"]=w.exports},6862:function(t){t.exports=JSON.parse('[{"model":"transportes.transporte","pk":1,"fields":{"hora_partida":"2020-02-20T06:00:00.000Z","hora_chegada":"2020-02-20T09:00:00.000Z","escola":"Escola Secundária Henriques Nogueira","localidade":"Torres Vedras","campus":"Gambelas","numero_autocarros":1,"numero_participantes":50,"estado":"Por publicar"}},{"model":"transportes.transporte","pk":2,"fields":{"hora_partida":"2020-02-20T08:00:00.000Z","hora_chegada":"2020-02-20T09:00:00.000Z","escola":"Escola Secundária José Bernardino","localidade":"Vilar","campus":"Gambelas","numero_autocarros":2,"numero_participantes":120,"estado":"Por publicar"}},{"model":"transportes.transporte","pk":3,"fields":{"hora_partida":"2020-02-20T08:30:00.000Z","hora_chegada":"2020-02-20T09:30:00.000Z","escola":"Escola Secundária Filipe de Souza","localidade":"Tavira","campus":"Penha","numero_autocarros":2,"numero_participantes":100,"estado":"Publicado"}},{"model":"transportes.transporte","pk":4,"fields":{"hora_partida":"2020-02-20T10:10:00.000Z","hora_chegada":"2020-02-20T11:00:00.000Z","escola":"Escola Secundária de Loulé","localidade":"Loulé","campus":"Gambelas","numero_autocarros":1,"numero_participantes":60,"estado":"Publicado"}}]')},"98df":function(t,a,e){"use strict";e("38bc")},d4c8:function(t,a,e){},e966:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"top"}},[e("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[e("ul",[e("li",[e("router-link",{attrs:{to:{name:"inicio"}}},[t._v("Início")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:{name:"transportes"}}},[t._v("Transportes")])],1),t._v(" "),e("li",{staticClass:"is-active"},[e("router-link",{attrs:{to:{name:"adicionar transporte"}}},[t._v("Adicionar Transporte")])],1)])]),t._v(" "),e("div",{staticStyle:{padding:"3rem 2vw 1rem"}},[e("b-steps",{attrs:{type:"is-success"}},[e("b-step-item",{attrs:{label:"Adicionar Transporte",icon:"train-car"}},[e("div",{staticStyle:{padding:"1rem 2vw 0"}},[e("hr"),t._v(" "),e("div",{staticClass:"column is-offset-3 is-6"},[e("b-field",{attrs:{label:"Escola"}},[e("b-input",{model:{value:t.Escola,callback:function(a){t.Escola=a},expression:"Escola"}})],1),t._v(" "),e("b-field",{attrs:{label:"Localidade"}},[e("b-input",{model:{value:t.Localidade,callback:function(a){t.Localidade=a},expression:"Localidade"}})],1),t._v(" "),e("b-field",{attrs:{label:"Campus"}},[e("b-select",{attrs:{expanded:""}},[e("option",[t._v("Gambelas")]),t._v(" "),e("option",[t._v("Penha")])])],1),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Número de autocarros"}},[e("b-numberinput",{attrs:{"controls-position":"compact"}})],1)],1),t._v(" "),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Número de lugares"}},[e("b-numberinput",{attrs:{"controls-position":"compact"}})],1)],1)]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Horário de partida"}},[e("b-timepicker",{attrs:{placeholder:"De",icon:"clock",editable:"","increment-minutes":5}})],1)],1),t._v(" "),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Horário de chegada"}},[e("b-timepicker",{attrs:{placeholder:"Até",icon:"clock",editable:"","increment-minutes":5}})],1)],1)])],1),t._v(" "),e("hr")])]),t._v(" "),e("template",{slot:"navigation"},[e("div",{staticClass:"column is-8 is-offset-2"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("b-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#top",expression:"'#top'"}],attrs:{tag:"router-link",to:{name:"transportes"},outlined:""}},[t._v("\n                Cancelar\n              ")])],1),t._v(" "),e("div",{staticClass:"level-right"},[e("b-button",{attrs:{outlined:"",size:"is-large",type:"is-success"},on:{click:function(a){return a.preventDefault(),t.submeter(a)}}},[t._v("\n                Adicionar Transporte\n              ")])],1)])])])],2)],1)])},r=[],s=(e("d81d"),e("4de4"),e("d3b7"),e("25f0"),e("b0c0"),{name:"Adicionar Transporte",data:function(){return{radio:null,atividades:e("d1dd").map((function(t){return t.fields})),nomeAtividade:"",localEncontro:"",localDestino:""}},computed:{atividadesComFiltro:function(){var t=this;return this.atividades.filter((function(a){return a.name.toString().toLowerCase().indexOf(t.nomeAtividade.toLowerCase())>=0}))},localEncontroComFiltro:function(){var t=this;return this.atividades.filter((function(a){return a.name.toString().toLowerCase().indexOf(t.localEncontro.toLowerCase())>=0}))},localDestinoComFiltro:function(){var t=this;return this.atividades.filter((function(a){return a.name.toString().toLowerCase().indexOf(t.localDestino.toLowerCase())>=0}))}},methods:{submeter:function(){var t=this;this.$buefy.dialog.confirm({message:"Tem a certeza que quer adicionar o transporte?",cancelText:"Cancelar",confirmText:"Confirmar",type:"is-success",onConfirm:function(){return t.confirmado()}})},confirmado:function(){this.$buefy.toast.open("Transporte adicionado!"),this.$store.commit("adicionarNotificacao","O transporte foi adicionado com sucesso!"),this.$router.push({name:"transportes"})}}}),n=s,i=(e("98df"),e("2877")),l=Object(i["a"])(n,o,r,!1,null,null,null);a["default"]=l.exports},f387:function(t,a,e){"use strict";e("0933")}}]);
//# sourceMappingURL=transportes.58690bd6.js.map