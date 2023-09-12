import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Button from '../components/Button';
import Table from '../components/TableProdutos';
import axios from 'axios';
import { error } from 'console';
import TableProdutos from '../components/TableProdutos';
import TableCategorias from '@/components/TableCategorias';

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default function Home() {

    api.get('/produtos').then((res) => {
        console.log(res);
    })
       return (
        <>
            <Head>
                <title>Exame Prático CGE-RJ</title>
            </Head>
            <Button variant='contained'>Cadastrar Produtos</Button>
            <TableProdutos></TableProdutos>
            <Button variant='contained'>Cadastrar Categorias</Button>
            <TableCategorias></TableCategorias>

        </>
    );
}
