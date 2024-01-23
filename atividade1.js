class Computador {
    constructor (name,ram,hd,cpu,type) {
      this.name = name;
      this.ram = ram;
      this.hd = hd;
      this.cpu = cpu;
      this.type = type;
      
    }
  
    escolha () {
      console.log('O computador escolhido é ' + this.name + '.')
    }
  }
  
  class Pc extends Computador {
    escolha () {
    console.log('O computador escolhido é ' + this.name + ', ' + this.ram + ', ' + this.hd + ', '+ 
    this.cpu + ', '+ this.type + '.')
    }
  }
  
  class Server extends Computador {
    escolha () {
        console.log('O computador escolhido é ' + this.name + ', ' + this.ram + ', ' + this.hd + ', '+ 
    this.cpu + ', '+ this.type + '.')
    }
  }

  let produto = prompt('usuario vc deseja um server ou um pc: ')
  
  if (produto= 'pc'){
      const pc1 = new Pc('SAMSUNG', 4, 128, 500, 'desktop');
      pc1.escolha()
  } else if (produto='server') {
    const server1 = new Server('LENOVO', 8, 256, 500, 'servidor');
      server1.escolha()
  }  else {
     Console.log('produto indisponível, escolha novamente.') 
  }