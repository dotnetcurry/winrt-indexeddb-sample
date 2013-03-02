(function () {
    "use strict";
    var orderDB;
    var dbCreated = false;

    WinJS.UI.processAll().then(function () {
        document.getElementById('btnsave').addEventListener('click', 'saveOrder', false);
        document.getElementById('btnedit').addEventListener('click', 'editOrder', false);
        document.getElementById('btndelete').addEventListener('click', 'deleteOrder', false);
        document.getElementById('btnloadrecord').addEventListener('click', 'loadOrder', false);
        document.getElementById('btncreatedb').addEventListener('click', 'createdatabase', false);
    });

    //Method to Create Database and Table
    function createdatabase()
    {
        orderDB = window.indexedDB.open("Orders", 1); //Name of the database

        orderDB.onupgradeneeded = function(e)
        {
            var ordDb = e.target.result;
            var tbl = ordDb.createObjectStore("OrderStore", [{ keypath: "OrderId", autoIncreament: true }, { "StockiestName": String }, {"OrderDate":Date},
                               { "OrderMedicine": String }, { "Quantity": Int32 }, { "UnitePrice": Int32 }, {"TotalPrice":Int32} ]);
            //tbl.createIndex("StockiestName", { unique: false });
            //tbl.createIndex("OrderDate", { unique: false });
            //tbl.createIndex("OrderMedicine", { unique: false });
            //tbl.createIndex("Quantity", { unique: false });
            //tbl.createIndex("UnitPrice", { unique: false });
            //tbl.createIndex("TotalPrice", { unique: false });
        }

        var md = new Windows.UI.Popups.MessageDialog("DB Created");
        md.showAsync();

        dbCreated = true;
    }
    

   // window.addEventListener("DOMContentLoaded", "createdatabase", false);
})();