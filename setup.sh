#!/bin/bash

mkdir -p facialme-site/src/components
cd facialme-site

# Criar estrutura básica
npm create vite@latest . -- --template react-ts
npm install
npm install react-icons

# Instalar dependências úteis
npm install -D @storybook/react vite-plugin-svgr
npx sb init

# Criar diretórios de componentes
cd src/components

mkdir Navbar HeroSection AboutSection SpecialtiesSection TestimonialsCarousel ContactSection Footer

# Criar arquivos base em cada pasta
for dir in Navbar HeroSection AboutSection SpecialtiesSection TestimonialsCarousel ContactSection Footer; do
  touch $dir/{types.tsx,$dir.tsx,$dir.module.css}
done

# Voltar para raiz
cd ../../

echo "✅ Estrutura criada. Agora copie os arquivos de código para suas respectivas pastas."
