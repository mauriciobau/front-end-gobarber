import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  api.get('appointments');

  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>31 de Maio</strong>
        <button type="button">
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>8:00</strong>
          <span>Juca Joca</span>
        </Time>
        <Time available>
          <strong>9:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Juca Joca</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Juca Joca</span>
        </Time>
      </ul>
    </Container>
  );
}
