(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["colaboradores"],{"1ecf":function(e){e.exports=JSON.parse('[{"model":"colaboradores.colaborador","pk":1,"fields":{"codigo":"1","nome":"João Mateus","preferencia_departamento":"DEEI","preferencia_departamento_importancia":"m","preferencia_tarefa":"percurso","preferencia_atividade":null,"preferencia_tarefa_importancia":"b","tarefas":[{"nome":"Acompanhar grupo 4 da atividade \\"Introdução a Python\\" à atividade \\"Fomos longe demais?\\"","inicio":"2020-02-20T10:30:00.000Z","fim":"2020-02-20T11:00:00.000Z"}]}},{"model":"colaboradores.colaborador","pk":2,"fields":{"codigo":"2","nome":"Pedro Magalhães","preferencia_departamento":null,"preferencia_departamento_importancia":null,"preferencia_tarefa":null,"preferencia_atividade":null,"preferencia_tarefa_importancia":null,"tarefas":[]}},{"model":"colaboradores.colaborador","pk":3,"fields":{"codigo":"3","nome":"Lucas Faísca","preferencia_departamento":"DEEI","preferencia_departamento_importancia":"a","preferencia_tarefa":"atividade","preferencia_atividade":"Introdução a Python","preferencia_tarefa_importancia":"m","tarefas":[]}},{"model":"colaboradores.colaborador","pk":4,"fields":{"codigo":"4","nome":"Nuno Silva","preferencia_departamento":null,"preferencia_departamento_importancia":null,"preferencia_tarefa":"percurso","preferencia_atividade":null,"preferencia_tarefa_importancia":"a","tarefas":[]}}]')},"2fca":function(e,a,t){"use strict";t("3d58")},"3d58":function(e,a,t){},d641:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-3"},[t("ColaboradoresMenuLateral",{attrs:{atividades:e.atividades}})],1),e._v(" "),t("div",{staticClass:"column"},[t("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[t("ul",[t("li",[t("router-link",{attrs:{to:"/"}},[e._v("Início")])],1),e._v(" "),t("li",{staticClass:"is-active"},[t("router-link",{attrs:{to:{name:"colaboradores"}}},[e._v("Colaboradores")])],1)])]),e._v(" "),t("b-button",{staticStyle:{"margin-bottom":"1rem"},attrs:{"icon-left":"plus",type:"is-success",outlined:""}},[e._v("Adicionar Colaborador")]),e._v(" "),t("ColaboradoresTabela",{attrs:{activities:e.atividades}})],1)])},r=[],i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("b-menu",{staticStyle:{"margin-bottom":"1rem"}},[t("b-menu-list",{attrs:{label:"Filtros Colaborador"}},[t("b-field",[t("b-autocomplete",{attrs:{placeholder:"Nome do Colaborador","keep-first":"",icon:"magnify",data:e.atividadesComFiltro,field:"name"},model:{value:e.nomeAtividade,callback:function(a){e.nomeAtividade=a},expression:"nomeAtividade"}},[t("template",{slot:"empty"},[e._v("Colaborador não encontrado")])],2)],1),e._v(" "),t("b-field",[t("b-autocomplete",{attrs:{placeholder:"Código do Colaborador","keep-first":"",icon:"magnify"}},[t("template",{slot:"empty"},[e._v("Colaborador não encontrado")])],2)],1),e._v(" "),t("b-menu-item",{staticClass:"is-not-menu",attrs:{expanded:e.maisFiltrosAtividade},on:{click:function(a){e.maisFiltrosAtividade=!e.maisFiltrosAtividade}},scopedSlots:e._u([{key:"label",fn:function(a){return[t("b-icon",{staticClass:"is-pulled-right",attrs:{icon:a.expanded?"minus":"plus"}}),e._v(" "),t("small",[e._v("Mais Filtros de Colaborador")])]}}])},[t("b-field",[t("b-datepicker",{attrs:{placeholder:"Submetido depois de...",icon:"calendar-today"}})],1),e._v(" "),t("b-field",[t("b-datepicker",{attrs:{placeholder:"Submetido antes de...",icon:"calendar-today"}})],1)],1)],1)],1),e._v(" "),t("b-menu",[t("b-menu-list",{attrs:{label:"Filtros Tarefa"}},[t("b-field",[t("b-autocomplete",{attrs:{placeholder:"Nome da Tarefa","keep-first":"",icon:"magnify",data:e.atividadesComFiltro,field:"name"},model:{value:e.nomeAtividade,callback:function(a){e.nomeAtividade=a},expression:"nomeAtividade"}},[t("template",{slot:"empty"},[e._v("Atividade não encontrada")])],2)],1),e._v(" "),t("b-field",[t("b-select",{attrs:{placeholder:"Tipo de Tarefa",icon:"magnify",expanded:""}},e._l(e.estadosSubmissao,(function(a,o){return t("option",{key:o,domProps:{value:a}},[e._v(e._s(e.$store.state.estadoSubmissao[a].descricao))])})),0)],1),e._v(" "),t("b-menu-item",{staticClass:"is-not-menu",attrs:{expanded:e.maisFiltrosAtividade},on:{click:function(a){e.maisFiltrosAtividade=!e.maisFiltrosAtividade}},scopedSlots:e._u([{key:"label",fn:function(a){return[t("b-icon",{staticClass:"is-pulled-right",attrs:{icon:a.expanded?"minus":"plus"}}),e._v(" "),t("small",[e._v("Mais Filtros de Tarefa")])]}}])},[t("b-field",[t("b-datepicker",{attrs:{placeholder:"Submetido depois de...",icon:"calendar-today"}})],1),e._v(" "),t("b-field",[t("b-datepicker",{attrs:{placeholder:"Submetido antes de...",icon:"calendar-today"}})],1)],1)],1)],1)],1)},n=[],l={name:"ColaboradoresMenuLateral"},s=l,d=t("2877"),c=Object(d["a"])(s,i,n,!1,null,null,null),m=c.exports,p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("b-table",{ref:"table",attrs:{data:e.colaboradores,hoverable:"",striped:"",detailed:"",paginated:"","per-page":"5","default-sort":"codigo","sort-icon":"menu-up","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{click:e.toggleDetails,"details-open":e.closeOtherDetails},scopedSlots:e._u([{key:"default",fn:function(a){return[t("b-table-column",{attrs:{field:"nome",label:"Nome",sortable:""}},[e._v("\n        "+e._s(a.row.nome))]),e._v(" "),t("b-table-column",{attrs:{label:"Preferências"}},[a.row.preferencia_departamento||a.row.preferencia_tarefa?t("ul",{staticClass:"disc"},[a.row.preferencia_departamento?t("li",[e._v("\n            Preferência\n            "),t("strong",[e._v(e._s(e.importancia[a.row.preferencia_departamento_importancia]))]),e._v("\n            em\n            "+e._s(a.row.preferencia_departamento)+"\n          ")]):e._e(),e._v(" "),a.row.preferencia_tarefa?t("li",[e._v("\n            Preferência\n            "),t("strong",[e._v(e._s(e.importancia[a.row.preferencia_tarefa_importancia]))]),e._v("\n            "+e._s(a.row.preferencia_atividade?"na":"em")+"\n            "+e._s(a.row.preferencia_tarefa)+"\n            "+e._s(a.row.preferencia_atividade)+"\n          ")]):e._e()]):t("span",[e._v("(Sem preferências)")])])]}},{key:"detail",fn:function(a){return[t("div",{staticClass:"content"},[t("div",{staticStyle:{"font-size":"15px"}},[t("p",[t("strong",[e._v("Tarefas:")])]),e._v(" "),t("b-table",{attrs:{data:a.row.tarefas},scopedSlots:e._u([{key:"default",fn:function(a){return[t("b-table-column",{attrs:{field:"inicio",label:"Horário",width:"120"}},[e._v("\n                "+e._s(e.moment(a.row.inicio).format("hh:mm"))+" -\n                "+e._s(e.moment(a.row.fim).format("hh:mm"))+"\n              ")]),e._v(" "),t("b-table-column",{attrs:{field:"nome",label:"Tarefa"}},[e._v("\n                "+e._s(a.row.nome)+"\n              ")]),e._v(" "),t("b-table-column",{attrs:{label:"Ações",centered:""}},[t("a",[t("b-icon",{attrs:{icon:"close-box",type:"is-danger"}})],1)])]}}])}),e._v(" "),t("div",{staticClass:"columns",staticStyle:{"margin-top":"1rem"}},[t("div",{staticClass:"column"},[t("b-field",[t("b-select",{attrs:{placeholder:"Tarefa a atribuir...",expanded:""}},[t("option",[e._v('09:00 - 10:00: Auxiliar na atividade "Observação\n                    Microscópica"')]),e._v(" "),t("option",[e._v('09:30 - 10:30: Auxiliar na atividade "Introdução a\n                    Python"')])])],1)],1),e._v(" "),t("div",{staticClass:"column"},[t("b-button",{attrs:{type:"is-success","icon-left":"account-arrow-left",outlined:""},on:{click:e.atribuirTarefa}},[e._v("Atribuir Tarefa")])],1)])],1)])]}}])})],1)},f=[],u=(t("d81d"),t("159b"),{name:"ColaboradoresTabela",data:function(){return{colaboradores:t("1ecf").map((function(e){return e.fields})),moment:t("c1df"),importancia:{a:"alta",m:"média",b:"baixa"}}},methods:{toggleDetails:function(e){this.$refs.table.toggleDetails(e)},closeOtherDetails:function(e){var a=this;this.colaboradores.forEach((function(t){e!==t&&a.$refs.table.closeDetailRow(t)})),this.$refs.table.openDetailRow(e)},atribuirTarefa:function(){this.$buefy.toast.open("Tarefa atribuída!")}}}),b=u,_=(t("2fca"),Object(d["a"])(b,p,f,!1,null,null,null)),v=_.exports,g={name:"Colaboradores",components:{ColaboradoresTabela:v,ColaboradoresMenuLateral:m}},h=g,C=Object(d["a"])(h,o,r,!1,null,null,null);a["default"]=C.exports}}]);
//# sourceMappingURL=colaboradores.a3504cc0.js.map