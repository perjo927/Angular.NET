using System.Web.Optimization;

namespace CV
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        { 
            bundles.Add(new ScriptBundle("~/bundles/js")
                .IncludeDirectory("~/Scripts/Lib", "*.js")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .IncludeDirectory("~/Scripts/Services", "*.js")
                .IncludeDirectory("~/Scripts/Factories", "*.js")
                .Include("~/Scripts/CvApp.js"));

            bundles.Add(new StyleBundle("~/bundles/css")
                .IncludeDirectory("~/Content/Css", "*.css"));

            BundleTable.EnableOptimizations = true;
        }
    }
}