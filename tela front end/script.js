class Produto{

    constructor(){
        this.id = 1
        this.arrayProdutos = []
        this.editid = null
    }

    salvar() {
        let produto = this.lerdados();
        if (this.vazio(produto) == true) {
            if(this.editid == null){
                this.confuse(produto);
            } else {
                this.atualizar(this.editid, produto)
            }
          
        }
        this.tabela()
        this.cancelar()
      }
    tabela(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for(let c = 0; c < this.arrayProdutos.length; c++ ){
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_pd = tr.insertCell()
            let td_valo = tr.insertCell()
            let td_acion = tr.insertCell()

            td_id.innerText = this.arrayProdutos[c].id
            td_pd.innerText = this.arrayProdutos[c].nomeProduto
            td_valo.innerText = this.arrayProdutos[c].valor

            td_id.classList.add('center')

            let imgEdit = document.createElement('img')
            imgEdit.src = 'img/editar.png'
            imgEdit.setAttribute("onclick", "produto.Edit(" + JSON.stringify(this.arrayProdutos[c]) +")")

            let imgDelete = document.createElement('img')
            imgDelete.src = 'img/deletar-lixeira.png'
            imgDelete.setAttribute("onclick", "produto.deletar(" + this.arrayProdutos[c].id +")")

            td_acion.appendChild(imgEdit)
            td_acion.appendChild(imgDelete)
        }

    }  
    confuse(produto){
        this.arrayProdutos.push(produto)
        this.id++
    }
    lerdados(){
        let produto = {}
        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value
        produto.valor = document.getElementById('valor').value
        return produto 
    }
    vazio(produto){
        let msg = ''
        if(produto.nomeProduto == ''){
            msg += 'Informe o Nome cadastrado \n'
        }
        if(produto.valor == ''){
            msg += 'Informe o Preço do Produto\n'
        }
        if(msg != ''){
            alert(msg)
            return false
        }
        return true
    }

    cancelar(){
        document.getElementById('produto').value = ''
        document.getElementById('valor').value = ''

        document.getElementById('btn1').innerText = 'Salvar'
        this.editid = null
        
    }
    deletar(id){
        if(confirm('Deseja realmente deletar o ID' + id)){

        let tbody = document.getElementById('tbody')
        for(let c = 0; c < this.arrayProdutos.length; c++){
            if(this.arrayProdutos[c].id == id){
                this.arrayProdutos.splice(c, 1)
                tbody.deleteRow(c)
            }

        }

    }

}
    Edit(dados){
        this.editid = dados.id
        document.getElementById('produto').value = dados.nomeProduto
        document.getElementById('valor').value = dados.valor
        document.getElementById('btn1').innerText = 'Atualizar'
        
    }
    atualizar(id, produto){
        for(let c = 0; c < this.arrayProdutos.length; c++){
            if(this.arrayProdutos[c].id == id){
                this.arrayProdutos[c].nomeProduto = produto.nomeProduto
                this.arrayProdutos[c].valor = produto.valor
            }
        }
    }
}
var produto = new Produto()