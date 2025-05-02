import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuLaptop, LuSmartphone } from "@qwikest/icons/lucide";
import { Button } from "~/components/ui";
import PortadaImg from "~/media/portada.jpeg?jsx";
import Person1Img from "~/media/testimonios/person1.jpeg?jsx";
import Person2Img from "~/media/testimonios/person2.jpeg?jsx";
import Person3Img from "~/media/testimonios/person3.jpeg?jsx";
import JuanImg from "~/media/personal/juan.webp?jsx";

export default component$(() => {
  return (
    <div class="watercolor-bg min-h-screen fade-in">
      {/* Hero Section */}
      <section class="relative py-16 md:py-24 fade-in" style={{animationDelay: '0.1s'}}>
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 class="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow scale-hover transition-all">Artista Visual</h1>
              <p class="text-lg md:text-xl mb-8 text-muted-foreground fade-in" style={{animationDelay: '0.2s'}}>Pintura, dibujo y escultura en diálogo. Obras que exploran lo simbólico, lo onírico y la realidad de animales y personas, sobre madera y otros soportes.</p>
              <div class="flex flex-col sm:flex-row gap-4">
                <Link href="/cursos">
                  <Button look="primary" class="btn-animated scale-hover px-8 py-3 rounded-full text-center text-lg">Explorar Cursos</Button>
                </Link>
                <Link href="/obras">
                  <Button look="outline" class="btn-animated px-8 py-3 scale-hover text-center text-lg rounded-full">Ver Galería</Button>
                </Link>
              </div>
            </div>
            <div class="relative aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden shadow-xl scale-hover fade-in" style={{animationDelay: '0.3s'}}>
              <PortadaImg />
            </div>
          </div>
        </div>
      </section>
      <div class="section-divider"></div>
      {/* Sobre el artista */}
      <section class="py-16 bg-white fade-in" style={{animationDelay: '0.2s'}}>
        <div class="container mx-auto px-4 max-w-3xl">
          <h2 class="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center scale-hover">Sobre Juan J. D. Antilef</h2>
          <div class="flex flex-col md:flex-row items-center gap-8 mb-6">
            <div>
              <JuanImg />
            </div>
            <div>
              <p class="text-lg text-muted-foreground mb-4 text-center md:text-left fade-in">Nacido en Ezeiza, Buenos Aires. Profesor de arte, artista visual y músico. Más de 30 exposiciones colectivas e individuales. Obras que conjugan pintura, dibujo y escultura, con la madera como soporte recurrente, evocando su infancia.</p>
              <div class="flex flex-wrap justify-center md:justify-start gap-4 text-center text-muted-foreground fade-in">
                <span>🎨 Artista</span>
                <span>🌍 Talleres de Acuarelas Online</span>
                <span>🖼 Venta de Obras</span>
                <span>
                  <a href="https://www.youtube.com/results?search_query=juan+antilef" target="_blank" class="underline hover:text-primary transition-colors">YouTube JUAN ANTILEF</a>
                </span>
              </div>
              <Button class="mt-4">
                Leer más sobre mí
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div class="section-divider"></div>
      {/* Beneficios Section */}
      <section class="py-16 bg-muted/30 fade-in" style={{animationDelay: '0.3s'}}>
        <div class="container mx-auto px-4">
          <h2 class="font-playfair text-3xl md:text-4xl font-bold text-center mb-12 scale-hover">¿Qué aprenderás?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-3xl shadow-lg p-6 text-center scale-hover fade-in transition-all">
              <div class="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 animate-pulse">
                {/* SVG de pincel */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M19 4l-7 7" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/><circle cx="7" cy="17" r="3" stroke="#2563eb" stroke-width="2"/></svg>
              </div>
              <h3 class="font-playfair text-xl font-semibold mb-2">Técnicas de Acuarela</h3>
              <p class="text-muted-foreground">Domina el agua, el pigmento y la madera como soporte para crear obras únicas.</p>
            </div>
            <div class="bg-white rounded-3xl shadow-lg p-6 text-center scale-hover fade-in transition-all">
              <div class="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 animate-pulse">
                {/* SVG de paleta */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" stroke-width="2"/><circle cx="8" cy="10" r="1" fill="#2563eb"/><circle cx="16" cy="10" r="1" fill="#2563eb"/><circle cx="10" cy="16" r="1" fill="#2563eb"/></svg>
              </div>
              <h3 class="font-playfair text-xl font-semibold mb-2">Composición y Simbolismo</h3>
              <p class="text-muted-foreground">Aprende a crear imágenes con significado, explorando lo onírico y lo real.</p>
            </div>
            <div class="bg-white rounded-3xl shadow-lg p-6 text-center scale-hover fade-in transition-all">
              <div class="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 animate-pulse">
                {/* SVG de libro */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M3 6a1 1 0 0 1 1-1h7v14H4a1 1 0 0 1-1-1V6zm17-1h-7v14h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" stroke="#2563eb" stroke-width="2"/></svg>
              </div>
              <h3 class="font-playfair text-xl font-semibold mb-2">Obras y Proyectos</h3>
              <p class="text-muted-foreground">Desarrolla tu propio estilo y participa en proyectos artísticos guiados.</p>
            </div>
            {/* Ítem extra 1 */}
            <div class="bg-white rounded-3xl shadow-lg p-6 text-center scale-hover fade-in transition-all">
              <div class="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-accent/10 animate-pulse">
                {/* SVG de pincelada */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M4 20c2-4 8-8 16-8" stroke="#22c55e" stroke-width="2" stroke-linecap="round"/></svg>
              </div>
              <h3 class="font-playfair text-xl font-semibold mb-2">Color y Expresión</h3>
              <p class="text-muted-foreground">Explora el uso expresivo del color para transmitir emociones en tus obras.</p>
            </div>
            {/* Ítem extra 2 */}
            <div class="bg-white rounded-3xl shadow-lg p-6 text-center scale-hover fade-in transition-all">
              <div class="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-accent/10 animate-pulse">
                {/* SVG de reloj */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#22c55e" stroke-width="2"/><path d="M12 6v6l4 2" stroke="#22c55e" stroke-width="2" stroke-linecap="round"/></svg>
              </div>
              <h3 class="font-playfair text-xl font-semibold mb-2">Gestión del Tiempo</h3>
              <p class="text-muted-foreground">Aprende a organizar tu proceso creativo y aprovechar mejor tus sesiones de arte.</p>
            </div>
            {/* Ítem extra 3 */}
            <div class="bg-white rounded-3xl shadow-lg p-6 text-center scale-hover fade-in transition-all">
              <div class="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-accent/10 animate-pulse">
                {/* SVG de comunidad */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="8" cy="12" r="3" stroke="#22c55e" stroke-width="2"/><circle cx="16" cy="12" r="3" stroke="#22c55e" stroke-width="2"/><path d="M2 20c0-2.2 3.6-4 8-4s8 1.8 8 4" stroke="#22c55e" stroke-width="2"/></svg>
              </div>
              <h3 class="font-playfair text-xl font-semibold mb-2">Comunidad Artística</h3>
              <p class="text-muted-foreground">Conecta con otros artistas, comparte tus avances y recibe retroalimentación.</p>
            </div>
          </div>
        </div>
      </section>
      <div class="section-divider"></div>
      {/* Adaptabilidad Section */}
      <section class="py-16 bg-white fade-in" style={{animationDelay: '0.4s'}}>
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="font-playfair text-3xl md:text-4xl font-bold mb-6 scale-hover">Aprende a tu ritmo</h2>
            <p class="text-lg text-muted-foreground mb-8 fade-in">Accede a talleres online desde cualquier lugar y dispositivo. Elige tus horarios y avanza a tu propio ritmo.</p>
            <div class="flex justify-center gap-4">
              <div class="w-20 h-20 flex items-center justify-center scale-hover">
                <LuLaptop style={{ height: "300px", width: "300px" }} />
              </div>
              <div class="w-20 h-20 flex items-center justify-center scale-hover">
                <LuSmartphone style={{ height: "300px", width: "300px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="section-divider"></div>
      {/* Cursos Section */}
      <section class="py-16 bg-primary/5 fade-in" style={{animationDelay: '0.5s'}}>
        <div class="container mx-auto px-4">
          <h2 class="font-playfair text-3xl md:text-4xl font-bold text-center mb-12 scale-hover">Cursos Destacados</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Curso 1 */}
            <div class="bg-white rounded-3xl shadow-lg p-6 flex flex-col scale-hover fade-in transition-all">
              <h3 class="font-playfair text-xl font-semibold mb-4">Acuarela Inicial: Naturaleza y Animales</h3>
              <ul class="space-y-2 mb-6 text-left">
                <li>• Fundamentos de la acuarela</li>
                <li>• Técnicas básicas y mezclas</li>
                <li>• Primeras composiciones sobre madera</li>
              </ul>
              <div class="mt-auto text-center">
                <div class="text-2xl font-bold mb-4">$20.000 ARS</div>
                <Link href="/cursos" class="btn btn-primary w-full rounded-full btn-animated scale-hover">
                  <Button look="primary">Inscribirme</Button>
                </Link>
              </div>
            </div>
            {/* Curso 2 */}
            <div class="bg-white rounded-3xl shadow-lg p-6 flex flex-col border-2 border-primary scale-hover fade-in transition-all">
              <div class="bg-primary text-primary-foreground p-2 text-center text-sm font-medium rounded mb-2 animate-pulse">Más popular</div>
              <h3 class="font-playfair text-xl font-semibold mb-4">Taller de Figuras y Simbolismo</h3>
              <ul class="space-y-2 mb-6 text-left">
                <li>• Representación simbólica</li>
                <li>• Técnicas mixtas: acuarela y dibujo</li>
                <li>• Proyecto final guiado</li>
              </ul>
              <div class="mt-auto text-center">
                <div class="text-2xl font-bold mb-4">$25.000 ARS</div>
                <Link href="/cursos" class="btn btn-primary w-full rounded-full btn-animated scale-hover">
                  <Button look="primary">Inscribirme</Button>
                </Link>
              </div>
            </div>
            {/* Curso 3 */}
            <div class="bg-white rounded-3xl shadow-lg p-6 flex flex-col scale-hover fade-in transition-all">
              <h3 class="font-playfair text-xl font-semibold mb-4">Acuarela Experimental: Técnicas Avanzadas</h3>
              <ul class="space-y-2 mb-6 text-left">
                <li>• Texturas y efectos especiales</li>
                <li>• Uso creativo de la madera</li>
                <li>• Desarrollo de estilo personal</li>
              </ul>
              <div class="mt-auto text-center">
                <div class="text-2xl font-bold mb-4">$30.000 ARS</div>
                <Link href="/cursos" class="btn btn-primary w-full rounded-full btn-animated scale-hover">
                  <Button look="primary">Inscribirme</Button>
                </Link>
              </div>
            </div>
          </div>
          <div class="mt-12 text-center">
            <p class="text-lg mb-6 fade-in">Algunos cursos en los que podrás participar:</p>
            <div class="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto mb-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} class="aspect-square rounded-lg overflow-hidden scale-hover fade-in transition-all">
                  <img
                    src={`/placeholder.svg?height=150&width=150`}
                    alt={`Curso de acuarela ${item}`}
                    width={150}
                    height={150}
                    class="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <Link href="/cursos">
              <Button look="outline" class="btn-animated scale-hover">Ver todos los cursos</Button>
            </Link>
          </div>
        </div>
      </section>
      <div class="section-divider"></div>
      {/* Testimonios Section */}
      <section class="py-16 bg-muted/30 fade-in" style={{animationDelay: '0.6s'}}>
        <div class="container mx-auto px-4">
          <h2 class="font-playfair text-3xl md:text-4xl font-bold text-center mb-12 scale-hover">Lo que dicen quienes participaron</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} class="bg-white rounded-3xl shadow-lg p-6 scale-hover fade-in transition-all">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                    {item === 1 && <Person1Img />}
                    {item === 2 && <Person2Img />}
                    {item === 3 && <Person3Img />}
                  </div>
                  <div>
                    <h4 class="font-medium">Nombre del Participante</h4>
                    <p class="text-sm text-muted-foreground">Curso de Acuarela</p>
                  </div>
                </div>
                <p class="italic text-muted-foreground">"Las clases de Juan me ayudaron a descubrir nuevas formas de expresión artística. Su acompañamiento es cercano y motivador. ¡Recomendado!"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div class="section-divider"></div>
      {/* CTA Section */}
      <section class="py-16 bg-primary/10 fade-in" style={{animationDelay: '0.7s'}}>
        <div class="container mx-auto px-4 text-center">
          <h2 class="font-playfair text-3xl md:text-4xl font-bold mb-6 scale-hover">¡Comienza tu viaje artístico hoy!</h2>
          <p class="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto fade-in">Únete a la comunidad y explora el mundo de la acuarela y las artes visuales con la guía de Juan Antilef.</p>
          <Link href="/cursos">
            <Button look="outline" class="rounded-full text-lg px-8 py-3 btn-animated scale-hover">Ver todos los cursos</Button>
          </Link>
        </div>
      </section>
    </div>
  );
});