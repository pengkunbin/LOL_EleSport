module.exports = app => {
    return class SPAController extends app.Controller {
        async client() {
            const { ctx } = this;
            await ctx.renderClient('bootstrap.js', {});
        }
    };
};
