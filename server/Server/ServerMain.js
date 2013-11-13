var tcp = require("../LighterWebEngine/TCP");
var log = require("../Common/TSLog");
TSLog = log.create(log.INFO, "ServerLog.log");

var adaptUUID = 0;

tcp.CreateServer(4747,
    function(){
        TSLog.info("Server Init Success!")
    },
    function(hSocket, sBuffer){
        TSLog.info("Buffer:" + sBuffer)
    },
    function(hSocket){
        TSLog.info("下线 UUID:" + hSocket.UUID);
    },
    function(hSocket){
        hSocket.UUID = ++adaptUUID ;
        TSLog.info("上线 UUID:" + hSocket.UUID);
    }
);
