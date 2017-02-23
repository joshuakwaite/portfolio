var app = angular.module("myApp", ['ngRoute', 'ngAnimate'])

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/index", {
            templateUrl: "memorygame.html",
            controller: "cardController"
        })
        .when("/empty/na", {
            templateUrl: "components/home/page-home.html",
            controller: "homeController"
        })
        .when("/home", {
            templateUrl: "components/about/page-about.html",
            controller: "aboutController"
        })
        .when("/skills", {
            templateUrl: "components/skills/page-skills.html",
            controller: "skillsController"
        })
        .when("/projects", {
            templateUrl: "components/portfolio/page-portfolio.html",
            controller: "portfolioController"
        })
        .otherwise({
            redirectTo: "/home"
        })
}])

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

