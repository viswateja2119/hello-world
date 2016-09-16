/**
 * Created by viswatejareddy on 8/30/2016.
 */
var myApp=angular
                .module("myModule",[])
                .controller("myController",function ($scope) {


                    var employees = [
                        {name: "Ben", dateOfBirth: new Date("November 23,1990"), gender: "Male", salary: 55000.788},
                        {name: "viswa", dateOfBirth: new Date("September 23,1934"), gender: "Male", salary: 65000.788},
                        {name: "teja", dateOfBirth: new Date("January 22,1960"), gender: "Female", salary: 75000.788},
                        {name: "reddy", dateOfBirth: new Date("March 12,1978"), gender: "Male", salary: 85000.788},
                        {name: "sannapareddy", dateOfBirth: new Date("April 15,1999"), gender: "Male", salary: 95000.788}
                    ];

                    $scope.employees = employees;
                    $scope.sortColumn="name";
                    $scope.reverseSort=false;

                    $scope.sortData=function (column) {

                        $scope.reverseSort=($scope.sortColumn==column) ? !scope.reverseSort :false;
                        $scope.sortColumn=column;

                    }

                    $scope.getSortClass= function (column) {


                        if ($scope.sortColumn==column){

                            return $scope.reverseSort? 'arrow-down' : 'arrow-up '
                        }

                        return '';
                    }



                });
