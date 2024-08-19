import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Midias from '../components/Midias';
import TVSection from '../components/TVSection';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  // Dados para o componente FAQ
  const faqItems = [
    { question: 'Os produtos têm garantia?', answer: 'Sim! Apesar de ninguém fazer esse tipo de ação, caso não goste dos resultados na utilização de qualquer um dos nossos produtos, você pode fazer a devolução que te reembolsaremos. De qualquer forma, duvidamos que isso possa acontecer, pela tecnologia aplicada, histórico de desenvolvimento e suporte operacional.' },
    { question: 'Qual a garantia do impermeabilizante Hexshield?', answer: 'Apesar de ter uma durabilidade em torno de 2 a 3 anos, a garantia recomendada para o prestador é de um ano. O produto tem uma base em solvente não inflamável com secagem rápida e maior concentração de ativos impermeabilizantes, que além de proteger contra líquidos e pastosos, ainda tem um fator de proteção UV 10, que diminui o desbotamento do tecido.' },
    { question: 'Por que o Hexshield é o melhor impermeabilizante do mercado?', answer: 'Porque foram 9 anos para o seu desenvolvimento, baseado em toda trajetória de sucesso, testes, aprendizados e experiência do fundador da marca, Fritz Paixão com os mais diversos fabricantes no Brasil e Exterior. Inclusive o produto conta com um pedido de patente internacional justamente por conta da adaptação da tecnologia utilizada. Além disso possui uma maior concentração maior de ativos impermeabilizantes. o que dá uma maior segurança na aplicação, além da possibilidade de menos retornos para manutenção. Isso proporciona economia de tempo e mais dinheiro no bolso.' },
    { question: 'Já testei vários produtos no mercado de higienização de estofados, por que os da CNX Industry é diferente?', answer: 'Porque nós somos a única indústria que nasceu lavando estofados. Foram 9 anos de experiência dentro do segmento, mais de 1 milhão de estofados higienizados em 12 países e 4 continentes. Nós sabemos exatamente o que o cliente precisa, o que o tecido necessita, e o que o lavador de estofados busca na hora da higienização para surpreender seu cliente e evitar potencializar seu resultado.' },
    { question: 'Tem suporte?', answer: 'Sim, eu (Fritz Paixão) junto com a minha equipe vamos te dar todo o suporte necessário dentro da área de membros, que inclusive é gratuita! Portanto, qualquer dúvida relacionada aos nossos produtos e processos você terá total suporte.' },
    { question: 'Quanto tempo preciso para ter resultado com o Hextein?', answer: 'Se você aplicar exatamente o produto na mancha, em 5 min você já começa a observar os resultados. Ele foi desenvolvido para ter uma ação super rápida, pois isso te economiza tempo e consequentemente dinheiro. O produto reage bem em qualquer tipo de tecido, não desbota o estofado e não muda sua textura, pois além de possuir aditivos condicionantes, ele têm ação bactericida e bloqueador de odor.' },
    { question: 'Como me profissionalizar na área?', answer: 'Você pode preencher o formulário colocando seus dados corretamente. Nome, email, telefone, e cidade,  assim que terminar, irá receber automaticamente um modelo de negócio completo, de forma gratuita, com todos produtos, equipamentos e ações para você abrir sua empresa e se profissionalizar no segmento.' },
    { question: 'Vocês dão curso na área?', answer: 'Ensinamos a usar nossa linha de produtos profissionais, mas se você já trabalha na área e não tem resultados ou se quer iniciar neste segmento, temos diversos cursos online com o empreendedor mais premiado da área, e fundador da maior empresa do segmento, a Cleannew. Com o Fritz Paixão, você aprenderá a começar seu negócio do zero, por mais que não tenha dinheiro para comprar produtos. Vai aprender também, a aperfeiçoar suas técnicas e procedimentos, caso seja um profissional da área, e vai aprender a vender, escalar suas vendas no digital, se posicionar na frente dos concorrentes e acessar os scripts de venda matadores que fizeram o Fritz Paixão faturar milhões neste segmento. Caso queira conhecer os cursos disponíveis, é só acessar o botão abaixo.' },
  ];

  return (
    <div>
      <Hero />
      <Testimonials />
      <Midias
        title="Foram mais de 9 anos de experiência, 100 operações inauguradas e <span>1 milhão de clientes atendidos</span>"
        image1Src="https://cdn.shopify.com/s/files/1/0709/7086/7961/files/midia-1.webp?v=1723945808"
        image2Src="https://cdn.shopify.com/s/files/1/0709/7086/7961/files/midia-2.webp?v=1723945808"
      />
      <TVSection
        title="De apresentador de TV<br> <span>para a maior Indústria do segmento</span>"
        description="A incrível história de como Fritz Paixão tem transformado a vida dos lavadores de sofá."
        imageSrc="https://cdn.shopify.com/s/files/1/0709/7086/7961/files/image-tv.webp?v=1723986043"
      />
      <Faq
        titleImageSrc="https://cdn.shopify.com/s/files/1/0709/7086/7961/files/faq.webp?v=1724067407"
        titleText="Ainda em dúvida? Então veja algumas das <span>dúvidas mais frequentes:</span>"
        faqItems={faqItems}
      />
      <Footer />
    </div>
  );
}

export default Home;
