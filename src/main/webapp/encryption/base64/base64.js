$(function () {
    String.prototype.replaceAll = function(s1,s2){
        return this.replace(new RegExp(s1,"gm"),s2);
    }
    var base64Helper = {
        "encode": function () {
            var inputText = $("#inputCode").val();
            var bytes = utf8.encode(inputText);
            var outputTxt = base64.encode(bytes);
            $("#outputCode").val(outputTxt);
        }, "decode": function () {
            var inputText = $("#inputCode").val();
            //如果有特殊符号，把特殊符号替换掉
            inputText=inputText.replace(/\\r\\n/g, "");
            var outputTxt = base64.decode(inputText);
            var text = utf8.decode(outputTxt);
            $("#outputCode").val(text);
        }
    };
    $("#encodeBtn").click(function () {
        base64Helper.encode();
    });
    $("#decodeBtn").click(function () {
        base64Helper.decode();
    });
});
