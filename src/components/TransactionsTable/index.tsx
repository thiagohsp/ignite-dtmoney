import React, { useEffect } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

const TransactionsTable: React.FC = () => {

  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Recebimento projeto</td>
            <td className="deposit">R$ 10000,00</td>
            <td>Categoria</td>
            <td>23/03/2021</td>
          </tr>
          <tr>
            <td>Alugyel</td>
            <td className="withdraw">- R$ 500,00</td>
            <td>Casa</td>
            <td>23/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default TransactionsTable;