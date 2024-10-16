const petro = document.getElementById('Petro')
const tomsk = document.getElementById('Tomsk')
const gogo = document.getElementById('Gogogogo')

async function Api() {
    const respons_petro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current=temperature_2m&hourly=temperature_2m')
    const respons_tomsk = await fetch('https://api.open-meteo.com/v1/forecast?latitude=56.4977&longitude=84.9744&current=temperature_2m&hourly=temperature_2m')
    const respons_gogo = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-24.2667&longitude=44.8&current=temperature_2m&hourly=temperature_2m')
    const data_petro = await respons_petro.json()
    const data_tomsk = await respons_tomsk.json()
    const data_gogo = await respons_gogo.json()
    return [data_gogo, data_petro, data_tomsk]
}

async function output() {
    
    try {
        let out = await Api()
        console.log(out)
        petro.textContent = 'Air temperature: ' + out[0].current.temperature_2m
        tomsk.textContent = 'Air temperature: ' + out[1].current.temperature_2m
        gogo.textContent = 'Air temperature: ' + out[2].current.temperature_2m
    }
    
    catch(error) {
        console.log(error)
    }
    
    finally {
        stop
    }
}

output()