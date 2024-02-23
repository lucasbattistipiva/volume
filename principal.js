let resposta = document.getElementById('resposta')
let calcula = document.getElementById('calcula')

calcula.addEventListener('click',()=> {
    

     const volume = new Volume()

     let volumePrisma = volume.vPrisma()
     let volumePiramide = volume.vPiramide()
     let volumeCilindro = volume.vCilindro()
     let volumeCone = volume.vCone()
     let volumeEsfera = volume.vEsfera()
})
