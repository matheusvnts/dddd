import React from 'react';
import { Phone, Calendar, Clock, MapPin, CheckCircle2, ChevronDown, MessageSquare, MapIcon as WhatsappIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

function App() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5522988526432?text=Olá! Gostaria de agendar uma aula de direção.', '_blank');
  };

  const testimonials = [
    {
      text: "Excelente instrutor! Me ajudou a superar o medo de dirigir e hoje dirijo com confiança.",
      author: "Maria Silva"
    },
    {
      text: "As aulas são muito bem planejadas e o instrutor tem muita paciência. Recomendo!",
      author: "João Santos"
    },
    {
      text: "Depois de várias tentativas em autoescolas tradicionais, finalmente consegui aprender com as aulas particulares.",
      author: "Ana Oliveira"
    },
    {
      text: "Metodologia excelente! As aulas são personalizadas e focadas nas nossas dificuldades.",
      author: "Pedro Costa"
    },
    {
      text: "Ótimo custo-benefício. Aprendi mais em 5 aulas particulares do que em meses de autoescola.",
      author: "Carla Mendes"
    },
    {
      text: "Profissionalismo e dedicação são os pontos fortes. Me senti segura desde a primeira aula.",
      author: "Fernanda Lima"
    },
    {
      text: "As dicas práticas e a paciência do instrutor fizeram toda diferença no meu aprendizado.",
      author: "Ricardo Souza"
    },
    {
      text: "Recomendo para quem tem medo de dirigir. O ambiente tranquilo ajuda muito no aprendizado.",
      author: "Beatriz Santos"
    },
    {
      text: "Melhor decisão que tomei foi fazer aulas particulares. Hoje dirijo com tranquilidade.",
      author: "Lucas Ferreira"
    }
  ];

return (
  <div className="min-h-screen bg-gray-50">
    {/* Navbar */}
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img
          src="https://i.ibb.co/nMJZVXC1/Chat-GPT-Image-10-de-abr-de-2025-17-31-06-copiar.png"
          alt="Logo"
          className="h-16"
        /> {/* Logo */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition-all"
        >
          Agendar Aula
        </button>
      </div>
    </nav>

    {/* Hero Section */}
    <section
      className="pt-24 pb-12 relative bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1744297036372-70f444b7a39e?q=80&w=1687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        height: '100vh',
      }}
    >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Aprenda a dirigir com <span className="text-yellow-400">confiança</span>
            </h2>
            <p className="text-lg mb-8 text-gray-200">
              Aulas particulares personalizadas para seu ritmo e necessidade
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
            >
              Agende sua Primeira Aula
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Nossas Aulas</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="w-12 h-12 text-yellow-400 mb-4" />
              <h4 className="text-xl font-bold mb-2">Duração Flexível</h4>
              <p className="text-gray-600">Escolha entre aulas de 50 minutos ou 2 horas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <MapPin className="w-12 h-12 text-yellow-400 mb-4" />
              <h4 className="text-xl font-bold mb-2">Regiões Atendidas</h4>
              <p className="text-gray-600">Bacaxá, Saquarema, Iguaba e Araruama - RJ</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle2 className="w-12 h-12 text-yellow-400 mb-4" />
              <h4 className="text-xl font-bold mb-2">Todos os Níveis</h4>
              <p className="text-gray-600">Iniciante ao avançado, adaptamos ao seu nível</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Valores</h3>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg">Aula Individual (50min/2h)</span>
                <span className="text-yellow-400 font-bold">Consulte</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg">Pacote 10 Aulas</span>
                <span className="text-yellow-400 font-bold">Consulte</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg">Pacote 14 Aulas</span>
                <span className="text-yellow-400 font-bold">Consulte</span>
              </div>
            </div>
            <div className="bg-black p-6 text-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition-all"
              >
                Consultar Valores
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Depoimentos</h3>
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%]">
                    <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                      <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                      <p className="font-bold">{testimonial.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black/80 text-white p-2 rounded-full hover:bg-black transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black/80 text-white p-2 rounded-full hover:bg-black transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h3>
          <div className="max-w-2xl mx-auto space-y-4">
            <details className="bg-white rounded-lg p-4">
              <summary className="font-bold cursor-pointer flex items-center justify-between">
                Quais documentos preciso levar?
                <ChevronDown className="w-5 h-5" />
              </summary>
              <p className="mt-2 text-gray-600">CNH provisória ou permissão para dirigir válida e documento de identificação com foto.</p>
            </details>
            <details className="bg-white rounded-lg p-4">
              <summary className="font-bold cursor-pointer flex items-center justify-between">
                Como funciona o cancelamento?
                <ChevronDown className="w-5 h-5" />
              </summary>
              <p className="mt-2 text-gray-600">Cancelamentos devem ser feitos com 24h de antecedência para reagendamento sem custo.</p>
            </details>
            <details className="bg-white rounded-lg p-4">
              <summary className="font-bold cursor-pointer flex items-center justify-between">
                Quais horários estão disponíveis?
                <ChevronDown className="w-5 h-5" />
              </summary>
              <p className="mt-2 text-gray-600">Aulas disponíveis de segunda a sábado, das 7h às 19h, mediante agendamento prévio.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Solicite Contato</h3>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <select className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="">Melhor horário para contato</option>
                <option value="morning">Manhã</option>
                <option value="afternoon">Tarde</option>
                <option value="evening">Noite</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-black hover:bg-black/80 text-white font-bold py-3 rounded-lg transition-all"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* WhatsApp Fixed Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all z-50"
      >
        <WhatsappIcon className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;
