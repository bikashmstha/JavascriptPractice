var chocolateBars = [
    {name: "Galaxy", manufacturer: "Mars"},
    {name: "Snickers", manufacturer: "Mars"},
    {name: "Crunchie", manufacturer: "Cadbury"},
    {name: "Aero", manufacturer: "Nestle"},
    {name: "M&Ms", manufacturer: "Mars"},
    {name: "Chunky", manufacturer: "Nestle"},
    {name: "Double decker", manufacturer: "Cadbury"}
];

var marsChocolate = [];
for(var x=0; x<chocolateBars.length; x++)
{
    if(chocolateBars[x].manufacturer == "Mars")
        marsChocolate.push(chocolateBars[x]);
}
for(var x=0; x<marsChocolate.length; x++)
    alert(marsChocolate[x].name);

var array_helper = {
    filter: function(list, filter)
    {
        var matches = [];
        for(var x=0; x<list.length; x++)
        {
            if(filter(list[x]))
                matches.push(list[x]);
        }
        return matches;
    }
};

var marsChocolate2 = array_helper.filter(chocolateBars, 
    function(item) { return item.manufacturer == "Mars" });
for(var x=0; x<marsChocolate2.length; x++)
    alert(marsChocolate2[x].name);