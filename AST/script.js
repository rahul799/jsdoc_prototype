var fs=require('fs');
var data=fs.readFileSync('/home/rahul/Documents/GSOD/jsdoc_prototype/AST/AST.json', 'utf8');
var words=JSON.parse(data);

var fns = [];

var candidate = {};
var types = {};

for(var i in words)
{
    delete words[i].meta;
    if(words[i].comment == "")
    {
        delete words.splice(i,1);
    }
}

for(var i in words)
{
    if(words[i].kind == 'typedef')
    {
        types[words[i].name] = [];
        for(var j in words[i].properties)
        {
            var val = {};
            val.name = words[i].properties[j].name;
            val.descr = words[i].properties[j].description;
            types[words[i].name].push(val);
        }
    }
}
// console.log(types);

for(var i in words)
{
    var func = {};
    if(words[i].memberof != undefined)
    {
        func.name = words[i].longname;
        func.descr = words[i].description;
        func.formats = [];
        
        if(words[i].params != undefined)
        {
            var descr = words[i].params[0].description.split(" | ");
            for( var j in descr)
            {
                var temp = {};

                temp.args = [];
                temp.descr = descr[j];

                temp.args.push(types[words[i].params[0].type.names[0]][j]);
                // console.log(temp);
                func.formats.push(temp);
            }
        }
        else
        {
           var val = words[i].tags.find(fn => fn.title == "param_desc");
           var arr = {};
           arr.descr = val.value;
           func.formats.push(arr);
        }
        
        fns.push(func);
    }
}

var s = "Ajkdhcfhd dddf dih dscc dc  cde";
var all = s.split(" | ");
console.log(all[0]);

// save generated file
fs.writeFile ("new_generated.json", JSON.stringify(fns, null, 4), function(err) {
    if (err) throw err;
    console.log('complete');
});




