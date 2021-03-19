let category = 18
let difficulty = "easy"
    // let count = 10
let result = ""



const grabData1 = async() => {

    let response = await fetch(`https://opentdb.com/api.php?amount=${count}&category=${category}&difficulty=${difficulty}`)
    let data = await response.json()
        //console.log('data:', data["results"])
}


//grabData1()