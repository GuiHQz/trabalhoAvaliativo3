let array = [
    { origem: 'São Paulo', destino: 'Paris', horario: '18:00', preco: '1.200R$' },
    { origem: 'São Paulo', destino: 'Tokyo', horario: '18:00', preco: '1.200R$' }
]

class PricingController{

    Create(aux){
        array.push(aux)
        console.log(array)
    }

    //lista passagens
    Read() {
        console.log(array)
        return(array)
    }
}

export default new PricingController()