angular.module('ginas')
    .filter('yearReduce',function (){
        return function(inputArray, year, propertyToLook) {
            var returnArray = [];
            console.log(inputArray, year, propertyToLook)
            inputArray.forEach(function(instance){
                console.log(instance);
               if(instance[propertyToLook]){

                   if(instance[propertyToLook].indexOf(year)>-1){
                        returnArray.push(instance);
                    }
               }
            })
            console.log(returnArray);
            return returnArray;

        }

    })