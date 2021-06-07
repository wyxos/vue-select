(function (e) { function t (t) { for (var o, i, r = t[0], c = t[1], a = t[2], p = 0, d = []; p < r.length; p++)i = r[p], Object.prototype.hasOwnProperty.call(u, i) && u[i] && d.push(u[i][0]), u[i] = 0; for (o in c)Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]); s && s(t); while (d.length)d.shift()(); return l.push.apply(l, a || []), n() } function n () { for (var e, t = 0; t < l.length; t++) { for (var n = l[t], o = !0, r = 1; r < n.length; r++) { var c = n[r]; u[c] !== 0 && (o = !1) }o && (l.splice(t--, 1), e = i(i.s = n[0])) } return e } var o = {}; var u = { app: 0 }; var l = []; function i (t) { if (o[t]) return o[t].exports; var n = o[t] = { i: t, l: !1, exports: {} }; return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports }i.m = e, i.c = o, i.d = function (e, t, n) { i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, i.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }) }, i.t = function (e, t) { if (1 & t && (e = i(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; var n = Object.create(null); if (i.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (var o in e)i.d(n, o, function (t) { return e[t] }.bind(null, o)); return n }, i.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return i.d(t, 'a', t), t }, i.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, i.p = '/'; var r = window.webpackJsonp = window.webpackJsonp || []; var c = r.push.bind(r); r.push = t, r = r.slice(); for (var a = 0; a < r.length; a++)t(r[a]); var s = c; l.push([0, 'chunk-vendors']), n() })({ 0: function (e, t, n) { e.exports = n('56d7') }, '56d7': function (e, t, n) { 'use strict'; n.r(t); n('e260'), n('e6cf'), n('cca6'), n('a79d'); var o = n('2b0e'); var u = function () { var e = this; var t = e.$createElement; var n = e._self._c || t; return n('div', { attrs: { id: 'app' } }, [n('p', [e._v('Example: Basic')]), n('div', [n('vue-select', { attrs: { options: e.options }, model: { value: e.model, callback: function (t) { e.model = t }, expression: 'model' } })], 1), n('p', [e._v('Example: Custom option template')]), n('div', [n('vue-select', { attrs: { options: e.options2 }, scopedSlots: e._u([{ key: 'label', fn: function (t) { var n = t.option; return [e._v(' ' + e._s(n.content.custom) + ' ')] } }, { key: 'option', fn: function (t) { var n = t.option; return [e._v(' ' + e._s(n.content.custom) + ' ')] } }]), model: { value: e.model2, callback: function (t) { e.model2 = t }, expression: 'model2' } })], 1), n('p', [e._v('Example: Format v-model output and restore selection from external update')]), n('div', [n('vue-select', { attrs: { options: e.options3, 'format-output': function (e) { return e.map(function (e) { return e.content.value }) }, 'external-update': function (e, t) { return e.indexOf(t.content.value) > -1 } }, scopedSlots: e._u([{ key: 'label', fn: function (t) { var n = t.option; return [e._v(' ' + e._s(n.content.custom) + ' - ' + e._s(n.isSelected) + ' ')] } }, { key: 'option', fn: function (t) { var n = t.option; return [e._v(' ' + e._s(n.content.custom) + ' - ' + e._s(n.isSelected) + ' ')] } }]), model: { value: e.model3, callback: function (t) { e.model3 = t }, expression: 'model3' } }), e._v(' ' + e._s(e.model3) + ' '), n('button', { on: { click: e.setSelection } }, [e._v('Set selection')])], 1)]) }; var l = []; var i = function () { var e = this; var t = e.$createElement; var n = e._self._c || t; return n('div', [n('div', { on: { click: e.toggleSelect } }, [e.selection.length ? n('div', e._l(e.selection, function (t, o) { return n('span', { key: o }, [e._t('label', function () { return [e._v(' ' + e._s(t) + ' ')] }, { option: t })], 2) }), 0) : n('div', [e._v(' Please select ')])]), e.show ? n('div', [n('ul', e._l(e.items, function (t, o) { return n('li', { key: o, class: { active: t.isSelected }, on: { click: function (n) { return e.toggle(t) } } }, [e._t('option', function () { return [e._v(' ' + e._s(t) + ' ')] }, { option: t })], 2) }), 0)]) : e._e()]) }; var r = []; var c = (n('4de4'), n('d81d'), n('159b'), { name: 'VueSelect', props: { options: { required: !0, type: Array }, formatOutput: { type: Function }, externalUpdate: { type: Function, default: function (e, t) { throw Error('external-update callback undefined on component.') } }, value: {} }, data: function () { return { show: !1, items: [], changedByInteraction: !1 } }, mounted: function () { this.setItems() }, computed: { selection: function () { return this.items.filter(function (e) { return e.isSelected }) } }, watch: { options: function () { this.setItems() }, value: function (e) { console.log(e, this.changedByInteraction), this.changedByInteraction ? this.changedByInteraction = !1 : (console.log(e), this.restoreSelection()) } }, methods: { setItems: function () { this.items = JSON.parse(JSON.stringify(this.options)).map(function (e) { return { isSelected: !1, content: e } }) }, toggle: function (e) { e.isSelected = !e.isSelected; var t = JSON.parse(JSON.stringify(this.selection)).map(function (e) { return delete e.isSelected, e }); this.$emit('input', this.formatOutput ? this.formatOutput(t) : t), this.changedByInteraction = !0 }, toggleSelect: function () { this.show = !this.show }, restoreSelection: function () { var e = this; this.items.forEach(function (t) { t.isSelected = e.externalUpdate(e.value, t) }) } } }); var a = c; var s = n('2877'); var p = Object(s.a)(a, i, r, !1, null, null, null); var d = p.exports; var f = { name: 'App', components: { VueSelect: d }, data: function () { return { options: [{ label: 'Value 1', value: 'value-1' }, { label: 'Value 2', value: 'value-2' }, { label: 'Value 3', value: 'value-3' }], model: [], options2: [{ custom: 'Value 1', value: 'value-1' }, { custom: 'Value 2', value: 'value-2' }, { custom: 'Value 3', value: 'value-3' }], model2: [], options3: [{ custom: 'Value 1', value: 'value-1' }, { custom: 'Value 2', value: 'value-2' }, { custom: 'Value 3', value: 'value-3' }], model3: [] } }, methods: { setSelection: function () { this.model3 = ['value-1', 'value-2'] } } }; var v = f; var m = Object(s.a)(v, u, l, !1, null, null, null); var h = m.exports; o.a.config.productionTip = !1, new o.a({ render: function (e) { return e(h) } }).$mount('#app') } })
// # sourceMappingURL=app.cab97214.js.map
