import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/components/ui";

export default component$(() => {
  return (
    <div class="container mx-auto px-4 py-16">
      <h1 class="font-playfair text-4xl md:text-5xl font-bold mb-8 text-center">Talleres Online</h1>
      <p class="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
        Participa en los talleres de acuarela de Juan J. D. Antilef. Modalidad online, cupos limitados, acompañamiento personalizado y acceso a grabaciones. ¡Aprende desde cualquier lugar y a tu ritmo!
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow p-6 flex flex-col">
          <h3 class="font-playfair text-xl font-semibold mb-4">Taller Intensivo de Acuarela</h3>
          <ul class="space-y-2 mb-6 text-left">
            <li>• Técnicas de agua y pigmento</li>
            <li>• Prácticas en vivo</li>
            <li>• Feedback grupal</li>
          </ul>
          <div class="mt-auto text-center">
            <div class="text-2xl font-bold mb-4">$15.000 ARS</div>
            <Link href="#" class="btn btn-primary w-full rounded-full">
              <Button look="outline">
                Reservar cupo
              </Button>
            </Link>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col">
          <h3 class="font-playfair text-xl font-semibold mb-4">Taller de Creatividad y Composición</h3>
          <ul class="space-y-2 mb-6 text-left">
            <li>• Ejercicios creativos</li>
            <li>• Composición y simbolismo</li>
            <li>• Proyecto final</li>
          </ul>
          <div class="mt-auto text-center">
            <div class="text-2xl font-bold mb-4">$18.000 ARS</div>
            <Link href="#" class="btn btn-primary w-full rounded-full">
              <Button look="outline">
                Reservar cupo
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div class="mt-12 text-center">
        <p class="text-lg mb-6">
          Los talleres incluyen acceso a materiales exclusivos y grupo privado de consultas.
        </p>
        <Link href="#" class="btn btn-outline rounded-full">
          <Button look="primary">
            Ver próximos talleres
          </Button>
        </Link>
      </div>
    </div>
  );
});