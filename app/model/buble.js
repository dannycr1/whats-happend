// Shared Recipe Constructor
bubleApp.factory("Buble", function(){
    function Buble(plainObject) {
        this.user = plainObject.user;
        this.date = plainObject.date;
        this.time = plainObject.time;
        this.content = plainObject.content;   
    };

    return Buble;
});


// need to add index
bubleApp.factory("bubles", function(Buble) {
    var bubleArr = [];

    var add = function(buble) {
        bubleArr.push(buble);
    }

    var update = function(index, buble) {
        bubleArr[index] = buble;
    }

    var remove = function(index) {
        bubleArr.splice(index, 1);
    }

    var load = function(bublePlainObjectArr) {
        for (var i = 0; i < bublePlainObjectArr.length; i++) {
            bubleArr.push(new Buble(bublePlainObjectArr[i]))
        }
    }

    var getAll = function() {
        return bubleArr;
    }

    var get = function(index) {
        return bubleArr[index];
    }

    var removeAll = function() {
        bubleArr = [];
    }

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll
    }
})