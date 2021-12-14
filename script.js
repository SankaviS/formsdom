let a = document.createElement('Form');
let c = document.createElement('label');
c.setAttribute('for', 'fname');
c.innerText = "Firstname:";
let b = document.createElement('input');
b.setAttribute('type', 'text')
b.setAttribute('id', 'fname')
let br = document.createElement("br")
let d = document.createElement('label');
d.setAttribute('for', 'mname');
d.innerText = "MiddleName";
let e = document.createElement('input');
e.setAttribute('type', 'text')
e.setAttribute('id', 'mname')
let br1 = document.createElement("br")
let f = document.createElement('label');
f.setAttribute('for', 'lname');
f.innerText = "LastName:";
let g = document.createElement('input');
g.setAttribute('type', 'text')
g.setAttribute('id', 'lname')
let br2 = document.createElement("br")
let h = document.createElement('label');
h.setAttribute('for', 'email');
h.innerText = "Email:";
let i = document.createElement('input');
i.setAttribute('type', 'email')
i.setAttribute('id', 'email')
a.append(c, b, br, d, e, br1, f, g, br2, h, i);
document.body.append(a)
function foo() {
    let result = document.getElementById('fname').value
    let result1 = document.getElementById('mname').value
    let result2 = document.getElementById('lname').value
    let result3 = document.getElementById('email').value
    console.log(result, result1, result2, result3);
}