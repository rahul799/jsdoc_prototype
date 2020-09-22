var fs=require('fs');
var data=fs.readFileSync('/home/rahul/Documents/GSOD/jsdoc_prototype/AST/generated.json', 'utf8');
var words=JSON.parse(data);

for(var i in words)
{
    delete words[i].meta;
    if(words[i].comment == "")
    {
        delete words.splice(i,1);
    }
}


fs.writeFile ("new_generated.json", JSON.stringify(words, null, 4), function(err) {
    if (err) throw err;
    console.log('complete');
});




