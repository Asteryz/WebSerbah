$(document).ready(function()
{
  // Create References
  $("a.source").each(function( index )
  {
    $(this).attr("id", "source:" + index);
    var row = "<tr><td><a href=\"\#"+$(this).attr("id")+"\">"+ index +"</a></td><td>" + $(this).text() +"</td><td>"+ $(this).attr("href") +"</td></tr>";
    $(this).text(index);
    $("table.references").append(row);
  });
});