// Shared Page Constructor
bubleApp.factory("Page", function () {
    function Page() {
        this.pageBubleList = [];
        this.maxPageHeight = 290;
        this.currentPageHeight = 0;

        this.addBuble = function (buble) {
            if (this.currentPageHeight + buble.bubleHeight + 1 < this.maxPageHeight)
            { return true }
            else { return false }



        }

    }
    return Page;
});




// need to add index
bubleApp.factory("pages", function (Page) {
    var pageArr = [];

    var addBuble2Page = function (bubleIndex) {
        if (addBuble2Page[length-1].addBuble(bubleIndex) == "true") {
            pageBubleList.push(bublrArr[i]);
            this.currentPageHeight += pageBubleList[i].sizebubleHeight + 1;
            console.log("adding buble" + bublrArr[i] + " size" + pageBubleList[i].sizebubleHeight)
        }
        else {
            pageArr.push(new Page());
             console.log("Crete new page:" + pageArr[length])
        }

    }


    var add = function (page) {
        pageArr.push(page);
    }

    var update = function (index, page) {
        pageArr[index] = page;
    }

    var remove = function (index) {
        pageArr.splice(index, 1);
    }

    var load = function () {
        pageArr.push(new Page())
    }

    var getAll = function () {
        return pageArr;
    }

    var get = function (index) {
        return pageArr[index];
    }

    var removeAll = function () {
        pageArr = [];
    }

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll,
        addBuble2Page: addBuble2Page

    }
})