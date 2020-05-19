'use strict'
var _typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e
              }
            : function (e) {
                  return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
              },
    App = {
        components: {},
        utils: {
            getArgs: function getArgs($el) {
                try {
                    return (
                        eval('(' + $el.attr('data-component-options') + ')') ||
                        {}
                    )
                } catch (e) {
                    return {}
                }
            },
        },
    },
    bindComponents = function () {
        $('[data-component]').each(function () {
            var r = $(this)
            r.attr('data-component')
                .split(',')
                .forEach(function (e) {
                    if (!(e in App.components))
                        return (
                            console.error(
                                'Component "' + e + '" is not defined'
                            ),
                            !1
                        )
                    var n = r.data('data-loaded-components')
                    if (
                        (n || ((n = []), r.data('data-loaded-components', n)),
                        e in r.data('data-loaded-components'))
                    )
                        console.log('Component "' + e + '" already loaded')
                    else {
                        var t = App.utils.getArgs(r),
                            o = new (0, App.components[e])(r, t)
                        n.push(e),
                            r.data('data-component', o),
                            console.log('Component "' + e + '" loaded.')
                    }
                })
        })
    }
;(App.components.body = function (e, n) {
    return {}
}),
    (App.components.sidebar = function (e, n) {
        var t = e.find('[data-project-sidebar-dropdown]'),
            o = e.find('[data-project-sidebar-toggle]')
        $(window).on('resize load', function () {
            $(window).width() < 1e3 ? t.slideUp() : t.slideDown()
        }),
            o.on('click', function () {
                t.is(':visible') ? t.slideUp() : t.slideDown()
            })
    }),
    (App.components.skillsList = function (e, n) {
        $.extend({}, {}, n)
        var t = e.find('[data-skills-list-extra]'),
            o = e.find('[data-skills-list-toggle]')
        o.find('.close').hide(),
            t.hide(),
            o.on('click', function () {
                return t.slideDown(), o.hide(), !1
            })
    }),
    (App.components.filters = function (n, e) {
        var t = $.extend(
            {},
            {
                parentSelector: '[data-filter-parent]',
                triggerSelector: '[data-filter-trigger]',
                parentActiveClass: 'filters--open',
            },
            e
        )
        return (
            n.find(t.triggerSelector).click(function (e) {
                return (
                    e.preventDefault(), n.toggleClass(t.parentActiveClass), !1
                )
            }),
            {}
        )
    }),
    (App.components.image = function (n, e) {
        var t = $.extend(
                {},
                { fullscreenActiveClass: 'image--show-fullscreen' },
                e
            ),
            o = n.find('[data-image-fullscreen]'),
            r = n.find('[data-image-close-fullscreen]')
        return (
            0 < o.length &&
                (n.on('click', function () {
                    return n.addClass(t.fullscreenActiveClass), !1
                }),
                r.on('click', function () {
                    return n.removeClass(t.fullscreenActiveClass), !1
                }),
                $(document).keyup(function (e) {
                    if (27 === e.keyCode)
                        return n.removeClass(t.fullscreenActiveClass), !1
                })),
            {}
        )
    }),
    (App.components.header = function (n, e) {
        var t = $.extend(
                {},
                { overlayActiveClass: 'header-wrapper--show-overlay' },
                e
            ),
            o = n.find('[data-header-hamburger]'),
            r =
                (n.find('[data-header-overlay]'),
                n.find('[data-header-overlay-close]'))
        return (
            o.on('click', function () {
                return n.addClass(t.overlayActiveClass), !1
            }),
            r.on('click', function () {
                return n.removeClass(t.overlayActiveClass), !1
            }),
            $(document).keyup(function (e) {
                if (27 === e.keyCode)
                    return n.removeClass(t.overlayActiveClass), !1
            }),
            {}
        )
    }),
    (App.components.smoothScroll = function (r, e) {
        var a = $.extend(
            {},
            { speed: 500, easing: 'swing', scrollOffset: 15 },
            e
        )
        return (
            r.on('click', function (e) {
                e.preventDefault()
                var n = void 0,
                    t = r.attr('href')
                if (
                    (n =
                        'undefined' !==
                            (void 0 === t ? 'undefined' : _typeof(t)) &&
                        !1 !== t
                            ? this.hash
                            : r.attr('data-scroll-target'))
                ) {
                    var o = $(n)
                    $('html, body')
                        .stop()
                        .animate(
                            { scrollTop: o.offset().top - a.scrollOffset },
                            a.speed,
                            a.easing,
                            function () {
                                history.replaceState(null, null, n)
                            }
                        )
                } else console.log("Couldn't find target for smooth scroll:", r)
            }),
            {}
        )
    }),
    (App.components.accordian = function (n, e) {
        var t = $.extend(
            {},
            {
                activeClass: 'accordian__page--active',
                pageSelector: '[data-accordian-page]',
                triggerSelector: '[data-accordian-trigger]',
                contentSelector: '[data-accordian-content]',
            },
            e
        )
        n.find(t.pageSelector)
        return (
            n.find(t.triggerSelector).on('click', function () {
                var e = $(this).parent(t.pageSelector)
                return (
                    e.hasClass(t.activeClass)
                        ? (e.removeClass(t.activeClass),
                          n.trigger('closedPage', [e]))
                        : (e.addClass(t.activeClass),
                          n.trigger('openedPage', [e])),
                    !1
                )
            }),
            {}
        )
    }),
    (App.components.hero = function (e, n) {
        $.extend({}, {}, n)
        return (
            $(window).on('resize load', function () {
                $('.hero').css('height', $(window).height())
            }),
            $(window).resize(),
            setTimeout(function () {
                e.find('.all').addClass('strike'),
                    e.find('.some').fadeIn(200),
                    setTimeout(function () {
                        e.find('.some').addClass('strike'),
                            e.find('.one').fadeIn(200),
                            setTimeout(function () {
                                e.find('.one').addClass('strike'),
                                    e.find('.none').addClass('strike'),
                                    e.find('.ok').show()
                            }, 3e3)
                    }, 3e3)
            }, 3e3),
            {}
        )
    }),
    (App.components.errorPage = function (e, n) {
        $.extend({}, {}, n)
        return (
            $(window).on('resize load', function () {
                $('.errorPage').css('height', $(window).height())
            }),
            $(window).resize(),
            {}
        )
    }),
    (App.components.swiper = function (e, n) {
        $.extend({}, {}, n)
        var t = {},
            o = 'swiper-thumbnail--active',
            r = e.find('[data-swiper]'),
            a = e.find('[data-thumbnail]')
        return (
            (t.swiper = new Swiper(r[0], {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
            })),
            0 < a.length &&
                (a.removeClass(o),
                a.first().addClass(o),
                a.on('click', function () {
                    return (
                        a.removeClass(o),
                        $(this).addClass(o),
                        t.swiper.slideTo($(this).index()),
                        !1
                    )
                })),
            t
        )
    }),
    (App.components.comments = function (e, n) {
        e.on('click', function () {
            return (
                $.ajax({
                    type: 'GET',
                    url: 'https://timmy-omahony.disqus.com/embed.js',
                    dataType: 'script',
                    cache: !0,
                }),
                e.fadeOut(),
                !1
            )
        })
    }),
    (App.components.elevator = function (n, e) {
        var t = $.extend({}, { offset: 50 }, e),
            o = !1,
            r = 'elevator--visible'
        return (
            $(window).on('scroll load', function () {
                var e = $(window).scrollTop()
                e > t.offset && !o
                    ? (n.addClass(r), (o = !0))
                    : e < t.offset && o && (n.removeClass(r), (o = !1))
            }),
            n.on('click', function () {
                return $('html, body').animate({ scrollTop: 0 }, 600), !1
            }),
            {}
        )
    }),
    (App.components.masonry = function (e, n) {
        var t = e.masonry({
            itemSelector: '.masonry__item',
            percentPosition: !0,
            columnWidth: '.masonry__sizer',
            gutter: '.masonry__gutter',
        })
        t.imagesLoaded().progress(function () {
            t.masonry()
        })
    }),
    bindComponents()
//# sourceMappingURL=scripts.min.js.map
console.log('works')
