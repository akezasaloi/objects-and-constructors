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

function calculateScoresAverage(grades) {
    Object.entries(grades).forEach(([studentName, studentScores]) => {
        let sum = 0;
        studentScores.forEach(score => {
            sum += score;
        });
        let scoresAverage = sum / studentScores.length;
        
        if (scoresAverage > 70) {
            console.log(`${studentName} ${scoresAverage} Pass`);
        } else {
            console.log(`${studentName} ${scoresAverage} Fail`);
        }
    });
}
const grades = {
    Akeza: [70, 80, 90, 80],
    Saloi: [60, 60, 60, 60],
    Mildred: [10, 6, 20, 50],
    Birhanu: [100, 56, 72, 18],
};
calculateScoresAverage(grades);

//Question 4

    function User(username,email,isActive){
        this.username = username;
        this.email = email;
        this.isActive = isActive;
    }

    const users = [new User(`Akeza`,`akeza@gmail.com`,true),
    new User(`Saloi`,`saloi@gmail.com`,true),
    new User(`Neema`,`neema@gmail.com`,true),
    new User(`Meron`,`meron@gmail.com`,true)];

        function deactivation(users){
        return users.map(user =>{
            if(Math.random() >= 0.4){
                user.isActive = false;
                // console.log(user.username)
            }
            
                    return user;
            });
        }
const activeUsers = deactivation(users);
 activeUsers.filter((user) =>{
    if(user.isActive){
        console.log(user.username);
    };
});
    

// You have an array of destination objects, each with name, distance (in km)
// , and budgetRequired (in dollars). Write a function that accepts a maximum 
// distance and a budget and returns all destinations the user can afford and 
// reach within that distance. If none are found, return "No destinations 
// available under your budget and distance". 

// Question 5
 
const destinationObjects = [{name:`Nairobi`,distance:2.5,budgetRequired:60},
{name:`Kigali`,distance:60,budgetRequired:270},
{name:`Addis Ababa`,distance:250,budgetRequired:560},
{name:`Somalia`,distance:5200,budgetRequired:1000},
{name:`Uganda`,distance:30,budgetRequired:145},];

function affordabletickets(maximumDistance,maximumBudget){
    destinationObjects.forEach((object)=>{
        if((object.distance>maximumDistance)&&(object.budgetRequired>maximumBudget)){
            console.log(`No destinations available under your budget and distance`);
        }
        else{

        }
    });
}

affordabletickets(50,500)