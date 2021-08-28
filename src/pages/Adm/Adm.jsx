import React from 'react'
import { Box } from '@material-ui/core'
import PricingController from 'pages/Pricing/PricingController'
import './Adm.css'

class Adm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      origem: '',
      destino: '',
      horario: '',
      preco: ''
    }
    this.handleOrigemChange = this.handleOrigemChange.bind(this)
    this.handleDestinoChange = this.handleDestinoChange.bind(this)
    this.handleHorarioChange = this.handleHorarioChange.bind(this)
    this.handlePrecoChange = this.handlePrecoChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOrigemChange(event) {
    this.setState({ origem: event.target.value })
  }

  handleDestinoChange(event) {
    this.setState({ destino: event.target.value })
  }

  handleHorarioChange(event) {
    this.setState({ horario: event.target.value })
  }

  handlePrecoChange(event) {
    this.setState({ preco: event.target.value })
  }

  handleSubmit(event) {
    alert('Adicionado com sucesso')
    event.preventDefault()
    var aux = {origem: this.state.origem, destino: this.state.destino, horario: this.state.horario, preco: this.state.preco}
    PricingController.Create(aux)
    
  }

  render() {
    return (
      <Box className='Box'>
        Tela Administrador
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Origem' value={this.state.origem} onChange={this.handleOrigemChange}/><br/>
          <input type="text" placeholder='Destino' value={this.state.destino} onChange={this.handleDestinoChange}/><br/>
          <input type="text" placeholder='Horario' value={this.state.horario} onChange={this.handleHorarioChange}/><br/>
          <input type="text" placeholder='Preco' value={this.state.preco} onChange={this.handlePrecoChange}/><br/>
          <input type="submit" value="Submit" />
        </form>
      </Box>
    )
  }
}

export default Adm