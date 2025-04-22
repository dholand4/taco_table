// src/components/App/App.tsx
import React, { useEffect, useState } from 'react';
import tacoData from '../../mock/taco.json'; // Importando o JSON diretamente
import {
  Container,
  FadeIn,
  Title,
  Controls,
  SearchInput,
  PortionContainer,
  PortionLabel,
  PortionInput,
  Table,
  Thead,
  Th,
  Td,
  Tbody,
  Tr
} from './styles'; // Importando os estilos

const App = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [portion, setPortion] = useState(100);

  // Carregando dados do taco.json
  useEffect(() => {
    setData(tacoData);  // Dados importados diretamente
    setFilteredData(tacoData); // Exibe todos os alimentos inicialmente
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase().split(' ');
    setSearchQuery(event.target.value);
    filterData(query);
  };

  const handlePortionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPortion = parseFloat(event.target.value) || 100;
    setPortion(newPortion);
    filterData(searchQuery.toLowerCase().split(' '), newPortion);
  };

  const filterData = (query: string[] = [], portionValue: number = portion) => {
    const filtered = data.filter(item => {
      const name = item['Descrição do Alimento'].toLowerCase();
      return query.every(word => name.includes(word));
    });

    setFilteredData(filtered);
  };

  const format = (value: any) => {
    const num = parseFloat(value);
    if (isNaN(num)) return value === 'Tr' || value === 'NA' ? value : '—';
    return num.toFixed(2);
  };

  return (
    <Container>
      <FadeIn>
        <Title>Tabela Brasileira de Composição de Alimentos</Title>
      </FadeIn>

      <Controls>
        <SearchInput
          type="text"
          placeholder="Buscar Alimentos"
          value={searchQuery}
          onChange={handleSearch}
        />
        <PortionContainer>
          <PortionLabel htmlFor="portion">Quantidade (g):</PortionLabel>
          <PortionInput
            type="number"
            min="1"
            value={portion}
            onChange={handlePortionChange}
          />
        </PortionContainer>
      </Controls>

      <Table>
        <Thead>
          <Tr>
            <Th>Descrição do Alimento</Th>
            <Th>Calorias (kcal)</Th>
            <Th>Proteína (g)</Th>
            <Th>Carboidrato (g)</Th>
            <Th>Gordura (g)</Th>
            <Th>Fibras (g)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map(item => (
            <Tr key={item['Descrição do Alimento']}>
              <Td>{item['Descrição do Alimento']}</Td>
              <Td>{format(item['Energia(kcal)'] * (portion / 100))}</Td>
              <Td>{format(item['Proteína(g)'] * (portion / 100))}</Td>
              <Td>{format(item['Carboidrato(g)'] * (portion / 100))}</Td>
              <Td>{format(item['Lipídeos(g)'] * (portion / 100))}</Td>
              <Td>{format(item['Fibra Alimentar(g)'] * (portion / 100))}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default App;
