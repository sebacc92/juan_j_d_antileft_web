import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/components/ui";
import PortadaImg from "~/media/portada.jpeg?jsx";
import Person1Img from "~/media/testimonios/person1.jpeg?jsx";
import Person2Img from "~/media/testimonios/person2.jpeg?jsx";
import Person3Img from "~/media/testimonios/person3.jpeg?jsx";

export default component$(() => {
  return (
    <div class="watercolor-bg">
      {/* Hero Section */}
      <section class="relative py-16 md:py-24">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 class="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Juan J. D. Antilef – Artista Visual
              </h1>
              <p class="text-lg md:text-xl mb-8 text-muted-foreground">
                Pintura, dibujo y escultura en diálogo. Obras que exploran lo simbólico, lo onírico y la realidad de animales y personas, sobre madera y otros soportes.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <Link href="/cursos" class="btn btn-primary rounded-full text-lg px-8 py-3 text-center">
                  <Button look="primary">Explorar Cursos</Button>
                </Link>
                <Link href="/obras" class="btn btn-outline rounded-full text-lg px-8 py-3 text-center">
                  <Button look="secondary">Ver Galería</Button>
                </Link>
              </div>
            </div>
            <div class="relative aspect-square md:aspect-auto md:h-[500px] rounded-lg overflow-hidden">
              <PortadaImg />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre el artista */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4 max-w-3xl">
          <h2 class="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">Sobre Juan J. D. Antilef</h2>
          <p class="text-lg text-muted-foreground mb-4 text-center">
            Nacido en Ezeiza, Buenos Aires. Profesor de arte, artista visual y músico. Más de 30 exposiciones colectivas e individuales. Obras que conjugan pintura, dibujo y escultura, con la madera como soporte recurrente, evocando su infancia.
          </p>
          <div class="flex flex-wrap justify-center gap-4 text-center text-muted-foreground">
            <span>🎨 Artista</span>
            <span>🌍 Talleres de Acuarelas Online</span>
            <span>🖼 Venta de Obras</span>
            <span>
              <a href="https://www.youtube.com/results?search_query=juan+antilef" target="_blank" class="underline">YouTube JUAN ANTILEF</a>
            </span>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section class="py-16 bg-muted/30">
        <div class="container mx-auto px-4">
          <h2 class="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">¿Qué aprenderás?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow p-6 text-center">
              <div class="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
                {/* SVG de pincel */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M19 4l-7 7" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/><circle cx="7" cy="17" r="3" stroke="#2563eb" stroke-width="2"/></svg>
              </div>
              <h3 class="font-playfair text-xl font-semibold mb-2">Técnicas de Acuarela</h3>
              <p class="text-muted-foreground">
                Domina el agua, el pigmento y la madera como soporte para crear obras únicas.
              </p>
            </div>
            <div class="bg-white rounded-lg shadow p-6 text-center">
              <div class="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
                {/* SVG de paleta */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" stroke-width="2"/><circle cx="8" cy="10" r="1" fill="#2563eb"/><circle cx="16" cy="10" r="1" fill="#2563eb"/><circle cx="10" cy="16" r="1" fill="#2563eb"/></svg>
              </div>
              <h3 class="font-playfair text-xl font-semibold mb-2">Composición y Simbolismo</h3>
              <p class="text-muted-foreground">
                Aprende a crear imágenes con significado, explorando lo onírico y lo real.
              </p>
            </div>
            <div class="bg-white rounded-lg shadow p-6 text-center">
              <div class="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
                {/* SVG de libro */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M3 6a1 1 0 0 1 1-1h7v14H4a1 1 0 0 1-1-1V6zm17-1h-7v14h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" stroke="#2563eb" stroke-width="2"/></svg>
              </div>
              <h3 class="font-playfair text-xl font-semibold mb-2">Obras y Proyectos</h3>
              <p class="text-muted-foreground">
                Desarrolla tu propio estilo y participa en proyectos artísticos guiados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Adaptabilidad Section */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="font-playfair text-3xl md:text-4xl font-bold mb-6">Aprende a tu ritmo</h2>
            <p class="text-lg text-muted-foreground mb-8">
              Accede a talleres online desde cualquier lugar y dispositivo. Elige tus horarios y avanza a tu propio ritmo.
            </p>
            <div class="flex justify-center gap-4">
              <div class="w-20 h-20 flex items-center justify-center">
                <img src="/placeholder.svg?height=80&width=80" alt="Computadora" width={80} height={80} />
              </div>
              <div class="w-20 h-20 flex items-center justify-center">
                <img src="/placeholder.svg?height=80&width=80" alt="Tablet" width={80} height={80} />
              </div>
              <div class="w-20 h-20 flex items-center justify-center">
                <img src="/placeholder.svg?height=80&width=80" alt="Smartphone" width={80} height={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section class="py-16 bg-primary/5">
        <div class="container mx-auto px-4">
          <h2 class="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">Cursos Destacados</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Curso 1 */}
            <div class="bg-white rounded-lg shadow p-6 flex flex-col">
              <h3 class="font-playfair text-xl font-semibold mb-4">Acuarela Inicial: Naturaleza y Animales</h3>
              <ul class="space-y-2 mb-6 text-left">
                <li>• Fundamentos de la acuarela</li>
                <li>• Técnicas básicas y mezclas</li>
                <li>• Primeras composiciones sobre madera</li>
              </ul>
              <div class="mt-auto text-center">
                <div class="text-2xl font-bold mb-4">$20.000 ARS</div>
                <Link href="/cursos" class="btn btn-primary w-full rounded-full">
                  <Button look="primary">Inscribirme</Button>
                </Link>
              </div>
            </div>
            {/* Curso 2 */}
            <div class="bg-white rounded-lg shadow p-6 flex flex-col border-2 border-primary">
              <div class="bg-primary text-primary-foreground p-2 text-center text-sm font-medium rounded mb-2">
                Más popular
              </div>
              <h3 class="font-playfair text-xl font-semibold mb-4">Taller de Figuras y Simbolismo</h3>
              <ul class="space-y-2 mb-6 text-left">
                <li>• Representación simbólica</li>
                <li>• Técnicas mixtas: acuarela y dibujo</li>
                <li>• Proyecto final guiado</li>
              </ul>
              <div class="mt-auto text-center">
                <div class="text-2xl font-bold mb-4">$25.000 ARS</div>
                <Link href="/cursos" class="btn btn-primary w-full rounded-full">
                  <Button look="primary">Inscribirme</Button>
                </Link>
              </div>
            </div>
            {/* Curso 3 */}
            <div class="bg-white rounded-lg shadow p-6 flex flex-col">
              <h3 class="font-playfair text-xl font-semibold mb-4">Acuarela Experimental: Técnicas Avanzadas</h3>
              <ul class="space-y-2 mb-6 text-left">
                <li>• Texturas y efectos especiales</li>
                <li>• Uso creativo de la madera</li>
                <li>• Desarrollo de estilo personal</li>
              </ul>
              <div class="mt-auto text-center">
                <div class="text-2xl font-bold mb-4">$30.000 ARS</div>
                <Link href="/cursos" class="btn btn-primary w-full rounded-full">
                  <Button look="primary">Inscribirme</Button>
                </Link>
              </div>
            </div>
          </div>
          <div class="mt-12 text-center">
            <p class="text-lg mb-6">
              Algunos cursos en los que podrás participar:
            </p>
            <div class="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto mb-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} class="aspect-square rounded-lg overflow-hidden">
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
              <Button look="outline">Ver todos los cursos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section class="py-16 bg-muted/30">
        <div class="container mx-auto px-4">
          <h2 class="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
            Lo que dicen quienes participaron
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} class="bg-white rounded-lg shadow p-6">
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
                <p class="italic text-muted-foreground">
                  "Las clases de Juan me ayudaron a descubrir nuevas formas de expresión artística. Su acompañamiento es cercano y motivador. ¡Recomendado!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 bg-primary/10">
        <div class="container mx-auto px-4 text-center">
          <h2 class="font-playfair text-3xl md:text-4xl font-bold mb-6">¡Comienza tu viaje artístico hoy!</h2>
          <p class="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a la comunidad y explora el mundo de la acuarela y las artes visuales con la guía de Juan Antilef.
          </p>
          <Link href="/cursos" class="btn btn-primary rounded-full text-lg px-8 py-3">
            Ver todos los cursos
          </Link>
        </div>
      </section>
    </div>
  );
});