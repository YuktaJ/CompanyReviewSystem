function SubmitReview(event) {
    event.preventDefault();

    const company_name = document.getElementById("Company_name").value;
    const pros = document.getElementById("Pros").value;
    const cons = document.getElementById("Cons").value;
    const rating = document.getElementById('Rating').value;

    let obj = {
        company_name, pros, cons, rating
    }

    AddToStorage(obj);
}

async function AddToStorage(obj) {
    try {
        let result = await axios.post("http://localhost:3000/reviews", obj);

    } catch (error) {
        console.log(err);
    }
}

async function SearchCompany(event) {
    event.preventDefault();
    let search = document.getElementById("Search").value;
    let obj = {
        search
    }
    try {
        let res = await axios.get(`http://localhost:3000/reviews?name=${search}`);
        CompanyOnScreen(res.data.result);
    } catch (err) {
        console.log(err);
    }
}

async function CompanyOnScreen(arr) {
    let parentEle = document.getElementById("Parent");
    for (let i = 0; i < parentEle.children.length; i++) {
        parentEle.children[i].remove();
    }
    let total = 0;
    let count = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].rating;
        count++;
    }
    avg = total / count;

    let h1 = document.createElement('h1');
    h1.textContent = `Company Name: ${arr[0].company_name}`;
    let h2 = document.createElement('h1');
    h2.textContent = `Rating: ${avg}`

    parentEle.appendChild(h1);
    parentEle.appendChild(h2);

    for (let i = 0; i < arr.length; i++) {
        let childEle = document.createElement('li');
        childEle.textContent = `Pros: ${arr[i].pros} 
        Cons: ${arr[i].cons} 
        Rating:${arr[i].rating}`
        // childEle.innerHTML = "<hr>";
        parentEle.appendChild(childEle);
    }

}