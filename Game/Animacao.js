function Animacao() {
    this.context = context;
    this.sprites = [];
    this.ligado = false;
}

Animacao.proptotype = {
    novoSprite: function (sprite) {
        this.sprites.push(sprite)
    },
    ligar: function () {
        this.ligado = true;
        this.proximoFrame();

    },
    //Nao esquecer desa virgula sempre que 
    //for criar um novo metodo!  
    desligar: function () {
        this.ligado = false;
    },
    proximoFrame: function () {
        if (!this.ligado) return;

        //A cada ciclo, limpamos a tela ou desenhamos um fundo 
        this.limparTudo();
        //Atualizamos o estado dos sprites
        for (var i in this.sprites)
            this.sprites[i].desenhar();

        //Chamamos o proximo ciclo

        var animacao = this;
        requestAnimationFrame(function () {
            animacao.proximoFrame();
        });

    },
    limparTela: function() {
        var ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}
