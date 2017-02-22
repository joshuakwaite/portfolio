var app = angular.module("myApp", ['ngRoute', 'ngAnimate'])

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/index", {
            templateUrl: "memorygame.html",
            controller: "cardController"
        })
        .when("/home", {
            templateUrl: "components/home/page-home.html",
            controller: "homeController"
        })
        .when("/about", {
            templateUrl: "components/about/page-about.html",
            controller: "aboutController"
        })
        .when("/skills", {
            templateUrl: "components/skills/page-skills.html",
            controller: "skillsController"
        })
        .when("/portfolio", {
            templateUrl: "components/portfolio/page-portfolio.html",
            controller: "portfolioController"
        })
        .otherwise({
            redirectTo: "/home"
        })
}])
