// employee.developers = function(){
//     // for (i=0;i<employee.length;i++){
//         if(this.position ===`developer`){
//             console.log(employee);
//         }
//     // }
// }
// employee.developers();

//Question 1

function Employee(name,position,salary)
{
    this.name =name;
    this.position =position;
    this.salary=salary;
}

const employees = [new Employee(`Akeza`,`Developer`,9),new Employee(`Jacqueline`,`Full-stack developer`,100000),new Employee(`Shirley`,`developer`,80000),new Employee(`victoria`,`Ux designer`,200000),new Employee(`Danait`,`Developer`,15)];
   
    let developers = employees.filter((item => item.position.toLowerCase()===`developer`));
    developers.forEach((item)=>{
        item.salary += item.salary * 0.1;
        return item;
    });
console.log(developers);
