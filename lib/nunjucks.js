'use strict';

const nunjucks = require('nunjucks');

module.exports = app => {

    nunjucks.configure({
        // autoescape: true
    });

    app.use((req, res, next) => {
        res.locals.nunjucks = () => function (content) {
            let ctx = Object.assign({}, res.locals, this);
            Object.keys(res.locals).forEach(item => {
                if (typeof ctx[item] !== 'function') return;
                let fn = ctx[item];
                let name = item.replace(/-([a-z])?/g, (val, letter) => letter ? letter.toUpperCase() : '');
                ctx.fn = ctx.fn || {};
                ctx.fn[name] = function (arg) {
                    return fn().call(this, arg);
                };
            });
            return nunjucks.renderString(content, ctx);
        };
        next();
    });
};