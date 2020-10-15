import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Animated
}
from 'react-native';

import { 
CheckBox}
 from 'react-native-elements';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state =
      {opcaoUm: false,
      opcaoDois: false,
      opcaoTres : false,
      opcaoQuatro: false,
      subtotal : 0,
      mostre : 'none'}

      this.pedidos = [
        {
          titulo: 'Frango Atropelado',
          preco1: 9.00
        },
        {
          titulo: 'Coxinha de Frango',
          preco2: 5.00
        },
        {
          titulo: 'Lasanha de forno',
          preco3: 12.00
        },

        {
          titulo: 'Suco de fruta',
          preco4: 2.00
        }
      ];
    }

    
//Finalizando o pedido escolhido
  Finalizar = ()=>{
    var preco1 = 0; var preco2 = 0; var preco3 = 0; var preco4 = 0;

    if(this.state.opcaoUm){
      preco1 = this.pedidos[0].preco1
    }

    if(this.state.opcaoDois){
      preco2 = this.pedidos[1].preco2
    }

    if(this.state.opcaoTres){
      preco3 = this.pedidos[2].preco3
    }

    if(this.state.opcaoQuatro){
      preco4 = this.pedidos[3].preco4
    }
   
   
//metodo somando os pedidos 
    this.setState({
      subtotal: preco1 + preco2 + preco3 + preco4
    })
  }

  render(){
    return(
    <>
    
<View style={styles.aplicativo}>
    <Image
        style={styles.imglogo}
        source={require('./assets/logo.png')}/>
    <Text>{'\n'}</Text>
    <View style={styles.aplicativo}>
    <View style={styles.conteudo}>
   
    <Text style={styles.estiloBemVindo}>Bem vindo!!!Faça seu pedido!</Text>
      <CheckBox
      checked= {this.state.opcaoUm}
      onPress={() => this.setState({opcaoUm: !this.state.opcaoUm})}
      />
      <Text style={styles.estilosTextos}>Frango Atropelado - 9,00</Text>


      <CheckBox
      checked= {this.state.opcaoDois}
      onPress={() => this.setState({opcaoDois: !this.state.opcaoDois})}
       />
      <Text style={styles.estilosTextos}>Coxinha de frango - 5,00</Text>
      
      
      <CheckBox
      checked= {this.state.opcaoTres}
      onPress={() => this.setState({opcaoTres: !this.state.opcaoTres})}
       />
      <Text style={styles.estilosTextos}>Lasanha de forno - 12,00</Text>


      <CheckBox
      checked= {this.state.opcaoQuatro}
      onPress={() => this.setState({opcaoQuatro: !this.state.opcaoQuatro})}
      />
      <Text style={styles.estilosTextos}>Suco de Fruta - 2,00</Text>
      <Text>{'\n'}</Text>



          <TouchableOpacity onPress={this.Finalizar} style={styles.botao}>
            <Text style={styles.textoBotao}>Finalizar</Text>
          </TouchableOpacity>
          <Text>{'\n'}</Text>        
          
          
          <Text style={styles.textoSubtotal}>Subtotal:</Text> 
          <Text style={styles.textoValor}>R${this.state.subtotal}</Text>
         
        </View>
        </View>
        </View>
        
      </>
    )
  }
}

const styles = StyleSheet.create({

  
  aplicativo: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#42426F'
  },

  conteudo: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    

  },

  imglogo:{
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%'
  },

  CheckBox:{
  width: 25,
  height: 25,
  borderWidth: 2,
  justifyContent: "center",
  alignItems: "center"
  },

  estiloBemVindo:{
    color: "#B8860B",
    fontWeight:"bold",
    fontSize: 15,
    

  },
  estilosTextos: {
  color: "white",
  fontWeight: "bold",
  fontSize: 15,
  borderColor: "#B0E0E6",
  borderWidth: 2

  },

  botao: {
    alignItems: "center",
    backgroundColor: "#836FFF",
    padding: 10,
    borderRadius: 5,
  },

  textoBotao: {
    color: '#fff0e6',
    fontWeight: 'bold'
  },

  textoSubtotal: {
    color: '#B8860B',
    fontWeight: 'bold'

  },
  
  textoValor: {
    color: '#B8860B',
    textShadowRadius: 5,
    fontWeight: 'bold'

    }

})

export default App;
