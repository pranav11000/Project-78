var images=["https://i.postimg.cc/wjMnFtMX/father.jpg", 
"https://i.postimg.cc/bw5W5zSK/mother.jpg",
 "https://i.postimg.cc/5ymDKL83/bro.jpg"];
var names=["family book", "Prasanth", "Joona", "Pranav"];
var i=0
function update()
{
    i++;
    var number_of_family_names=3;
    if (i>number_of_family_names){
        i=0;
    }
    var updated_image=images[i];
    var updated_names=names[i];
    document.getElementById("family_member_image").src=updated_image;
    document.getElementById("family_member_name").innerHTML=updated_names;
}
