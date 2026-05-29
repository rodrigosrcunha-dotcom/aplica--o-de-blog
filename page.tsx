import Link from 'next/link';
import artigos from '../data/artigos.json';

export default function HomePage() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Meu Blog Tech</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {artigos.map((artigo: any) => (
          <Link href={`/artigos/${artigo.slug}`} key={artigo.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden', transition: 'transform 0.2s' }}>
              <img src={artigo.imagem} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h2 style={{ fontSize: '1.2rem', margin: '0 0 10px 0' }}>{artigo.titulo}</h2>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>{artigo.descricao}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}