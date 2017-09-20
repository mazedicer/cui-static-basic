var app = {
    init: function() {
        var t = this;
        $("[data-plugin]").each(function() {
            var i = $(this)
              , o = i.attr("data-plugin");
            t[o].init(i)
        })
    },
    getSupportedPropertyName: function(t) {
        for (var i = 0; i < t.length; i++)
            if ("undefined" != typeof document.body.style[t[i]])
                return t[i];
        return null
    }
};
app.navscroll = {
    init: function(t) {
        this.el = t,
        this.loadListener()
    },
    loadListener: function() {
        this.el.on("click", function(t) {
            if ("" !== this.hash) {
                t.preventDefault();
                var i = this.hash;
                $("html, body").animate({
                    scrollTop: $(i).offset().top
                }, 800, function() {
                    window.location.hash = i
                })
            }
        })
    }
},
app.goscroll = {
    init: function(t) {
        this.el = t,
        this.hash = t.attr("data-hash"),
        this.loadListener()
    },
    loadListener: function() {
        if ("" !== this.hash) {
            var t = this.hash;
            $("html, body").animate({
                scrollTop: $(t).offset().top
            }, 800, function() {
                window.location.hash = t
            })
        }
    }
},
app.mkcomputer = {
    init: function(t) {
        var i = this;
        this.el = t,
        this.modal = t.find("[data-modal]"),
        this.loading = t.find("[data-modal-loading]"),
        this.approved = t.find("[data-modal-approved]"),
        this.backdrop = t.find("[data-backdrop]"),
        this.cursor = t.find("[data-cursor]"),
        this.button = t.find("[data-financing-button]"),
        this.replay = t.find("[data-replay]"),
        this.buttonHoverClass = this.button.attr("data-hover-class"),
        this.cursorOriginalTransformValue = this.getTransformValue(this.cursor),
        setTimeout(function() {
            i.play()
        }, 1e3),
        this.events()
    },
    play: function() {
        var t = this;
        this.moveCursor(),
        setTimeout(function() {
            t.toggleModal()
        }, 2e3)
    },
    events: function() {
        var t = this;
        this.replay.click(function() {
            t.reset(),
            t.play()
        })
    },
    reset: function() {
        this.modal.is(":visible") && (this.backdrop.add(this.modal).add(this.approved).add(this.replay).hide(),
        this.button.removeClass(this.buttonHoverClass))
    },
    moveCursor: function() {
        var t = this;
        this.cursor.css("visibility", "visible");
        var i = this.button.outerWidth()
          , o = this.button.outerHeight()
          , s = this.button.offset()
          , a = this.cursor.offset()
          , r = s.top - a.top + o / 2
          , n = s.left - a.left + i / 2;
        this.setTransformProperty(this.cursor, n, r),
        setTimeout(function() {
            t.button.addClass(t.buttonHoverClass)
        }, 1500)
    },
    toggleModal: function() {
        var t = this;
        this.backdrop.add(this.modal).add(this.loading).fadeIn(),
        this.cursor.css("visibility", "hidden"),
        this.cursor.css(this.getTransformPropertyName(), this.cursorOriginalTransformValue),
        setTimeout(function() {
            t.loading.hide(),
            t.approved.show(),
            setTimeout(function() {
                t.replay.fadeIn()
            }, 2e3)
        }, 2500)
    },
    makeTransformValue: function(t, i) {
        return "translate3d(" + t + "px, " + i + "px, 0px)"
    },
    setTransformProperty: function(t, i, o) {
        t.css(this.getTransformPropertyName(), this.makeTransformValue(i, o))
    },
    getTransformValue: function(t) {
        return t.css(this.getTransformPropertyName())
    },
    getTransformPropertyName: function() {
        var t = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];
        return app.getSupportedPropertyName(t)
    }
};
app.init();