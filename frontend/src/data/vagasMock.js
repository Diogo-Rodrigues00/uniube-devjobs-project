// Dados de exemplo no mesmo formato que a API devolve (tabela "vagas").
// Quando a API estiver ligada, dá para trocar isto por um fetch('/vagas').
export const vagasMock = [
  {
    id: 1,
    titulo: 'Desenvolvedor(a) Frontend React',
    empresa_nome: 'TechNova Ltda',
    tipo: 'remoto',
    tecnologias: 'React,TypeScript,CSS',
    salario: 'R$ 6.000 – R$ 9.000',
    cidade: 'Remoto',
    estado: '',
  },
  {
    id: 2,
    titulo: 'Backend Node.js',
    empresa_nome: 'DataFlow',
    tipo: 'hibrido',
    tecnologias: 'Node.js,PostgreSQL',
    salario: 'R$ 7.000 – R$ 10.000',
    cidade: 'São Paulo',
    estado: 'SP',
  },
  {
    id: 3,
    titulo: 'Desenvolvedor(a) Full Stack Júnior',
    empresa_nome: 'CodeMinas',
    tipo: 'presencial',
    tecnologias: 'JavaScript,React,Node.js,SQLite',
    salario: 'R$ 3.500 – R$ 5.000',
    cidade: 'Uberaba',
    estado: 'MG',
  },
  {
    id: 4,
    titulo: 'Estágio em Desenvolvimento Web',
    empresa_nome: 'Agência Pixel',
    tipo: 'hibrido',
    tecnologias: 'HTML,CSS,JavaScript',
    salario: 'R$ 1.500 (bolsa)',
    cidade: 'Uberlândia',
    estado: 'MG',
  },
];
