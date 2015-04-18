using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(CvApi.Startup))]

namespace CvApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            ConfigureAuth(app);
        }
    }
}
