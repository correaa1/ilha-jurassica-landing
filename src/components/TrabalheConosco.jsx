import React from 'react';

const TrabalheConosco = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <section className="relative min-h-screen">
        {/* Título vertical */}
        <div className="absolute top-12 left-6">
          <span className="text-7xl font-extrabold text-black [writing-mode:vertical-lr] rotate-180">
            SOBRE
          </span>
        </div>

        {/* Conteúdo principal */}
        <div className="container mx-auto px-4 py-20 pl-24">
          <div className="max-w-[1400px] mx-auto grid grid-cols-4 gap-16">
            {/* Primeira coluna - Textos principais */}
            <div className="space-y-4 ">
              <div>
                <h3 className="text-xl font-bold mb-2">O primeiro restaurante temático de Paraty</h3>
                <p className="leading-relaxed">Para tornar jantares e festas com mais alegria e criatividade!</p>
              </div>

              <div>
                <h3 className="text-xl  mb-2">Missão</h3>
                <p className="leading-relaxed">Encantar, atender bem, proporcionar momentos únicos, experiências gastronômicas.</p>
              </div>

              <div>
                <h3 className="text-xl  mb-2">Visão</h3>
                <p className="leading-relaxed">Virar house, criar ser a best líder de buscar proporcionar uma experiência incrível.</p>
              </div>

             
            </div>

            {/* Segunda coluna - Textos adicionais */}
            <div className="space-y-4 align-center">
            <div>
                <h3 className="text-xl  mb-2">Valores</h3>
                <p className="leading-relaxed">Integridade, amor e cuidado com nosso cliente!</p>
              </div>
              <p className="leading-relaxed">Projeto cultural. Queremos que todos os nossos clientes saiam de sua experiência com algum algum conhecimento da nossa terra gaúcha. Todos os nossos cardápios foram previamente preparados para você!</p>
              <p className="leading-relaxed">Por aqui, nada é por acaso e buscamos significado científico em todas as nossas decisões.</p>
            </div>

            {/* Terceira e quarta coluna combinadas - Trabalhe Conosco */}
            <div className="col-span-2 ml-auto max-w-[700px]">
              <h2 className="text-5xl font-extrabold mb-6">TRABALHE CONOSCO</h2>
              <p className="mb-6">Faça parte da nossa equipe! Dino Jungle é parceiro e seus sonhos!</p>
              <p className="mb-6">Preencha o formulário abaixo, anexando o seu CV em PDF ou WORD e entraremos em contato.</p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full rounded-xl px-4 py-2 bg-gray-100"
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full rounded-xl px-4 py-2 bg-gray-100"
                />
                <select
                  className="w-full rounded-xl px-4 py-2 bg-gray-100 bg-[position:95%]"
                  defaultValue=""
                >
                  <option value="" disabled>Vaga de Interesse</option>
                  <option value="garcom">Garçom/Garçonete</option>
                  <option value="cozinheiro">Cozinheiro(a)</option>
                  <option value="auxiliar-cozinha">Auxiliar de Cozinha</option>
                  <option value="barista">Barista</option>
                  <option value="host">Host/Hostess</option>
                  <option value="limpeza">Auxiliar de Limpeza</option>
                  <option value="caixa">Operador(a) de Caixa</option>
                  <option value="gerente">Gerente de Restaurante</option>
                  <option value="atendente">Atendente</option>
                  <option value="bartender">Bartender</option>
                </select>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-gray-100 rounded-xl">Anexar CV</button>
                  <button className="px-8 py-2 bg-green-500 text-white rounded-xl">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrabalheConosco;