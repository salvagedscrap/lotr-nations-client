const fetchUrl = 'https://lotr-nations-api.herokuapp.com/api/' 


document.querySelector('button').addEventListener('click', callData)

 async function callData(){


    let inputVal = document.querySelector('input').value 
    try {
        const response = await fetch(`${fetchUrl}${inputVal}`)

        const data = await response.json()
        console.log(data);
        document.querySelector('h2').innerText=data.name.toUpperCase()
        document.querySelector('p').innerText=data.description.toUpperCase()
        

    } catch (error) {
        
    }
    
}