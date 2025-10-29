Q: Difference between prototype-based inheritance and class-based inheritance?

11️⃣ Deep vs Shallow Copy
const obj = {a:1, b:{c:2}};
const shallow = {...obj};
obj.b.c = 99;
console.log(shallow.b.c); // 99

const deep = JSON.parse(JSON.stringify(obj));
obj.b.c = 100;
console.log(deep.b.c); // 99


::::::::::::::::: This KeyWord::::::::::::::::::::::::::::

const obj = {
    name:'Jugal',
    regular: function(){ console.log(this.name); },
    arrow: ()=> console.log(this.name)
};
obj.regular(); // Jugal
obj.arrow();   // undefined (arrow uses enclosing context)



::::: --------------->>> Call Blind :::::::::::::::
4️⃣ Call, Apply, Bind
const obj = {name:'Jugal'};
function greet(age, city) {
    console.log(`${this.name} is ${age} from ${city}`);
}

greet.call(obj, 20, 'Delhi');  // Jugal is 20 from Delhi
greet.apply(obj, [20, 'Delhi']); // Jugal is 20 from Delhi

const bound = greet.bind(obj, 20, 'Delhi');
bound(); // Jugal is 20 from Delhi
