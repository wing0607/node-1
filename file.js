//w文件系统
var fs=require('fs');
//异步地读取文件的内容
/*fs.readFile('./readMe','utf-8',(err,data)=>{
    if(err)
        throw err;
    console.log(data)
})*/
//异步地将数据写入文件，如果文件已存在，则覆盖文件
var data='111'
fs.writeFile('文件.txt', data, (err) => {
    if (err) throw err;
    console.log('文件已保存');
});
//异步删除文件夹
/*
fs.rmdir('',function (err) {

})*/
