//Question 1

function Employee(name,position,salary)
{
    this.name =name;
    this.position =position;
    this.salary=salary;
}

const employees = [new Employee(`Akeza`,`Developer`,9),
new Employee(`Jacqueline`,`Full-stack developer`,100000),
new Employee(`Shirley`,`developer`,80000),
new Employee(`victoria`,`Ux designer`,200000),
new Employee(`Danait`,`Developer`,15)];
   
    let developers = employees.filter((item => item.position.toLowerCase()===`developer`));
    developers.forEach((item)=>{
        item.salary += item.salary * 0.1;
        return item;
    });
console.log(developers);

// Question 3
// Create an object called grades where the keys are student names and 
// the values are arrays of their scores. Write a function that calculates
//  and prints each student's average score, and if the average is above 70
// , print "Pass"; otherwise, print "Fail" next to their name. (5 pts)

function Grades(score){
    this.score = score;

}

// const grades = [new Grade(Akeza:[25,30,10,24,15])]

// Question 2

function productsInStock(products){
    let availableProducts = products.filter((product=>product.inStock==true));
    return availableProducts.sort((a,b)=>a.price-b.price);
}

console.log(productsInStock([
{name:`Soap dish`,price:2000,inStock:false},
{name:`Oil`,price:500,inStock:true},
{name:`Rice`,price:800,inStock:false},
{name:`Biscuit`,price:100,inStock:true}]));











// Write a function constructor called User that takes username, email, 
// and isActive (boolean). Create an array of users. Write a program that loops
//  through the array and deactivates users who have not logged in recently 
// (simulate this with a random isActive: false assignment) and print out the
// \ usernames of active users. (5 pts)




    function User(username,email,isActive){
        this.username = username;
        this.email = email;
        this.isActive = isActive;
    }

    const users = [new User(`Akeza`,`akeza@gmail.com`,true),
    new User(`Saloi`,`saloi@gmail.com`,true),
    new User(`Neema`,`neema@gmail.com`,true),
    new User(`Meron`,`meron@gmail.com`,true)];

        function deactivation(deactivatedUsers){
        return deactivatedUsers.map(user =>{
            if(Math.random()>= 0.6){
                user.isActive == false;
            }
                    return user;
            });
        }
const allUsers = deactivation(users);
 allUsers.forEach((user) =>{
    if(user.isActive == true){
        console.log(user.username);
    };
});
       

















// You have an array of destination objects, each with name, distance (in km)
// , and budgetRequired (in dollars). Write a function that accepts a maximum 
// distance and a budget and returns all destinations the user can afford and 
// reach within that distance. If none are found, return "No destinations 
// available under your budget and distance". (5 pts)