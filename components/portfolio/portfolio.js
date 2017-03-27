var app = angular.module("myApp");

app.controller("portfolioController", ["$scope", function($scope) {

    $scope.pageClass = 'page-portfolio'

    $scope.clickedPicture = function (image) {

        $('#myModal').appendTo("body").modal('show');

        switch(image) {
            case 'one':
                $scope.modalTitle = 'Syllabuster';
                $scope.modalImage = 'components/portfolio/images/syllabuster-macbook.png';
                break;
            case 'two':
                $scope.modalTitle = 'Application Tracker';
                $scope.modalImage = 'components/portfolio/images/apptracker-macbook.png';
                break;
            case 'three':
                $scope.modalTitle = 'K&J Diaries';
                $scope.modalImage = 'components/portfolio/images/kjmacbook.png';
                break;
            case 'four':
                $scope.modalTitle = 'Weather App';
                $scope.modalImage = 'components/portfolio/images/weathermacbook.png';
                break;
            case 'five':
                $scope.modalTitle = 'Rock the Vote';
                $scope.modalImage = 'components/portfolio/images/rockthevotemacbook.png';
                break;
        }

    };

}]);



