using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JS_TestConnection.Startup))]
namespace JS_TestConnection
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
