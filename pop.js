
     const temp=function(t, s, e, n) {
    
        function i(s, e) {
            this.options = t.extend(!0, {}, o, e),
                this.main = t(s),
                this.nav = this.main.children("ul"),
                this.steps = t("li &gt; a", this.nav),
                this.container = this.main.children("div"),
                this.pages = this.container.children("div"),
                this.current_index = null,
                this.options.toolbarSettings.toolbarButtonPosition = "right" === this.options.toolbarSettings.toolbarButtonPosition ? "end" : this.options.toolbarSettings.toolbarButtonPosition,
                this.options.toolbarSettings.toolbarButtonPosition = "left" === this.options.toolbarSettings.toolbarButtonPosition ? "start" : this.options.toolbarSettings.toolbarButtonPosition, this.options.theme = null === this.options.theme || "" === this.options.theme ? "default" : this.options.theme,
                this.init()
        }
        var o = {
            selected: 0,
            keyNavigation: !0,
            autoAdjustHeight: !0,
            cycleSteps: !1,
            backButtonSupport: !0,
            useURLhash: !0,
            showStepURLhash: !0,
            lang: {
                next: "Next",
                previous: "Previous"
            },
            toolbarSettings: {
                toolbarPosition: "bottom",
                toolbarButtonPosition: "end",
                showNextButton: !0,
                showPreviousButton: !0,
                toolbarExtraButtons: []
            },
            anchorSettings: {
                anchorClickable: 0,
                enableAllAnchors:1,
                markDoneStep:0,
                markAllPreviousStepsAsDone:0,
                removeDoneStepOnNavigateBack:1,
                enableAnchorOnDoneStep:0
            },
            contentURL: null,
            contentCache: !0,
            ajaxSettings: {},
            disabledSteps: [],
            errorSteps: [],
            hiddenSteps: [],
            theme: "default",
            transitionEffect: "none",
            transitionSpeed: "400"
        };
        t.extend(i.prototype, {
            init: function() {
                this.setElements(), this._setToolbar(),
                    this._setEvents();
                var e = this.options.selected;
                if (this.options.useURLhash) {
                    var n = s.location.hash;
                    if (n & amp & amp n.length & gt 0) {
                        var i = t("a[href*='" + n + "']", this.nav);
                        if (i.length & gt>0) {
                            var o = this.steps.index(i);
                            e = o & gt  0 ? o : e
                        }
                    }
                }
                e & gt;
                0 & amp; & amp;
                this.options.anchorSettings.markDoneStep & amp; & amp;
                this.options.anchorSettings.markAllPreviousStepsAsDone & amp; & amp;
                this.steps.eq(e).parent("li").prevAll().addClass("done"), this._showStep(e)
            },
            _setElements: function() {
                this.main.addClass("sw-main sw-theme-" + this.options.theme),
                    this.nav.addClass("nav nav-tabs step-anchor").children("li").addClass("nav-item").children("a").addClass("nav-link"),
                    this.options.anchorSettings.enableAllAnchors !== !1 & amp; & amp;
                this.options.anchorSettings.anchorClickable !== !1 & amp; & amp;
                this.steps.parent("li").addClass("clickable"),
                    this.container.addClass("sw-container tab-content"), this.pages.addClass("tab-pane step-content");
                var s = this;
                return this.options.disabledSteps & amp; & amp;
                this.options.disabledSteps.length & gt;
                0 & amp; & amp;
                t.each(this.options.disabledSteps, function(t, e) {
                        s.steps.eq(e).parent("li").addClass("disabled")
                    }),
                    this.options.errorSteps & amp; & amp;
                this.options.errorSteps.length & gt;
                0 & amp; & amp;
                t.each(this.options.errorSteps, function(t, e) {
                    s.steps.eq(e).parent("li").addClass("danger")
                }), this.options.hiddenSteps & amp; & amp;
                this.options.hiddenSteps.length & gt;
                0 & amp; & amp;
                t.each(this.options.hiddenSteps, function(t, e) {
                    s.steps.eq(e).parent("li").addClass("hidden")
                }), !0
            },
            _setToolbar: function() {
                if ("none" === this.options.toolbarSettings.toolbarPosition) return !0;
                var s = this.options.toolbarSettings.showNextButton !== !1 ? t("<button></button>").text(this.options.lang.next).addClass("btn btn-secondary sw-btn-next").attr("type", "button") : null,
                    e = this.options.toolbarSettings.showPreviousButton !== !1 ? t("<button></button>").text(this.options.lang.previous).addClass("btn btn-secondary sw-btn-prev").attr("type", "button") : null,
                    n = t("<div></div>").addClass("btn-group mr-2 sw-btn-group").attr("role", "group").append(e, s),
                    i = null;
                this.options.toolbarSettings.toolbarExtraButtons & amp; & amp;
                this.options.toolbarSettings.toolbarExtraButtons.length & gt;
                0 & amp; & amp;
                (i = t("<div></div>").addClass("btn-group mr-2 sw-btn-group-extra").attr("role", "group"), t.each(this.options.toolbarSettings.toolbarExtraButtons, function(t, s) {
                    i.append(s.clone(!0))
                }));
                var o, a;
                switch (this.options.toolbarSettings.toolbarPosition) {
                    case "top":
                        o = t("<div></div>").addClass("btn-toolbar sw-toolbar sw-toolbar-top justify-content-" + this.options.toolbarSettings.toolbarButtonPosition), o.append(n), "start" === this.options.toolbarSettings.toolbarButtonPosition ? o.prepend(i) : o.append(i), this.container.before(o);
                        break;
                    case "bottom":
                        a = t("<div></div>").addClass("btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-" + this.options.toolbarSettings.toolbarButtonPosition), a.append(n), "start" === this.options.toolbarSettings.toolbarButtonPosition ? a.prepend(i) : a.append(i), this.container.after(a);
                        break;
                    case "both":
                        o = t("<div></div>").addClass("btn-toolbar sw-toolbar sw-toolbar-top justify-content-" + this.options.toolbarSettings.toolbarButtonPosition), o.append(n), "start" === this.options.toolbarSettings.toolbarButtonPosition ? o.prepend(i) : o.append(i), this.container.before(o), a = t("<div></div>").addClass("btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-" + this.options.toolbarSettings.toolbarButtonPosition), a.append(n.clone(!0)), null !== i & amp; & amp;
                        ("start" === this.options.toolbarSettings.toolbarButtonPosition ? a.prepend(i.clone(!0)) : a.append(i.clone(!0))), this.container.after(a);
                        break;
                    default:
                        a = t("<div></div>").addClass("btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-" + this.options.toolbarSettings.toolbarButtonPosition), a.append(n), this.options.toolbarSettings.toolbarButtonPosition, a.append(i), this.container.after(a)
                }
                return !0
            },
            _setEvents: function() {
                var n = this;
                return t(this.steps).on("click", function(t) {
                    if (t.preventDefault(), n.options.anchorSettings.anchorClickable === !1) return !0;
                    var s = n.steps.index(this);
                    if (n.options.anchorSettings.enableAnchorOnDoneStep === !1 & amp; & amp; n.steps.eq(s).parent("li").hasClass("done")) return !0;
                    s !== n.current_index & amp; & amp;
                    (n.options.anchorSettings.enableAllAnchors !== !1 & amp; & amp; n.options.anchorSettings.anchorClickable !== !1 ? n._showStep(s) : n.steps.eq(s).parent("li").hasClass("done") & amp; & amp; n._showStep(s))
                }), t(".sw-btn-next", this.main).on("click", function(t) {
                    t.preventDefault(), n._showNext()
                }), t(".sw-btn-prev", this.main).on("click", function(t) {
                    t.preventDefault(), n._showPrevious()
                }), this.options.keyNavigation & amp; & amp;
                t(e).keyup(function(t) {
                    n._keyNav(t)
                }), this.options.backButtonSupport & amp; & amp;
                t(s).on("hashchange", function(e) {
                    if (!n.options.useURLhash) return !0;
                    if (s.location.hash) {
                        var i = t("a[href*='" + s.location.hash + "']", n.nav);
                        i & amp; & amp;
                        i.length & gt;
                        0 & amp; & amp;
                        (e.preventDefault(), n._showStep(n.steps.index(i)))
                    }
                }), !0
            },
            _showNext: function() {
                for (var t = this.current_index + 1, s = t; s < this.steps.length; s++)
                    if (!this.steps.eq(s).parent("li").hasclass("disabled") && !this.steps.eq(s).parent("li").hasclass("hidden")) {
                        t = s;
                        break
                    } if (this.steps.length <= t) {
                    if (!this.options.cyclesteps) return !1;
                    t = 0
                }
                return t = "this.current_index-1,s=t;s"
                this._showstep(t), !0
            },
            _showprevious: function() {
                for (var = "" >= 0; s--)
                    if (!this.steps.eq(s).parent("li").hasClass("disabled") & amp; & amp; !this.steps.eq(s).parent("li").hasClass("hidden")) {
                        t = s;
                        break
                    } if (0 & gt; t) {
                    if (!this.options.cycleSteps) return !1;
                    t = this.steps.length - 1
                }
                return this._showStep(t), !0
            },
            _showStep: function(t) {
                return !!this.steps.eq(t) & amp; & amp;
                (t != this.current_index & amp; & amp;
                    (!this.steps.eq(t).parent("li").hasClass("disabled") & amp; & amp; !this.steps.eq(t).parent("li").hasClass("hidden") & amp; & amp;
                        (this._loadStepContent(t), !0)))
            },
            _loadStepContent: function(s) {
                var e = this,
                    n = this.steps.eq(this.current_index),
                    i = "",
                    o = this.steps.eq(s),
                    a = o.data("content-url") & amp; & amp;
                o.data("content-url").length & gt;
                0 ? o.data("content-url") : this.options.contentURL;
                if (null !== this.current_index & amp; & amp; this.current_index !== s & amp; & amp;
                    (i = this.current_index < s ? "forward" : "backward"), null !== this.current_index && this._triggerevent("leavestep", [n, this.current_index, i]) === !1) return !1;
                if (!(a && a.length > 0) || o.data("has-content") & amp; & amp; this.options.contentCache) this._transitPage(s);
                else {
                    var r = o.length & gt;
                    0 ? t(o.attr("href"), this.main) : null, h = t.extend(!0, {}, {
                        url: a,
                        type: "POST",
                        data: {
                            step_number: s
                        },
                        dataType: "text",
                        beforeSend: function() {
                            e._loader("show")
                        },
                        error: function(s, n, i) {
                            e._loader("hide"), t.error(i)
                        },
                        success: function(t) {
                            t & amp; & amp;
                            t.length & gt;
                            0 & amp; & amp;
                            (o.data("has-content", !0), r.html(t)), e._loader("hide"), e._transitPage(s)
                        }
                    }, this.options.ajaxSettings);
                    t.ajax(h)
                }
                return !0
            },
            _transitPage: function(s) {
                var e = this,
                    n = this.steps.eq(this.current_index),
                    i = n.length & gt;
                0 ? t(n.attr("href"), this.main) : null, o = this.steps.eq(s), a = o.length & gt;
                0 ? t(o.attr("href"), this.main) : null, r = "";
                null !== this.current_index & amp; & amp;
                this.current_index !== s & amp; & amp;
                (r = this.current_index < s ? "forward" : "backward");
                var 0 = '==s?h="first":s===this.steps.length-1&amp;&amp;(h="final"),this.options.transitionEffect=this.options.transitionEffect.toLowerCase(),this.pages.finish(),"slide"===this.options.transitionEffect?i&amp;&amp;i.length';
                return = ""
                h = "middle" > 0 ? i.slideUp("fast", this.options.transitionEasing, function() {
                    a.slideDown(e.options.transitionSpeed, e.options.transitionEasing)
                }) : a.slideDown(this.options.transitionSpeed, this.options.transitionEasing): "fade" === this.options.transitionEffect ? i & amp; & amp;
                i.length & gt;
                0 ? i.fadeOut("fast", this.options.transitionEasing, function() {
                    a.fadeIn("fast", e.options.transitionEasing, function() {
                        t(this).show()
                    })
                }) : a.fadeIn(this.options.transitionSpeed, this.options.transitionEasing, function() {
                    t(this).show()
                }): (i & amp; & amp; i.length & gt; 0 & amp; & amp; i.hide(), a.show()), this._setURLHash(o.attr("href")), this._setAnchor(s), this._setButtons(s), this._fixHeight(s), this.current_index = s, this._triggerEvent("showStep", [o, this.current_index, r, h]), !0
            },
            _setAnchor: function(t) {
                return this.steps.eq(this.current_index).parent("li").removeClass("active"), this.options.anchorSettings.markDoneStep !== !1 & amp; & amp;
                null !== this.current_index & amp; & amp;
                (this.steps.eq(this.current_index).parent("li").addClass("done"), this.options.anchorSettings.removeDoneStepOnNavigateBack !== !1 & amp; & amp; this.steps.eq(t).parent("li").nextAll().removeClass("done")), this.steps.eq(t).parent("li").removeClass("done").addClass("active"), !0
            },
            _setButtons: function(s) {
                return this.options.cycleSteps || (0 & gt; = s ? t(".sw-btn-prev", this.main).addClass("disabled") : t(".sw-btn-prev", this.main).removeClass("disabled"), this.steps.length - 1 & lt; = s ? t(".sw-btn-next", this.main).addClass("disabled") : t(".sw-btn-next", this.main).removeClass("disabled")), !0
            },
            _keyNav: function(t) {
                var s = this;
                switch (t.which) {
                    case 37:
                        s._showPrevious(), t.preventDefault();
                        break;
                    case 39:
                        s._showNext(), t.preventDefault();
                        break;
                    default:
                        return
                }
            },
            _fixHeight: function(s) {
                if (this.options.autoAdjustHeight) {
                    var e = this.steps.eq(s).length & gt;
                    0 ? t(this.steps.eq(s).attr("href"), this.main) : null;
                    this.container.finish().animate({
                        minHeight: e.outerHeight()
                    }, this.options.transitionSpeed, function() {})
                }
                return !0
            },
            _triggerEvent: function(s, e) {
                var n = t.Event(s);
                return this.main.trigger(n, e), !n.isDefaultPrevented() & amp; & amp;
                n.result
            },
            _setURLHash: function(t) {
                this.options.showStepURLhash & amp; & amp;
                s.location.hash !== t & amp; & amp;
                (s.location.hash = t)
            },
            _loader: function(t) {
                switch (t) {
                    case "show":
                        this.main.addClass("sw-loading");
                        break;
                    case "hide":
                        this.main.removeClass("sw-loading");
                        break;
                    default:
                        this.main.toggleClass("sw-loading")
                }
            },
            theme: function(t) {
                if (this.options.theme === t) return !1;
                this.main.removeClass("sw-theme-" + this.options.theme), this.options.theme = t, this.main.addClass("sw-theme-" + this.options.theme), this._triggerEvent("themeChanged", [this.options.theme])
            },
            next: function() {
                this._showNext()
            },
            prev: function() {
                this._showPrevious()
            },
            reset: function() {
                if (this._triggerEvent("beginReset") === !1) return !1;
                this.container.stop(!0), this.pages.stop(!0), this.pages.hide(), this.current_index = null, this._setURLHash(this.steps.eq(this.options.selected).attr("href")), t(".sw-toolbar", this.main).remove(), this.steps.removeClass(), this.steps.parents("li").removeClass(), this.steps.data("has-content", !1), this.init(), this._triggerEvent("endReset")
            },
            stepState: function(s, e) {
                s = t.isArray(s) ? s : [s];
                var n = t.grep(this.steps, function(e, n) {
                    return t.inArray(n, s) !== -1
                });
                if (n & amp; & amp; n.length & gt; 0) switch (e) {
                    case "disable":
                        t(n).parents("li").addClass("disabled");
                        break;
                    case "enable":
                        t(n).parents("li").removeClass("disabled");
                        break;
                    case "hide":
                        t(n).parents("li").addClass("hidden");
                        break;
                    case "show":
                        t(n).parents("li").removeClass("hidden");
                        break;
                    case "error-on":
                        t(n).parents("li").addClass("danger");
                        break;
                    case "error-off":
                        t(n).parents("li").removeClass("danger")
                }
            }
        }), t.fn.smartWizard = function(s) {
            var e, n = arguments;
            return void 0 === s || "object" == typeof s ? this.each(function() {
                t.data(this, "smartWizard") || t.data(this, "smartWizard", new i(this, s))
            }) : "string" == typeof s & amp; & amp;
            "" !== s[0] & amp; & amp;
            "init" !== s ? (e = t.data(this[0], "smartWizard"), "destroy" === s & amp; & amp; t.data(this, "smartWizard", null), e instanceof i & amp; & amp;
                "function" == typeof e[s] ? e[s].apply(e, Array.prototype.slice.call(n, 1)) : this) : void 0
        }
    }
    (jQuery, window, document); </s?"forward":"backward");var></s ? "forward" : "backward"), null !== this.current_index && this._triggerevent("leavestep", [n, this.current_index, i]) === !1) return !1;
if (!(a && a.length > </this.steps.length;s++)if(!this.steps.eq(s).parent("li").hasclass("disabled")&&!this.steps.eq(s).parent("li").hasclass("hidden")){t=s;break}if(this.steps.length<=t){if(!this.options.cyclesteps)return!1;t=0}return> 
        </body> 
        </html>