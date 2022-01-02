
function generate_random(min, max, r){
var numbers = []; // new empty array


for (let i = 0; i < r; i++) {
  do {
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    p = numbers.includes(n);
    if(!p){
      numbers.push(n);
    }
  }
  while(p);
}

return numbers;

}

let org_list = generate_random(1,100,17)
let counter = 1;
function list_shuffle(dict_of_lists, group){
    let mainlst = []
    for (let i = 1; i < 4; i++){
        mainlst = mainlst.concat(dict_of_lists[i])
    }
    console.log(mainlst)
    if (group==1){
        return mainlst

    }
    else
    {
        let lst1 = dict_of_lists[group]
        for (let n = 0; n < mainlst.length; n++){
            if (!lst1.includes(mainlst[n])){
                lst1.push(mainlst[n])
            }
        }
        return lst1
    }
}

function list_groups(lst){
    let list1 = [];
    let list2 = [];
    let list3 = [];
try {
    for (let j=0; j < lst.length; j += 3){
        list1.push(lst[j]);
        list2.push(lst[j+1]);
        list3.push(lst[j+2]);
    }
} catch (error) {
    
}

let result = {1:list1,2:list2,3:list3.slice(0,-1)};
return result
}

function unicycle(){
    if (counter < 3){
        list = list_groups(org_list)
        var selection = document.getElementById("selected_group");
        lst_shfl = list_shuffle(list, selection.value);
        org_list = lst_shfl;
        counter += 1;
        //document.getElementById('output').innerHTML = counter;
        document.getElementById('output').innerHTML = print_dict(list_groups(org_list));
        alert("Choose the group again")
    }
    else if(counter == 3){
        list = list_groups(org_list)
        var selection = document.getElementById("selected_group");
        lst_shfl = list_shuffle(list, selection.value);
        org_list = lst_shfl;
        counter += 1;
        alert(`Yaaaaaaaaaaaaaaaaaaaaaaaaaaay! \n your chosen number is: ${org_list[0]}`)
    }
    else if(counter > 3){
        alert(`Yaaaaaaaaaaaaaaaaaaaaaaaaaaay! \n your chosen number is: ${org_list[0]}`)
    }

}

function print_dict(dct){
    let result = ""
    for (i = 1; i < 4; i++) {
        result += `group ${i} => `
        for (n = 0; n < dct[i].length; n++){
            result += `${dct[i][n]} - `
        }   
        result = result.slice(0, -2) + "</br>"
    }

    return result
}

let results = list_groups(org_list)



document.addEventListener('DOMContentLoaded',function () {

    document.getElementById("orglist").innerHTML = `Select a number from this list and save it in your mind </br> <strong style="color:red">${org_list.join(" - ")}<strong>`
    document.getElementById('output').innerHTML = print_dict(list_groups(org_list));
})
