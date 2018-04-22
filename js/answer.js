"use strict";

/*
    작성자 : 오은선
*/

//초기 데이터
var data = {
    entitys : [
        {importance : "중요", status : 1, date : "2018.04.20", title : "맥북 업데이트"},
        {importance : "매우중요", status : 0, date : "2018.04.24", title : "삼성 서비스센터 방문, 케이스 및 부속품 확인 및 수리, 기타 악세사리 구입"},
        {importance : "보통", status : 0, date : "2018.04.25", title : "광장시장 가서 청소기 필터 구입. 오후에 청계천에서 친구 만나서 스터디"},
        {importance : "중요", status : 1, date : "2018.04.10", title : "팀 전원 의자 교체 및 층간, 자리이동, 화분 정리"},
        {importance : "매우중요", status : 1, date : "2018.04.15", title : "엄마 생신선물 구입"},
        {importance : "매우중요", status : 0, date : "2018.04.18", title : "미세먼지 필터, 마스크 남은 갯수 확인, 티몬에서 주문하기"}
    ]
}
var app = angular.module('app',[])
app.directive('focusOn', ['$timeout', '$parse', function ($timeout, $parse) {
    return {
        link: function (scope, element, attrs) {
            var inptxt = $parse(attrs.focusOn);
            scope.$watch(inptxt, function (value) {
                if (value) {
                    $timeout(function () {
                        element[0].focus();
                    });
                }
                scope.focusGo = false;
                scope.focusGoInptxt = false;
            });
            
        }
    };
}]);
app.controller('todoList', ['$scope', '$rootScope', '$filter', function($scope,$rootScope,$filter){

    $scope.todolist = data.entitys ? data.entitys : [];

    $scope.insertTodo = function(inputOption,inputText){
        if(!inputOption){
            alert("중요도를 선택하세요!");
            $scope.focusGo = true;
            return;
        }
        if(!inputText){
            alert("제목을 입력하세요!");
            $scope.focusGoInptxt = true;
            return;
        }
        var obj = {};
        obj.importance = inputOption;
        obj.status  = 0;
        obj.date = $filter('date')(new Date(),'yyyy.MM.dd');
        obj.title = inputText;

        $scope.todolist.push(obj);
        $scope.inputText = null;
    }

    $scope.changeStatus = function(idx){
        if( $scope.todolist[idx].status ){
            $scope.todolist[idx].status = 0;
        }else{
            $scope.todolist[idx].status = 1;
        }
        // $scope.todolist[idx].status 를 담아서 쓰지 않은 이유 : 대상 값이 원시값이므로.
    }

    //완료도 선택
    $scope.names = {
        all : true
    }
    $scope.otherDeactive = function(){
        $scope.names.all = true;
        $scope.names.complete = false;
        $scope.names.completeNot = false;
    }
    $scope.active = function(){
        if($scope.names.all){
            $scope.names.all = false;
        }
    }

    //중요도 선택
    $scope.names1 = {
        all : true
    }
    $scope.names1.all = true;
    $scope.otherDeactive1 = function(){
        $scope.names1.all = true;
        $scope.names1.importance1 = false;
        $scope.names1.importance2 = false;
        $scope.names1.importance3 = false;
    }
    $scope.toggleActive = function(){
        if($scope.names1.all){
            $scope.names1.all = false;
        }
    }
    
    $scope.listview = function(importance,status){
        var importanceAll = $scope.names1.all;
        var statusAll = $scope.names.all;
        var i,s,result;

        if( importanceAll && statusAll ){ return true; }

        function imp(importance){
            var results = false;
            if( importanceAll ){
                results = true;
            }else{
                switch(importance){
                    case $scope.names1.importance1 :
                    case $scope.names1.importance2 :
                    case $scope.names1.importance3 :
                        results = true;
                }
            }
            return results;
        }

        function stat(status){
            var results = false;
            if( statusAll ){
                results = true;
            }else{
                if( $scope.names.complete ==="true" && $scope.names.completeNot==="true"  ){ return true; }
                $scope.names.all = false;
                if(status){
                    if( $scope.names.complete ==="true" ){
                        results = true;
                    }else{
                        results = false;
                    }
                }else{
                    if( $scope.names.completeNot ==="true" ){
                        results = true;
                    }else{
                        results = false;
                    }
                }
            }
            return results;
        }        
        i = imp(importance);
        s = stat(status);        
        result = i && s;
        return result;
    }
}]);

