const form =
document.getElementById(
  "customerForm"
);

form.addEventListener(
"submit",
async (e)=>{

e.preventDefault();

const data = {

name:
document.getElementById("name").value,

phone:
document.getElementById("phone").value,

address:
document.getElementById("address").value,

area:
document.getElementById("area").value,

plan:
document.getElementById("plan").value

};

await fetch(
"https://script.google.com/macros/s/AKfycbwqo2dIXHduf1k6Ni91hJ7nGuQ3Dzzpix20V884qFZALQhyLBY6MUu8xxK8VEaeksDqWw/exec",
{
method:"POST",
body:JSON.stringify(data)
}
);

alert(
"Customer Saved Successfully"
);

form.reset();

});