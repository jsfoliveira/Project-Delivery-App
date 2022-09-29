import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../pages/login';

describe(
  'Testa se todos os elementos pré-definidos estão renderizados na tela de login',
  () => {
    const setup = () => render(<Login />);

    test('Verifica se a página possui um input com placeholder E-mail', () => {
      setup();
      const placeholder = screen.getByPlaceholderText('E-mail');
      expect(placeholder).toBeInTheDocument();
    });

    test('Verifica se a página possui um input com placeholder Senha', () => {
      setup();
      const placeholder = screen.getByPlaceholderText('Senha');
      expect(placeholder).toBeInTheDocument();
    });

    test('Verifica se a página possui um botão com a palavra Login', () => {
      setup();
      const button = screen.getByRole('button', { name: 'Login' });
      expect(button).toBeInTheDocument();
    });

    test('Verifica se a página possui um botão com a palavra Cadastra-se', () => {
      setup();
      const button = screen.getByRole('button', { name: 'Cadastra-se' });
      expect(button).toBeInTheDocument();
    });
  },
);
