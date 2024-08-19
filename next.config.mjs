/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Adiciona a configuração para exportação estática
    trailingSlash: true, // Garante que a URL tenha uma barra final
    images: {
      unoptimized: true, // Desativa a otimização de imagens se você não usar `next/image`
    },
  };
  
  export default nextConfig;
  