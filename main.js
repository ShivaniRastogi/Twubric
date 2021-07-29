var app = angular.module("myapp",[
    // 'ngMaterial', 'ngMessages'
])
         
app.controller("HelloController", function($scope) {
    $scope.start_date =  $scope.start_date || new Date('1970-01-01Z00:00:00:000');
    $scope.end_date = $scope.end_date || new Date();
   $scope.users = [
    {
      "uid": 1,
      "username": "sampleuser1",
      "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
      "fullname": "Sample User One",
      "twubric": {
        "total": 3.5,
        "friends": 1,
        "influence": 1,
        "chirpiness": 1.5
      },
      "join_date": 1358899200
    },
    {
      "uid": 2,
      "username": "sampleuser2",
      "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
      "fullname": "Sample User Two",
      "twubric": {
        "total": 5,
        "friends": 1,
        "influence": 1,
        "chirpiness": 1.5
      },
      "join_date": 1355270400
    },
    {
      "uid": 3,
      "username": "sampleuser3",
      "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
      "fullname": "Sample User Three",
      "twubric": {
        "total": 7,
        "friends": 1,
        "influence": 1,
        "chirpiness": 1.5
      },
      "join_date": 1289433600
    },
    {
      "uid": 4,
      "username": "sampleuser4",
      "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
      "fullname": "Sample User Four",
      "twubric": {
        "total": 9,
        "friends": 2,
        "influence": 3,
        "chirpiness": 4
      },
      "join_date": 1300838400
    },
    {
      "uid": 5,
      "username": "sampleuser5",
      "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
      "fullname": "Sample User Five",
      "twubric": {
        "total": 9,
        "friends": 1,
        "influence": 4,
        "chirpiness": 4
      },
      "join_date": 1230768000
    },
    {
      "uid": 6,
      "username": "sampleuser6",
      "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
      "fullname": "Sample User Six",
      "twubric": {
        "total": 6,
        "friends": 2,
        "influence": 3,
        "chirpiness": 1
      },
      "join_date": 1252454400
    },
    {
      "uid": 7,
      "username": "sampleuser7",
      "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
      "fullname": "Sample User Seven",
      "twubric": {
        "total": 8,
        "friends": 2,
        "influence": 4,
        "chirpiness": 2
      },
      "join_date": 1278201600
    },
    {
      "uid": 8,
      "username": "sampleuser8",
      "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
      "fullname": "Sample User Eight",
      "twubric": {
        "total": 7,
        "friends": 2,
        "influence": 3,
        "chirpiness": 2
      },
      "join_date": 1331510400
    },
    {
      "uid": 9,
      "username": "sampleuser9",
      "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
      "fullname": "Sample User Nine",
      "twubric": {
        "total": 8,
        "friends": 1,
        "influence": 4,
        "chirpiness": 3
      },
      "join_date": 1367971200
    },
    {
      "uid": 10,
      "username": "sampleuser10",
      "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
      "fullname": "Sample User Ten",
      "twubric": {
        "total": 5,
        "friends": 1,
        "influence": 1,
        "chirpiness": 3
      },
      "join_date": 1228953600
    }
  ]

  $scope.sortarr = [
      {"total": "+"},
      {"friends": "+"},
      {"influence":"+"},
      {"chirpiness": "+"}
  ]
  for(let data = 0; data <$scope.users.length; ++data){
      var date = new Date($scope.users[data].join_date)
      $scope.users[data].join_date =date.toLocaleDateString();
  }

  $scope.sortCol = "";
//   $scope.sortOrder = '+';
  $scope.sortby = function(sortcol,sortOrder){
    $scope.sortCol = sortOrder+'twubric.'+sortcol;

    for(let i =0;i < $scope.sortarr.length ;++i){

        if($scope.sortarr[i][sortcol]){
        console.log($scope.sortarr[i][sortcol]);

            if(sortOrder === '+')
                $scope.sortarr[i][sortcol] = '-';
            else
                $scope.sortarr[i][sortcol] = '+';
        // console.log($scope.sortarr[i].key);
    }

    }
//     if(sortOrder === '+'){
//         // console.log(sortcol,sortOrder);

//         console.log( index);

//         // $scope.sortarr[index].sortcol= '-'

//     }

//     //     $scope.sortOrder = '-';
//     else {
//         $scope.sortarr.sortcol = '+'
//     }
//     // $scope.sortOrder = '+';
//     console.log(sortcol,sortOrder);
  }
 
  $scope.remove= function(userid){
      $scope.users = $scope.users.filter(obj => obj.uid !== userid);
      console.log('user after remove', $scope.users);
  }

}).filter('dateRange', function() {
    return function( items, fromDate, toDate ) {
        var filtered = [];
        //here you will have your desired input
        // console.log(fromDate, toDate);
        if(fromDate){
             var from_date = new Date(fromDate.getTime()).toLocaleDateString();
        }
           
        if(toDate)
            var to_date = new Date(toDate.getTime()).toLocaleDateString();
        // console.log(from_date, to_date);

        angular.forEach(items, function(user) {
            if(user.join_date> from_date && user.join_date < to_date) {
                filtered.push(user);
            }
            
        });
        // console.log(filtered)
        return filtered;
    };
  });