var fs=require('fs');
var data=fs.readFileSync('/home/rahul/Documents/GSOD/jsdoc_prototype/AST/cy_events.json', 'utf8');
var words=JSON.parse(data);

var fns = [];


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
            //defines arguments
            var args = {};
            
            //checking whether we have a callback function as an argument
            if(words[i].properties[j].type.names != 'function')
            {
                args.name = words[i].properties[j].name;
            }
            else
            {
                args.name = types[words[i].properties[j].name][0].name;

                args.fields = types[types[words[i].properties[j].name][0].descr];
            }
            
            args.descr = words[i].properties[j].description;
            types[words[i].name].push(args);
        }
    }
}
console.log(types);
for(var i in words)
{
    var func = {};
    if(words[i].memberof != undefined)
    {
        func.name = words[i].longname;

        if(words[i].alias != undefined)
        {
            func.pureAliases = words[i].alias.split("|");
        }

        // checking for formatSameFn
        if(words[i].tags != undefined && words[i].tags.find(fn => fn.originalTitle == "formatsSameFn") != undefined)
        {
            func.formatsSameFn = words[i].tags.find(fn => fn.originalTitle == "formatsSameFn").value;
        }

        // checking for extFn
        if(words[i].tags != undefined && words[i].tags.find(fn => fn.originalTitle == "extFn") != undefined)
        {
            func.extFn = words[i].tags.find(fn => fn.originalTitle == "extFn").value;
        }

        func.descr = words[i].description;
        func.formats = [];
        
        if(words[i].params != undefined)
        {
            var descr = words[i].params[0].description.split(" | ");
            for( var j in descr)
            {
                // formats child
                var temp = {};

                if( words[i].tags != undefined )
                {
                    var sub_names = words[i].tags.find(fn => fn.title == "sub_functions")
                    
                    if(sub_names != undefined)
                    {
                        var arr = sub_names.value.split("|");
                        temp.name = arr[j];
                    }
                }

                if( descr[j] != undefined )
                {
                    temp.descr = descr[j];
                } 
                // console.log(descr[j]);
                if(types[words[i].params[0].type.names[0]][j] != undefined)
                {
                    if( types[words[i].params[0].type.names[0]][j].name != 'NULL' )
                    {
                        temp.args = [];

                        // Check for multiple arguments
                        if( types[types[words[i].params[0].type.names[0]][j].name] != undefined )
                        {
                            temp.args = types[types[words[i].params[0].type.names[0]][j].name];
                        }
                        else
                        {
                            temp.args.push(types[words[i].params[0].type.names[0]][j]);
                        }
                    }
                }
                // console.log(types[words[i].params[0].type.names[0]][j]);
                func.formats.push(temp);
            }
        }
        else if (words[i].tags != undefined && words[i].tags.find(fn => fn.originalTitle == "param_desc") != undefined)
        {
           var val = words[i].tags.find(fn => fn.originalTitle == "param_desc");
           var arr = {};
           arr.descr = val.value;
           func.formats.push(arr);
        }
        else
        {
            delete func["formats"];
        }
        
        fns.push(func);
    }
}

// save generated file
fs.writeFile ("cy_events_generated.json", JSON.stringify(fns, null, 4), function(err) {
    if (err) throw err;
    console.log('complete');
});