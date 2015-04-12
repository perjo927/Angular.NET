using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CV.Startup))]
namespace CV
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
