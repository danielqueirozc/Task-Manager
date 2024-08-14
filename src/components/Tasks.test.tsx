// src/components/Tasks.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tasks } from './Tasks';

describe('Tasks Component', () => {
    test('should create a new task', () => {
        render(<Tasks />);
        
        // Abrir o modal de nova tarefa
        fireEvent.click(screen.getByText('+ Add tarefa'));

        // Preencher o título e o conteúdo
        fireEvent.change(screen.getByPlaceholderText('Título'), { target: { value: 'Nova Tarefa' } });
        fireEvent.change(screen.getByPlaceholderText('Digite a tarefa...'), { target: { value: 'Conteúdo da nova tarefa' } });

        // Criar a nova tarefa
        fireEvent.click(screen.getByText('Criar'));

        // Verificar se a tarefa foi criada
        expect(screen.getByText('Nova Tarefa')).toBeInTheDocument();
        expect(screen.getByText('Conteúdo da nova tarefa')).toBeInTheDocument();
    });

    test('should edit an existing task', () => {
        render(<Tasks />);
        
        // Criar uma nova tarefa
        fireEvent.click(screen.getByText('+ Add tarefa'));
        fireEvent.change(screen.getByPlaceholderText('Título'), { target: { value: 'Tarefa Editada' } });
        fireEvent.change(screen.getByPlaceholderText('Digite a tarefa...'), { target: { value: 'Conteúdo original' } });
        fireEvent.click(screen.getByText('Criar'));

        // Abrir a tarefa para edição
        fireEvent.click(screen.getByText('Editar'));

        // Editar o título e o conteúdo
        fireEvent.change(screen.getByPlaceholderText('Título'), { target: { value: 'Título Editado' } });
        fireEvent.change(screen.getByPlaceholderText('Digite a tarefa...'), { target: { value: 'Conteúdo editado' } });

        // Salvar a edição
        fireEvent.click(screen.getByText('Salvar'));

        // Verificar se a tarefa foi editada
        expect(screen.getByText('Título Editado')).toBeInTheDocument();
        expect(screen.getByText('Conteúdo editado')).toBeInTheDocument();
    });

    test('should delete an existing task', () => {
        render(<Tasks />);
        
        // Criar uma nova tarefa
        fireEvent.click(screen.getByText('+ Add tarefa'));
        fireEvent.change(screen.getByPlaceholderText('Título'), { target: { value: 'Tarefa a ser Excluída' } });
        fireEvent.change(screen.getByPlaceholderText('Digite a tarefa...'), { target: { value: 'Conteúdo a ser excluído' } });
        fireEvent.click(screen.getByText('Criar'));

        // Excluir a tarefa
        fireEvent.click(screen.getByText('Excluir'));

        // Verificar se a tarefa foi excluída
        expect(screen.queryByText('Tarefa a ser Excluída')).not.toBeInTheDocument();
        expect(screen.queryByText('Conteúdo a ser excluído')).not.toBeInTheDocument();
    });
});
