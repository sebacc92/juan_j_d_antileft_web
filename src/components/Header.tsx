import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuMenu, LuX } from "@qwikest/icons/lucide";

export const Header = component$(() => {
  const isMenuOpen = useSignal(false);

  return (
    <header class="watercolor-border relative">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <Link href="/" class="flex items-center">
            <div class="text-center">
              <h1 class="font-playfair text-2xl md:text-3xl font-bold tracking-wider">Juan J. D. Antilef</h1>
              <p class="text-xs uppercase tracking-widest text-muted-foreground">Artista & Acuarelista</p>
            </div>
          </Link>

          <nav class="hidden md:flex items-center space-x-8">
            <Link href="/" class="text-sm font-medium hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="/obras" class="text-sm font-medium hover:text-primary transition-colors">
              Obras
            </Link>
            <Link href="/cursos" class="text-sm font-medium hover:text-primary transition-colors">
              Cursos
            </Link>
            <Link href="/talleres" class="text-sm font-medium hover:text-primary transition-colors">
              Talleres
            </Link>
            <Link href="/sobre-mi" class="text-sm font-medium hover:text-primary transition-colors">
              Sobre Mí
            </Link>
            <Link href="/contacto" class="text-sm font-medium hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          <button
            type="button"
            class="md:hidden inline-flex items-center justify-center rounded p-2"
            onClick$={() => (isMenuOpen.value = !isMenuOpen.value)}
            aria-label="Toggle menu"
          >
            {isMenuOpen.value ? (
              <LuX class="h-6 w-6" />
            ) : (
              <LuMenu class="h-6 w-6" />
            )}
            <span class="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {isMenuOpen.value && (
        <div class="md:hidden absolute z-50 w-full bg-background border-b">
          <nav class="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              class="text-sm font-medium hover:text-primary transition-colors"
              onClick$={() => setTimeout(() => (isMenuOpen.value = false), 100)}
            >
              Inicio
            </Link>
            <Link
              href="/obras"
              class="text-sm font-medium hover:text-primary transition-colors"
              onClick$={() => setTimeout(() => (isMenuOpen.value = false), 100)}
            >
              Obras
            </Link>
            <Link
              href="/cursos"
              class="text-sm font-medium hover:text-primary transition-colors"
              onClick$={() => setTimeout(() => (isMenuOpen.value = false), 100)}
            >
              Cursos
            </Link>
            <Link
              href="/talleres"
              class="text-sm font-medium hover:text-primary transition-colors"
              onClick$={() => setTimeout(() => (isMenuOpen.value = false), 100)}
            >
              Talleres
            </Link>
            <Link
              href="/sobre-mi"
              class="text-sm font-medium hover:text-primary transition-colors"
              onClick$={() => setTimeout(() => (isMenuOpen.value = false), 100)}
            >
              Sobre Mí
            </Link>
            <Link
              href="/contacto"
              class="text-sm font-medium hover:text-primary transition-colors"
              onClick$={() => setTimeout(() => (isMenuOpen.value = false), 100)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
});