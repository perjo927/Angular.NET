﻿using System.Web.Mvc;
using System.Web.Routing;

namespace CV
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "routeOne",
                url: "routesDemo/One",
                defaults: new { controller = "RoutesDemo", action = "One" });

            routes.MapRoute(
                name: "routeTwo",
                url: "routesDemo/Two/{donuts}",
                defaults: new { controller = "RoutesDemo", action = "Two", donuts = UrlParameter.Optional });

            routes.MapRoute(
                name: "routeThree",
                url: "routesDemo/Three",
                defaults: new { controller = "RoutesDemo", action = "Three" });

            routes.MapRoute(
                name: "routeFour",
                url: "routesDemo/Four",
                defaults: new { controller = "RoutesDemo", action = "Four" });

            routes.MapRoute(
                name: "login",
                url: "Account/Login",
                defaults: new { controller = "Account", action = "Login" });

            routes.MapRoute(
                name: "apiDemo",
                url: "ApiDemo/Index",
                defaults: new { controller = "ApiDemo", action = "Index" });

            routes.MapRoute(
                name: "Default",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" });
        }
    }
}
